import { Breakpoints, CSSSelector, GridTemplate } from "../../types";
import { GridColumnsBreakpoints } from "./GridColumnsBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class GridColumns
  extends CSSProperty<Map<GridTemplate, string>>
  implements Breakable<Map<Breakpoints, Map<GridTemplate, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<GridTemplate, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new GridColumnsClassesMapping();
    return new GridColumns(classesMapping, selector);
  }

  public breakpoints() {
    return GridColumnsBreakpoints.create(this.cssSelector);
  }

  public write(template: GridTemplate) {
    return this.getClassName(template);
  }
}

class GridColumnsClassesMapping
  implements ClassesMapping<Map<GridTemplate, string>>
{
  private defaultValue: DefaultValue<GridTemplate, string>;

  constructor() {
    this.defaultValue = new DefaultValue<GridTemplate, string>(
      "none",
      "grid-cols-none"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<GridTemplate, string>>([
        [
          "active",
          new Map<GridTemplate, string>([
            [1, "active:grid-cols-1"],
            [2, "active:grid-cols-2"],
            [3, "active:grid-cols-3"],
            [4, "active:grid-cols-4"],
            [5, "active:grid-cols-5"],
            [6, "active:grid-cols-6"],
            [7, "active:grid-cols-7"],
            [8, "active:grid-cols-8"],
            [9, "active:grid-cols-9"],
            [10, "active:grid-cols-10"],
            [11, "active:grid-cols-11"],
            [12, "active:grid-cols-12"],
            ["none", "active:grid-cols-none"],
            ["subgrid", "active:grid-cols-subgrid"],
          ]),
        ],
        [
          "disabled",
          new Map<GridTemplate, string>([
            [1, "disabled:grid-cols-1"],
            [2, "disabled:grid-cols-2"],
            [3, "disabled:grid-cols-3"],
            [4, "disabled:grid-cols-4"],
            [5, "disabled:grid-cols-5"],
            [6, "disabled:grid-cols-6"],
            [7, "disabled:grid-cols-7"],
            [8, "disabled:grid-cols-8"],
            [9, "disabled:grid-cols-9"],
            [10, "disabled:grid-cols-10"],
            [11, "disabled:grid-cols-11"],
            [12, "disabled:grid-cols-12"],
            ["none", "disabled:grid-cols-none"],
            ["subgrid", "disabled:grid-cols-subgrid"],
          ]),
        ],
        [
          "hover",
          new Map<GridTemplate, string>([
            [1, "hover:grid-cols-1"],
            [2, "hover:grid-cols-2"],
            [3, "hover:grid-cols-3"],
            [4, "hover:grid-cols-4"],
            [5, "hover:grid-cols-5"],
            [6, "hover:grid-cols-6"],
            [7, "hover:grid-cols-7"],
            [8, "hover:grid-cols-8"],
            [9, "hover:grid-cols-9"],
            [10, "hover:grid-cols-10"],
            [11, "hover:grid-cols-11"],
            [12, "hover:grid-cols-12"],
            ["none", "hover:grid-cols-none"],
            ["subgrid", "hover:grid-cols-subgrid"],
          ]),
        ],
        [
          "none",
          new Map<GridTemplate, string>([
            [1, "grid-cols-1"],
            [2, "grid-cols-2"],
            [3, "grid-cols-3"],
            [4, "grid-cols-4"],
            [5, "grid-cols-5"],
            [6, "grid-cols-6"],
            [7, "grid-cols-7"],
            [8, "grid-cols-8"],
            [9, "grid-cols-9"],
            [10, "grid-cols-10"],
            [11, "grid-cols-11"],
            [12, "grid-cols-12"],
            ["none", "grid-cols-none"],
            ["subgrid", "grid-cols-subgrid"],
          ]),
        ],
        [
          "open",
          new Map<GridTemplate, string>([
            [1, "open:grid-cols-1"],
            [2, "open:grid-cols-2"],
            [3, "open:grid-cols-3"],
            [4, "open:grid-cols-4"],
            [5, "open:grid-cols-5"],
            [6, "open:grid-cols-6"],
            [7, "open:grid-cols-7"],
            [8, "open:grid-cols-8"],
            [9, "open:grid-cols-9"],
            [10, "open:grid-cols-10"],
            [11, "open:grid-cols-11"],
            [12, "open:grid-cols-12"],
            ["none", "open:grid-cols-none"],
            ["subgrid", "open:grid-cols-subgrid"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
