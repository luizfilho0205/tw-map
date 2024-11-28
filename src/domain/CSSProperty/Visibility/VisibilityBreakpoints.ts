import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexVisibility } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class VisibilityBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<FlexVisibility, string>>
> {
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<FlexVisibility, string>>
    >,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new VisibilityClassesMapping();
    return new VisibilityBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, visibility: FlexVisibility) {
    return this.getClassName(breakpoint, visibility);
  }
}

class VisibilityClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexVisibility, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexVisibility, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<FlexVisibility, string>
    >(
      "xs",
      new Map<FlexVisibility, string>([
        ["collapse", "xs:collapse"],
        ["invisible", "xs:invisible"],
        ["visible", "xs:visible"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexVisibility, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexVisibility, string>>([
            [
              "xs",
              new Map<FlexVisibility, string>([
                ["collapse", "xs:active:collapse"],
                ["invisible", "xs:active:invisible"],
                ["visible", "xs:active:visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexVisibility, string>([
                ["collapse", "sm:active:collapse"],
                ["invisible", "sm:active:invisible"],
                ["visible", "sm:active:visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexVisibility, string>([
                ["collapse", "md:active:collapse"],
                ["invisible", "md:active:invisible"],
                ["visible", "md:active:visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexVisibility, string>([
                ["collapse", "lg:active:collapse"],
                ["invisible", "lg:active:invisible"],
                ["visible", "lg:active:visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexVisibility, string>([
                ["collapse", "xl:active:collapse"],
                ["invisible", "xl:active:invisible"],
                ["visible", "xl:active:visible"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<FlexVisibility, string>>([
            [
              "xs",
              new Map<FlexVisibility, string>([
                ["collapse", "xs:disabled:collapse"],
                ["invisible", "xs:disabled:invisible"],
                ["visible", "xs:disabled:visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexVisibility, string>([
                ["collapse", "sm:disabled:collapse"],
                ["invisible", "sm:disabled:invisible"],
                ["visible", "sm:disabled:visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexVisibility, string>([
                ["collapse", "md:disabled:collapse"],
                ["invisible", "md:disabled:invisible"],
                ["visible", "md:disabled:visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexVisibility, string>([
                ["collapse", "lg:disabled:collapse"],
                ["invisible", "lg:disabled:invisible"],
                ["visible", "lg:disabled:visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexVisibility, string>([
                ["collapse", "xl:disabled:collapse"],
                ["invisible", "xl:disabled:invisible"],
                ["visible", "xl:disabled:visible"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexVisibility, string>>([
            [
              "xs",
              new Map<FlexVisibility, string>([
                ["collapse", "xs:hover:collapse"],
                ["invisible", "xs:hover:invisible"],
                ["visible", "xs:hover:visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexVisibility, string>([
                ["collapse", "sm:hover:collapse"],
                ["invisible", "sm:hover:invisible"],
                ["visible", "sm:hover:visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexVisibility, string>([
                ["collapse", "md:hover:collapse"],
                ["invisible", "md:hover:invisible"],
                ["visible", "md:hover:visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexVisibility, string>([
                ["collapse", "lg:hover:collapse"],
                ["invisible", "lg:hover:invisible"],
                ["visible", "lg:hover:visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexVisibility, string>([
                ["collapse", "xl:hover:collapse"],
                ["invisible", "xl:hover:invisible"],
                ["visible", "xl:hover:visible"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexVisibility, string>>([
            [
              "xs",
              new Map<FlexVisibility, string>([
                ["collapse", "xs:collapse"],
                ["invisible", "xs:invisible"],
                ["visible", "xs:visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexVisibility, string>([
                ["collapse", "sm:collapse"],
                ["invisible", "sm:invisible"],
                ["visible", "sm:visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexVisibility, string>([
                ["collapse", "md:collapse"],
                ["invisible", "md:invisible"],
                ["visible", "md:visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexVisibility, string>([
                ["collapse", "lg:collapse"],
                ["invisible", "lg:invisible"],
                ["visible", "lg:visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexVisibility, string>([
                ["collapse", "xl:collapse"],
                ["invisible", "xl:invisible"],
                ["visible", "xl:visible"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexVisibility, string>>([
            [
              "xs",
              new Map<FlexVisibility, string>([
                ["collapse", "xs:open:collapse"],
                ["invisible", "xs:open:invisible"],
                ["visible", "xs:open:visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexVisibility, string>([
                ["collapse", "sm:open:collapse"],
                ["invisible", "sm:open:invisible"],
                ["visible", "sm:open:visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexVisibility, string>([
                ["collapse", "md:open:collapse"],
                ["invisible", "md:open:invisible"],
                ["visible", "md:open:visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexVisibility, string>([
                ["collapse", "lg:open:collapse"],
                ["invisible", "lg:open:invisible"],
                ["visible", "lg:open:visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexVisibility, string>([
                ["collapse", "xl:open:collapse"],
                ["invisible", "xl:open:invisible"],
                ["visible", "xl:open:visible"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
