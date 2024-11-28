import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexPosition } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class PositionBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<FlexPosition, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<FlexPosition, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new PositionClassesMapping();
    return new PositionBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, position: FlexPosition) {
    return this.getClassName(breakpoint, position);
  }
}

class PositionClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexPosition, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexPosition, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<FlexPosition, string>
    >(
      "xs",
      new Map<FlexPosition, string>([
        ["absolute", "xs:absolute"],
        ["fixed", "xs:fixed"],
        ["relative", "xs:relative"],
        ["static", "xs:static"],
        ["sticky", "xs:sticky"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexPosition, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexPosition, string>>([
            [
              "xs",
              new Map<FlexPosition, string>([
                ["absolute", "xs:active:absolute"],
                ["fixed", "xs:active:fixed"],
                ["relative", "xs:active:relative"],
                ["static", "xs:active:static"],
                ["sticky", "xs:active:sticky"],
              ]),
            ],
            [
              "sm",
              new Map<FlexPosition, string>([
                ["absolute", "sm:active:absolute"],
                ["fixed", "sm:active:fixed"],
                ["relative", "sm:active:relative"],
                ["static", "sm:active:static"],
                ["sticky", "sm:active:sticky"],
              ]),
            ],
            [
              "md",
              new Map<FlexPosition, string>([
                ["absolute", "md:active:absolute"],
                ["fixed", "md:active:fixed"],
                ["relative", "md:active:relative"],
                ["static", "md:active:static"],
                ["sticky", "md:active:sticky"],
              ]),
            ],
            [
              "lg",
              new Map<FlexPosition, string>([
                ["absolute", "lg:active:absolute"],
                ["fixed", "lg:active:fixed"],
                ["relative", "lg:active:relative"],
                ["static", "lg:active:static"],
                ["sticky", "lg:active:sticky"],
              ]),
            ],
            [
              "xl",
              new Map<FlexPosition, string>([
                ["absolute", "xl:active:absolute"],
                ["fixed", "xl:active:fixed"],
                ["relative", "xl:active:relative"],
                ["static", "xl:active:static"],
                ["sticky", "xl:active:sticky"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<FlexPosition, string>>([
            [
              "xs",
              new Map<FlexPosition, string>([
                ["absolute", "xs:disabled:absolute"],
                ["fixed", "xs:disabled:fixed"],
                ["relative", "xs:disabled:relative"],
                ["static", "xs:disabled:static"],
                ["sticky", "xs:disabled:sticky"],
              ]),
            ],
            [
              "sm",
              new Map<FlexPosition, string>([
                ["absolute", "sm:disabled:absolute"],
                ["fixed", "sm:disabled:fixed"],
                ["relative", "sm:disabled:relative"],
                ["static", "sm:disabled:static"],
                ["sticky", "sm:disabled:sticky"],
              ]),
            ],
            [
              "md",
              new Map<FlexPosition, string>([
                ["absolute", "md:disabled:absolute"],
                ["fixed", "md:disabled:fixed"],
                ["relative", "md:disabled:relative"],
                ["static", "md:disabled:static"],
                ["sticky", "md:disabled:sticky"],
              ]),
            ],
            [
              "lg",
              new Map<FlexPosition, string>([
                ["absolute", "lg:disabled:absolute"],
                ["fixed", "lg:disabled:fixed"],
                ["relative", "lg:disabled:relative"],
                ["static", "lg:disabled:static"],
                ["sticky", "lg:disabled:sticky"],
              ]),
            ],
            [
              "xl",
              new Map<FlexPosition, string>([
                ["absolute", "xl:disabled:absolute"],
                ["fixed", "xl:disabled:fixed"],
                ["relative", "xl:disabled:relative"],
                ["static", "xl:disabled:static"],
                ["sticky", "xl:disabled:sticky"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexPosition, string>>([
            [
              "xs",
              new Map<FlexPosition, string>([
                ["absolute", "xs:hover:absolute"],
                ["fixed", "xs:hover:fixed"],
                ["relative", "xs:hover:relative"],
                ["static", "xs:hover:static"],
                ["sticky", "xs:hover:sticky"],
              ]),
            ],
            [
              "sm",
              new Map<FlexPosition, string>([
                ["absolute", "sm:hover:absolute"],
                ["fixed", "sm:hover:fixed"],
                ["relative", "sm:hover:relative"],
                ["static", "sm:hover:static"],
                ["sticky", "sm:hover:sticky"],
              ]),
            ],
            [
              "md",
              new Map<FlexPosition, string>([
                ["absolute", "md:hover:absolute"],
                ["fixed", "md:hover:fixed"],
                ["relative", "md:hover:relative"],
                ["static", "md:hover:static"],
                ["sticky", "md:hover:sticky"],
              ]),
            ],
            [
              "lg",
              new Map<FlexPosition, string>([
                ["absolute", "lg:hover:absolute"],
                ["fixed", "lg:hover:fixed"],
                ["relative", "lg:hover:relative"],
                ["static", "lg:hover:static"],
                ["sticky", "lg:hover:sticky"],
              ]),
            ],
            [
              "xl",
              new Map<FlexPosition, string>([
                ["absolute", "xl:hover:absolute"],
                ["fixed", "xl:hover:fixed"],
                ["relative", "xl:hover:relative"],
                ["static", "xl:hover:static"],
                ["sticky", "xl:hover:sticky"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexPosition, string>>([
            [
              "xs",
              new Map<FlexPosition, string>([
                ["absolute", "xs:absolute"],
                ["fixed", "xs:fixed"],
                ["relative", "xs:relative"],
                ["static", "xs:static"],
                ["sticky", "xs:sticky"],
              ]),
            ],
            [
              "sm",
              new Map<FlexPosition, string>([
                ["absolute", "sm:absolute"],
                ["fixed", "sm:fixed"],
                ["relative", "sm:relative"],
                ["static", "sm:static"],
                ["sticky", "sm:sticky"],
              ]),
            ],
            [
              "md",
              new Map<FlexPosition, string>([
                ["absolute", "md:absolute"],
                ["fixed", "md:fixed"],
                ["relative", "md:relative"],
                ["static", "md:static"],
                ["sticky", "md:sticky"],
              ]),
            ],
            [
              "lg",
              new Map<FlexPosition, string>([
                ["absolute", "lg:absolute"],
                ["fixed", "lg:fixed"],
                ["relative", "lg:relative"],
                ["static", "lg:static"],
                ["sticky", "lg:sticky"],
              ]),
            ],
            [
              "xl",
              new Map<FlexPosition, string>([
                ["absolute", "xl:absolute"],
                ["fixed", "xl:fixed"],
                ["relative", "xl:relative"],
                ["static", "xl:static"],
                ["sticky", "xl:sticky"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexPosition, string>>([
            [
              "xs",
              new Map<FlexPosition, string>([
                ["absolute", "xs:open:absolute"],
                ["fixed", "xs:open:fixed"],
                ["relative", "xs:open:relative"],
                ["static", "xs:open:static"],
                ["sticky", "xs:open:sticky"],
              ]),
            ],
            [
              "sm",
              new Map<FlexPosition, string>([
                ["absolute", "sm:open:absolute"],
                ["fixed", "sm:open:fixed"],
                ["relative", "sm:open:relative"],
                ["static", "sm:open:static"],
                ["sticky", "sm:open:sticky"],
              ]),
            ],
            [
              "md",
              new Map<FlexPosition, string>([
                ["absolute", "md:open:absolute"],
                ["fixed", "md:open:fixed"],
                ["relative", "md:open:relative"],
                ["static", "md:open:static"],
                ["sticky", "md:open:sticky"],
              ]),
            ],
            [
              "lg",
              new Map<FlexPosition, string>([
                ["absolute", "lg:open:absolute"],
                ["fixed", "lg:open:fixed"],
                ["relative", "lg:open:relative"],
                ["static", "lg:open:static"],
                ["sticky", "lg:open:sticky"],
              ]),
            ],
            [
              "xl",
              new Map<FlexPosition, string>([
                ["absolute", "xl:open:absolute"],
                ["fixed", "xl:open:fixed"],
                ["relative", "xl:open:relative"],
                ["static", "xl:open:static"],
                ["sticky", "xl:open:sticky"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
