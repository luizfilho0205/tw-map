import { Breakpoints, CSSSelector, GridStartEnd } from "../../types";
import { GridColumnEndBreakpoints } from "./GridColumnEndBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class GridColumnEnd
  extends CSSProperty<Map<GridStartEnd, string>>
  implements Breakable<Map<Breakpoints, Map<GridStartEnd, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<GridStartEnd, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new GridColumnClassesMapping();
    return new GridColumnEnd(classesMapping, selector);
  }

  public breakpoints() {
    return GridColumnEndBreakpoints.create(this.cssSelector);
  }

  public write(template: GridStartEnd) {
    return this.getClassName(template);
  }
}

class GridColumnClassesMapping
  implements ClassesMapping<Map<GridStartEnd, string>>
{
  private defaultValue: DefaultValue<GridStartEnd, string>;

  constructor() {
    this.defaultValue = new DefaultValue<GridStartEnd, string>(
      "auto",
      "col-end-auto"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<GridStartEnd, string>>([
        [
          "active",
          new Map<GridStartEnd, string>([
            [1, "active:col-end-1"],
            [2, "active:col-end-2"],
            [3, "active:col-end-3"],
            [4, "active:col-end-4"],
            [5, "active:col-end-5"],
            [6, "active:col-end-6"],
            [7, "active:col-end-7"],
            [8, "active:col-end-8"],
            [9, "active:col-end-9"],
            [10, "active:col-end-10"],
            [11, "active:col-end-11"],
            [12, "active:col-end-12"],
            [13, "active:col-end-13"],
            ["auto", "active:col-end-auto"],
          ]),
        ],
        [
          "disabled",
          new Map<GridStartEnd, string>([
            [1, "disabled:col-end-1"],
            [2, "disabled:col-end-2"],
            [3, "disabled:col-end-3"],
            [4, "disabled:col-end-4"],
            [5, "disabled:col-end-5"],
            [6, "disabled:col-end-6"],
            [7, "disabled:col-end-7"],
            [8, "disabled:col-end-8"],
            [9, "disabled:col-end-9"],
            [10, "disabled:col-end-10"],
            [11, "disabled:col-end-11"],
            [12, "disabled:col-end-12"],
            [13, "disabled:col-end-13"],
            ["auto", "disabled:col-end-auto"],
          ]),
        ],
        [
          "hover",
          new Map<GridStartEnd, string>([
            [1, "hover:col-end-1"],
            [2, "hover:col-end-2"],
            [3, "hover:col-end-3"],
            [4, "hover:col-end-4"],
            [5, "hover:col-end-5"],
            [6, "hover:col-end-6"],
            [7, "hover:col-end-7"],
            [8, "hover:col-end-8"],
            [9, "hover:col-end-9"],
            [10, "hover:col-end-10"],
            [11, "hover:col-end-11"],
            [12, "hover:col-end-12"],
            [13, "hover:col-end-13"],
            ["auto", "hover:col-end-auto"],
          ]),
        ],
        [
          "none",
          new Map<GridStartEnd, string>([
            [1, "col-end-1"],
            [2, "col-end-2"],
            [3, "col-end-3"],
            [4, "col-end-4"],
            [5, "col-end-5"],
            [6, "col-end-6"],
            [7, "col-end-7"],
            [8, "col-end-8"],
            [9, "col-end-9"],
            [10, "col-end-10"],
            [11, "col-end-11"],
            [12, "col-end-12"],
            [13, "col-end-13"],
            ["auto", "col-end-auto"],
          ]),
        ],
        [
          "open",
          new Map<GridStartEnd, string>([
            [1, "open:col-end-1"],
            [2, "open:col-end-2"],
            [3, "open:col-end-3"],
            [4, "open:col-end-4"],
            [5, "open:col-end-5"],
            [6, "open:col-end-6"],
            [7, "open:col-end-7"],
            [8, "open:col-end-8"],
            [9, "open:col-end-9"],
            [10, "open:col-end-10"],
            [11, "open:col-end-11"],
            [12, "open:col-end-12"],
            [13, "open:col-end-13"],
            ["auto", "open:col-end-auto"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
