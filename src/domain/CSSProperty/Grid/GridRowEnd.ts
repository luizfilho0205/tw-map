import { Breakpoints, CSSSelector, GridStartEnd } from "../../types";
import { GridRowEndBreakpoints } from "./GridRowEndBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class GridRowEnd
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
    const classesMapping = new GridRowClassesMapping();
    return new GridRowEnd(classesMapping, selector);
  }

  public breakpoints() {
    return GridRowEndBreakpoints.create(this.cssSelector);
  }

  public write(template: GridStartEnd) {
    return this.getClassName(template);
  }
}

class GridRowClassesMapping
  implements ClassesMapping<Map<GridStartEnd, string>>
{
  private defaultValue: DefaultValue<GridStartEnd, string>;

  constructor() {
    this.defaultValue = new DefaultValue<GridStartEnd, string>(
      "auto",
      "row-end-auto"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<GridStartEnd, string>>([
        [
          "active",
          new Map<GridStartEnd, string>([
            [1, "active:row-end-1"],
            [2, "active:row-end-2"],
            [3, "active:row-end-3"],
            [4, "active:row-end-4"],
            [5, "active:row-end-5"],
            [6, "active:row-end-6"],
            [7, "active:row-end-7"],
            [8, "active:row-end-8"],
            [9, "active:row-end-9"],
            [10, "active:row-end-10"],
            [11, "active:row-end-11"],
            [12, "active:row-end-12"],
            [13, "active:row-end-13"],
            ["auto", "active:row-end-auto"],
          ]),
        ],
        [
          "disabled",
          new Map<GridStartEnd, string>([
            [1, "disabled:row-end-1"],
            [2, "disabled:row-end-2"],
            [3, "disabled:row-end-3"],
            [4, "disabled:row-end-4"],
            [5, "disabled:row-end-5"],
            [6, "disabled:row-end-6"],
            [7, "disabled:row-end-7"],
            [8, "disabled:row-end-8"],
            [9, "disabled:row-end-9"],
            [10, "disabled:row-end-10"],
            [11, "disabled:row-end-11"],
            [12, "disabled:row-end-12"],
            [13, "disabled:row-end-13"],
            ["auto", "disabled:row-end-auto"],
          ]),
        ],
        [
          "hover",
          new Map<GridStartEnd, string>([
            [1, "hover:row-end-1"],
            [2, "hover:row-end-2"],
            [3, "hover:row-end-3"],
            [4, "hover:row-end-4"],
            [5, "hover:row-end-5"],
            [6, "hover:row-end-6"],
            [7, "hover:row-end-7"],
            [8, "hover:row-end-8"],
            [9, "hover:row-end-9"],
            [10, "hover:row-end-10"],
            [11, "hover:row-end-11"],
            [12, "hover:row-end-12"],
            [13, "hover:row-end-13"],
            ["auto", "hover:row-end-auto"],
          ]),
        ],
        [
          "none",
          new Map<GridStartEnd, string>([
            [1, "row-end-1"],
            [2, "row-end-2"],
            [3, "row-end-3"],
            [4, "row-end-4"],
            [5, "row-end-5"],
            [6, "row-end-6"],
            [7, "row-end-7"],
            [8, "row-end-8"],
            [9, "row-end-9"],
            [10, "row-end-10"],
            [11, "row-end-11"],
            [12, "row-end-12"],
            [13, "row-end-13"],
            ["auto", "row-end-auto"],
          ]),
        ],
        [
          "open",
          new Map<GridStartEnd, string>([
            [1, "open:row-end-1"],
            [2, "open:row-end-2"],
            [3, "open:row-end-3"],
            [4, "open:row-end-4"],
            [5, "open:row-end-5"],
            [6, "open:row-end-6"],
            [7, "open:row-end-7"],
            [8, "open:row-end-8"],
            [9, "open:row-end-9"],
            [10, "open:row-end-10"],
            [11, "open:row-end-11"],
            [12, "open:row-end-12"],
            [13, "open:row-end-13"],
            ["auto", "open:row-end-auto"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
