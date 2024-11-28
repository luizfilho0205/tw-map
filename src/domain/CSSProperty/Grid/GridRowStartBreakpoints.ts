import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, GridStartEnd } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class GridRowStartBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<GridStartEnd, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<GridStartEnd, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new GridRowClassesMapping();
    return new GridRowStartBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, template: GridStartEnd) {
    return this.getClassName(breakpoint, template);
  }
}

class GridRowClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<GridStartEnd, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<GridStartEnd, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<GridStartEnd, string>
    >(
      "xs",
      new Map<GridStartEnd, string>([
        [1, "xs:hover:row-start-1"],
        [2, "xs:hover:row-start-2"],
        [3, "xs:hover:row-start-3"],
        [4, "xs:hover:row-start-4"],
        [5, "xs:hover:row-start-5"],
        [6, "xs:hover:row-start-6"],
        [7, "xs:hover:row-start-7"],
        [8, "xs:hover:row-start-8"],
        [9, "xs:hover:row-start-9"],
        [10, "xs:hover:row-start-10"],
        [11, "xs:hover:row-start-11"],
        [12, "xs:hover:row-start-12"],
        [13, "xs:hover:row-start-13"],
        ["auto", "xs:hover:row-start-auto"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<GridStartEnd, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<GridStartEnd, string>>([
            [
              "xs",
              new Map<GridStartEnd, string>([
                [1, "xs:active:row-start-1"],
                [2, "xs:active:row-start-2"],
                [3, "xs:active:row-start-3"],
                [4, "xs:active:row-start-4"],
                [5, "xs:active:row-start-5"],
                [6, "xs:active:row-start-6"],
                [7, "xs:active:row-start-7"],
                [8, "xs:active:row-start-8"],
                [9, "xs:active:row-start-9"],
                [10, "xs:active:row-start-10"],
                [11, "xs:active:row-start-11"],
                [12, "xs:active:row-start-12"],
                [13, "xs:active:row-start-13"],
                ["auto", "xs:active:row-start-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:active:row-start-1"],
                [2, "sm:active:row-start-2"],
                [3, "sm:active:row-start-3"],
                [4, "sm:active:row-start-4"],
                [5, "sm:active:row-start-5"],
                [6, "sm:active:row-start-6"],
                [7, "sm:active:row-start-7"],
                [8, "sm:active:row-start-8"],
                [9, "sm:active:row-start-9"],
                [10, "sm:active:row-start-10"],
                [11, "sm:active:row-start-11"],
                [12, "sm:active:row-start-12"],
                [13, "sm:active:row-start-13"],
                ["auto", "sm:active:row-start-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:active:row-start-1"],
                [2, "md:active:row-start-2"],
                [3, "md:active:row-start-3"],
                [4, "md:active:row-start-4"],
                [5, "md:active:row-start-5"],
                [6, "md:active:row-start-6"],
                [7, "md:active:row-start-7"],
                [8, "md:active:row-start-8"],
                [9, "md:active:row-start-9"],
                [10, "md:active:row-start-10"],
                [11, "md:active:row-start-11"],
                [12, "md:active:row-start-12"],
                [13, "md:active:row-start-13"],
                ["auto", "md:active:row-start-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:active:row-start-1"],
                [2, "lg:active:row-start-2"],
                [3, "lg:active:row-start-3"],
                [4, "lg:active:row-start-4"],
                [5, "lg:active:row-start-5"],
                [6, "lg:active:row-start-6"],
                [7, "lg:active:row-start-7"],
                [8, "lg:active:row-start-8"],
                [9, "lg:active:row-start-9"],
                [10, "lg:active:row-start-10"],
                [11, "lg:active:row-start-11"],
                [12, "lg:active:row-start-12"],
                [13, "lg:active:row-start-13"],
                ["auto", "lg:active:row-start-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:active:row-start-1"],
                [2, "xl:active:row-start-2"],
                [3, "xl:active:row-start-3"],
                [4, "xl:active:row-start-4"],
                [5, "xl:active:row-start-5"],
                [6, "xl:active:row-start-6"],
                [7, "xl:active:row-start-7"],
                [8, "xl:active:row-start-8"],
                [9, "xl:active:row-start-9"],
                [10, "xl:active:row-start-10"],
                [11, "xl:active:row-start-11"],
                [12, "xl:active:row-start-12"],
                [13, "xl:active:row-start-13"],
                ["auto", "xl:active:row-start-auto"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<GridStartEnd, string>>([
            [
              "xs",
              new Map<GridStartEnd, string>([
                [1, "xs:disabled:row-start-1"],
                [2, "xs:disabled:row-start-2"],
                [3, "xs:disabled:row-start-3"],
                [4, "xs:disabled:row-start-4"],
                [5, "xs:disabled:row-start-5"],
                [6, "xs:disabled:row-start-6"],
                [7, "xs:disabled:row-start-7"],
                [8, "xs:disabled:row-start-8"],
                [9, "xs:disabled:row-start-9"],
                [10, "xs:disabled:row-start-10"],
                [11, "xs:disabled:row-start-11"],
                [12, "xs:disabled:row-start-12"],
                [13, "xs:disabled:row-start-13"],
                ["auto", "xs:disabled:row-start-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:disabled:row-start-1"],
                [2, "sm:disabled:row-start-2"],
                [3, "sm:disabled:row-start-3"],
                [4, "sm:disabled:row-start-4"],
                [5, "sm:disabled:row-start-5"],
                [6, "sm:disabled:row-start-6"],
                [7, "sm:disabled:row-start-7"],
                [8, "sm:disabled:row-start-8"],
                [9, "sm:disabled:row-start-9"],
                [10, "sm:disabled:row-start-10"],
                [11, "sm:disabled:row-start-11"],
                [12, "sm:disabled:row-start-12"],
                [13, "sm:disabled:row-start-13"],
                ["auto", "sm:disabled:row-start-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:disabled:row-start-1"],
                [2, "md:disabled:row-start-2"],
                [3, "md:disabled:row-start-3"],
                [4, "md:disabled:row-start-4"],
                [5, "md:disabled:row-start-5"],
                [6, "md:disabled:row-start-6"],
                [7, "md:disabled:row-start-7"],
                [8, "md:disabled:row-start-8"],
                [9, "md:disabled:row-start-9"],
                [10, "md:disabled:row-start-10"],
                [11, "md:disabled:row-start-11"],
                [12, "md:disabled:row-start-12"],
                [13, "md:disabled:row-start-13"],
                ["auto", "md:disabled:row-start-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:disabled:row-start-1"],
                [2, "lg:disabled:row-start-2"],
                [3, "lg:disabled:row-start-3"],
                [4, "lg:disabled:row-start-4"],
                [5, "lg:disabled:row-start-5"],
                [6, "lg:disabled:row-start-6"],
                [7, "lg:disabled:row-start-7"],
                [8, "lg:disabled:row-start-8"],
                [9, "lg:disabled:row-start-9"],
                [10, "lg:disabled:row-start-10"],
                [11, "lg:disabled:row-start-11"],
                [12, "lg:disabled:row-start-12"],
                [13, "lg:disabled:row-start-13"],
                ["auto", "lg:disabled:row-start-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:disabled:row-start-1"],
                [2, "xl:disabled:row-start-2"],
                [3, "xl:disabled:row-start-3"],
                [4, "xl:disabled:row-start-4"],
                [5, "xl:disabled:row-start-5"],
                [6, "xl:disabled:row-start-6"],
                [7, "xl:disabled:row-start-7"],
                [8, "xl:disabled:row-start-8"],
                [9, "xl:disabled:row-start-9"],
                [10, "xl:disabled:row-start-10"],
                [11, "xl:disabled:row-start-11"],
                [12, "xl:disabled:row-start-12"],
                [13, "xl:disabled:row-start-13"],
                ["auto", "xl:disabled:row-start-auto"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<GridStartEnd, string>>([
            [
              "xs",
              new Map<GridStartEnd, string>([
                [1, "xs:hover:row-start-1"],
                [2, "xs:hover:row-start-2"],
                [3, "xs:hover:row-start-3"],
                [4, "xs:hover:row-start-4"],
                [5, "xs:hover:row-start-5"],
                [6, "xs:hover:row-start-6"],
                [7, "xs:hover:row-start-7"],
                [8, "xs:hover:row-start-8"],
                [9, "xs:hover:row-start-9"],
                [10, "xs:hover:row-start-10"],
                [11, "xs:hover:row-start-11"],
                [12, "xs:hover:row-start-12"],
                [13, "xs:hover:row-start-13"],
                ["auto", "xs:hover:row-start-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:hover:row-start-1"],
                [2, "sm:hover:row-start-2"],
                [3, "sm:hover:row-start-3"],
                [4, "sm:hover:row-start-4"],
                [5, "sm:hover:row-start-5"],
                [6, "sm:hover:row-start-6"],
                [7, "sm:hover:row-start-7"],
                [8, "sm:hover:row-start-8"],
                [9, "sm:hover:row-start-9"],
                [10, "sm:hover:row-start-10"],
                [11, "sm:hover:row-start-11"],
                [12, "sm:hover:row-start-12"],
                [13, "sm:hover:row-start-13"],
                ["auto", "sm:hover:row-start-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:hover:row-start-1"],
                [2, "md:hover:row-start-2"],
                [3, "md:hover:row-start-3"],
                [4, "md:hover:row-start-4"],
                [5, "md:hover:row-start-5"],
                [6, "md:hover:row-start-6"],
                [7, "md:hover:row-start-7"],
                [8, "md:hover:row-start-8"],
                [9, "md:hover:row-start-9"],
                [10, "md:hover:row-start-10"],
                [11, "md:hover:row-start-11"],
                [12, "md:hover:row-start-12"],
                [13, "md:hover:row-start-13"],
                ["auto", "md:hover:row-start-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:hover:row-start-1"],
                [2, "lg:hover:row-start-2"],
                [3, "lg:hover:row-start-3"],
                [4, "lg:hover:row-start-4"],
                [5, "lg:hover:row-start-5"],
                [6, "lg:hover:row-start-6"],
                [7, "lg:hover:row-start-7"],
                [8, "lg:hover:row-start-8"],
                [9, "lg:hover:row-start-9"],
                [10, "lg:hover:row-start-10"],
                [11, "lg:hover:row-start-11"],
                [12, "lg:hover:row-start-12"],
                [13, "lg:hover:row-start-13"],
                ["auto", "lg:hover:row-start-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:hover:row-start-1"],
                [2, "xl:hover:row-start-2"],
                [3, "xl:hover:row-start-3"],
                [4, "xl:hover:row-start-4"],
                [5, "xl:hover:row-start-5"],
                [6, "xl:hover:row-start-6"],
                [7, "xl:hover:row-start-7"],
                [8, "xl:hover:row-start-8"],
                [9, "xl:hover:row-start-9"],
                [10, "xl:hover:row-start-10"],
                [11, "xl:hover:row-start-11"],
                [12, "xl:hover:row-start-12"],
                [13, "xl:hover:row-start-13"],
                ["auto", "xl:hover:row-start-auto"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<GridStartEnd, string>>([
            [
              "xs",
              new Map<GridStartEnd, string>([
                [1, "xs:row-start-1"],
                [2, "xs:row-start-2"],
                [3, "xs:row-start-3"],
                [4, "xs:row-start-4"],
                [5, "xs:row-start-5"],
                [6, "xs:row-start-6"],
                [7, "xs:row-start-7"],
                [8, "xs:row-start-8"],
                [9, "xs:row-start-9"],
                [10, "xs:row-start-10"],
                [11, "xs:row-start-11"],
                [12, "xs:row-start-12"],
                [13, "xs:row-start-13"],
                ["auto", "xs:row-start-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:row-start-1"],
                [2, "sm:row-start-2"],
                [3, "sm:row-start-3"],
                [4, "sm:row-start-4"],
                [5, "sm:row-start-5"],
                [6, "sm:row-start-6"],
                [7, "sm:row-start-7"],
                [8, "sm:row-start-8"],
                [9, "sm:row-start-9"],
                [10, "sm:row-start-10"],
                [11, "sm:row-start-11"],
                [12, "sm:row-start-12"],
                [13, "sm:row-start-13"],
                ["auto", "sm:row-start-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:row-start-1"],
                [2, "md:row-start-2"],
                [3, "md:row-start-3"],
                [4, "md:row-start-4"],
                [5, "md:row-start-5"],
                [6, "md:row-start-6"],
                [7, "md:row-start-7"],
                [8, "md:row-start-8"],
                [9, "md:row-start-9"],
                [10, "md:row-start-10"],
                [11, "md:row-start-11"],
                [12, "md:row-start-12"],
                [13, "md:row-start-13"],
                ["auto", "md:row-start-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:row-start-1"],
                [2, "lg:row-start-2"],
                [3, "lg:row-start-3"],
                [4, "lg:row-start-4"],
                [5, "lg:row-start-5"],
                [6, "lg:row-start-6"],
                [7, "lg:row-start-7"],
                [8, "lg:row-start-8"],
                [9, "lg:row-start-9"],
                [10, "lg:row-start-10"],
                [11, "lg:row-start-11"],
                [12, "lg:row-start-12"],
                [13, "lg:row-start-13"],
                ["auto", "lg:row-start-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:row-start-1"],
                [2, "xl:row-start-2"],
                [3, "xl:row-start-3"],
                [4, "xl:row-start-4"],
                [5, "xl:row-start-5"],
                [6, "xl:row-start-6"],
                [7, "xl:row-start-7"],
                [8, "xl:row-start-8"],
                [9, "xl:row-start-9"],
                [10, "xl:row-start-10"],
                [11, "xl:row-start-11"],
                [12, "xl:row-start-12"],
                [13, "xl:row-start-13"],
                ["auto", "xl:row-start-auto"],
              ]),
            ],
          ]),
        ],

        [
          "open",
          new Map<Breakpoints, Map<GridStartEnd, string>>([
            [
              "xs",
              new Map<GridStartEnd, string>([
                [1, "xs:open:row-start-1"],
                [2, "xs:open:row-start-2"],
                [3, "xs:open:row-start-3"],
                [4, "xs:open:row-start-4"],
                [5, "xs:open:row-start-5"],
                [6, "xs:open:row-start-6"],
                [7, "xs:open:row-start-7"],
                [8, "xs:open:row-start-8"],
                [9, "xs:open:row-start-9"],
                [10, "xs:open:row-start-10"],
                [11, "xs:open:row-start-11"],
                [12, "xs:open:row-start-12"],
                [13, "xs:open:row-start-13"],
                ["auto", "xs:open:row-start-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:open:row-start-1"],
                [2, "sm:open:row-start-2"],
                [3, "sm:open:row-start-3"],
                [4, "sm:open:row-start-4"],
                [5, "sm:open:row-start-5"],
                [6, "sm:open:row-start-6"],
                [7, "sm:open:row-start-7"],
                [8, "sm:open:row-start-8"],
                [9, "sm:open:row-start-9"],
                [10, "sm:open:row-start-10"],
                [11, "sm:open:row-start-11"],
                [12, "sm:open:row-start-12"],
                [13, "sm:open:row-start-13"],
                ["auto", "sm:open:row-start-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:open:row-start-1"],
                [2, "md:open:row-start-2"],
                [3, "md:open:row-start-3"],
                [4, "md:open:row-start-4"],
                [5, "md:open:row-start-5"],
                [6, "md:open:row-start-6"],
                [7, "md:open:row-start-7"],
                [8, "md:open:row-start-8"],
                [9, "md:open:row-start-9"],
                [10, "md:open:row-start-10"],
                [11, "md:open:row-start-11"],
                [12, "md:open:row-start-12"],
                [13, "md:open:row-start-13"],
                ["auto", "md:open:row-start-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:open:row-start-1"],
                [2, "lg:open:row-start-2"],
                [3, "lg:open:row-start-3"],
                [4, "lg:open:row-start-4"],
                [5, "lg:open:row-start-5"],
                [6, "lg:open:row-start-6"],
                [7, "lg:open:row-start-7"],
                [8, "lg:open:row-start-8"],
                [9, "lg:open:row-start-9"],
                [10, "lg:open:row-start-10"],
                [11, "lg:open:row-start-11"],
                [12, "lg:open:row-start-12"],
                [13, "lg:open:row-start-13"],
                ["auto", "lg:open:row-start-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:open:row-start-1"],
                [2, "xl:open:row-start-2"],
                [3, "xl:open:row-start-3"],
                [4, "xl:open:row-start-4"],
                [5, "xl:open:row-start-5"],
                [6, "xl:open:row-start-6"],
                [7, "xl:open:row-start-7"],
                [8, "xl:open:row-start-8"],
                [9, "xl:open:row-start-9"],
                [10, "xl:open:row-start-10"],
                [11, "xl:open:row-start-11"],
                [12, "xl:open:row-start-12"],
                [13, "xl:open:row-start-13"],
                ["auto", "xl:open:row-start-auto"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}