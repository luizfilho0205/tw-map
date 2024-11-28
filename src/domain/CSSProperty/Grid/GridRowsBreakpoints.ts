import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, GridTemplate } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class GridRowsBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<GridTemplate, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<GridTemplate, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new GridRowsClassesMapping();
    return new GridRowsBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, template: GridTemplate) {
    return this.getClassName(breakpoint, template);
  }
}

class GridRowsClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<GridTemplate, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<GridTemplate, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<GridTemplate, string>
    >(
      "xs",
      new Map<GridTemplate, string>([
        [1, "xs:grid-rows-1"],
        [2, "xs:grid-rows-2"],
        [3, "xs:grid-rows-3"],
        [4, "xs:grid-rows-4"],
        [5, "xs:grid-rows-5"],
        [6, "xs:grid-rows-6"],
        [7, "xs:grid-rows-7"],
        [8, "xs:grid-rows-8"],
        [9, "xs:grid-rows-9"],
        [10, "xs:grid-rows-10"],
        [11, "xs:grid-rows-11"],
        [12, "xs:grid-rows-12"],
        ["none", "xs:grid-rows-none"],
        ["subgrid", "xs:grid-rows-subgrid"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<GridTemplate, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<GridTemplate, string>>([
            [
              "xs",
              new Map<GridTemplate, string>([
                [1, "xs:active:grid-rows-1"],
                [2, "xs:active:grid-rows-2"],
                [3, "xs:active:grid-rows-3"],
                [4, "xs:active:grid-rows-4"],
                [5, "xs:active:grid-rows-5"],
                [6, "xs:active:grid-rows-6"],
                [7, "xs:active:grid-rows-7"],
                [8, "xs:active:grid-rows-8"],
                [9, "xs:active:grid-rows-9"],
                [10, "xs:active:grid-rows-10"],
                [11, "xs:active:grid-rows-11"],
                [12, "xs:active:grid-rows-12"],
                ["none", "xs:active:grid-rows-none"],
                ["subgrid", "xs:active:grid-rows-subgrid"],
              ]),
            ],
            [
              "sm",
              new Map<GridTemplate, string>([
                [1, "sm:active:grid-rows-1"],
                [2, "sm:active:grid-rows-2"],
                [3, "sm:active:grid-rows-3"],
                [4, "sm:active:grid-rows-4"],
                [5, "sm:active:grid-rows-5"],
                [6, "sm:active:grid-rows-6"],
                [7, "sm:active:grid-rows-7"],
                [8, "sm:active:grid-rows-8"],
                [9, "sm:active:grid-rows-9"],
                [10, "sm:active:grid-rows-10"],
                [11, "sm:active:grid-rows-11"],
                [12, "sm:active:grid-rows-12"],
                ["none", "sm:active:grid-rows-none"],
                ["subgrid", "sm:active:grid-rows-subgrid"],
              ]),
            ],
            [
              "md",
              new Map<GridTemplate, string>([
                [1, "md:active:grid-rows-1"],
                [2, "md:active:grid-rows-2"],
                [3, "md:active:grid-rows-3"],
                [4, "md:active:grid-rows-4"],
                [5, "md:active:grid-rows-5"],
                [6, "md:active:grid-rows-6"],
                [7, "md:active:grid-rows-7"],
                [8, "md:active:grid-rows-8"],
                [9, "md:active:grid-rows-9"],
                [10, "md:active:grid-rows-10"],
                [11, "md:active:grid-rows-11"],
                [12, "md:active:grid-rows-12"],
                ["none", "md:active:grid-rows-none"],
                ["subgrid", "md:active:grid-rows-subgrid"],
              ]),
            ],
            [
              "lg",
              new Map<GridTemplate, string>([
                [1, "lg:active:grid-rows-1"],
                [2, "lg:active:grid-rows-2"],
                [3, "lg:active:grid-rows-3"],
                [4, "lg:active:grid-rows-4"],
                [5, "lg:active:grid-rows-5"],
                [6, "lg:active:grid-rows-6"],
                [7, "lg:active:grid-rows-7"],
                [8, "lg:active:grid-rows-8"],
                [9, "lg:active:grid-rows-9"],
                [10, "lg:active:grid-rows-10"],
                [11, "lg:active:grid-rows-11"],
                [12, "lg:active:grid-rows-12"],
                ["none", "lg:active:grid-rows-none"],
                ["subgrid", "lg:active:grid-rows-subgrid"],
              ]),
            ],
            [
              "xl",
              new Map<GridTemplate, string>([
                [1, "xl:active:grid-rows-1"],
                [2, "xl:active:grid-rows-2"],
                [3, "xl:active:grid-rows-3"],
                [4, "xl:active:grid-rows-4"],
                [5, "xl:active:grid-rows-5"],
                [6, "xl:active:grid-rows-6"],
                [7, "xl:active:grid-rows-7"],
                [8, "xl:active:grid-rows-8"],
                [9, "xl:active:grid-rows-9"],
                [10, "xl:active:grid-rows-10"],
                [11, "xl:active:grid-rows-11"],
                [12, "xl:active:grid-rows-12"],
                ["none", "xl:active:grid-rows-none"],
                ["subgrid", "xl:active:grid-rows-subgrid"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<GridTemplate, string>>([
            [
              "xs",
              new Map<GridTemplate, string>([
                [1, "xs:disabled:grid-rows-1"],
                [2, "xs:disabled:grid-rows-2"],
                [3, "xs:disabled:grid-rows-3"],
                [4, "xs:disabled:grid-rows-4"],
                [5, "xs:disabled:grid-rows-5"],
                [6, "xs:disabled:grid-rows-6"],
                [7, "xs:disabled:grid-rows-7"],
                [8, "xs:disabled:grid-rows-8"],
                [9, "xs:disabled:grid-rows-9"],
                [10, "xs:disabled:grid-rows-10"],
                [11, "xs:disabled:grid-rows-11"],
                [12, "xs:disabled:grid-rows-12"],
                ["none", "xs:disabled:grid-rows-none"],
                ["subgrid", "xs:disabled:grid-rows-subgrid"],
              ]),
            ],
            [
              "sm",
              new Map<GridTemplate, string>([
                [1, "sm:disabled:grid-rows-1"],
                [2, "sm:disabled:grid-rows-2"],
                [3, "sm:disabled:grid-rows-3"],
                [4, "sm:disabled:grid-rows-4"],
                [5, "sm:disabled:grid-rows-5"],
                [6, "sm:disabled:grid-rows-6"],
                [7, "sm:disabled:grid-rows-7"],
                [8, "sm:disabled:grid-rows-8"],
                [9, "sm:disabled:grid-rows-9"],
                [10, "sm:disabled:grid-rows-10"],
                [11, "sm:disabled:grid-rows-11"],
                [12, "sm:disabled:grid-rows-12"],
                ["none", "sm:disabled:grid-rows-none"],
                ["subgrid", "sm:disabled:grid-rows-subgrid"],
              ]),
            ],
            [
              "md",
              new Map<GridTemplate, string>([
                [1, "md:disabled:grid-rows-1"],
                [2, "md:disabled:grid-rows-2"],
                [3, "md:disabled:grid-rows-3"],
                [4, "md:disabled:grid-rows-4"],
                [5, "md:disabled:grid-rows-5"],
                [6, "md:disabled:grid-rows-6"],
                [7, "md:disabled:grid-rows-7"],
                [8, "md:disabled:grid-rows-8"],
                [9, "md:disabled:grid-rows-9"],
                [10, "md:disabled:grid-rows-10"],
                [11, "md:disabled:grid-rows-11"],
                [12, "md:disabled:grid-rows-12"],
                ["none", "md:disabled:grid-rows-none"],
                ["subgrid", "md:disabled:grid-rows-subgrid"],
              ]),
            ],
            [
              "lg",
              new Map<GridTemplate, string>([
                [1, "lg:disabled:grid-rows-1"],
                [2, "lg:disabled:grid-rows-2"],
                [3, "lg:disabled:grid-rows-3"],
                [4, "lg:disabled:grid-rows-4"],
                [5, "lg:disabled:grid-rows-5"],
                [6, "lg:disabled:grid-rows-6"],
                [7, "lg:disabled:grid-rows-7"],
                [8, "lg:disabled:grid-rows-8"],
                [9, "lg:disabled:grid-rows-9"],
                [10, "lg:disabled:grid-rows-10"],
                [11, "lg:disabled:grid-rows-11"],
                [12, "lg:disabled:grid-rows-12"],
                ["none", "lg:disabled:grid-rows-none"],
                ["subgrid", "lg:disabled:grid-rows-subgrid"],
              ]),
            ],
            [
              "xl",
              new Map<GridTemplate, string>([
                [1, "xl:disabled:grid-rows-1"],
                [2, "xl:disabled:grid-rows-2"],
                [3, "xl:disabled:grid-rows-3"],
                [4, "xl:disabled:grid-rows-4"],
                [5, "xl:disabled:grid-rows-5"],
                [6, "xl:disabled:grid-rows-6"],
                [7, "xl:disabled:grid-rows-7"],
                [8, "xl:disabled:grid-rows-8"],
                [9, "xl:disabled:grid-rows-9"],
                [10, "xl:disabled:grid-rows-10"],
                [11, "xl:disabled:grid-rows-11"],
                [12, "xl:disabled:grid-rows-12"],
                ["none", "xl:disabled:grid-rows-none"],
                ["subgrid", "xl:disabled:grid-rows-subgrid"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<GridTemplate, string>>([
            [
              "xs",
              new Map<GridTemplate, string>([
                [1, "xs:hover:grid-rows-1"],
                [2, "xs:hover:grid-rows-2"],
                [3, "xs:hover:grid-rows-3"],
                [4, "xs:hover:grid-rows-4"],
                [5, "xs:hover:grid-rows-5"],
                [6, "xs:hover:grid-rows-6"],
                [7, "xs:hover:grid-rows-7"],
                [8, "xs:hover:grid-rows-8"],
                [9, "xs:hover:grid-rows-9"],
                [10, "xs:hover:grid-rows-10"],
                [11, "xs:hover:grid-rows-11"],
                [12, "xs:hover:grid-rows-12"],
                ["none", "xs:hover:grid-rows-none"],
                ["subgrid", "xs:hover:grid-rows-subgrid"],
              ]),
            ],
            [
              "sm",
              new Map<GridTemplate, string>([
                [1, "sm:hover:grid-rows-1"],
                [2, "sm:hover:grid-rows-2"],
                [3, "sm:hover:grid-rows-3"],
                [4, "sm:hover:grid-rows-4"],
                [5, "sm:hover:grid-rows-5"],
                [6, "sm:hover:grid-rows-6"],
                [7, "sm:hover:grid-rows-7"],
                [8, "sm:hover:grid-rows-8"],
                [9, "sm:hover:grid-rows-9"],
                [10, "sm:hover:grid-rows-10"],
                [11, "sm:hover:grid-rows-11"],
                [12, "sm:hover:grid-rows-12"],
                ["none", "sm:hover:grid-rows-none"],
                ["subgrid", "sm:hover:grid-rows-subgrid"],
              ]),
            ],
            [
              "md",
              new Map<GridTemplate, string>([
                [1, "md:hover:grid-rows-1"],
                [2, "md:hover:grid-rows-2"],
                [3, "md:hover:grid-rows-3"],
                [4, "md:hover:grid-rows-4"],
                [5, "md:hover:grid-rows-5"],
                [6, "md:hover:grid-rows-6"],
                [7, "md:hover:grid-rows-7"],
                [8, "md:hover:grid-rows-8"],
                [9, "md:hover:grid-rows-9"],
                [10, "md:hover:grid-rows-10"],
                [11, "md:hover:grid-rows-11"],
                [12, "md:hover:grid-rows-12"],
                ["none", "md:hover:grid-rows-none"],
                ["subgrid", "md:hover:grid-rows-subgrid"],
              ]),
            ],
            [
              "lg",
              new Map<GridTemplate, string>([
                [1, "lg:hover:grid-rows-1"],
                [2, "lg:hover:grid-rows-2"],
                [3, "lg:hover:grid-rows-3"],
                [4, "lg:hover:grid-rows-4"],
                [5, "lg:hover:grid-rows-5"],
                [6, "lg:hover:grid-rows-6"],
                [7, "lg:hover:grid-rows-7"],
                [8, "lg:hover:grid-rows-8"],
                [9, "lg:hover:grid-rows-9"],
                [10, "lg:hover:grid-rows-10"],
                [11, "lg:hover:grid-rows-11"],
                [12, "lg:hover:grid-rows-12"],
                ["none", "lg:hover:grid-rows-none"],
                ["subgrid", "lg:hover:grid-rows-subgrid"],
              ]),
            ],
            [
              "xl",
              new Map<GridTemplate, string>([
                [1, "xl:hover:grid-rows-1"],
                [2, "xl:hover:grid-rows-2"],
                [3, "xl:hover:grid-rows-3"],
                [4, "xl:hover:grid-rows-4"],
                [5, "xl:hover:grid-rows-5"],
                [6, "xl:hover:grid-rows-6"],
                [7, "xl:hover:grid-rows-7"],
                [8, "xl:hover:grid-rows-8"],
                [9, "xl:hover:grid-rows-9"],
                [10, "xl:hover:grid-rows-10"],
                [11, "xl:hover:grid-rows-11"],
                [12, "xl:hover:grid-rows-12"],
                ["none", "xl:hover:grid-rows-none"],
                ["subgrid", "xl:hover:grid-rows-subgrid"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<GridTemplate, string>>([
            [
              "xs",
              new Map<GridTemplate, string>([
                [1, "xs:grid-rows-1"],
                [2, "xs:grid-rows-2"],
                [3, "xs:grid-rows-3"],
                [4, "xs:grid-rows-4"],
                [5, "xs:grid-rows-5"],
                [6, "xs:grid-rows-6"],
                [7, "xs:grid-rows-7"],
                [8, "xs:grid-rows-8"],
                [9, "xs:grid-rows-9"],
                [10, "xs:grid-rows-10"],
                [11, "xs:grid-rows-11"],
                [12, "xs:grid-rows-12"],
                ["none", "xs:grid-rows-none"],
                ["subgrid", "xs:grid-rows-subgrid"],
              ]),
            ],
            [
              "sm",
              new Map<GridTemplate, string>([
                [1, "sm:grid-rows-1"],
                [2, "sm:grid-rows-2"],
                [3, "sm:grid-rows-3"],
                [4, "sm:grid-rows-4"],
                [5, "sm:grid-rows-5"],
                [6, "sm:grid-rows-6"],
                [7, "sm:grid-rows-7"],
                [8, "sm:grid-rows-8"],
                [9, "sm:grid-rows-9"],
                [10, "sm:grid-rows-10"],
                [11, "sm:grid-rows-11"],
                [12, "sm:grid-rows-12"],
                ["none", "sm:grid-rows-none"],
                ["subgrid", "sm:grid-rows-subgrid"],
              ]),
            ],
            [
              "md",
              new Map<GridTemplate, string>([
                [1, "md:grid-rows-1"],
                [2, "md:grid-rows-2"],
                [3, "md:grid-rows-3"],
                [4, "md:grid-rows-4"],
                [5, "md:grid-rows-5"],
                [6, "md:grid-rows-6"],
                [7, "md:grid-rows-7"],
                [8, "md:grid-rows-8"],
                [9, "md:grid-rows-9"],
                [10, "md:grid-rows-10"],
                [11, "md:grid-rows-11"],
                [12, "md:grid-rows-12"],
                ["none", "md:grid-rows-none"],
                ["subgrid", "md:grid-rows-subgrid"],
              ]),
            ],
            [
              "lg",
              new Map<GridTemplate, string>([
                [1, "lg:grid-rows-1"],
                [2, "lg:grid-rows-2"],
                [3, "lg:grid-rows-3"],
                [4, "lg:grid-rows-4"],
                [5, "lg:grid-rows-5"],
                [6, "lg:grid-rows-6"],
                [7, "lg:grid-rows-7"],
                [8, "lg:grid-rows-8"],
                [9, "lg:grid-rows-9"],
                [10, "lg:grid-rows-10"],
                [11, "lg:grid-rows-11"],
                [12, "lg:grid-rows-12"],
                ["none", "lg:grid-rows-none"],
                ["subgrid", "lg:grid-rows-subgrid"],
              ]),
            ],
            [
              "xl",
              new Map<GridTemplate, string>([
                [1, "xl:grid-rows-1"],
                [2, "xl:grid-rows-2"],
                [3, "xl:grid-rows-3"],
                [4, "xl:grid-rows-4"],
                [5, "xl:grid-rows-5"],
                [6, "xl:grid-rows-6"],
                [7, "xl:grid-rows-7"],
                [8, "xl:grid-rows-8"],
                [9, "xl:grid-rows-9"],
                [10, "xl:grid-rows-10"],
                [11, "xl:grid-rows-11"],
                [12, "xl:grid-rows-12"],
                ["none", "xl:grid-rows-none"],
                ["subgrid", "xl:grid-rows-subgrid"],
              ]),
            ],
          ]),
        ],

        [
          "open",
          new Map<Breakpoints, Map<GridTemplate, string>>([
            [
              "xs",
              new Map<GridTemplate, string>([
                [1, "xs:open:grid-rows-1"],
                [2, "xs:open:grid-rows-2"],
                [3, "xs:open:grid-rows-3"],
                [4, "xs:open:grid-rows-4"],
                [5, "xs:open:grid-rows-5"],
                [6, "xs:open:grid-rows-6"],
                [7, "xs:open:grid-rows-7"],
                [8, "xs:open:grid-rows-8"],
                [9, "xs:open:grid-rows-9"],
                [10, "xs:open:grid-rows-10"],
                [11, "xs:open:grid-rows-11"],
                [12, "xs:open:grid-rows-12"],
                ["none", "xs:open:grid-rows-none"],
                ["subgrid", "xs:open:grid-rows-subgrid"],
              ]),
            ],
            [
              "sm",
              new Map<GridTemplate, string>([
                [1, "sm:open:grid-rows-1"],
                [2, "sm:open:grid-rows-2"],
                [3, "sm:open:grid-rows-3"],
                [4, "sm:open:grid-rows-4"],
                [5, "sm:open:grid-rows-5"],
                [6, "sm:open:grid-rows-6"],
                [7, "sm:open:grid-rows-7"],
                [8, "sm:open:grid-rows-8"],
                [9, "sm:open:grid-rows-9"],
                [10, "sm:open:grid-rows-10"],
                [11, "sm:open:grid-rows-11"],
                [12, "sm:open:grid-rows-12"],
                ["none", "sm:open:grid-rows-none"],
                ["subgrid", "sm:open:grid-rows-subgrid"],
              ]),
            ],
            [
              "md",
              new Map<GridTemplate, string>([
                [1, "md:open:grid-rows-1"],
                [2, "md:open:grid-rows-2"],
                [3, "md:open:grid-rows-3"],
                [4, "md:open:grid-rows-4"],
                [5, "md:open:grid-rows-5"],
                [6, "md:open:grid-rows-6"],
                [7, "md:open:grid-rows-7"],
                [8, "md:open:grid-rows-8"],
                [9, "md:open:grid-rows-9"],
                [10, "md:open:grid-rows-10"],
                [11, "md:open:grid-rows-11"],
                [12, "md:open:grid-rows-12"],
                ["none", "md:open:grid-rows-none"],
                ["subgrid", "md:open:grid-rows-subgrid"],
              ]),
            ],
            [
              "lg",
              new Map<GridTemplate, string>([
                [1, "lg:open:grid-rows-1"],
                [2, "lg:open:grid-rows-2"],
                [3, "lg:open:grid-rows-3"],
                [4, "lg:open:grid-rows-4"],
                [5, "lg:open:grid-rows-5"],
                [6, "lg:open:grid-rows-6"],
                [7, "lg:open:grid-rows-7"],
                [8, "lg:open:grid-rows-8"],
                [9, "lg:open:grid-rows-9"],
                [10, "lg:open:grid-rows-10"],
                [11, "lg:open:grid-rows-11"],
                [12, "lg:open:grid-rows-12"],
                ["none", "lg:open:grid-rows-none"],
                ["subgrid", "lg:open:grid-rows-subgrid"],
              ]),
            ],
            [
              "xl",
              new Map<GridTemplate, string>([
                [1, "xl:open:grid-rows-1"],
                [2, "xl:open:grid-rows-2"],
                [3, "xl:open:grid-rows-3"],
                [4, "xl:open:grid-rows-4"],
                [5, "xl:open:grid-rows-5"],
                [6, "xl:open:grid-rows-6"],
                [7, "xl:open:grid-rows-7"],
                [8, "xl:open:grid-rows-8"],
                [9, "xl:open:grid-rows-9"],
                [10, "xl:open:grid-rows-10"],
                [11, "xl:open:grid-rows-11"],
                [12, "xl:open:grid-rows-12"],
                ["none", "xl:open:grid-rows-none"],
                ["subgrid", "xl:open:grid-rows-subgrid"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
