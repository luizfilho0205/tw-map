import { Breakpoints, CSSSelector, GridStartEnd } from "../../types";
import { GridRowStartBreakpoints } from "./GridRowStartBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class GridRowStart
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
    return new GridRowStart(classesMapping, selector);
  }

  public breakpoints() {
    return GridRowStartBreakpoints.create(this.cssSelector);
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
      "row-start-auto"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<GridStartEnd, string>>([
        [
          "active",
          new Map<GridStartEnd, string>([
            [1, "active:row-start-1"],
            [2, "active:row-start-2"],
            [3, "active:row-start-3"],
            [4, "active:row-start-4"],
            [5, "active:row-start-5"],
            [6, "active:row-start-6"],
            [7, "active:row-start-7"],
            [8, "active:row-start-8"],
            [9, "active:row-start-9"],
            [10, "active:row-start-10"],
            [11, "active:row-start-11"],
            [12, "active:row-start-12"],
            [13, "active:row-start-13"],
            ["auto", "active:row-start-auto"],
          ]),
        ],
        [
          "disabled",
          new Map<GridStartEnd, string>([
            [1, "disabled:row-start-1"],
            [2, "disabled:row-start-2"],
            [3, "disabled:row-start-3"],
            [4, "disabled:row-start-4"],
            [5, "disabled:row-start-5"],
            [6, "disabled:row-start-6"],
            [7, "disabled:row-start-7"],
            [8, "disabled:row-start-8"],
            [9, "disabled:row-start-9"],
            [10, "disabled:row-start-10"],
            [11, "disabled:row-start-11"],
            [12, "disabled:row-start-12"],
            [13, "disabled:row-start-13"],
            ["auto", "disabled:row-start-auto"],
          ]),
        ],
        [
          "hover",
          new Map<GridStartEnd, string>([
            [1, "hover:row-start-1"],
            [2, "hover:row-start-2"],
            [3, "hover:row-start-3"],
            [4, "hover:row-start-4"],
            [5, "hover:row-start-5"],
            [6, "hover:row-start-6"],
            [7, "hover:row-start-7"],
            [8, "hover:row-start-8"],
            [9, "hover:row-start-9"],
            [10, "hover:row-start-10"],
            [11, "hover:row-start-11"],
            [12, "hover:row-start-12"],
            [13, "hover:row-start-13"],
            ["auto", "hover:row-start-auto"],
          ]),
        ],
        [
          "none",
          new Map<GridStartEnd, string>([
            [1, "row-start-1"],
            [2, "row-start-2"],
            [3, "row-start-3"],
            [4, "row-start-4"],
            [5, "row-start-5"],
            [6, "row-start-6"],
            [7, "row-start-7"],
            [8, "row-start-8"],
            [9, "row-start-9"],
            [10, "row-start-10"],
            [11, "row-start-11"],
            [12, "row-start-12"],
            [13, "row-start-13"],
            ["auto", "row-start-auto"],
          ]),
        ],
        [
          "open",
          new Map<GridStartEnd, string>([
            [1, "open:row-start-1"],
            [2, "open:row-start-2"],
            [3, "open:row-start-3"],
            [4, "open:row-start-4"],
            [5, "open:row-start-5"],
            [6, "open:row-start-6"],
            [7, "open:row-start-7"],
            [8, "open:row-start-8"],
            [9, "open:row-start-9"],
            [10, "open:row-start-10"],
            [11, "open:row-start-11"],
            [12, "open:row-start-12"],
            [13, "open:row-start-13"],
            ["auto", "open:row-start-auto"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
