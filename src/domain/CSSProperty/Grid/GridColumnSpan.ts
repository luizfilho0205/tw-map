import { Breakpoints, CSSSelector, GridSpan } from "../../types";
import { GridColumnSpanBreakpoints } from "./GridColumnSpanBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class GridColumnSpan
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
    const classesMapping = new GridColumnClassesMapping();
    return new GridColumnSpan(classesMapping, selector);
  }

  public breakpoints() {
    return GridColumnSpanBreakpoints.create(this.cssSelector);
  }

  public write(template: GridSpan) {
    return this.getClassName(template);
  }
}

class GridColumnClassesMapping
  implements ClassesMapping<Map<GridSpan, string>>
{
  private defaultValue: DefaultValue<GridSpan, string>;

  constructor() {
    this.defaultValue = new DefaultValue<GridSpan, string>("auto", "col-auto");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<GridSpan, string>>([
        [
          "active",
          new Map<GridSpan, string>([
            [1, "active:col-span-1"],
            [2, "active:col-span-2"],
            [3, "active:col-span-3"],
            [4, "active:col-span-4"],
            [5, "active:col-span-5"],
            [6, "active:col-span-6"],
            [7, "active:col-span-7"],
            [8, "active:col-span-8"],
            [9, "active:col-span-9"],
            [10, "active:col-span-10"],
            [11, "active:col-span-11"],
            [12, "active:col-span-12"],
            ["auto", "active:col-auto"],
            ["full", "active:col-span-full"],
          ]),
        ],
        [
          "disabled",
          new Map<GridSpan, string>([
            [1, "disabled:col-span-1"],
            [2, "disabled:col-span-2"],
            [3, "disabled:col-span-3"],
            [4, "disabled:col-span-4"],
            [5, "disabled:col-span-5"],
            [6, "disabled:col-span-6"],
            [7, "disabled:col-span-7"],
            [8, "disabled:col-span-8"],
            [9, "disabled:col-span-9"],
            [10, "disabled:col-span-10"],
            [11, "disabled:col-span-11"],
            [12, "disabled:col-span-12"],
            ["auto", "disabled:col-auto"],
            ["full", "disabled:col-span-full"],
          ]),
        ],
        [
          "hover",
          new Map<GridSpan, string>([
            [1, "hover:col-span-1"],
            [2, "hover:col-span-2"],
            [3, "hover:col-span-3"],
            [4, "hover:col-span-4"],
            [5, "hover:col-span-5"],
            [6, "hover:col-span-6"],
            [7, "hover:col-span-7"],
            [8, "hover:col-span-8"],
            [9, "hover:col-span-9"],
            [10, "hover:col-span-10"],
            [11, "hover:col-span-11"],
            [12, "hover:col-span-12"],
            ["auto", "hover:col-auto"],
            ["full", "hover:col-span-full"],
          ]),
        ],
        [
          "none",
          new Map<GridSpan, string>([
            [1, "col-span-1"],
            [2, "col-span-2"],
            [3, "col-span-3"],
            [4, "col-span-4"],
            [5, "col-span-5"],
            [6, "col-span-6"],
            [7, "col-span-7"],
            [8, "col-span-8"],
            [9, "col-span-9"],
            [10, "col-span-10"],
            [11, "col-span-11"],
            [12, "col-span-12"],
            ["auto", "col-auto"],
            ["full", "col-span-full"],
          ]),
        ],
        [
          "open",
          new Map<GridSpan, string>([
            [1, "open:col-span-1"],
            [2, "open:col-span-2"],
            [3, "open:col-span-3"],
            [4, "open:col-span-4"],
            [5, "open:col-span-5"],
            [6, "open:col-span-6"],
            [7, "open:col-span-7"],
            [8, "open:col-span-8"],
            [9, "open:col-span-9"],
            [10, "open:col-span-10"],
            [11, "open:col-span-11"],
            [12, "open:col-span-12"],
            ["auto", "open:col-auto"],
            ["full", "open:col-span-full"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
