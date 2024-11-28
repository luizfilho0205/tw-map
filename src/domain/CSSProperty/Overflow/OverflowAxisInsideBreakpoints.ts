import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { AxisMapping, Breakpoints, CSSSelector, FlexOverflow } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class OverflowAxisInsideBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>
> {
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>
    >,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new OverflowClassesMapping();
    return new OverflowAxisInsideBreakpoints(classesMapping, selector);
  }

  public write(
    breakpoint: Breakpoints,
    axis: AxisMapping,
    overflow: FlexOverflow
  ) {
    return this.getClassName(breakpoint, axis, overflow);
  }
}

class OverflowClassesMapping
  implements
    ClassesMapping<
      Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>
    >
{
  private defaultValue: DefaultValue<
    Breakpoints,
    Map<AxisMapping, Map<FlexOverflow, string>>
  >;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<AxisMapping, Map<FlexOverflow, string>>
    >(
      "xs",
      new Map<AxisMapping, Map<FlexOverflow, string>>([
        [
          "x",
          new Map<FlexOverflow, string>([
            ["auto", "xs:overflow-x-auto"],
            ["clip", "xs:overflow-x-clip"],
            ["hidden", "xs:overflow-x-hidden"],
            ["scroll", "xs:overflow-x-scroll"],
            ["visible", "xs:overflow-x-visible"],
          ]),
        ],
        [
          "y",
          new Map<FlexOverflow, string>([
            ["auto", "xs:overflow-y-auto"],
            ["clip", "xs:overflow-y-clip"],
            ["hidden", "xs:overflow-y-hidden"],
            ["scroll", "xs:overflow-y-scroll"],
            ["visible", "xs:overflow-y-visible"],
          ]),
        ],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<
        CSSSelector,
        Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>
      >([
        [
          "active",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:active:overflow-x-auto"],
                    ["clip", "xs:active:overflow-x-clip"],
                    ["hidden", "xs:active:overflow-x-hidden"],
                    ["scroll", "xs:active:overflow-x-scroll"],
                    ["visible", "xs:active:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:active:overflow-y-auto"],
                    ["clip", "xs:active:overflow-y-clip"],
                    ["hidden", "xs:active:overflow-y-hidden"],
                    ["scroll", "xs:active:overflow-y-scroll"],
                    ["visible", "xs:active:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:active:overflow-x-auto"],
                    ["clip", "sm:active:overflow-x-clip"],
                    ["hidden", "sm:active:overflow-x-hidden"],
                    ["scroll", "sm:active:overflow-x-scroll"],
                    ["visible", "sm:active:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:active:overflow-y-auto"],
                    ["clip", "sm:active:overflow-y-clip"],
                    ["hidden", "sm:active:overflow-y-hidden"],
                    ["scroll", "sm:active:overflow-y-scroll"],
                    ["visible", "sm:active:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:active:overflow-x-auto"],
                    ["clip", "md:active:overflow-x-clip"],
                    ["hidden", "md:active:overflow-x-hidden"],
                    ["scroll", "md:active:overflow-x-scroll"],
                    ["visible", "md:active:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:active:overflow-y-auto"],
                    ["clip", "md:active:overflow-y-clip"],
                    ["hidden", "md:active:overflow-y-hidden"],
                    ["scroll", "md:active:overflow-y-scroll"],
                    ["visible", "md:active:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:active:overflow-x-auto"],
                    ["clip", "lg:active:overflow-x-clip"],
                    ["hidden", "lg:active:overflow-x-hidden"],
                    ["scroll", "lg:active:overflow-x-scroll"],
                    ["visible", "lg:active:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:active:overflow-y-auto"],
                    ["clip", "lg:active:overflow-y-clip"],
                    ["hidden", "lg:active:overflow-y-hidden"],
                    ["scroll", "lg:active:overflow-y-scroll"],
                    ["visible", "lg:active:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:active:overflow-x-auto"],
                    ["clip", "xl:active:overflow-x-clip"],
                    ["hidden", "xl:active:overflow-x-hidden"],
                    ["scroll", "xl:active:overflow-x-scroll"],
                    ["visible", "xl:active:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:active:overflow-y-auto"],
                    ["clip", "xl:active:overflow-y-clip"],
                    ["hidden", "xl:active:overflow-y-hidden"],
                    ["scroll", "xl:active:overflow-y-scroll"],
                    ["visible", "xl:active:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:disabled:overflow-x-auto"],
                    ["clip", "xs:disabled:overflow-x-clip"],
                    ["hidden", "xs:disabled:overflow-x-hidden"],
                    ["scroll", "xs:disabled:overflow-x-scroll"],
                    ["visible", "xs:disabled:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:disabled:overflow-y-auto"],
                    ["clip", "xs:disabled:overflow-y-clip"],
                    ["hidden", "xs:disabled:overflow-y-hidden"],
                    ["scroll", "xs:disabled:overflow-y-scroll"],
                    ["visible", "xs:disabled:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:disabled:overflow-x-auto"],
                    ["clip", "sm:disabled:overflow-x-clip"],
                    ["hidden", "sm:disabled:overflow-x-hidden"],
                    ["scroll", "sm:disabled:overflow-x-scroll"],
                    ["visible", "sm:disabled:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:disabled:overflow-y-auto"],
                    ["clip", "sm:disabled:overflow-y-clip"],
                    ["hidden", "sm:disabled:overflow-y-hidden"],
                    ["scroll", "sm:disabled:overflow-y-scroll"],
                    ["visible", "sm:disabled:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:disabled:overflow-x-auto"],
                    ["clip", "md:disabled:overflow-x-clip"],
                    ["hidden", "md:disabled:overflow-x-hidden"],
                    ["scroll", "md:disabled:overflow-x-scroll"],
                    ["visible", "md:disabled:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:disabled:overflow-y-auto"],
                    ["clip", "md:disabled:overflow-y-clip"],
                    ["hidden", "md:disabled:overflow-y-hidden"],
                    ["scroll", "md:disabled:overflow-y-scroll"],
                    ["visible", "md:disabled:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:disabled:overflow-x-auto"],
                    ["clip", "lg:disabled:overflow-x-clip"],
                    ["hidden", "lg:disabled:overflow-x-hidden"],
                    ["scroll", "lg:disabled:overflow-x-scroll"],
                    ["visible", "lg:disabled:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:disabled:overflow-y-auto"],
                    ["clip", "lg:disabled:overflow-y-clip"],
                    ["hidden", "lg:disabled:overflow-y-hidden"],
                    ["scroll", "lg:disabled:overflow-y-scroll"],
                    ["visible", "lg:disabled:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:disabled:overflow-x-auto"],
                    ["clip", "xl:disabled:overflow-x-clip"],
                    ["hidden", "xl:disabled:overflow-x-hidden"],
                    ["scroll", "xl:disabled:overflow-x-scroll"],
                    ["visible", "xl:disabled:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:disabled:overflow-y-auto"],
                    ["clip", "xl:disabled:overflow-y-clip"],
                    ["hidden", "xl:disabled:overflow-y-hidden"],
                    ["scroll", "xl:disabled:overflow-y-scroll"],
                    ["visible", "xl:disabled:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:hover:overflow-x-auto"],
                    ["clip", "xs:hover:overflow-x-clip"],
                    ["hidden", "xs:hover:overflow-x-hidden"],
                    ["scroll", "xs:hover:overflow-x-scroll"],
                    ["visible", "xs:hover:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:hover:overflow-y-auto"],
                    ["clip", "xs:hover:overflow-y-clip"],
                    ["hidden", "xs:hover:overflow-y-hidden"],
                    ["scroll", "xs:hover:overflow-y-scroll"],
                    ["visible", "xs:hover:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:hover:overflow-x-auto"],
                    ["clip", "sm:hover:overflow-x-clip"],
                    ["hidden", "sm:hover:overflow-x-hidden"],
                    ["scroll", "sm:hover:overflow-x-scroll"],
                    ["visible", "sm:hover:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:hover:overflow-y-auto"],
                    ["clip", "sm:hover:overflow-y-clip"],
                    ["hidden", "sm:hover:overflow-y-hidden"],
                    ["scroll", "sm:hover:overflow-y-scroll"],
                    ["visible", "sm:hover:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:hover:overflow-x-auto"],
                    ["clip", "md:hover:overflow-x-clip"],
                    ["hidden", "md:hover:overflow-x-hidden"],
                    ["scroll", "md:hover:overflow-x-scroll"],
                    ["visible", "md:hover:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:hover:overflow-y-auto"],
                    ["clip", "md:hover:overflow-y-clip"],
                    ["hidden", "md:hover:overflow-y-hidden"],
                    ["scroll", "md:hover:overflow-y-scroll"],
                    ["visible", "md:hover:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:hover:overflow-x-auto"],
                    ["clip", "lg:hover:overflow-x-clip"],
                    ["hidden", "lg:hover:overflow-x-hidden"],
                    ["scroll", "lg:hover:overflow-x-scroll"],
                    ["visible", "lg:hover:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:hover:overflow-y-auto"],
                    ["clip", "lg:hover:overflow-y-clip"],
                    ["hidden", "lg:hover:overflow-y-hidden"],
                    ["scroll", "lg:hover:overflow-y-scroll"],
                    ["visible", "lg:hover:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:hover:overflow-x-auto"],
                    ["clip", "xl:hover:overflow-x-clip"],
                    ["hidden", "xl:hover:overflow-x-hidden"],
                    ["scroll", "xl:hover:overflow-x-scroll"],
                    ["visible", "xl:hover:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:hover:overflow-y-auto"],
                    ["clip", "xl:hover:overflow-y-clip"],
                    ["hidden", "xl:hover:overflow-y-hidden"],
                    ["scroll", "xl:hover:overflow-y-scroll"],
                    ["visible", "xl:hover:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:overflow-x-auto"],
                    ["clip", "xs:overflow-x-clip"],
                    ["hidden", "xs:overflow-x-hidden"],
                    ["scroll", "xs:overflow-x-scroll"],
                    ["visible", "xs:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:overflow-y-auto"],
                    ["clip", "xs:overflow-y-clip"],
                    ["hidden", "xs:overflow-y-hidden"],
                    ["scroll", "xs:overflow-y-scroll"],
                    ["visible", "xs:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:overflow-x-auto"],
                    ["clip", "sm:overflow-x-clip"],
                    ["hidden", "sm:overflow-x-hidden"],
                    ["scroll", "sm:overflow-x-scroll"],
                    ["visible", "sm:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:overflow-y-auto"],
                    ["clip", "sm:overflow-y-clip"],
                    ["hidden", "sm:overflow-y-hidden"],
                    ["scroll", "sm:overflow-y-scroll"],
                    ["visible", "sm:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:overflow-x-auto"],
                    ["clip", "md:overflow-x-clip"],
                    ["hidden", "md:overflow-x-hidden"],
                    ["scroll", "md:overflow-x-scroll"],
                    ["visible", "md:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:overflow-y-auto"],
                    ["clip", "md:overflow-y-clip"],
                    ["hidden", "md:overflow-y-hidden"],
                    ["scroll", "md:overflow-y-scroll"],
                    ["visible", "md:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:overflow-x-auto"],
                    ["clip", "lg:overflow-x-clip"],
                    ["hidden", "lg:overflow-x-hidden"],
                    ["scroll", "lg:overflow-x-scroll"],
                    ["visible", "lg:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:overflow-y-auto"],
                    ["clip", "lg:overflow-y-clip"],
                    ["hidden", "lg:overflow-y-hidden"],
                    ["scroll", "lg:overflow-y-scroll"],
                    ["visible", "lg:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:overflow-x-auto"],
                    ["clip", "xl:overflow-x-clip"],
                    ["hidden", "xl:overflow-x-hidden"],
                    ["scroll", "xl:overflow-x-scroll"],
                    ["visible", "xl:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:overflow-y-auto"],
                    ["clip", "xl:overflow-y-clip"],
                    ["hidden", "xl:overflow-y-hidden"],
                    ["scroll", "xl:overflow-y-scroll"],
                    ["visible", "xl:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:open:overflow-x-auto"],
                    ["clip", "xs:open:overflow-x-clip"],
                    ["hidden", "xs:open:overflow-x-hidden"],
                    ["scroll", "xs:open:overflow-x-scroll"],
                    ["visible", "xs:open:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xs:open:overflow-y-auto"],
                    ["clip", "xs:open:overflow-y-clip"],
                    ["hidden", "xs:open:overflow-y-hidden"],
                    ["scroll", "xs:open:overflow-y-scroll"],
                    ["visible", "xs:open:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:open:overflow-x-auto"],
                    ["clip", "sm:open:overflow-x-clip"],
                    ["hidden", "sm:open:overflow-x-hidden"],
                    ["scroll", "sm:open:overflow-x-scroll"],
                    ["visible", "sm:open:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "sm:open:overflow-y-auto"],
                    ["clip", "sm:open:overflow-y-clip"],
                    ["hidden", "sm:open:overflow-y-hidden"],
                    ["scroll", "sm:open:overflow-y-scroll"],
                    ["visible", "sm:open:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:open:overflow-x-auto"],
                    ["clip", "md:open:overflow-x-clip"],
                    ["hidden", "md:open:overflow-x-hidden"],
                    ["scroll", "md:open:overflow-x-scroll"],
                    ["visible", "md:open:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "md:open:overflow-y-auto"],
                    ["clip", "md:open:overflow-y-clip"],
                    ["hidden", "md:open:overflow-y-hidden"],
                    ["scroll", "md:open:overflow-y-scroll"],
                    ["visible", "md:open:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:open:overflow-x-auto"],
                    ["clip", "lg:open:overflow-x-clip"],
                    ["hidden", "lg:open:overflow-x-hidden"],
                    ["scroll", "lg:open:overflow-x-scroll"],
                    ["visible", "lg:open:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "lg:open:overflow-y-auto"],
                    ["clip", "lg:open:overflow-y-clip"],
                    ["hidden", "lg:open:overflow-y-hidden"],
                    ["scroll", "lg:open:overflow-y-scroll"],
                    ["visible", "lg:open:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexOverflow, string>>([
                [
                  "x",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:open:overflow-x-auto"],
                    ["clip", "xl:open:overflow-x-clip"],
                    ["hidden", "xl:open:overflow-x-hidden"],
                    ["scroll", "xl:open:overflow-x-scroll"],
                    ["visible", "xl:open:overflow-x-visible"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexOverflow, string>([
                    ["auto", "xl:open:overflow-y-auto"],
                    ["clip", "xl:open:overflow-y-clip"],
                    ["hidden", "xl:open:overflow-y-hidden"],
                    ["scroll", "xl:open:overflow-y-scroll"],
                    ["visible", "xl:open:overflow-y-visible"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
