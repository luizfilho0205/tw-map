import { Breakpoints, CSSSelector, GridTemplate } from "../../types";
import { GridRowsBreakpoints } from "./GridRowsBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { ClassesMapping } from "../../Entities/ClassMap";
import { Breakable } from "../../Entities/Brekable";
import { DefaultValue } from "../DefaultValue";

export class GridRows
  extends CSSProperty<Map<GridTemplate, string>>
  implements Breakable<Map<Breakpoints, Map<GridTemplate, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<GridTemplate, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new GridRowsClassesMapping();
    return new GridRows(classesMapping, selector);
  }

  public breakpoints() {
    return GridRowsBreakpoints.create(this.cssSelector);
  }

  public write(template: GridTemplate) {
    return this.getClassName(template);
  }
}

class GridRowsClassesMapping
  implements ClassesMapping<Map<GridTemplate, string>>
{
  private defaultValue: DefaultValue<GridTemplate, string>;

  constructor() {
    this.defaultValue = new DefaultValue<GridTemplate, string>(
      "none",
      "grid-rows-none"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<GridTemplate, string>>([
        [
          "active",
          new Map<GridTemplate, string>([
            [1, "active:grid-rows-1"],
            [2, "active:grid-rows-2"],
            [3, "active:grid-rows-3"],
            [4, "active:grid-rows-4"],
            [5, "active:grid-rows-5"],
            [6, "active:grid-rows-6"],
            [7, "active:grid-rows-7"],
            [8, "active:grid-rows-8"],
            [9, "active:grid-rows-9"],
            [10, "active:grid-rows-10"],
            [11, "active:grid-rows-11"],
            [12, "active:grid-rows-12"],
            ["none", "active:grid-rows-none"],
            ["subgrid", "active:grid-rows-subgrid"],
          ]),
        ],
        [
          "disabled",
          new Map<GridTemplate, string>([
            [1, "disabled:grid-rows-1"],
            [2, "disabled:grid-rows-2"],
            [3, "disabled:grid-rows-3"],
            [4, "disabled:grid-rows-4"],
            [5, "disabled:grid-rows-5"],
            [6, "disabled:grid-rows-6"],
            [7, "disabled:grid-rows-7"],
            [8, "disabled:grid-rows-8"],
            [9, "disabled:grid-rows-9"],
            [10, "disabled:grid-rows-10"],
            [11, "disabled:grid-rows-11"],
            [12, "disabled:grid-rows-12"],
            ["none", "disabled:grid-rows-none"],
            ["subgrid", "disabled:grid-rows-subgrid"],
          ]),
        ],
        [
          "hover",
          new Map<GridTemplate, string>([
            [1, "hover:grid-rows-1"],
            [2, "hover:grid-rows-2"],
            [3, "hover:grid-rows-3"],
            [4, "hover:grid-rows-4"],
            [5, "hover:grid-rows-5"],
            [6, "hover:grid-rows-6"],
            [7, "hover:grid-rows-7"],
            [8, "hover:grid-rows-8"],
            [9, "hover:grid-rows-9"],
            [10, "hover:grid-rows-10"],
            [11, "hover:grid-rows-11"],
            [12, "hover:grid-rows-12"],
            ["none", "hover:grid-rows-none"],
            ["subgrid", "hover:grid-rows-subgrid"],
          ]),
        ],
        [
          "none",
          new Map<GridTemplate, string>([
            [1, "grid-rows-1"],
            [2, "grid-rows-2"],
            [3, "grid-rows-3"],
            [4, "grid-rows-4"],
            [5, "grid-rows-5"],
            [6, "grid-rows-6"],
            [7, "grid-rows-7"],
            [8, "grid-rows-8"],
            [9, "grid-rows-9"],
            [10, "grid-rows-10"],
            [11, "grid-rows-11"],
            [12, "grid-rows-12"],
            ["none", "grid-rows-none"],
            ["subgrid", "grid-rows-subgrid"],
          ]),
        ],
        [
          "open",
          new Map<GridTemplate, string>([
            [1, "open:grid-rows-1"],
            [2, "open:grid-rows-2"],
            [3, "open:grid-rows-3"],
            [4, "open:grid-rows-4"],
            [5, "open:grid-rows-5"],
            [6, "open:grid-rows-6"],
            [7, "open:grid-rows-7"],
            [8, "open:grid-rows-8"],
            [9, "open:grid-rows-9"],
            [10, "open:grid-rows-10"],
            [11, "open:grid-rows-11"],
            [12, "open:grid-rows-12"],
            ["none", "open:grid-rows-none"],
            ["subgrid", "open:grid-rows-subgrid"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
