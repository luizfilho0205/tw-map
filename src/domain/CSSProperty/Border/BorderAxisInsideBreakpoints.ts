import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { AxisMapping, Breakpoints, CSSSelector, FlexBorder } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class BorderAxisInsideBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>
> {
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>
    >,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderAxisInsideBreakpointsMapping();
    return new BorderAxisInsideBreakpoints(classesMapping, selector);
  }

  public write(
    breakpoint: Breakpoints,
    axis: AxisMapping,
    emphasis: FlexBorder
  ) {
    return this.getClassName(breakpoint, axis, emphasis);
  }
}

class BorderAxisInsideBreakpointsMapping
  implements
    ClassesMapping<Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>>
{
  private defaultValue: DefaultValue<
    Breakpoints,
    Map<AxisMapping, Map<FlexBorder, string>>
  >;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<AxisMapping, Map<FlexBorder, string>>
    >(
      "xs",
      new Map<AxisMapping, Map<FlexBorder, string>>([
        ["x", new Map<FlexBorder, string>([[0, "xs:border-x-0"]])],
        ["y", new Map<FlexBorder, string>([[0, "xs:border-y-0"]])],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<
        CSSSelector,
        Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>
      >([
        [
          "active",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xs:active:border-x-0"],
                    [2, "xs:active:border-x-2"],
                    [4, "xs:active:border-x-4"],
                    [8, "xs:active:border-x-8"],
                    ["px", "xs:active:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xs:active:border-y-0"],
                    [2, "xs:active:border-y-2"],
                    [4, "xs:active:border-y-4"],
                    [8, "xs:active:border-y-8"],
                    ["px", "xs:active:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "sm:active:border-x-0"],
                    [2, "sm:active:border-x-2"],
                    [4, "sm:active:border-x-4"],
                    [8, "sm:active:border-x-8"],
                    ["px", "sm:active:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "sm:active:border-y-0"],
                    [2, "sm:active:border-y-2"],
                    [4, "sm:active:border-y-4"],
                    [8, "sm:active:border-y-8"],
                    ["px", "sm:active:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "md:active:border-x-0"],
                    [2, "md:active:border-x-2"],
                    [4, "md:active:border-x-4"],
                    [8, "md:active:border-x-8"],
                    ["px", "md:active:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "md:active:border-y-0"],
                    [2, "md:active:border-y-2"],
                    [4, "md:active:border-y-4"],
                    [8, "md:active:border-y-8"],
                    ["px", "md:active:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "lg:active:border-x-0"],
                    [2, "lg:active:border-x-2"],
                    [4, "lg:active:border-x-4"],
                    [8, "lg:active:border-x-8"],
                    ["px", "lg:active:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "lg:active:border-y-0"],
                    [2, "lg:active:border-y-2"],
                    [4, "lg:active:border-y-4"],
                    [8, "lg:active:border-y-8"],
                    ["px", "lg:active:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xl:active:border-x-0"],
                    [2, "xl:active:border-x-2"],
                    [4, "xl:active:border-x-4"],
                    [8, "xl:active:border-x-8"],
                    ["px", "xl:active:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xl:active:border-y-0"],
                    [2, "xl:active:border-y-2"],
                    [4, "xl:active:border-y-4"],
                    [8, "xl:active:border-y-8"],
                    ["px", "xl:active:border-y"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xs:disabled:border-x-0"],
                    [2, "xs:disabled:border-x-2"],
                    [4, "xs:disabled:border-x-4"],
                    [8, "xs:disabled:border-x-8"],
                    ["px", "xs:disabled:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xs:disabled:border-y-0"],
                    [2, "xs:disabled:border-y-2"],
                    [4, "xs:disabled:border-y-4"],
                    [8, "xs:disabled:border-y-8"],
                    ["px", "xs:disabled:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "sm:disabled:border-x-0"],
                    [2, "sm:disabled:border-x-2"],
                    [4, "sm:disabled:border-x-4"],
                    [8, "sm:disabled:border-x-8"],
                    ["px", "sm:disabled:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "sm:disabled:border-y-0"],
                    [2, "sm:disabled:border-y-2"],
                    [4, "sm:disabled:border-y-4"],
                    [8, "sm:disabled:border-y-8"],
                    ["px", "sm:disabled:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "md:disabled:border-x-0"],
                    [2, "md:disabled:border-x-2"],
                    [4, "md:disabled:border-x-4"],
                    [8, "md:disabled:border-x-8"],
                    ["px", "md:disabled:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "md:disabled:border-y-0"],
                    [2, "md:disabled:border-y-2"],
                    [4, "md:disabled:border-y-4"],
                    [8, "md:disabled:border-y-8"],
                    ["px", "md:disabled:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "lg:disabled:border-x-0"],
                    [2, "lg:disabled:border-x-2"],
                    [4, "lg:disabled:border-x-4"],
                    [8, "lg:disabled:border-x-8"],
                    ["px", "lg:disabled:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "lg:disabled:border-y-0"],
                    [2, "lg:disabled:border-y-2"],
                    [4, "lg:disabled:border-y-4"],
                    [8, "lg:disabled:border-y-8"],
                    ["px", "lg:disabled:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xl:disabled:border-x-0"],
                    [2, "xl:disabled:border-x-2"],
                    [4, "xl:disabled:border-x-4"],
                    [8, "xl:disabled:border-x-8"],
                    ["px", "xl:disabled:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xl:disabled:border-y-0"],
                    [2, "xl:disabled:border-y-2"],
                    [4, "xl:disabled:border-y-4"],
                    [8, "xl:disabled:border-y-8"],
                    ["px", "xl:disabled:border-y"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xs:hover:border-x-0"],
                    [2, "xs:hover:border-x-2"],
                    [4, "xs:hover:border-x-4"],
                    [8, "xs:hover:border-x-8"],
                    ["px", "xs:hover:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xs:hover:border-y-0"],
                    [2, "xs:hover:border-y-2"],
                    [4, "xs:hover:border-y-4"],
                    [8, "xs:hover:border-y-8"],
                    ["px", "xs:hover:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "sm:hover:border-x-0"],
                    [2, "sm:hover:border-x-2"],
                    [4, "sm:hover:border-x-4"],
                    [8, "sm:hover:border-x-8"],
                    ["px", "sm:hover:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "sm:hover:border-y-0"],
                    [2, "sm:hover:border-y-2"],
                    [4, "sm:hover:border-y-4"],
                    [8, "sm:hover:border-y-8"],
                    ["px", "sm:hover:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "md:hover:border-x-0"],
                    [2, "md:hover:border-x-2"],
                    [4, "md:hover:border-x-4"],
                    [8, "md:hover:border-x-8"],
                    ["px", "md:hover:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "md:hover:border-y-0"],
                    [2, "md:hover:border-y-2"],
                    [4, "md:hover:border-y-4"],
                    [8, "md:hover:border-y-8"],
                    ["px", "md:hover:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "lg:hover:border-x-0"],
                    [2, "lg:hover:border-x-2"],
                    [4, "lg:hover:border-x-4"],
                    [8, "lg:hover:border-x-8"],
                    ["px", "lg:hover:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "lg:hover:border-y-0"],
                    [2, "lg:hover:border-y-2"],
                    [4, "lg:hover:border-y-4"],
                    [8, "lg:hover:border-y-8"],
                    ["px", "lg:hover:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xl:hover:border-x-0"],
                    [2, "xl:hover:border-x-2"],
                    [4, "xl:hover:border-x-4"],
                    [8, "xl:hover:border-x-8"],
                    ["px", "xl:hover:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xl:hover:border-y-0"],
                    [2, "xl:hover:border-y-2"],
                    [4, "xl:hover:border-y-4"],
                    [8, "xl:hover:border-y-8"],
                    ["px", "xl:hover:border-y"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],

        [
          "none",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xs:border-x-0"],
                    [2, "xs:border-x-2"],
                    [4, "xs:border-x-4"],
                    [8, "xs:border-x-8"],
                    ["px", "xs:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xs:border-y-0"],
                    [2, "xs:border-y-2"],
                    [4, "xs:border-y-4"],
                    [8, "xs:border-y-8"],
                    ["px", "xs:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "sm:border-x-0"],
                    [2, "sm:border-x-2"],
                    [4, "sm:border-x-4"],
                    [8, "sm:border-x-8"],
                    ["px", "sm:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "sm:border-y-0"],
                    [2, "sm:border-y-2"],
                    [4, "sm:border-y-4"],
                    [8, "sm:border-y-8"],
                    ["px", "sm:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "md:border-x-0"],
                    [2, "md:border-x-2"],
                    [4, "md:border-x-4"],
                    [8, "md:border-x-8"],
                    ["px", "md:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "md:border-y-0"],
                    [2, "md:border-y-2"],
                    [4, "md:border-y-4"],
                    [8, "md:border-y-8"],
                    ["px", "md:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "lg:border-x-0"],
                    [2, "lg:border-x-2"],
                    [4, "lg:border-x-4"],
                    [8, "lg:border-x-8"],
                    ["px", "lg:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "lg:border-y-0"],
                    [2, "lg:border-y-2"],
                    [4, "lg:border-y-4"],
                    [8, "lg:border-y-8"],
                    ["px", "lg:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xl:border-x-0"],
                    [2, "xl:border-x-2"],
                    [4, "xl:border-x-4"],
                    [8, "xl:border-x-8"],
                    ["px", "xl:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xl:border-y-0"],
                    [2, "xl:border-y-2"],
                    [4, "xl:border-y-4"],
                    [8, "xl:border-y-8"],
                    ["px", "xl:border-y"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xs:open:border-x-0"],
                    [2, "xs:open:border-x-2"],
                    [4, "xs:open:border-x-4"],
                    [8, "xs:open:border-x-8"],
                    ["px", "xs:open:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xs:open:border-y-0"],
                    [2, "xs:open:border-y-2"],
                    [4, "xs:open:border-y-4"],
                    [8, "xs:open:border-y-8"],
                    ["px", "xs:open:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "sm:open:border-x-0"],
                    [2, "sm:open:border-x-2"],
                    [4, "sm:open:border-x-4"],
                    [8, "sm:open:border-x-8"],
                    ["px", "sm:open:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "sm:open:border-y-0"],
                    [2, "sm:open:border-y-2"],
                    [4, "sm:open:border-y-4"],
                    [8, "sm:open:border-y-8"],
                    ["px", "sm:open:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "md:open:border-x-0"],
                    [2, "md:open:border-x-2"],
                    [4, "md:open:border-x-4"],
                    [8, "md:open:border-x-8"],
                    ["px", "md:open:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "md:open:border-y-0"],
                    [2, "md:open:border-y-2"],
                    [4, "md:open:border-y-4"],
                    [8, "md:open:border-y-8"],
                    ["px", "md:open:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "lg:open:border-x-0"],
                    [2, "lg:open:border-x-2"],
                    [4, "lg:open:border-x-4"],
                    [8, "lg:open:border-x-8"],
                    ["px", "lg:open:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "lg:open:border-y-0"],
                    [2, "lg:open:border-y-2"],
                    [4, "lg:open:border-y-4"],
                    [8, "lg:open:border-y-8"],
                    ["px", "lg:open:border-y"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexBorder, string>>([
                [
                  "x",
                  new Map<FlexBorder, string>([
                    [0, "xl:open:border-x-0"],
                    [2, "xl:open:border-x-2"],
                    [4, "xl:open:border-x-4"],
                    [8, "xl:open:border-x-8"],
                    ["px", "xl:open:border-x"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexBorder, string>([
                    [0, "xl:open:border-y-0"],
                    [2, "xl:open:border-y-2"],
                    [4, "xl:open:border-y-4"],
                    [8, "xl:open:border-y-8"],
                    ["px", "xl:open:border-y"],
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
