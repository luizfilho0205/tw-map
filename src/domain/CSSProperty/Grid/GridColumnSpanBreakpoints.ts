import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, GridSpan } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class GridColumnSpanBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<GridSpan, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<GridSpan, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new GridColumnClassesMapping();
    return new GridColumnSpanBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, template: GridSpan) {
    return this.getClassName(breakpoint, template);
  }
}

class GridColumnClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<GridSpan, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<GridSpan, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<Breakpoints, Map<GridSpan, string>>(
      "xs",
      new Map<GridSpan, string>([
        [1, "xs:hover:col-span-1"],
        [2, "xs:col-span-2"],
        [3, "xs:col-span-3"],
        [4, "xs:col-span-4"],
        [5, "xs:col-span-5"],
        [6, "xs:col-span-6"],
        [7, "xs:col-span-7"],
        [8, "xs:col-span-8"],
        [9, "xs:col-span-9"],
        [10, "xs:col-span-10"],
        [11, "xs:col-span-11"],
        [12, "xs:col-span-12"],
        ["auto", "xs:col-auto"],
        ["full", "xs:col-span-full"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<GridSpan, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<GridSpan, string>>([
            [
              "xs",
              new Map<GridSpan, string>([
                [1, "xs:active:col-span-1"],
                [2, "xs:active:col-span-2"],
                [3, "xs:active:col-span-3"],
                [4, "xs:active:col-span-4"],
                [5, "xs:active:col-span-5"],
                [6, "xs:active:col-span-6"],
                [7, "xs:active:col-span-7"],
                [8, "xs:active:col-span-8"],
                [9, "xs:active:col-span-9"],
                [10, "xs:active:col-span-10"],
                [11, "xs:active:col-span-11"],
                [12, "xs:active:col-span-12"],
                ["auto", "xs:active:col-auto"],
                ["full", "xs:active:col-span-full"],
              ]),
            ],
            [
              "sm",
              new Map<GridSpan, string>([
                [1, "sm:active:col-span-1"],
                [2, "sm:active:col-span-2"],
                [3, "sm:active:col-span-3"],
                [4, "sm:active:col-span-4"],
                [5, "sm:active:col-span-5"],
                [6, "sm:active:col-span-6"],
                [7, "sm:active:col-span-7"],
                [8, "sm:active:col-span-8"],
                [9, "sm:active:col-span-9"],
                [10, "sm:active:col-span-10"],
                [11, "sm:active:col-span-11"],
                [12, "sm:active:col-span-12"],
                ["auto", "sm:active:col-auto"],
                ["full", "sm:active:col-span-full"],
              ]),
            ],
            [
              "md",
              new Map<GridSpan, string>([
                [1, "md:active:col-span-1"],
                [2, "md:active:col-span-2"],
                [3, "md:active:col-span-3"],
                [4, "md:active:col-span-4"],
                [5, "md:active:col-span-5"],
                [6, "md:active:col-span-6"],
                [7, "md:active:col-span-7"],
                [8, "md:active:col-span-8"],
                [9, "md:active:col-span-9"],
                [10, "md:active:col-span-10"],
                [11, "md:active:col-span-11"],
                [12, "md:active:col-span-12"],
                ["auto", "md:active:col-auto"],
                ["full", "md:active:col-span-full"],
              ]),
            ],
            [
              "lg",
              new Map<GridSpan, string>([
                [1, "lg:active:col-span-1"],
                [2, "lg:active:col-span-2"],
                [3, "lg:active:col-span-3"],
                [4, "lg:active:col-span-4"],
                [5, "lg:active:col-span-5"],
                [6, "lg:active:col-span-6"],
                [7, "lg:active:col-span-7"],
                [8, "lg:active:col-span-8"],
                [9, "lg:active:col-span-9"],
                [10, "lg:active:col-span-10"],
                [11, "lg:active:col-span-11"],
                [12, "lg:active:col-span-12"],
                ["auto", "lg:active:col-auto"],
                ["full", "lg:active:col-span-full"],
              ]),
            ],
            [
              "xl",
              new Map<GridSpan, string>([
                [1, "xl:active:col-span-1"],
                [2, "xl:active:col-span-2"],
                [3, "xl:active:col-span-3"],
                [4, "xl:active:col-span-4"],
                [5, "xl:active:col-span-5"],
                [6, "xl:active:col-span-6"],
                [7, "xl:active:col-span-7"],
                [8, "xl:active:col-span-8"],
                [9, "xl:active:col-span-9"],
                [10, "xl:active:col-span-10"],
                [11, "xl:active:col-span-11"],
                [12, "xl:active:col-span-12"],
                ["auto", "xl:active:col-auto"],
                ["full", "xl:active:col-span-full"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<GridSpan, string>>([
            [
              "xs",
              new Map<GridSpan, string>([
                [1, "xs:disabled:col-span-1"],
                [2, "xs:disabled:col-span-2"],
                [3, "xs:disabled:col-span-3"],
                [4, "xs:disabled:col-span-4"],
                [5, "xs:disabled:col-span-5"],
                [6, "xs:disabled:col-span-6"],
                [7, "xs:disabled:col-span-7"],
                [8, "xs:disabled:col-span-8"],
                [9, "xs:disabled:col-span-9"],
                [10, "xs:disabled:col-span-10"],
                [11, "xs:disabled:col-span-11"],
                [12, "xs:disabled:col-span-12"],
                ["auto", "xs:disabled:col-auto"],
                ["full", "xs:disabled:col-span-full"],
              ]),
            ],
            [
              "sm",
              new Map<GridSpan, string>([
                [1, "sm:disabled:col-span-1"],
                [2, "sm:disabled:col-span-2"],
                [3, "sm:disabled:col-span-3"],
                [4, "sm:disabled:col-span-4"],
                [5, "sm:disabled:col-span-5"],
                [6, "sm:disabled:col-span-6"],
                [7, "sm:disabled:col-span-7"],
                [8, "sm:disabled:col-span-8"],
                [9, "sm:disabled:col-span-9"],
                [10, "sm:disabled:col-span-10"],
                [11, "sm:disabled:col-span-11"],
                [12, "sm:disabled:col-span-12"],
                ["auto", "sm:disabled:col-auto"],
                ["full", "sm:disabled:col-span-full"],
              ]),
            ],
            [
              "md",
              new Map<GridSpan, string>([
                [1, "md:disabled:col-span-1"],
                [2, "md:disabled:col-span-2"],
                [3, "md:disabled:col-span-3"],
                [4, "md:disabled:col-span-4"],
                [5, "md:disabled:col-span-5"],
                [6, "md:disabled:col-span-6"],
                [7, "md:disabled:col-span-7"],
                [8, "md:disabled:col-span-8"],
                [9, "md:disabled:col-span-9"],
                [10, "md:disabled:col-span-10"],
                [11, "md:disabled:col-span-11"],
                [12, "md:disabled:col-span-12"],
                ["auto", "md:disabled:col-auto"],
                ["full", "md:disabled:col-span-full"],
              ]),
            ],
            [
              "lg",
              new Map<GridSpan, string>([
                [1, "lg:disabled:col-span-1"],
                [2, "lg:disabled:col-span-2"],
                [3, "lg:disabled:col-span-3"],
                [4, "lg:disabled:col-span-4"],
                [5, "lg:disabled:col-span-5"],
                [6, "lg:disabled:col-span-6"],
                [7, "lg:disabled:col-span-7"],
                [8, "lg:disabled:col-span-8"],
                [9, "lg:disabled:col-span-9"],
                [10, "lg:disabled:col-span-10"],
                [11, "lg:disabled:col-span-11"],
                [12, "lg:disabled:col-span-12"],
                ["auto", "lg:disabled:col-auto"],
                ["full", "lg:disabled:col-span-full"],
              ]),
            ],
            [
              "xl",
              new Map<GridSpan, string>([
                [1, "xl:disabled:col-span-1"],
                [2, "xl:disabled:col-span-2"],
                [3, "xl:disabled:col-span-3"],
                [4, "xl:disabled:col-span-4"],
                [5, "xl:disabled:col-span-5"],
                [6, "xl:disabled:col-span-6"],
                [7, "xl:disabled:col-span-7"],
                [8, "xl:disabled:col-span-8"],
                [9, "xl:disabled:col-span-9"],
                [10, "xl:disabled:col-span-10"],
                [11, "xl:disabled:col-span-11"],
                [12, "xl:disabled:col-span-12"],
                ["auto", "xl:disabled:col-auto"],
                ["full", "xl:disabled:col-span-full"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<GridSpan, string>>([
            [
              "xs",
              new Map<GridSpan, string>([
                [1, "xs:hover:col-span-1"],
                [2, "xs:hover:col-span-2"],
                [3, "xs:hover:col-span-3"],
                [4, "xs:hover:col-span-4"],
                [5, "xs:hover:col-span-5"],
                [6, "xs:hover:col-span-6"],
                [7, "xs:hover:col-span-7"],
                [8, "xs:hover:col-span-8"],
                [9, "xs:hover:col-span-9"],
                [10, "xs:hover:col-span-10"],
                [11, "xs:hover:col-span-11"],
                [12, "xs:hover:col-span-12"],
                ["auto", "xs:hover:col-auto"],
                ["full", "xs:hover:col-span-full"],
              ]),
            ],
            [
              "sm",
              new Map<GridSpan, string>([
                [1, "sm:hover:col-span-1"],
                [2, "sm:hover:col-span-2"],
                [3, "sm:hover:col-span-3"],
                [4, "sm:hover:col-span-4"],
                [5, "sm:hover:col-span-5"],
                [6, "sm:hover:col-span-6"],
                [7, "sm:hover:col-span-7"],
                [8, "sm:hover:col-span-8"],
                [9, "sm:hover:col-span-9"],
                [10, "sm:hover:col-span-10"],
                [11, "sm:hover:col-span-11"],
                [12, "sm:hover:col-span-12"],
                ["auto", "sm:hover:col-auto"],
                ["full", "sm:hover:col-span-full"],
              ]),
            ],
            [
              "md",
              new Map<GridSpan, string>([
                [1, "md:hover:col-span-1"],
                [2, "md:hover:col-span-2"],
                [3, "md:hover:col-span-3"],
                [4, "md:hover:col-span-4"],
                [5, "md:hover:col-span-5"],
                [6, "md:hover:col-span-6"],
                [7, "md:hover:col-span-7"],
                [8, "md:hover:col-span-8"],
                [9, "md:hover:col-span-9"],
                [10, "md:hover:col-span-10"],
                [11, "md:hover:col-span-11"],
                [12, "md:hover:col-span-12"],
                ["auto", "md:hover:col-auto"],
                ["full", "md:hover:col-span-full"],
              ]),
            ],
            [
              "lg",
              new Map<GridSpan, string>([
                [1, "lg:hover:col-span-1"],
                [2, "lg:hover:col-span-2"],
                [3, "lg:hover:col-span-3"],
                [4, "lg:hover:col-span-4"],
                [5, "lg:hover:col-span-5"],
                [6, "lg:hover:col-span-6"],
                [7, "lg:hover:col-span-7"],
                [8, "lg:hover:col-span-8"],
                [9, "lg:hover:col-span-9"],
                [10, "lg:hover:col-span-10"],
                [11, "lg:hover:col-span-11"],
                [12, "lg:hover:col-span-12"],
                ["auto", "lg:hover:col-auto"],
                ["full", "lg:hover:col-span-full"],
              ]),
            ],
            [
              "xl",
              new Map<GridSpan, string>([
                [1, "xl:hover:col-span-1"],
                [2, "xl:hover:col-span-2"],
                [3, "xl:hover:col-span-3"],
                [4, "xl:hover:col-span-4"],
                [5, "xl:hover:col-span-5"],
                [6, "xl:hover:col-span-6"],
                [7, "xl:hover:col-span-7"],
                [8, "xl:hover:col-span-8"],
                [9, "xl:hover:col-span-9"],
                [10, "xl:hover:col-span-10"],
                [11, "xl:hover:col-span-11"],
                [12, "xl:hover:col-span-12"],
                ["auto", "xl:hover:col-auto"],
                ["full", "xl:hover:col-span-full"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<GridSpan, string>>([
            [
              "xs",
              new Map<GridSpan, string>([
                [1, "xs:col-span-1"],
                [2, "xs:col-span-2"],
                [3, "xs:col-span-3"],
                [4, "xs:col-span-4"],
                [5, "xs:col-span-5"],
                [6, "xs:col-span-6"],
                [7, "xs:col-span-7"],
                [8, "xs:col-span-8"],
                [9, "xs:col-span-9"],
                [10, "xs:col-span-10"],
                [11, "xs:col-span-11"],
                [12, "xs:col-span-12"],
                ["auto", "xs:col-auto"],
                ["full", "xs:col-span-full"],
              ]),
            ],
            [
              "sm",
              new Map<GridSpan, string>([
                [1, "sm:col-span-1"],
                [2, "sm:col-span-2"],
                [3, "sm:col-span-3"],
                [4, "sm:col-span-4"],
                [5, "sm:col-span-5"],
                [6, "sm:col-span-6"],
                [7, "sm:col-span-7"],
                [8, "sm:col-span-8"],
                [9, "sm:col-span-9"],
                [10, "sm:col-span-10"],
                [11, "sm:col-span-11"],
                [12, "sm:col-span-12"],
                ["auto", "sm:col-auto"],
                ["full", "sm:col-span-full"],
              ]),
            ],
            [
              "md",
              new Map<GridSpan, string>([
                [1, "md:col-span-1"],
                [2, "md:col-span-2"],
                [3, "md:col-span-3"],
                [4, "md:col-span-4"],
                [5, "md:col-span-5"],
                [6, "md:col-span-6"],
                [7, "md:col-span-7"],
                [8, "md:col-span-8"],
                [9, "md:col-span-9"],
                [10, "md:col-span-10"],
                [11, "md:col-span-11"],
                [12, "md:col-span-12"],
                ["auto", "md:col-auto"],
                ["full", "md:col-span-full"],
              ]),
            ],
            [
              "lg",
              new Map<GridSpan, string>([
                [1, "lg:col-span-1"],
                [2, "lg:col-span-2"],
                [3, "lg:col-span-3"],
                [4, "lg:col-span-4"],
                [5, "lg:col-span-5"],
                [6, "lg:col-span-6"],
                [7, "lg:col-span-7"],
                [8, "lg:col-span-8"],
                [9, "lg:col-span-9"],
                [10, "lg:col-span-10"],
                [11, "lg:col-span-11"],
                [12, "lg:col-span-12"],
                ["auto", "lg:col-auto"],
                ["full", "lg:col-span-full"],
              ]),
            ],
            [
              "xl",
              new Map<GridSpan, string>([
                [1, "xl:col-span-1"],
                [2, "xl:col-span-2"],
                [3, "xl:col-span-3"],
                [4, "xl:col-span-4"],
                [5, "xl:col-span-5"],
                [6, "xl:col-span-6"],
                [7, "xl:col-span-7"],
                [8, "xl:col-span-8"],
                [9, "xl:col-span-9"],
                [10, "xl:col-span-10"],
                [11, "xl:col-span-11"],
                [12, "xl:col-span-12"],
                ["auto", "xl:col-auto"],
                ["full", "xl:col-span-full"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<GridSpan, string>>([
            [
              "xs",
              new Map<GridSpan, string>([
                [1, "xs:open:col-span-1"],
                [2, "xs:open:col-span-2"],
                [3, "xs:open:col-span-3"],
                [4, "xs:open:col-span-4"],
                [5, "xs:open:col-span-5"],
                [6, "xs:open:col-span-6"],
                [7, "xs:open:col-span-7"],
                [8, "xs:open:col-span-8"],
                [9, "xs:open:col-span-9"],
                [10, "xs:open:col-span-10"],
                [11, "xs:open:col-span-11"],
                [12, "xs:open:col-span-12"],
                ["auto", "xs:open:col-auto"],
                ["full", "xs:open:col-span-full"],
              ]),
            ],
            [
              "sm",
              new Map<GridSpan, string>([
                [1, "sm:open:col-span-1"],
                [2, "sm:open:col-span-2"],
                [3, "sm:open:col-span-3"],
                [4, "sm:open:col-span-4"],
                [5, "sm:open:col-span-5"],
                [6, "sm:open:col-span-6"],
                [7, "sm:open:col-span-7"],
                [8, "sm:open:col-span-8"],
                [9, "sm:open:col-span-9"],
                [10, "sm:open:col-span-10"],
                [11, "sm:open:col-span-11"],
                [12, "sm:open:col-span-12"],
                ["auto", "sm:open:col-auto"],
                ["full", "sm:open:col-span-full"],
              ]),
            ],
            [
              "md",
              new Map<GridSpan, string>([
                [1, "md:open:col-span-1"],
                [2, "md:open:col-span-2"],
                [3, "md:open:col-span-3"],
                [4, "md:open:col-span-4"],
                [5, "md:open:col-span-5"],
                [6, "md:open:col-span-6"],
                [7, "md:open:col-span-7"],
                [8, "md:open:col-span-8"],
                [9, "md:open:col-span-9"],
                [10, "md:open:col-span-10"],
                [11, "md:open:col-span-11"],
                [12, "md:open:col-span-12"],
                ["auto", "md:open:col-auto"],
                ["full", "md:open:col-span-full"],
              ]),
            ],
            [
              "lg",
              new Map<GridSpan, string>([
                [1, "lg:open:col-span-1"],
                [2, "lg:open:col-span-2"],
                [3, "lg:open:col-span-3"],
                [4, "lg:open:col-span-4"],
                [5, "lg:open:col-span-5"],
                [6, "lg:open:col-span-6"],
                [7, "lg:open:col-span-7"],
                [8, "lg:open:col-span-8"],
                [9, "lg:open:col-span-9"],
                [10, "lg:open:col-span-10"],
                [11, "lg:open:col-span-11"],
                [12, "lg:open:col-span-12"],
                ["auto", "lg:open:col-auto"],
                ["full", "lg:open:col-span-full"],
              ]),
            ],
            [
              "xl",
              new Map<GridSpan, string>([
                [1, "xl:open:col-span-1"],
                [2, "xl:open:col-span-2"],
                [3, "xl:open:col-span-3"],
                [4, "xl:open:col-span-4"],
                [5, "xl:open:col-span-5"],
                [6, "xl:open:col-span-6"],
                [7, "xl:open:col-span-7"],
                [8, "xl:open:col-span-8"],
                [9, "xl:open:col-span-9"],
                [10, "xl:open:col-span-10"],
                [11, "xl:open:col-span-11"],
                [12, "xl:open:col-span-12"],
                ["auto", "xl:open:col-auto"],
                ["full", "xl:open:col-span-full"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
