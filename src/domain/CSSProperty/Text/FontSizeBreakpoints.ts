import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexFontSize } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class FontSizeBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<FlexFontSize, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<FlexFontSize, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new FontSizeClassesMapping();
    return new FontSizeBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, size: FlexFontSize) {
    return this.getClassName(breakpoint, size);
  }
}

class FontSizeClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexFontSize, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexFontSize, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<FlexFontSize, string>
    >(
      "xs",
      new Map<FlexFontSize, string>([
        ["base", "xs:text-base"],
        ["xs", "xs:text-xs"],
        ["sm", "xs:text-sm"],
        ["lg", "xs:text-lg"],
        ["xl", "xs:text-xl"],
        ["2xl", "xs:text-2xl"],
        ["3xl", "xs:text-3xl"],
        ["4xl", "xs:text-4xl"],
        ["5xl", "xs:text-5xl"],
        ["6xl", "xs:text-6xl"],
        ["7xl", "xs:text-7xl"],
        ["8xl", "xs:text-8xl"],
        ["9xl", "xs:text-9xl"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexFontSize, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexFontSize, string>>([
            [
              "xs",
              new Map<FlexFontSize, string>([
                ["base", "xs:active:text-base"],
                ["xs", "xs:active:text-xs"],
                ["sm", "xs:active:text-sm"],
                ["lg", "xs:active:text-lg"],
                ["xl", "xs:active:text-xl"],
                ["2xl", "xs:active:text-2xl"],
                ["3xl", "xs:active:text-3xl"],
                ["4xl", "xs:active:text-4xl"],
                ["5xl", "xs:active:text-5xl"],
                ["6xl", "xs:active:text-6xl"],
                ["7xl", "xs:active:text-7xl"],
                ["8xl", "xs:active:text-8xl"],
                ["9xl", "xs:active:text-9xl"],
              ]),
            ],

            [
              "sm",
              new Map<FlexFontSize, string>([
                ["base", "sm:active:text-base"],
                ["xs", "sm:active:text-xs"],
                ["sm", "sm:active:text-sm"],
                ["lg", "sm:active:text-lg"],
                ["xl", "sm:active:text-xl"],
                ["2xl", "sm:active:text-2xl"],
                ["3xl", "sm:active:text-3xl"],
                ["4xl", "sm:active:text-4xl"],
                ["5xl", "sm:active:text-5xl"],
                ["6xl", "sm:active:text-6xl"],
                ["7xl", "sm:active:text-7xl"],
                ["8xl", "sm:active:text-8xl"],
                ["9xl", "sm:active:text-9xl"],
              ]),
            ],
            [
              "md",
              new Map<FlexFontSize, string>([
                ["base", "md:active:text-base"],
                ["xs", "md:active:text-xs"],
                ["sm", "md:active:text-sm"],
                ["lg", "md:active:text-lg"],
                ["xl", "md:active:text-xl"],
                ["2xl", "md:active:text-2xl"],
                ["3xl", "md:active:text-3xl"],
                ["4xl", "md:active:text-4xl"],
                ["5xl", "md:active:text-5xl"],
                ["6xl", "md:active:text-6xl"],
                ["7xl", "md:active:text-7xl"],
                ["8xl", "md:active:text-8xl"],
                ["9xl", "md:active:text-9xl"],
              ]),
            ],
            [
              "lg",
              new Map<FlexFontSize, string>([
                ["base", "lg:active:text-base"],
                ["xs", "lg:active:text-xs"],
                ["sm", "lg:active:text-sm"],
                ["lg", "lg:active:text-lg"],
                ["xl", "lg:active:text-xl"],
                ["2xl", "lg:active:text-2xl"],
                ["3xl", "lg:active:text-3xl"],
                ["4xl", "lg:active:text-4xl"],
                ["5xl", "lg:active:text-5xl"],
                ["6xl", "lg:active:text-6xl"],
                ["7xl", "lg:active:text-7xl"],
                ["8xl", "lg:active:text-8xl"],
                ["9xl", "lg:active:text-9xl"],
              ]),
            ],
            [
              "xl",
              new Map<FlexFontSize, string>([
                ["base", "xl:active:text-base"],
                ["xs", "xl:active:text-xs"],
                ["sm", "xl:active:text-sm"],
                ["lg", "xl:active:text-lg"],
                ["xl", "xl:active:text-xl"],
                ["2xl", "xl:active:text-2xl"],
                ["3xl", "xl:active:text-3xl"],
                ["4xl", "xl:active:text-4xl"],
                ["5xl", "xl:active:text-5xl"],
                ["6xl", "xl:active:text-6xl"],
                ["7xl", "xl:active:text-7xl"],
                ["8xl", "xl:active:text-8xl"],
                ["9xl", "xl:active:text-9xl"],
              ]),
            ],
          ]),
        ],

        [
          "disabled",
          new Map<Breakpoints, Map<FlexFontSize, string>>([
            [
              "xs",
              new Map<FlexFontSize, string>([
                ["base", "xs:disabled:text-base"],
                ["xs", "xs:disabled:text-xs"],
                ["sm", "xs:disabled:text-sm"],
                ["lg", "xs:disabled:text-lg"],
                ["xl", "xs:disabled:text-xl"],
                ["2xl", "xs:disabled:text-2xl"],
                ["3xl", "xs:disabled:text-3xl"],
                ["4xl", "xs:disabled:text-4xl"],
                ["5xl", "xs:disabled:text-5xl"],
                ["6xl", "xs:disabled:text-6xl"],
                ["7xl", "xs:disabled:text-7xl"],
                ["8xl", "xs:disabled:text-8xl"],
                ["9xl", "xs:disabled:text-9xl"],
              ]),
            ],

            [
              "sm",
              new Map<FlexFontSize, string>([
                ["base", "sm:disabled:text-base"],
                ["xs", "sm:disabled:text-xs"],
                ["sm", "sm:disabled:text-sm"],
                ["lg", "sm:disabled:text-lg"],
                ["xl", "sm:disabled:text-xl"],
                ["2xl", "sm:disabled:text-2xl"],
                ["3xl", "sm:disabled:text-3xl"],
                ["4xl", "sm:disabled:text-4xl"],
                ["5xl", "sm:disabled:text-5xl"],
                ["6xl", "sm:disabled:text-6xl"],
                ["7xl", "sm:disabled:text-7xl"],
                ["8xl", "sm:disabled:text-8xl"],
                ["9xl", "sm:disabled:text-9xl"],
              ]),
            ],
            [
              "md",
              new Map<FlexFontSize, string>([
                ["base", "md:disabled:text-base"],
                ["xs", "md:disabled:text-xs"],
                ["sm", "md:disabled:text-sm"],
                ["lg", "md:disabled:text-lg"],
                ["xl", "md:disabled:text-xl"],
                ["2xl", "md:disabled:text-2xl"],
                ["3xl", "md:disabled:text-3xl"],
                ["4xl", "md:disabled:text-4xl"],
                ["5xl", "md:disabled:text-5xl"],
                ["6xl", "md:disabled:text-6xl"],
                ["7xl", "md:disabled:text-7xl"],
                ["8xl", "md:disabled:text-8xl"],
                ["9xl", "md:disabled:text-9xl"],
              ]),
            ],
            [
              "lg",
              new Map<FlexFontSize, string>([
                ["base", "lg:disabled:text-base"],
                ["xs", "lg:disabled:text-xs"],
                ["sm", "lg:disabled:text-sm"],
                ["lg", "lg:disabled:text-lg"],
                ["xl", "lg:disabled:text-xl"],
                ["2xl", "lg:disabled:text-2xl"],
                ["3xl", "lg:disabled:text-3xl"],
                ["4xl", "lg:disabled:text-4xl"],
                ["5xl", "lg:disabled:text-5xl"],
                ["6xl", "lg:disabled:text-6xl"],
                ["7xl", "lg:disabled:text-7xl"],
                ["8xl", "lg:disabled:text-8xl"],
                ["9xl", "lg:disabled:text-9xl"],
              ]),
            ],
            [
              "xl",
              new Map<FlexFontSize, string>([
                ["base", "xl:disabled:text-base"],
                ["xs", "xl:disabled:text-xs"],
                ["sm", "xl:disabled:text-sm"],
                ["lg", "xl:disabled:text-lg"],
                ["xl", "xl:disabled:text-xl"],
                ["2xl", "xl:disabled:text-2xl"],
                ["3xl", "xl:disabled:text-3xl"],
                ["4xl", "xl:disabled:text-4xl"],
                ["5xl", "xl:disabled:text-5xl"],
                ["6xl", "xl:disabled:text-6xl"],
                ["7xl", "xl:disabled:text-7xl"],
                ["8xl", "xl:disabled:text-8xl"],
                ["9xl", "xl:disabled:text-9xl"],
              ]),
            ],
          ]),
        ],

        [
          "hover",
          new Map<Breakpoints, Map<FlexFontSize, string>>([
            [
              "xs",
              new Map<FlexFontSize, string>([
                ["base", "xs:hover:text-base"],
                ["xs", "xs:hover:text-xs"],
                ["sm", "xs:hover:text-sm"],
                ["lg", "xs:hover:text-lg"],
                ["xl", "xs:hover:text-xl"],
                ["2xl", "xs:hover:text-2xl"],
                ["3xl", "xs:hover:text-3xl"],
                ["4xl", "xs:hover:text-4xl"],
                ["5xl", "xs:hover:text-5xl"],
                ["6xl", "xs:hover:text-6xl"],
                ["7xl", "xs:hover:text-7xl"],
                ["8xl", "xs:hover:text-8xl"],
                ["9xl", "xs:hover:text-9xl"],
              ]),
            ],

            [
              "sm",
              new Map<FlexFontSize, string>([
                ["base", "sm:hover:text-base"],
                ["xs", "sm:hover:text-xs"],
                ["sm", "sm:hover:text-sm"],
                ["lg", "sm:hover:text-lg"],
                ["xl", "sm:hover:text-xl"],
                ["2xl", "sm:hover:text-2xl"],
                ["3xl", "sm:hover:text-3xl"],
                ["4xl", "sm:hover:text-4xl"],
                ["5xl", "sm:hover:text-5xl"],
                ["6xl", "sm:hover:text-6xl"],
                ["7xl", "sm:hover:text-7xl"],
                ["8xl", "sm:hover:text-8xl"],
                ["9xl", "sm:hover:text-9xl"],
              ]),
            ],
            [
              "md",
              new Map<FlexFontSize, string>([
                ["base", "md:hover:text-base"],
                ["xs", "md:hover:text-xs"],
                ["sm", "md:hover:text-sm"],
                ["lg", "md:hover:text-lg"],
                ["xl", "md:hover:text-xl"],
                ["2xl", "md:hover:text-2xl"],
                ["3xl", "md:hover:text-3xl"],
                ["4xl", "md:hover:text-4xl"],
                ["5xl", "md:hover:text-5xl"],
                ["6xl", "md:hover:text-6xl"],
                ["7xl", "md:hover:text-7xl"],
                ["8xl", "md:hover:text-8xl"],
                ["9xl", "md:hover:text-9xl"],
              ]),
            ],
            [
              "lg",
              new Map<FlexFontSize, string>([
                ["base", "lg:hover:text-base"],
                ["xs", "lg:hover:text-xs"],
                ["sm", "lg:hover:text-sm"],
                ["lg", "lg:hover:text-lg"],
                ["xl", "lg:hover:text-xl"],
                ["2xl", "lg:hover:text-2xl"],
                ["3xl", "lg:hover:text-3xl"],
                ["4xl", "lg:hover:text-4xl"],
                ["5xl", "lg:hover:text-5xl"],
                ["6xl", "lg:hover:text-6xl"],
                ["7xl", "lg:hover:text-7xl"],
                ["8xl", "lg:hover:text-8xl"],
                ["9xl", "lg:hover:text-9xl"],
              ]),
            ],
            [
              "xl",
              new Map<FlexFontSize, string>([
                ["base", "xl:hover:text-base"],
                ["xs", "xl:hover:text-xs"],
                ["sm", "xl:hover:text-sm"],
                ["lg", "xl:hover:text-lg"],
                ["xl", "xl:hover:text-xl"],
                ["2xl", "xl:hover:text-2xl"],
                ["3xl", "xl:hover:text-3xl"],
                ["4xl", "xl:hover:text-4xl"],
                ["5xl", "xl:hover:text-5xl"],
                ["6xl", "xl:hover:text-6xl"],
                ["7xl", "xl:hover:text-7xl"],
                ["8xl", "xl:hover:text-8xl"],
                ["9xl", "xl:hover:text-9xl"],
              ]),
            ],
          ]),
        ],

        [
          "none",
          new Map<Breakpoints, Map<FlexFontSize, string>>([
            [
              "xs",
              new Map<FlexFontSize, string>([
                ["base", "xs:text-base"],
                ["xs", "xs:text-xs"],
                ["sm", "xs:text-sm"],
                ["lg", "xs:text-lg"],
                ["xl", "xs:text-xl"],
                ["2xl", "xs:text-2xl"],
                ["3xl", "xs:text-3xl"],
                ["4xl", "xs:text-4xl"],
                ["5xl", "xs:text-5xl"],
                ["6xl", "xs:text-6xl"],
                ["7xl", "xs:text-7xl"],
                ["8xl", "xs:text-8xl"],
                ["9xl", "xs:text-9xl"],
              ]),
            ],

            [
              "sm",
              new Map<FlexFontSize, string>([
                ["base", "sm:text-base"],
                ["xs", "sm:text-xs"],
                ["sm", "sm:text-sm"],
                ["lg", "sm:text-lg"],
                ["xl", "sm:text-xl"],
                ["2xl", "sm:text-2xl"],
                ["3xl", "sm:text-3xl"],
                ["4xl", "sm:text-4xl"],
                ["5xl", "sm:text-5xl"],
                ["6xl", "sm:text-6xl"],
                ["7xl", "sm:text-7xl"],
                ["8xl", "sm:text-8xl"],
                ["9xl", "sm:text-9xl"],
              ]),
            ],
            [
              "md",
              new Map<FlexFontSize, string>([
                ["base", "md:text-base"],
                ["xs", "md:text-xs"],
                ["sm", "md:text-sm"],
                ["lg", "md:text-lg"],
                ["xl", "md:text-xl"],
                ["2xl", "md:text-2xl"],
                ["3xl", "md:text-3xl"],
                ["4xl", "md:text-4xl"],
                ["5xl", "md:text-5xl"],
                ["6xl", "md:text-6xl"],
                ["7xl", "md:text-7xl"],
                ["8xl", "md:text-8xl"],
                ["9xl", "md:text-9xl"],
              ]),
            ],
            [
              "lg",
              new Map<FlexFontSize, string>([
                ["base", "lg:text-base"],
                ["xs", "lg:text-xs"],
                ["sm", "lg:text-sm"],
                ["lg", "lg:text-lg"],
                ["xl", "lg:text-xl"],
                ["2xl", "lg:text-2xl"],
                ["3xl", "lg:text-3xl"],
                ["4xl", "lg:text-4xl"],
                ["5xl", "lg:text-5xl"],
                ["6xl", "lg:text-6xl"],
                ["7xl", "lg:text-7xl"],
                ["8xl", "lg:text-8xl"],
                ["9xl", "lg:text-9xl"],
              ]),
            ],
            [
              "xl",
              new Map<FlexFontSize, string>([
                ["base", "xl:text-base"],
                ["xs", "xl:text-xs"],
                ["sm", "xl:text-sm"],
                ["lg", "xl:text-lg"],
                ["xl", "xl:text-xl"],
                ["2xl", "xl:text-2xl"],
                ["3xl", "xl:text-3xl"],
                ["4xl", "xl:text-4xl"],
                ["5xl", "xl:text-5xl"],
                ["6xl", "xl:text-6xl"],
                ["7xl", "xl:text-7xl"],
                ["8xl", "xl:text-8xl"],
                ["9xl", "xl:text-9xl"],
              ]),
            ],
          ]),
        ],

        [
          "open",
          new Map<Breakpoints, Map<FlexFontSize, string>>([
            [
              "xs",
              new Map<FlexFontSize, string>([
                ["base", "xs:open:text-base"],
                ["xs", "xs:open:text-xs"],
                ["sm", "xs:open:text-sm"],
                ["lg", "xs:open:text-lg"],
                ["xl", "xs:open:text-xl"],
                ["2xl", "xs:open:text-2xl"],
                ["3xl", "xs:open:text-3xl"],
                ["4xl", "xs:open:text-4xl"],
                ["5xl", "xs:open:text-5xl"],
                ["6xl", "xs:open:text-6xl"],
                ["7xl", "xs:open:text-7xl"],
                ["8xl", "xs:open:text-8xl"],
                ["9xl", "xs:open:text-9xl"],
              ]),
            ],

            [
              "sm",
              new Map<FlexFontSize, string>([
                ["base", "sm:open:text-base"],
                ["xs", "sm:open:text-xs"],
                ["sm", "sm:open:text-sm"],
                ["lg", "sm:open:text-lg"],
                ["xl", "sm:open:text-xl"],
                ["2xl", "sm:open:text-2xl"],
                ["3xl", "sm:open:text-3xl"],
                ["4xl", "sm:open:text-4xl"],
                ["5xl", "sm:open:text-5xl"],
                ["6xl", "sm:open:text-6xl"],
                ["7xl", "sm:open:text-7xl"],
                ["8xl", "sm:open:text-8xl"],
                ["9xl", "sm:open:text-9xl"],
              ]),
            ],
            [
              "md",
              new Map<FlexFontSize, string>([
                ["base", "md:open:text-base"],
                ["xs", "md:open:text-xs"],
                ["sm", "md:open:text-sm"],
                ["lg", "md:open:text-lg"],
                ["xl", "md:open:text-xl"],
                ["2xl", "md:open:text-2xl"],
                ["3xl", "md:open:text-3xl"],
                ["4xl", "md:open:text-4xl"],
                ["5xl", "md:open:text-5xl"],
                ["6xl", "md:open:text-6xl"],
                ["7xl", "md:open:text-7xl"],
                ["8xl", "md:open:text-8xl"],
                ["9xl", "md:open:text-9xl"],
              ]),
            ],
            [
              "lg",
              new Map<FlexFontSize, string>([
                ["base", "lg:open:text-base"],
                ["xs", "lg:open:text-xs"],
                ["sm", "lg:open:text-sm"],
                ["lg", "lg:open:text-lg"],
                ["xl", "lg:open:text-xl"],
                ["2xl", "lg:open:text-2xl"],
                ["3xl", "lg:open:text-3xl"],
                ["4xl", "lg:open:text-4xl"],
                ["5xl", "lg:open:text-5xl"],
                ["6xl", "lg:open:text-6xl"],
                ["7xl", "lg:open:text-7xl"],
                ["8xl", "lg:open:text-8xl"],
                ["9xl", "lg:open:text-9xl"],
              ]),
            ],
            [
              "xl",
              new Map<FlexFontSize, string>([
                ["base", "xl:open:text-base"],
                ["xs", "xl:open:text-xs"],
                ["sm", "xl:open:text-sm"],
                ["lg", "xl:open:text-lg"],
                ["xl", "xl:open:text-xl"],
                ["2xl", "xl:open:text-2xl"],
                ["3xl", "xl:open:text-3xl"],
                ["4xl", "xl:open:text-4xl"],
                ["5xl", "xl:open:text-5xl"],
                ["6xl", "xl:open:text-6xl"],
                ["7xl", "xl:open:text-7xl"],
                ["8xl", "xl:open:text-8xl"],
                ["9xl", "xl:open:text-9xl"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
