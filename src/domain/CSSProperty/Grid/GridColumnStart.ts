import { Breakpoints, CSSSelector, GridStartEnd } from "../../types";
import { GridColumnStartBreakpoints } from "./GridColumnStartBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class GridColumnStart
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
    return new GridColumnStart(classesMapping, selector);
  }

  public breakpoints() {
    return GridColumnStartBreakpoints.create(this.cssSelector);
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
      "col-start-auto"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<GridStartEnd, string>>([
        [
          "active",
          new Map<GridStartEnd, string>([
            [1, "active:col-start-1"],
            [2, "active:col-start-2"],
            [3, "active:col-start-3"],
            [4, "active:col-start-4"],
            [5, "active:col-start-5"],
            [6, "active:col-start-6"],
            [7, "active:col-start-7"],
            [8, "active:col-start-8"],
            [9, "active:col-start-9"],
            [10, "active:col-start-10"],
            [11, "active:col-start-11"],
            [12, "active:col-start-12"],
            [13, "active:col-start-13"],
            ["auto", "active:col-start-auto"],
          ]),
        ],
        [
          "disabled",
          new Map<GridStartEnd, string>([
            [1, "disabled:col-start-1"],
            [2, "disabled:col-start-2"],
            [3, "disabled:col-start-3"],
            [4, "disabled:col-start-4"],
            [5, "disabled:col-start-5"],
            [6, "disabled:col-start-6"],
            [7, "disabled:col-start-7"],
            [8, "disabled:col-start-8"],
            [9, "disabled:col-start-9"],
            [10, "disabled:col-start-10"],
            [11, "disabled:col-start-11"],
            [12, "disabled:col-start-12"],
            [13, "disabled:col-start-13"],
            ["auto", "disabled:col-start-auto"],
          ]),
        ],
        [
          "hover",
          new Map<GridStartEnd, string>([
            [1, "hover:col-start-1"],
            [2, "hover:col-start-2"],
            [3, "hover:col-start-3"],
            [4, "hover:col-start-4"],
            [5, "hover:col-start-5"],
            [6, "hover:col-start-6"],
            [7, "hover:col-start-7"],
            [8, "hover:col-start-8"],
            [9, "hover:col-start-9"],
            [10, "hover:col-start-10"],
            [11, "hover:col-start-11"],
            [12, "hover:col-start-12"],
            [13, "hover:col-start-13"],
            ["auto", "hover:col-start-auto"],
          ]),
        ],
        [
          "none",
          new Map<GridStartEnd, string>([
            [1, "col-start-1"],
            [2, "col-start-2"],
            [3, "col-start-3"],
            [4, "col-start-4"],
            [5, "col-start-5"],
            [6, "col-start-6"],
            [7, "col-start-7"],
            [8, "col-start-8"],
            [9, "col-start-9"],
            [10, "col-start-10"],
            [11, "col-start-11"],
            [12, "col-start-12"],
            [13, "col-start-13"],
            ["auto", "col-start-auto"],
          ]),
        ],
        [
          "open",
          new Map<GridStartEnd, string>([
            [1, "open:col-start-1"],
            [2, "open:col-start-2"],
            [3, "open:col-start-3"],
            [4, "open:col-start-4"],
            [5, "open:col-start-5"],
            [6, "open:col-start-6"],
            [7, "open:col-start-7"],
            [8, "open:col-start-8"],
            [9, "open:col-start-9"],
            [10, "open:col-start-10"],
            [11, "open:col-start-11"],
            [12, "open:col-start-12"],
            [13, "open:col-start-13"],
            ["auto", "open:col-start-auto"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
