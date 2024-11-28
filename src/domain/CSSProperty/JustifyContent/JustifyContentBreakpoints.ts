import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexJustifyContent } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class JustifyContentBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<FlexJustifyContent, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<FlexJustifyContent, string>>
    >,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new JustifyContentClassesMapping();
    return new JustifyContentBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, spacing: FlexJustifyContent) {
    return this.getClassName(breakpoint, spacing);
  }
}

class JustifyContentClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexJustifyContent, string>>>
{
  private defaultValue: DefaultValue<
    Breakpoints,
    Map<FlexJustifyContent, string>
  >;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<FlexJustifyContent, string>
    >(
      "xs",
      new Map<FlexJustifyContent, string>([
        ["normal", "xs:justify-normal"],
        ["start", "xs:justify-start"],
        ["end", "xs:justify-end"],
        ["center", "xs:justify-center"],
        ["between", "xs:justify-between"],
        ["around", "xs:justify-around"],
        ["evenly", "xs:justify-evenly"],
        ["stretch", "xs:justify-stretch"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexJustifyContent, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexJustifyContent, string>>([
            [
              "xs",
              new Map<FlexJustifyContent, string>([
                ["normal", "xs:active:justify-normal"],
                ["start", "xs:active:justify-start"],
                ["end", "xs:active:justify-end"],
                ["center", "xs:active:justify-center"],
                ["between", "xs:active:justify-between"],
                ["around", "xs:active:justify-around"],
                ["evenly", "xs:active:justify-evenly"],
                ["stretch", "xs:active:justify-stretch"],
              ]),
            ],
            [
              "sm",
              new Map<FlexJustifyContent, string>([
                ["normal", "sm:active:justify-normal"],
                ["start", "sm:active:justify-start"],
                ["end", "sm:active:justify-end"],
                ["center", "sm:active:justify-center"],
                ["between", "sm:active:justify-between"],
                ["around", "sm:active:justify-around"],
                ["evenly", "sm:active:justify-evenly"],
                ["stretch", "sm:active:justify-stretch"],
              ]),
            ],
            [
              "md",
              new Map<FlexJustifyContent, string>([
                ["normal", "md:active:justify-normal"],
                ["start", "md:active:justify-start"],
                ["end", "md:active:justify-end"],
                ["center", "md:active:justify-center"],
                ["between", "md:active:justify-between"],
                ["around", "md:active:justify-around"],
                ["evenly", "md:active:justify-evenly"],
                ["stretch", "md:active:justify-stretch"],
              ]),
            ],
            [
              "lg",
              new Map<FlexJustifyContent, string>([
                ["normal", "lg:active:justify-normal"],
                ["start", "lg:active:justify-start"],
                ["end", "lg:active:justify-end"],
                ["center", "lg:active:justify-center"],
                ["between", "lg:active:justify-between"],
                ["around", "lg:active:justify-around"],
                ["evenly", "lg:active:justify-evenly"],
                ["stretch", "lg:active:justify-stretch"],
              ]),
            ],
            [
              "xl",
              new Map<FlexJustifyContent, string>([
                ["normal", "xl:active:justify-normal"],
                ["start", "xl:active:justify-start"],
                ["end", "xl:active:justify-end"],
                ["center", "xl:active:justify-center"],
                ["between", "xl:active:justify-between"],
                ["around", "xl:active:justify-around"],
                ["evenly", "xl:active:justify-evenly"],
                ["stretch", "xl:active:justify-stretch"],
              ]),
            ],
          ]),
        ],

        [
          "disabled",
          new Map<Breakpoints, Map<FlexJustifyContent, string>>([
            [
              "xs",
              new Map<FlexJustifyContent, string>([
                ["normal", "xs:disabled:justify-normal"],
                ["start", "xs:disabled:justify-start"],
                ["end", "xs:disabled:justify-end"],
                ["center", "xs:disabled:justify-center"],
                ["between", "xs:disabled:justify-between"],
                ["around", "xs:disabled:justify-around"],
                ["evenly", "xs:disabled:justify-evenly"],
                ["stretch", "xs:disabled:justify-stretch"],
              ]),
            ],
            [
              "sm",
              new Map<FlexJustifyContent, string>([
                ["normal", "sm:disabled:justify-normal"],
                ["start", "sm:disabled:justify-start"],
                ["end", "sm:disabled:justify-end"],
                ["center", "sm:disabled:justify-center"],
                ["between", "sm:disabled:justify-between"],
                ["around", "sm:disabled:justify-around"],
                ["evenly", "sm:disabled:justify-evenly"],
                ["stretch", "sm:disabled:justify-stretch"],
              ]),
            ],
            [
              "md",
              new Map<FlexJustifyContent, string>([
                ["normal", "md:disabled:justify-normal"],
                ["start", "md:disabled:justify-start"],
                ["end", "md:disabled:justify-end"],
                ["center", "md:disabled:justify-center"],
                ["between", "md:disabled:justify-between"],
                ["around", "md:disabled:justify-around"],
                ["evenly", "md:disabled:justify-evenly"],
                ["stretch", "md:disabled:justify-stretch"],
              ]),
            ],
            [
              "lg",
              new Map<FlexJustifyContent, string>([
                ["normal", "lg:disabled:justify-normal"],
                ["start", "lg:disabled:justify-start"],
                ["end", "lg:disabled:justify-end"],
                ["center", "lg:disabled:justify-center"],
                ["between", "lg:disabled:justify-between"],
                ["around", "lg:disabled:justify-around"],
                ["evenly", "lg:disabled:justify-evenly"],
                ["stretch", "lg:disabled:justify-stretch"],
              ]),
            ],
            [
              "xl",
              new Map<FlexJustifyContent, string>([
                ["normal", "xl:disabled:justify-normal"],
                ["start", "xl:disabled:justify-start"],
                ["end", "xl:disabled:justify-end"],
                ["center", "xl:disabled:justify-center"],
                ["between", "xl:disabled:justify-between"],
                ["around", "xl:disabled:justify-around"],
                ["evenly", "xl:disabled:justify-evenly"],
                ["stretch", "xl:disabled:justify-stretch"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexJustifyContent, string>>([
            [
              "xs",
              new Map<FlexJustifyContent, string>([
                ["normal", "xs:hover:justify-normal"],
                ["start", "xs:hover:justify-start"],
                ["end", "xs:hover:justify-end"],
                ["center", "xs:hover:justify-center"],
                ["between", "xs:hover:justify-between"],
                ["around", "xs:hover:justify-around"],
                ["evenly", "xs:hover:justify-evenly"],
                ["stretch", "xs:hover:justify-stretch"],
              ]),
            ],
            [
              "sm",
              new Map<FlexJustifyContent, string>([
                ["normal", "sm:hover:justify-normal"],
                ["start", "sm:hover:justify-start"],
                ["end", "sm:hover:justify-end"],
                ["center", "sm:hover:justify-center"],
                ["between", "sm:hover:justify-between"],
                ["around", "sm:hover:justify-around"],
                ["evenly", "sm:hover:justify-evenly"],
                ["stretch", "sm:hover:justify-stretch"],
              ]),
            ],
            [
              "md",
              new Map<FlexJustifyContent, string>([
                ["normal", "md:hover:justify-normal"],
                ["start", "md:hover:justify-start"],
                ["end", "md:hover:justify-end"],
                ["center", "md:hover:justify-center"],
                ["between", "md:hover:justify-between"],
                ["around", "md:hover:justify-around"],
                ["evenly", "md:hover:justify-evenly"],
                ["stretch", "md:hover:justify-stretch"],
              ]),
            ],
            [
              "lg",
              new Map<FlexJustifyContent, string>([
                ["normal", "lg:hover:justify-normal"],
                ["start", "lg:hover:justify-start"],
                ["end", "lg:hover:justify-end"],
                ["center", "lg:hover:justify-center"],
                ["between", "lg:hover:justify-between"],
                ["around", "lg:hover:justify-around"],
                ["evenly", "lg:hover:justify-evenly"],
                ["stretch", "lg:hover:justify-stretch"],
              ]),
            ],
            [
              "xl",
              new Map<FlexJustifyContent, string>([
                ["normal", "xl:hover:justify-normal"],
                ["start", "xl:hover:justify-start"],
                ["end", "xl:hover:justify-end"],
                ["center", "xl:hover:justify-center"],
                ["between", "xl:hover:justify-between"],
                ["around", "xl:hover:justify-around"],
                ["evenly", "xl:hover:justify-evenly"],
                ["stretch", "xl:hover:justify-stretch"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexJustifyContent, string>>([
            [
              "xs",
              new Map<FlexJustifyContent, string>([
                ["normal", "xs:justify-normal"],
                ["start", "xs:justify-start"],
                ["end", "xs:justify-end"],
                ["center", "xs:justify-center"],
                ["between", "xs:justify-between"],
                ["around", "xs:justify-around"],
                ["evenly", "xs:justify-evenly"],
                ["stretch", "xs:justify-stretch"],
              ]),
            ],
            [
              "sm",
              new Map<FlexJustifyContent, string>([
                ["normal", "sm:justify-normal"],
                ["start", "sm:justify-start"],
                ["end", "sm:justify-end"],
                ["center", "sm:justify-center"],
                ["between", "sm:justify-between"],
                ["around", "sm:justify-around"],
                ["evenly", "sm:justify-evenly"],
                ["stretch", "sm:justify-stretch"],
              ]),
            ],
            [
              "md",
              new Map<FlexJustifyContent, string>([
                ["normal", "md:justify-normal"],
                ["start", "md:justify-start"],
                ["end", "md:justify-end"],
                ["center", "md:justify-center"],
                ["between", "md:justify-between"],
                ["around", "md:justify-around"],
                ["evenly", "md:justify-evenly"],
                ["stretch", "md:justify-stretch"],
              ]),
            ],
            [
              "lg",
              new Map<FlexJustifyContent, string>([
                ["normal", "lg:justify-normal"],
                ["start", "lg:justify-start"],
                ["end", "lg:justify-end"],
                ["center", "lg:justify-center"],
                ["between", "lg:justify-between"],
                ["around", "lg:justify-around"],
                ["evenly", "lg:justify-evenly"],
                ["stretch", "lg:justify-stretch"],
              ]),
            ],
            [
              "xl",
              new Map<FlexJustifyContent, string>([
                ["normal", "xl:justify-normal"],
                ["start", "xl:justify-start"],
                ["end", "xl:justify-end"],
                ["center", "xl:justify-center"],
                ["between", "xl:justify-between"],
                ["around", "xl:justify-around"],
                ["evenly", "xl:justify-evenly"],
                ["stretch", "xl:justify-stretch"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexJustifyContent, string>>([
            [
              "xs",
              new Map<FlexJustifyContent, string>([
                ["normal", "xs:open:justify-normal"],
                ["start", "xs:open:justify-start"],
                ["end", "xs:open:justify-end"],
                ["center", "xs:open:justify-center"],
                ["between", "xs:open:justify-between"],
                ["around", "xs:open:justify-around"],
                ["evenly", "xs:open:justify-evenly"],
                ["stretch", "xs:open:justify-stretch"],
              ]),
            ],
            [
              "sm",
              new Map<FlexJustifyContent, string>([
                ["normal", "sm:open:justify-normal"],
                ["start", "sm:open:justify-start"],
                ["end", "sm:open:justify-end"],
                ["center", "sm:open:justify-center"],
                ["between", "sm:open:justify-between"],
                ["around", "sm:open:justify-around"],
                ["evenly", "sm:open:justify-evenly"],
                ["stretch", "sm:open:justify-stretch"],
              ]),
            ],
            [
              "md",
              new Map<FlexJustifyContent, string>([
                ["normal", "md:open:justify-normal"],
                ["start", "md:open:justify-start"],
                ["end", "md:open:justify-end"],
                ["center", "md:open:justify-center"],
                ["between", "md:open:justify-between"],
                ["around", "md:open:justify-around"],
                ["evenly", "md:open:justify-evenly"],
                ["stretch", "md:open:justify-stretch"],
              ]),
            ],
            [
              "lg",
              new Map<FlexJustifyContent, string>([
                ["normal", "lg:open:justify-normal"],
                ["start", "lg:open:justify-start"],
                ["end", "lg:open:justify-end"],
                ["center", "lg:open:justify-center"],
                ["between", "lg:open:justify-between"],
                ["around", "lg:open:justify-around"],
                ["evenly", "lg:open:justify-evenly"],
                ["stretch", "lg:open:justify-stretch"],
              ]),
            ],
            [
              "xl",
              new Map<FlexJustifyContent, string>([
                ["normal", "xl:open:justify-normal"],
                ["start", "xl:open:justify-start"],
                ["end", "xl:open:justify-end"],
                ["center", "xl:open:justify-center"],
                ["between", "xl:open:justify-between"],
                ["around", "xl:open:justify-around"],
                ["evenly", "xl:open:justify-evenly"],
                ["stretch", "xl:open:justify-stretch"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
