import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexDirections } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class DirectionBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<FlexDirections, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<FlexDirections, string>>
    >,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new DirectionBreakpointsMapping();
    return new DirectionBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, direction: FlexDirections) {
    return this.getClassName(breakpoint, direction);
  }
}

class DirectionBreakpointsMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexDirections, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexDirections, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<FlexDirections, string>
    >(
      "xs",
      new Map<FlexDirections, string>([
        ["column", "xs:flex-col"],
        ["col-reverse", "xs:flex-col-reverse"],
        ["row", "xs:flex-row"],
        ["row-reverse", "xs:flex-row-reverse"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexDirections, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexDirections, string>>([
            [
              "xs",
              new Map<FlexDirections, string>([
                ["column", "xs:active:flex-col"],
                ["col-reverse", "xs:active:flex-col-reverse"],
                ["row", "xs:active:flex-row"],
                ["row-reverse", "xs:active:flex-row-reverse"],
              ]),
            ],
            [
              "sm",
              new Map<FlexDirections, string>([
                ["column", "sm:active:flex-col"],
                ["col-reverse", "sm:active:flex-col-reverse"],
                ["row", "sm:active:flex-row"],
                ["row-reverse", "sm:active:flex-row-reverse"],
              ]),
            ],
            [
              "md",
              new Map<FlexDirections, string>([
                ["column", "md:active:flex-col"],
                ["col-reverse", "md:active:flex-col-reverse"],
                ["row", "md:active:flex-row"],
                ["row-reverse", "md:active:flex-row-reverse"],
              ]),
            ],
            [
              "lg",
              new Map<FlexDirections, string>([
                ["column", "lg:active:flex-col"],
                ["col-reverse", "lg:active:flex-col-reverse"],
                ["row", "lg:active:flex-row"],
                ["row-reverse", "lg:active:flex-row-reverse"],
              ]),
            ],
            [
              "xl",
              new Map<FlexDirections, string>([
                ["column", "xl:active:flex-col"],
                ["col-reverse", "xl:active:flex-col-reverse"],
                ["row", "xl:active:flex-row"],
                ["row-reverse", "xl:active:flex-row-reverse"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<FlexDirections, string>>([
            [
              "xs",
              new Map<FlexDirections, string>([
                ["column", "xs:disabled:flex-col"],
                ["col-reverse", "xs:disabled:flex-col-reverse"],
                ["row", "xs:disabled:flex-row"],
                ["row-reverse", "xs:disabled:flex-row-reverse"],
              ]),
            ],
            [
              "sm",
              new Map<FlexDirections, string>([
                ["column", "sm:disabled:flex-col"],
                ["col-reverse", "sm:disabled:flex-col-reverse"],
                ["row", "sm:disabled:flex-row"],
                ["row-reverse", "sm:disabled:flex-row-reverse"],
              ]),
            ],
            [
              "md",
              new Map<FlexDirections, string>([
                ["column", "md:disabled:flex-col"],
                ["col-reverse", "md:disabled:flex-col-reverse"],
                ["row", "md:disabled:flex-row"],
                ["row-reverse", "md:disabled:flex-row-reverse"],
              ]),
            ],
            [
              "lg",
              new Map<FlexDirections, string>([
                ["column", "lg:disabled:flex-col"],
                ["col-reverse", "lg:disabled:flex-col-reverse"],
                ["row", "lg:disabled:flex-row"],
                ["row-reverse", "lg:disabled:flex-row-reverse"],
              ]),
            ],
            [
              "xl",
              new Map<FlexDirections, string>([
                ["column", "xl:disabled:flex-col"],
                ["col-reverse", "xl:disabled:flex-col-reverse"],
                ["row", "xl:disabled:flex-row"],
                ["row-reverse", "xl:disabled:flex-row-reverse"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexDirections, string>>([
            [
              "xs",
              new Map<FlexDirections, string>([
                ["column", "xs:hover:flex-col"],
                ["col-reverse", "xs:hover:flex-col-reverse"],
                ["row", "xs:hover:flex-row"],
                ["row-reverse", "xs:hover:flex-row-reverse"],
              ]),
            ],
            [
              "sm",
              new Map<FlexDirections, string>([
                ["column", "sm:hover:flex-col"],
                ["col-reverse", "sm:hover:flex-col-reverse"],
                ["row", "sm:hover:flex-row"],
                ["row-reverse", "sm:hover:flex-row-reverse"],
              ]),
            ],
            [
              "md",
              new Map<FlexDirections, string>([
                ["column", "md:hover:flex-col"],
                ["col-reverse", "md:hover:flex-col-reverse"],
                ["row", "md:hover:flex-row"],
                ["row-reverse", "md:hover:flex-row-reverse"],
              ]),
            ],
            [
              "lg",
              new Map<FlexDirections, string>([
                ["column", "lg:hover:flex-col"],
                ["col-reverse", "lg:hover:flex-col-reverse"],
                ["row", "lg:hover:flex-row"],
                ["row-reverse", "lg:hover:flex-row-reverse"],
              ]),
            ],
            [
              "xl",
              new Map<FlexDirections, string>([
                ["column", "xl:hover:flex-col"],
                ["col-reverse", "xl:hover:flex-col-reverse"],
                ["row", "xl:hover:flex-row"],
                ["row-reverse", "xl:hover:flex-row-reverse"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexDirections, string>>([
            [
              "xs",
              new Map<FlexDirections, string>([
                ["column", "xs:flex-col"],
                ["col-reverse", "xs:flex-col-reverse"],
                ["row", "xs:flex-row"],
                ["row-reverse", "xs:flex-row-reverse"],
              ]),
            ],
            [
              "sm",
              new Map<FlexDirections, string>([
                ["column", "sm:flex-col"],
                ["col-reverse", "sm:flex-col-reverse"],
                ["row", "sm:flex-row"],
                ["row-reverse", "sm:flex-row-reverse"],
              ]),
            ],
            [
              "md",
              new Map<FlexDirections, string>([
                ["column", "md:flex-col"],
                ["col-reverse", "md:flex-col-reverse"],
                ["row", "md:flex-row"],
                ["row-reverse", "md:flex-row-reverse"],
              ]),
            ],
            [
              "lg",
              new Map<FlexDirections, string>([
                ["column", "lg:flex-col"],
                ["col-reverse", "lg:flex-col-reverse"],
                ["row", "lg:flex-row"],
                ["row-reverse", "lg:flex-row-reverse"],
              ]),
            ],
            [
              "xl",
              new Map<FlexDirections, string>([
                ["column", "xl:flex-col"],
                ["col-reverse", "xl:flex-col-reverse"],
                ["row", "xl:flex-row"],
                ["row-reverse", "xl:flex-row-reverse"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexDirections, string>>([
            [
              "xs",
              new Map<FlexDirections, string>([
                ["column", "xs:open:flex-col"],
                ["col-reverse", "xs:open:flex-col-reverse"],
                ["row", "xs:open:flex-row"],
                ["row-reverse", "xs:open:flex-row-reverse"],
              ]),
            ],
            [
              "sm",
              new Map<FlexDirections, string>([
                ["column", "sm:open:flex-col"],
                ["col-reverse", "sm:open:flex-col-reverse"],
                ["row", "sm:open:flex-row"],
                ["row-reverse", "sm:open:flex-row-reverse"],
              ]),
            ],
            [
              "md",
              new Map<FlexDirections, string>([
                ["column", "md:open:flex-col"],
                ["col-reverse", "md:open:flex-col-reverse"],
                ["row", "md:open:flex-row"],
                ["row-reverse", "md:open:flex-row-reverse"],
              ]),
            ],
            [
              "lg",
              new Map<FlexDirections, string>([
                ["column", "lg:open:flex-col"],
                ["col-reverse", "lg:open:flex-col-reverse"],
                ["row", "lg:open:flex-row"],
                ["row-reverse", "lg:open:flex-row-reverse"],
              ]),
            ],
            [
              "xl",
              new Map<FlexDirections, string>([
                ["column", "xl:open:flex-col"],
                ["col-reverse", "xl:open:flex-col-reverse"],
                ["row", "xl:open:flex-row"],
                ["row-reverse", "xl:open:flex-row-reverse"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
