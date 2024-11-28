import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, GridStartEnd } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class GridRowEndBreakpoints extends CSSProperty<
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
    return new GridRowEndBreakpoints(classesMapping, selector);
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
        [1, "xs:hover:row-end-1"],
        [2, "xs:hover:row-end-2"],
        [3, "xs:hover:row-end-3"],
        [4, "xs:hover:row-end-4"],
        [5, "xs:hover:row-end-5"],
        [6, "xs:hover:row-end-6"],
        [7, "xs:hover:row-end-7"],
        [8, "xs:hover:row-end-8"],
        [9, "xs:hover:row-end-9"],
        [10, "xs:hover:row-end-10"],
        [11, "xs:hover:row-end-11"],
        [12, "xs:hover:row-end-12"],
        [13, "xs:hover:row-end-13"],
        ["auto", "xs:hover:row-end-auto"],
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
                [1, "xs:active:row-end-1"],
                [2, "xs:active:row-end-2"],
                [3, "xs:active:row-end-3"],
                [4, "xs:active:row-end-4"],
                [5, "xs:active:row-end-5"],
                [6, "xs:active:row-end-6"],
                [7, "xs:active:row-end-7"],
                [8, "xs:active:row-end-8"],
                [9, "xs:active:row-end-9"],
                [10, "xs:active:row-end-10"],
                [11, "xs:active:row-end-11"],
                [12, "xs:active:row-end-12"],
                [13, "xs:active:row-end-13"],
                ["auto", "xs:active:row-end-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:active:row-end-1"],
                [2, "sm:active:row-end-2"],
                [3, "sm:active:row-end-3"],
                [4, "sm:active:row-end-4"],
                [5, "sm:active:row-end-5"],
                [6, "sm:active:row-end-6"],
                [7, "sm:active:row-end-7"],
                [8, "sm:active:row-end-8"],
                [9, "sm:active:row-end-9"],
                [10, "sm:active:row-end-10"],
                [11, "sm:active:row-end-11"],
                [12, "sm:active:row-end-12"],
                [13, "sm:active:row-end-13"],
                ["auto", "sm:active:row-end-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:active:row-end-1"],
                [2, "md:active:row-end-2"],
                [3, "md:active:row-end-3"],
                [4, "md:active:row-end-4"],
                [5, "md:active:row-end-5"],
                [6, "md:active:row-end-6"],
                [7, "md:active:row-end-7"],
                [8, "md:active:row-end-8"],
                [9, "md:active:row-end-9"],
                [10, "md:active:row-end-10"],
                [11, "md:active:row-end-11"],
                [12, "md:active:row-end-12"],
                [13, "md:active:row-end-13"],
                ["auto", "md:active:row-end-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:active:row-end-1"],
                [2, "lg:active:row-end-2"],
                [3, "lg:active:row-end-3"],
                [4, "lg:active:row-end-4"],
                [5, "lg:active:row-end-5"],
                [6, "lg:active:row-end-6"],
                [7, "lg:active:row-end-7"],
                [8, "lg:active:row-end-8"],
                [9, "lg:active:row-end-9"],
                [10, "lg:active:row-end-10"],
                [11, "lg:active:row-end-11"],
                [12, "lg:active:row-end-12"],
                [13, "lg:active:row-end-13"],
                ["auto", "lg:active:row-end-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:active:row-end-1"],
                [2, "xl:active:row-end-2"],
                [3, "xl:active:row-end-3"],
                [4, "xl:active:row-end-4"],
                [5, "xl:active:row-end-5"],
                [6, "xl:active:row-end-6"],
                [7, "xl:active:row-end-7"],
                [8, "xl:active:row-end-8"],
                [9, "xl:active:row-end-9"],
                [10, "xl:active:row-end-10"],
                [11, "xl:active:row-end-11"],
                [12, "xl:active:row-end-12"],
                [13, "xl:active:row-end-13"],
                ["auto", "xl:active:row-end-auto"],
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
                [1, "xs:disabled:row-end-1"],
                [2, "xs:disabled:row-end-2"],
                [3, "xs:disabled:row-end-3"],
                [4, "xs:disabled:row-end-4"],
                [5, "xs:disabled:row-end-5"],
                [6, "xs:disabled:row-end-6"],
                [7, "xs:disabled:row-end-7"],
                [8, "xs:disabled:row-end-8"],
                [9, "xs:disabled:row-end-9"],
                [10, "xs:disabled:row-end-10"],
                [11, "xs:disabled:row-end-11"],
                [12, "xs:disabled:row-end-12"],
                [13, "xs:disabled:row-end-13"],
                ["auto", "xs:disabled:row-end-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:disabled:row-end-1"],
                [2, "sm:disabled:row-end-2"],
                [3, "sm:disabled:row-end-3"],
                [4, "sm:disabled:row-end-4"],
                [5, "sm:disabled:row-end-5"],
                [6, "sm:disabled:row-end-6"],
                [7, "sm:disabled:row-end-7"],
                [8, "sm:disabled:row-end-8"],
                [9, "sm:disabled:row-end-9"],
                [10, "sm:disabled:row-end-10"],
                [11, "sm:disabled:row-end-11"],
                [12, "sm:disabled:row-end-12"],
                [13, "sm:disabled:row-end-13"],
                ["auto", "sm:disabled:row-end-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:disabled:row-end-1"],
                [2, "md:disabled:row-end-2"],
                [3, "md:disabled:row-end-3"],
                [4, "md:disabled:row-end-4"],
                [5, "md:disabled:row-end-5"],
                [6, "md:disabled:row-end-6"],
                [7, "md:disabled:row-end-7"],
                [8, "md:disabled:row-end-8"],
                [9, "md:disabled:row-end-9"],
                [10, "md:disabled:row-end-10"],
                [11, "md:disabled:row-end-11"],
                [12, "md:disabled:row-end-12"],
                [13, "md:disabled:row-end-13"],
                ["auto", "md:disabled:row-end-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:disabled:row-end-1"],
                [2, "lg:disabled:row-end-2"],
                [3, "lg:disabled:row-end-3"],
                [4, "lg:disabled:row-end-4"],
                [5, "lg:disabled:row-end-5"],
                [6, "lg:disabled:row-end-6"],
                [7, "lg:disabled:row-end-7"],
                [8, "lg:disabled:row-end-8"],
                [9, "lg:disabled:row-end-9"],
                [10, "lg:disabled:row-end-10"],
                [11, "lg:disabled:row-end-11"],
                [12, "lg:disabled:row-end-12"],
                [13, "lg:disabled:row-end-13"],
                ["auto", "lg:disabled:row-end-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:disabled:row-end-1"],
                [2, "xl:disabled:row-end-2"],
                [3, "xl:disabled:row-end-3"],
                [4, "xl:disabled:row-end-4"],
                [5, "xl:disabled:row-end-5"],
                [6, "xl:disabled:row-end-6"],
                [7, "xl:disabled:row-end-7"],
                [8, "xl:disabled:row-end-8"],
                [9, "xl:disabled:row-end-9"],
                [10, "xl:disabled:row-end-10"],
                [11, "xl:disabled:row-end-11"],
                [12, "xl:disabled:row-end-12"],
                [13, "xl:disabled:row-end-13"],
                ["auto", "xl:disabled:row-end-auto"],
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
                [1, "xs:hover:row-end-1"],
                [2, "xs:hover:row-end-2"],
                [3, "xs:hover:row-end-3"],
                [4, "xs:hover:row-end-4"],
                [5, "xs:hover:row-end-5"],
                [6, "xs:hover:row-end-6"],
                [7, "xs:hover:row-end-7"],
                [8, "xs:hover:row-end-8"],
                [9, "xs:hover:row-end-9"],
                [10, "xs:hover:row-end-10"],
                [11, "xs:hover:row-end-11"],
                [12, "xs:hover:row-end-12"],
                [13, "xs:hover:row-end-13"],
                ["auto", "xs:hover:row-end-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:hover:row-end-1"],
                [2, "sm:hover:row-end-2"],
                [3, "sm:hover:row-end-3"],
                [4, "sm:hover:row-end-4"],
                [5, "sm:hover:row-end-5"],
                [6, "sm:hover:row-end-6"],
                [7, "sm:hover:row-end-7"],
                [8, "sm:hover:row-end-8"],
                [9, "sm:hover:row-end-9"],
                [10, "sm:hover:row-end-10"],
                [11, "sm:hover:row-end-11"],
                [12, "sm:hover:row-end-12"],
                [13, "sm:hover:row-end-13"],
                ["auto", "sm:hover:row-end-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:hover:row-end-1"],
                [2, "md:hover:row-end-2"],
                [3, "md:hover:row-end-3"],
                [4, "md:hover:row-end-4"],
                [5, "md:hover:row-end-5"],
                [6, "md:hover:row-end-6"],
                [7, "md:hover:row-end-7"],
                [8, "md:hover:row-end-8"],
                [9, "md:hover:row-end-9"],
                [10, "md:hover:row-end-10"],
                [11, "md:hover:row-end-11"],
                [12, "md:hover:row-end-12"],
                [13, "md:hover:row-end-13"],
                ["auto", "md:hover:row-end-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:hover:row-end-1"],
                [2, "lg:hover:row-end-2"],
                [3, "lg:hover:row-end-3"],
                [4, "lg:hover:row-end-4"],
                [5, "lg:hover:row-end-5"],
                [6, "lg:hover:row-end-6"],
                [7, "lg:hover:row-end-7"],
                [8, "lg:hover:row-end-8"],
                [9, "lg:hover:row-end-9"],
                [10, "lg:hover:row-end-10"],
                [11, "lg:hover:row-end-11"],
                [12, "lg:hover:row-end-12"],
                [13, "lg:hover:row-end-13"],
                ["auto", "lg:hover:row-end-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:hover:row-end-1"],
                [2, "xl:hover:row-end-2"],
                [3, "xl:hover:row-end-3"],
                [4, "xl:hover:row-end-4"],
                [5, "xl:hover:row-end-5"],
                [6, "xl:hover:row-end-6"],
                [7, "xl:hover:row-end-7"],
                [8, "xl:hover:row-end-8"],
                [9, "xl:hover:row-end-9"],
                [10, "xl:hover:row-end-10"],
                [11, "xl:hover:row-end-11"],
                [12, "xl:hover:row-end-12"],
                [13, "xl:hover:row-end-13"],
                ["auto", "xl:hover:row-end-auto"],
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
                [1, "xs:row-end-1"],
                [2, "xs:row-end-2"],
                [3, "xs:row-end-3"],
                [4, "xs:row-end-4"],
                [5, "xs:row-end-5"],
                [6, "xs:row-end-6"],
                [7, "xs:row-end-7"],
                [8, "xs:row-end-8"],
                [9, "xs:row-end-9"],
                [10, "xs:row-end-10"],
                [11, "xs:row-end-11"],
                [12, "xs:row-end-12"],
                [13, "xs:row-end-13"],
                ["auto", "xs:row-end-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:row-end-1"],
                [2, "sm:row-end-2"],
                [3, "sm:row-end-3"],
                [4, "sm:row-end-4"],
                [5, "sm:row-end-5"],
                [6, "sm:row-end-6"],
                [7, "sm:row-end-7"],
                [8, "sm:row-end-8"],
                [9, "sm:row-end-9"],
                [10, "sm:row-end-10"],
                [11, "sm:row-end-11"],
                [12, "sm:row-end-12"],
                [13, "sm:row-end-13"],
                ["auto", "sm:row-end-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:row-end-1"],
                [2, "md:row-end-2"],
                [3, "md:row-end-3"],
                [4, "md:row-end-4"],
                [5, "md:row-end-5"],
                [6, "md:row-end-6"],
                [7, "md:row-end-7"],
                [8, "md:row-end-8"],
                [9, "md:row-end-9"],
                [10, "md:row-end-10"],
                [11, "md:row-end-11"],
                [12, "md:row-end-12"],
                [13, "md:row-end-13"],
                ["auto", "md:row-end-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:row-end-1"],
                [2, "lg:row-end-2"],
                [3, "lg:row-end-3"],
                [4, "lg:row-end-4"],
                [5, "lg:row-end-5"],
                [6, "lg:row-end-6"],
                [7, "lg:row-end-7"],
                [8, "lg:row-end-8"],
                [9, "lg:row-end-9"],
                [10, "lg:row-end-10"],
                [11, "lg:row-end-11"],
                [12, "lg:row-end-12"],
                [13, "lg:row-end-13"],
                ["auto", "lg:row-end-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:row-end-1"],
                [2, "xl:row-end-2"],
                [3, "xl:row-end-3"],
                [4, "xl:row-end-4"],
                [5, "xl:row-end-5"],
                [6, "xl:row-end-6"],
                [7, "xl:row-end-7"],
                [8, "xl:row-end-8"],
                [9, "xl:row-end-9"],
                [10, "xl:row-end-10"],
                [11, "xl:row-end-11"],
                [12, "xl:row-end-12"],
                [13, "xl:row-end-13"],
                ["auto", "xl:row-end-auto"],
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
                [1, "xs:open:row-end-1"],
                [2, "xs:open:row-end-2"],
                [3, "xs:open:row-end-3"],
                [4, "xs:open:row-end-4"],
                [5, "xs:open:row-end-5"],
                [6, "xs:open:row-end-6"],
                [7, "xs:open:row-end-7"],
                [8, "xs:open:row-end-8"],
                [9, "xs:open:row-end-9"],
                [10, "xs:open:row-end-10"],
                [11, "xs:open:row-end-11"],
                [12, "xs:open:row-end-12"],
                [13, "xs:open:row-end-13"],
                ["auto", "xs:open:row-end-auto"],
              ]),
            ],
            [
              "sm",
              new Map<GridStartEnd, string>([
                [1, "sm:open:row-end-1"],
                [2, "sm:open:row-end-2"],
                [3, "sm:open:row-end-3"],
                [4, "sm:open:row-end-4"],
                [5, "sm:open:row-end-5"],
                [6, "sm:open:row-end-6"],
                [7, "sm:open:row-end-7"],
                [8, "sm:open:row-end-8"],
                [9, "sm:open:row-end-9"],
                [10, "sm:open:row-end-10"],
                [11, "sm:open:row-end-11"],
                [12, "sm:open:row-end-12"],
                [13, "sm:open:row-end-13"],
                ["auto", "sm:open:row-end-auto"],
              ]),
            ],
            [
              "md",
              new Map<GridStartEnd, string>([
                [1, "md:open:row-end-1"],
                [2, "md:open:row-end-2"],
                [3, "md:open:row-end-3"],
                [4, "md:open:row-end-4"],
                [5, "md:open:row-end-5"],
                [6, "md:open:row-end-6"],
                [7, "md:open:row-end-7"],
                [8, "md:open:row-end-8"],
                [9, "md:open:row-end-9"],
                [10, "md:open:row-end-10"],
                [11, "md:open:row-end-11"],
                [12, "md:open:row-end-12"],
                [13, "md:open:row-end-13"],
                ["auto", "md:open:row-end-auto"],
              ]),
            ],
            [
              "lg",
              new Map<GridStartEnd, string>([
                [1, "lg:open:row-end-1"],
                [2, "lg:open:row-end-2"],
                [3, "lg:open:row-end-3"],
                [4, "lg:open:row-end-4"],
                [5, "lg:open:row-end-5"],
                [6, "lg:open:row-end-6"],
                [7, "lg:open:row-end-7"],
                [8, "lg:open:row-end-8"],
                [9, "lg:open:row-end-9"],
                [10, "lg:open:row-end-10"],
                [11, "lg:open:row-end-11"],
                [12, "lg:open:row-end-12"],
                [13, "lg:open:row-end-13"],
                ["auto", "lg:open:row-end-auto"],
              ]),
            ],
            [
              "xl",
              new Map<GridStartEnd, string>([
                [1, "xl:open:row-end-1"],
                [2, "xl:open:row-end-2"],
                [3, "xl:open:row-end-3"],
                [4, "xl:open:row-end-4"],
                [5, "xl:open:row-end-5"],
                [6, "xl:open:row-end-6"],
                [7, "xl:open:row-end-7"],
                [8, "xl:open:row-end-8"],
                [9, "xl:open:row-end-9"],
                [10, "xl:open:row-end-10"],
                [11, "xl:open:row-end-11"],
                [12, "xl:open:row-end-12"],
                [13, "xl:open:row-end-13"],
                ["auto", "xl:open:row-end-auto"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
