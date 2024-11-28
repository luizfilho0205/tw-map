import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexTextAlign } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class TextAlignBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<FlexTextAlign, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<FlexTextAlign, string>>
    >,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new TextAlignClassesMapping();
    return new TextAlignBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, align: FlexTextAlign) {
    return this.getClassName(breakpoint, align);
  }
}

class TextAlignClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexTextAlign, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexTextAlign, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<FlexTextAlign, string>
    >(
      "xs",
      new Map<FlexTextAlign, string>([
        ["center", "xs:text-center"],
        ["end", "xs:text-end"],
        ["justify", "xs:text-justify"],
        ["left", "xs:text-left"],
        ["right", "xs:text-right"],
        ["start", "xs:text-start"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexTextAlign, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexTextAlign, string>>([
            [
              "xs",
              new Map<FlexTextAlign, string>([
                ["center", "xs:active:text-center"],
                ["end", "xs:active:text-end"],
                ["justify", "xs:active:text-justify"],
                ["left", "xs:active:text-left"],
                ["right", "xs:active:text-right"],
                ["start", "xs:active:text-start"],
              ]),
            ],
            [
              "sm",
              new Map<FlexTextAlign, string>([
                ["center", "sm:active:text-center"],
                ["end", "sm:active:text-end"],
                ["justify", "sm:active:text-justify"],
                ["left", "sm:active:text-left"],
                ["right", "sm:active:text-right"],
                ["start", "sm:active:text-start"],
              ]),
            ],
            [
              "md",
              new Map<FlexTextAlign, string>([
                ["center", "md:active:text-center"],
                ["end", "md:active:text-end"],
                ["justify", "md:active:text-justify"],
                ["left", "md:active:text-left"],
                ["right", "md:active:text-right"],
                ["start", "md:active:text-start"],
              ]),
            ],
            [
              "lg",
              new Map<FlexTextAlign, string>([
                ["center", "lg:active:text-center"],
                ["end", "lg:active:text-end"],
                ["justify", "lg:active:text-justify"],
                ["left", "lg:active:text-left"],
                ["right", "lg:active:text-right"],
                ["start", "lg:active:text-start"],
              ]),
            ],
            [
              "xl",
              new Map<FlexTextAlign, string>([
                ["center", "xl:active:text-center"],
                ["end", "xl:active:text-end"],
                ["justify", "xl:active:text-justify"],
                ["left", "xl:active:text-left"],
                ["right", "xl:active:text-right"],
                ["start", "xl:active:text-start"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<FlexTextAlign, string>>([
            [
              "xs",
              new Map<FlexTextAlign, string>([
                ["center", "xs:disabled:text-center"],
                ["end", "xs:disabled:text-end"],
                ["justify", "xs:disabled:text-justify"],
                ["left", "xs:disabled:text-left"],
                ["right", "xs:disabled:text-right"],
                ["start", "xs:disabled:text-start"],
              ]),
            ],
            [
              "sm",
              new Map<FlexTextAlign, string>([
                ["center", "sm:disabled:text-center"],
                ["end", "sm:disabled:text-end"],
                ["justify", "sm:disabled:text-justify"],
                ["left", "sm:disabled:text-left"],
                ["right", "sm:disabled:text-right"],
                ["start", "sm:disabled:text-start"],
              ]),
            ],
            [
              "md",
              new Map<FlexTextAlign, string>([
                ["center", "md:disabled:text-center"],
                ["end", "md:disabled:text-end"],
                ["justify", "md:disabled:text-justify"],
                ["left", "md:disabled:text-left"],
                ["right", "md:disabled:text-right"],
                ["start", "md:disabled:text-start"],
              ]),
            ],
            [
              "lg",
              new Map<FlexTextAlign, string>([
                ["center", "lg:disabled:text-center"],
                ["end", "lg:disabled:text-end"],
                ["justify", "lg:disabled:text-justify"],
                ["left", "lg:disabled:text-left"],
                ["right", "lg:disabled:text-right"],
                ["start", "lg:disabled:text-start"],
              ]),
            ],
            [
              "xl",
              new Map<FlexTextAlign, string>([
                ["center", "xl:disabled:text-center"],
                ["end", "xl:disabled:text-end"],
                ["justify", "xl:disabled:text-justify"],
                ["left", "xl:disabled:text-left"],
                ["right", "xl:disabled:text-right"],
                ["start", "xl:disabled:text-start"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexTextAlign, string>>([
            [
              "xs",
              new Map<FlexTextAlign, string>([
                ["center", "xs:hover:text-center"],
                ["end", "xs:hover:text-end"],
                ["justify", "xs:hover:text-justify"],
                ["left", "xs:hover:text-left"],
                ["right", "xs:hover:text-right"],
                ["start", "xs:hover:text-start"],
              ]),
            ],
            [
              "sm",
              new Map<FlexTextAlign, string>([
                ["center", "sm:hover:text-center"],
                ["end", "sm:hover:text-end"],
                ["justify", "sm:hover:text-justify"],
                ["left", "sm:hover:text-left"],
                ["right", "sm:hover:text-right"],
                ["start", "sm:hover:text-start"],
              ]),
            ],
            [
              "md",
              new Map<FlexTextAlign, string>([
                ["center", "md:hover:text-center"],
                ["end", "md:hover:text-end"],
                ["justify", "md:hover:text-justify"],
                ["left", "md:hover:text-left"],
                ["right", "md:hover:text-right"],
                ["start", "md:hover:text-start"],
              ]),
            ],
            [
              "lg",
              new Map<FlexTextAlign, string>([
                ["center", "lg:hover:text-center"],
                ["end", "lg:hover:text-end"],
                ["justify", "lg:hover:text-justify"],
                ["left", "lg:hover:text-left"],
                ["right", "lg:hover:text-right"],
                ["start", "lg:hover:text-start"],
              ]),
            ],
            [
              "xl",
              new Map<FlexTextAlign, string>([
                ["center", "xl:hover:text-center"],
                ["end", "xl:hover:text-end"],
                ["justify", "xl:hover:text-justify"],
                ["left", "xl:hover:text-left"],
                ["right", "xl:hover:text-right"],
                ["start", "xl:hover:text-start"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexTextAlign, string>>([
            [
              "xs",
              new Map<FlexTextAlign, string>([
                ["center", "xs:text-center"],
                ["end", "xs:text-end"],
                ["justify", "xs:text-justify"],
                ["left", "xs:text-left"],
                ["right", "xs:text-right"],
                ["start", "xs:text-start"],
              ]),
            ],
            [
              "sm",
              new Map<FlexTextAlign, string>([
                ["center", "sm:text-center"],
                ["end", "sm:text-end"],
                ["justify", "sm:text-justify"],
                ["left", "sm:text-left"],
                ["right", "sm:text-right"],
                ["start", "sm:text-start"],
              ]),
            ],
            [
              "md",
              new Map<FlexTextAlign, string>([
                ["center", "md:text-center"],
                ["end", "md:text-end"],
                ["justify", "md:text-justify"],
                ["left", "md:text-left"],
                ["right", "md:text-right"],
                ["start", "md:text-start"],
              ]),
            ],
            [
              "lg",
              new Map<FlexTextAlign, string>([
                ["center", "lg:text-center"],
                ["end", "lg:text-end"],
                ["justify", "lg:text-justify"],
                ["left", "lg:text-left"],
                ["right", "lg:text-right"],
                ["start", "lg:text-start"],
              ]),
            ],
            [
              "xl",
              new Map<FlexTextAlign, string>([
                ["center", "xl:text-center"],
                ["end", "xl:text-end"],
                ["justify", "xl:text-justify"],
                ["left", "xl:text-left"],
                ["right", "xl:text-right"],
                ["start", "xl:text-start"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexTextAlign, string>>([
            [
              "xs",
              new Map<FlexTextAlign, string>([
                ["center", "xs:open:text-center"],
                ["end", "xs:open:text-end"],
                ["justify", "xs:open:text-justify"],
                ["left", "xs:open:text-left"],
                ["right", "xs:open:text-right"],
                ["start", "xs:open:text-start"],
              ]),
            ],
            [
              "sm",
              new Map<FlexTextAlign, string>([
                ["center", "sm:open:text-center"],
                ["end", "sm:open:text-end"],
                ["justify", "sm:open:text-justify"],
                ["left", "sm:open:text-left"],
                ["right", "sm:open:text-right"],
                ["start", "sm:open:text-start"],
              ]),
            ],
            [
              "md",
              new Map<FlexTextAlign, string>([
                ["center", "md:open:text-center"],
                ["end", "md:open:text-end"],
                ["justify", "md:open:text-justify"],
                ["left", "md:open:text-left"],
                ["right", "md:open:text-right"],
                ["start", "md:open:text-start"],
              ]),
            ],
            [
              "lg",
              new Map<FlexTextAlign, string>([
                ["center", "lg:open:text-center"],
                ["end", "lg:open:text-end"],
                ["justify", "lg:open:text-justify"],
                ["left", "lg:open:text-left"],
                ["right", "lg:open:text-right"],
                ["start", "lg:open:text-start"],
              ]),
            ],
            [
              "xl",
              new Map<FlexTextAlign, string>([
                ["center", "xl:open:text-center"],
                ["end", "xl:open:text-end"],
                ["justify", "xl:open:text-justify"],
                ["left", "xl:open:text-left"],
                ["right", "xl:open:text-right"],
                ["start", "xl:open:text-start"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
