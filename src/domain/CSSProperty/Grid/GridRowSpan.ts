import { Breakpoints, CSSSelector, GridSpan } from "../../types";
import { GridRowSpanBreakpoints } from "./GridRowSpanBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class GridRowSpan
  extends CSSProperty<Map<GridSpan, string>>
  implements Breakable<Map<Breakpoints, Map<GridSpan, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<GridSpan, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new GridRowClassesMapping();
    return new GridRowSpan(classesMapping, selector);
  }

  public breakpoints() {
    return GridRowSpanBreakpoints.create(this.cssSelector);
  }

  public write(template: GridSpan) {
    return this.getClassName(template);
  }
}

class GridRowClassesMapping implements ClassesMapping<Map<GridSpan, string>> {
  private defaultValue: DefaultValue<GridSpan, string>;

  constructor() {
    this.defaultValue = new DefaultValue<GridSpan, string>("auto", "row-auto");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<GridSpan, string>>([
        [
          "active",
          new Map<GridSpan, string>([
            [1, "active:row-span-1"],
            [2, "active:row-span-2"],
            [3, "active:row-span-3"],
            [4, "active:row-span-4"],
            [5, "active:row-span-5"],
            [6, "active:row-span-6"],
            [7, "active:row-span-7"],
            [8, "active:row-span-8"],
            [9, "active:row-span-9"],
            [10, "active:row-span-10"],
            [11, "active:row-span-11"],
            [12, "active:row-span-12"],
            ["auto", "active:row-auto"],
            ["full", "active:row-span-full"],
          ]),
        ],
        [
          "disabled",
          new Map<GridSpan, string>([
            [1, "disabled:row-span-1"],
            [2, "disabled:row-span-2"],
            [3, "disabled:row-span-3"],
            [4, "disabled:row-span-4"],
            [5, "disabled:row-span-5"],
            [6, "disabled:row-span-6"],
            [7, "disabled:row-span-7"],
            [8, "disabled:row-span-8"],
            [9, "disabled:row-span-9"],
            [10, "disabled:row-span-10"],
            [11, "disabled:row-span-11"],
            [12, "disabled:row-span-12"],
            ["auto", "disabled:row-auto"],
            ["full", "disabled:row-span-full"],
          ]),
        ],
        [
          "hover",
          new Map<GridSpan, string>([
            [1, "hover:row-span-1"],
            [2, "hover:row-span-2"],
            [3, "hover:row-span-3"],
            [4, "hover:row-span-4"],
            [5, "hover:row-span-5"],
            [6, "hover:row-span-6"],
            [7, "hover:row-span-7"],
            [8, "hover:row-span-8"],
            [9, "hover:row-span-9"],
            [10, "hover:row-span-10"],
            [11, "hover:row-span-11"],
            [12, "hover:row-span-12"],
            ["auto", "hover:row-auto"],
            ["full", "hover:row-span-full"],
          ]),
        ],
        [
          "none",
          new Map<GridSpan, string>([
            [1, "row-span-1"],
            [2, "row-span-2"],
            [3, "row-span-3"],
            [4, "row-span-4"],
            [5, "row-span-5"],
            [6, "row-span-6"],
            [7, "row-span-7"],
            [8, "row-span-8"],
            [9, "row-span-9"],
            [10, "row-span-10"],
            [11, "row-span-11"],
            [12, "row-span-12"],
            ["auto", "row-auto"],
            ["full", "row-span-full"],
          ]),
        ],
        [
          "open",
          new Map<GridSpan, string>([
            [1, "open:row-span-1"],
            [2, "open:row-span-2"],
            [3, "open:row-span-3"],
            [4, "open:row-span-4"],
            [5, "open:row-span-5"],
            [6, "open:row-span-6"],
            [7, "open:row-span-7"],
            [8, "open:row-span-8"],
            [9, "open:row-span-9"],
            [10, "open:row-span-10"],
            [11, "open:row-span-11"],
            [12, "open:row-span-12"],
            ["auto", "open:row-auto"],
            ["full", "open:row-span-full"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
