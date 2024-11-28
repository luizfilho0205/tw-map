import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexAlign } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class AlignItemsBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<FlexAlign, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<FlexAlign, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new AlignItemsBreakpointsMapping();
    return new AlignItemsBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, align: FlexAlign) {
    return this.getClassName(breakpoint, align);
  }
}

class AlignItemsBreakpointsMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexAlign, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexAlign, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<Breakpoints, Map<FlexAlign, string>>(
      "xs",
      new Map<FlexAlign, string>([["baseline", "xs:items-baseline"]])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexAlign, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexAlign, string>>([
            [
              "xs",
              new Map<FlexAlign, string>([
                ["center", "xs:active:items-center"],
                ["start", "xs:active:items-start"],
                ["end", "xs:active:items-end"],
                ["stretch", "xs:active:items-stretch"],
                ["baseline", "xs:active:items-baseline"],
              ]),
            ],
            [
              "sm",
              new Map<FlexAlign, string>([
                ["center", "sm:active:items-center"],
                ["start", "sm:active:items-start"],
                ["end", "sm:items-active:end"],
                ["stretch", "sm:active:items-stretch"],
                ["baseline", "sm:active:items-baseline"],
              ]),
            ],
            [
              "md",
              new Map<FlexAlign, string>([
                ["center", "md:active:items-center"],
                ["start", "md:active:items-start"],
                ["end", "md:active:items-end"],
                ["stretch", "md:active:items-stretch"],
                ["baseline", "md:active:items-baseline"],
              ]),
            ],
            [
              "lg",
              new Map<FlexAlign, string>([
                ["center", "lg:active:items-center"],
                ["start", "lg:active:items-start"],
                ["end", "lg:active:items-end"],
                ["stretch", "lg:active:items-stretch"],
                ["baseline", "lg:active:items-baseline"],
              ]),
            ],
            [
              "xl",
              new Map<FlexAlign, string>([
                ["center", "xl:active:items-center"],
                ["start", "xl:active:items-start"],
                ["end", "xl:items-active:end"],
                ["stretch", "xl:active:items-stretch"],
                ["baseline", "xl:active:items-baseline"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<FlexAlign, string>>([
            [
              "xs",
              new Map<FlexAlign, string>([
                ["center", "xs:disabled:items-center"],
                ["start", "xs:disabled:items-start"],
                ["end", "xs:disabled:items-end"],
                ["stretch", "xs:disabled:items-stretch"],
                ["baseline", "xs:disabled:items-baseline"],
              ]),
            ],
            [
              "sm",
              new Map<FlexAlign, string>([
                ["center", "sm:disabled:items-center"],
                ["start", "sm:disabled:items-start"],
                ["end", "sm:items-disabled:end"],
                ["stretch", "sm:disabled:items-stretch"],
                ["baseline", "sm:disabled:items-baseline"],
              ]),
            ],
            [
              "md",
              new Map<FlexAlign, string>([
                ["center", "md:disabled:items-center"],
                ["start", "md:disabled:items-start"],
                ["end", "md:disabled:items-end"],
                ["stretch", "md:disabled:items-stretch"],
                ["baseline", "md:disabled:items-baseline"],
              ]),
            ],
            [
              "lg",
              new Map<FlexAlign, string>([
                ["center", "lg:disabled:items-center"],
                ["start", "lg:disabled:items-start"],
                ["end", "lg:disabled:items-end"],
                ["stretch", "lg:disabled:items-stretch"],
                ["baseline", "lg:disabled:items-baseline"],
              ]),
            ],
            [
              "xl",
              new Map<FlexAlign, string>([
                ["center", "xl:disabled:items-center"],
                ["start", "xl:disabled:items-start"],
                ["end", "xl:items-disabled:end"],
                ["stretch", "xl:disabled:items-stretch"],
                ["baseline", "xl:disabled:items-baseline"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexAlign, string>>([
            [
              "xs",
              new Map<FlexAlign, string>([
                ["center", "xs:hover:items-center"],
                ["start", "xs:hover:items-start"],
                ["end", "xs:hover:items-end"],
                ["stretch", "xs:hover:items-stretch"],
                ["baseline", "xs:hover:items-baseline"],
              ]),
            ],
            [
              "sm",
              new Map<FlexAlign, string>([
                ["center", "sm:hover:items-center"],
                ["start", "sm:hover:items-start"],
                ["end", "sm:items-hover:end"],
                ["stretch", "sm:hover:items-stretch"],
                ["baseline", "sm:hover:items-baseline"],
              ]),
            ],
            [
              "md",
              new Map<FlexAlign, string>([
                ["center", "md:hover:items-center"],
                ["start", "md:hover:items-start"],
                ["end", "md:hover:items-end"],
                ["stretch", "md:hover:items-stretch"],
                ["baseline", "md:hover:items-baseline"],
              ]),
            ],
            [
              "lg",
              new Map<FlexAlign, string>([
                ["center", "lg:hover:items-center"],
                ["start", "lg:hover:items-start"],
                ["end", "lg:hover:items-end"],
                ["stretch", "lg:hover:items-stretch"],
                ["baseline", "lg:hover:items-baseline"],
              ]),
            ],
            [
              "xl",
              new Map<FlexAlign, string>([
                ["center", "xl:hover:items-center"],
                ["start", "xl:hover:items-start"],
                ["end", "xl:items-hover:end"],
                ["stretch", "xl:hover:items-stretch"],
                ["baseline", "xl:hover:items-baseline"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexAlign, string>>([
            [
              "xs",
              new Map<FlexAlign, string>([
                ["center", "xs:items-center"],
                ["start", "xs:items-start"],
                ["end", "xs:items-end"],
                ["stretch", "xs:items-stretch"],
                ["baseline", "xs:items-baseline"],
              ]),
            ],
            [
              "sm",
              new Map<FlexAlign, string>([
                ["center", "sm:items-center"],
                ["start", "sm:items-start"],
                ["end", "sm:items-end"],
                ["stretch", "sm:items-stretch"],
                ["baseline", "sm:items-baseline"],
              ]),
            ],
            [
              "md",
              new Map<FlexAlign, string>([
                ["center", "md:items-center"],
                ["start", "md:items-start"],
                ["end", "md:items-end"],
                ["stretch", "md:items-stretch"],
                ["baseline", "md:items-baseline"],
              ]),
            ],
            [
              "lg",
              new Map<FlexAlign, string>([
                ["center", "lg:items-center"],
                ["start", "lg:items-start"],
                ["end", "lg:items-end"],
                ["stretch", "lg:items-stretch"],
                ["baseline", "lg:items-baseline"],
              ]),
            ],
            [
              "xl",
              new Map<FlexAlign, string>([
                ["center", "xl:items-center"],
                ["start", "xl:items-start"],
                ["end", "xl:items-end"],
                ["stretch", "xl:items-stretch"],
                ["baseline", "xl:items-baseline"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexAlign, string>>([
            [
              "xs",
              new Map<FlexAlign, string>([
                ["center", "xs:open:items-center"],
                ["start", "xs:open:items-start"],
                ["end", "xs:open:items-end"],
                ["stretch", "xs:open:items-stretch"],
                ["baseline", "xs:open:items-baseline"],
              ]),
            ],
            [
              "sm",
              new Map<FlexAlign, string>([
                ["center", "sm:open:items-center"],
                ["start", "sm:open:items-start"],
                ["end", "sm:items-open:end"],
                ["stretch", "sm:open:items-stretch"],
                ["baseline", "sm:open:items-baseline"],
              ]),
            ],
            [
              "md",
              new Map<FlexAlign, string>([
                ["center", "md:open:items-center"],
                ["start", "md:open:items-start"],
                ["end", "md:open:items-end"],
                ["stretch", "md:open:items-stretch"],
                ["baseline", "md:open:items-baseline"],
              ]),
            ],
            [
              "lg",
              new Map<FlexAlign, string>([
                ["center", "lg:open:items-center"],
                ["start", "lg:open:items-start"],
                ["end", "lg:open:items-end"],
                ["stretch", "lg:open:items-stretch"],
                ["baseline", "lg:open:items-baseline"],
              ]),
            ],
            [
              "xl",
              new Map<FlexAlign, string>([
                ["center", "xl:open:items-center"],
                ["start", "xl:open:items-start"],
                ["end", "xl:items-open:end"],
                ["stretch", "xl:open:items-stretch"],
                ["baseline", "xl:open:items-baseline"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
