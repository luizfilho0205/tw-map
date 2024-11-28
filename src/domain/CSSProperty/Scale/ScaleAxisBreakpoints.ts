import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { AxisMapping, Breakpoints, CSSSelector, FlexScale } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class ScaleAxisBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>
> {
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>
    >,
    selector: CSSSelector
  ) {
    super(classesMapping, selector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new ScaleAxisBreakpointsClassesMapping();
    return new ScaleAxisBreakpoints(classesMapping, selector);
  }

  public write(breakpoint: Breakpoints, axis: AxisMapping, scale: FlexScale) {
    return this.getClassName(breakpoint, axis, scale);
  }
}

class ScaleAxisBreakpointsClassesMapping
  implements
    ClassesMapping<Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>>
{
  private defaultValue: DefaultValue<
    Breakpoints,
    Map<AxisMapping, Map<FlexScale, string>>
  >;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<AxisMapping, Map<FlexScale, string>>
    >(
      "xs",
      new Map<AxisMapping, Map<FlexScale, string>>([
        [
          "x",
          new Map<FlexScale, string>([
            [0, "xs:scale-x-0"],
            [50, "xs:scale-x-50"],
            [75, "xs:scale-x-75"],
            [90, "xs:scale-x-90"],
            [95, "xs:scale-x-95"],
            [100, "xs:scale-x-100"],
            [105, "xs:scale-x-105"],
            [110, "xs:scale-x-110"],
            [125, "xs:scale-x-125"],
            [150, "xs:scale-x-150"],
          ]),
        ],
        [
          "y",
          new Map<FlexScale, string>([
            [0, "xs:scale-y-0"],
            [50, "xs:scale-y-50"],
            [75, "xs:scale-y-75"],
            [90, "xs:scale-y-90"],
            [95, "xs:scale-y-95"],
            [100, "xs:scale-y-100"],
            [105, "xs:scale-y-105"],
            [110, "xs:scale-y-110"],
            [125, "xs:scale-y-125"],
            [150, "xs:scale-y-150"],
          ]),
        ],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<
        CSSSelector,
        Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>
      >([
        [
          "active",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xs:active:scale-x-0"],
                    [50, "xs:active:scale-x-50"],
                    [75, "xs:active:scale-x-75"],
                    [90, "xs:active:scale-x-90"],
                    [95, "xs:active:scale-x-95"],
                    [100, "xs:active:scale-x-100"],
                    [105, "xs:active:scale-x-105"],
                    [110, "xs:active:scale-x-110"],
                    [125, "xs:active:scale-x-125"],
                    [150, "xs:active:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xs:active:scale-y-0"],
                    [50, "xs:active:scale-y-50"],
                    [75, "xs:active:scale-y-75"],
                    [90, "xs:active:scale-y-90"],
                    [95, "xs:active:scale-y-95"],
                    [100, "xs:active:scale-y-100"],
                    [105, "xs:active:scale-y-105"],
                    [110, "xs:active:scale-y-110"],
                    [125, "xs:active:scale-y-125"],
                    [150, "xs:active:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "sm:active:scale-x-0"],
                    [50, "sm:active:scale-x-50"],
                    [75, "sm:active:scale-x-75"],
                    [90, "sm:active:scale-x-90"],
                    [95, "sm:active:scale-x-95"],
                    [100, "sm:active:scale-x-100"],
                    [105, "sm:active:scale-x-105"],
                    [110, "sm:active:scale-x-110"],
                    [125, "sm:active:scale-x-125"],
                    [150, "sm:active:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "sm:active:scale-y-0"],
                    [50, "sm:active:scale-y-50"],
                    [75, "sm:active:scale-y-75"],
                    [90, "sm:active:scale-y-90"],
                    [95, "sm:active:scale-y-95"],
                    [100, "sm:active:scale-y-100"],
                    [105, "sm:active:scale-y-105"],
                    [110, "sm:active:scale-y-110"],
                    [125, "sm:active:scale-y-125"],
                    [150, "sm:active:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "md:active:scale-x-0"],
                    [50, "md:active:scale-x-50"],
                    [75, "md:active:scale-x-75"],
                    [90, "md:active:scale-x-90"],
                    [95, "md:active:scale-x-95"],
                    [100, "md:active:scale-x-100"],
                    [105, "md:active:scale-x-105"],
                    [110, "md:active:scale-x-110"],
                    [125, "md:active:scale-x-125"],
                    [150, "md:active:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "md:active:scale-y-0"],
                    [50, "md:active:scale-y-50"],
                    [75, "md:active:scale-y-75"],
                    [90, "md:active:scale-y-90"],
                    [95, "md:active:scale-y-95"],
                    [100, "md:active:scale-y-100"],
                    [105, "md:active:scale-y-105"],
                    [110, "md:active:scale-y-110"],
                    [125, "md:active:scale-y-125"],
                    [150, "md:active:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "lg:active:scale-x-0"],
                    [50, "lg:active:scale-x-50"],
                    [75, "lg:active:scale-x-75"],
                    [90, "lg:active:scale-x-90"],
                    [95, "lg:active:scale-x-95"],
                    [100, "lg:active:scale-x-100"],
                    [105, "lg:active:scale-x-105"],
                    [110, "lg:active:scale-x-110"],
                    [125, "lg:active:scale-x-125"],
                    [150, "lg:active:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "lg:active:scale-y-0"],
                    [50, "lg:active:scale-y-50"],
                    [75, "lg:active:scale-y-75"],
                    [90, "lg:active:scale-y-90"],
                    [95, "lg:active:scale-y-95"],
                    [100, "lg:active:scale-y-100"],
                    [105, "lg:active:scale-y-105"],
                    [110, "lg:active:scale-y-110"],
                    [125, "lg:active:scale-y-125"],
                    [150, "lg:active:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xl:active:scale-x-0"],
                    [50, "xl:active:scale-x-50"],
                    [75, "xl:active:scale-x-75"],
                    [90, "xl:active:scale-x-90"],
                    [95, "xl:active:scale-x-95"],
                    [100, "xl:active:scale-x-100"],
                    [105, "xl:active:scale-x-105"],
                    [110, "xl:active:scale-x-110"],
                    [125, "xl:active:scale-x-125"],
                    [150, "xl:active:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xl:active:scale-y-0"],
                    [50, "xl:active:scale-y-50"],
                    [75, "xl:active:scale-y-75"],
                    [90, "xl:active:scale-y-90"],
                    [95, "xl:active:scale-y-95"],
                    [100, "xl:active:scale-y-100"],
                    [105, "xl:active:scale-y-105"],
                    [110, "xl:active:scale-y-110"],
                    [125, "xl:active:scale-y-125"],
                    [150, "xl:active:scale-y-150"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xs:disabled:scale-x-0"],
                    [50, "xs:disabled:scale-x-50"],
                    [75, "xs:disabled:scale-x-75"],
                    [90, "xs:disabled:scale-x-90"],
                    [95, "xs:disabled:scale-x-95"],
                    [100, "xs:disabled:scale-x-100"],
                    [105, "xs:disabled:scale-x-105"],
                    [110, "xs:disabled:scale-x-110"],
                    [125, "xs:disabled:scale-x-125"],
                    [150, "xs:disabled:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xs:disabled:scale-y-0"],
                    [50, "xs:disabled:scale-y-50"],
                    [75, "xs:disabled:scale-y-75"],
                    [90, "xs:disabled:scale-y-90"],
                    [95, "xs:disabled:scale-y-95"],
                    [100, "xs:disabled:scale-y-100"],
                    [105, "xs:disabled:scale-y-105"],
                    [110, "xs:disabled:scale-y-110"],
                    [125, "xs:disabled:scale-y-125"],
                    [150, "xs:disabled:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "sm:disabled:scale-x-0"],
                    [50, "sm:disabled:scale-x-50"],
                    [75, "sm:disabled:scale-x-75"],
                    [90, "sm:disabled:scale-x-90"],
                    [95, "sm:disabled:scale-x-95"],
                    [100, "sm:disabled:scale-x-100"],
                    [105, "sm:disabled:scale-x-105"],
                    [110, "sm:disabled:scale-x-110"],
                    [125, "sm:disabled:scale-x-125"],
                    [150, "sm:disabled:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "sm:disabled:scale-y-0"],
                    [50, "sm:disabled:scale-y-50"],
                    [75, "sm:disabled:scale-y-75"],
                    [90, "sm:disabled:scale-y-90"],
                    [95, "sm:disabled:scale-y-95"],
                    [100, "sm:disabled:scale-y-100"],
                    [105, "sm:disabled:scale-y-105"],
                    [110, "sm:disabled:scale-y-110"],
                    [125, "sm:disabled:scale-y-125"],
                    [150, "sm:disabled:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "md:disabled:scale-x-0"],
                    [50, "md:disabled:scale-x-50"],
                    [75, "md:disabled:scale-x-75"],
                    [90, "md:disabled:scale-x-90"],
                    [95, "md:disabled:scale-x-95"],
                    [100, "md:disabled:scale-x-100"],
                    [105, "md:disabled:scale-x-105"],
                    [110, "md:disabled:scale-x-110"],
                    [125, "md:disabled:scale-x-125"],
                    [150, "md:disabled:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "md:disabled:scale-y-0"],
                    [50, "md:disabled:scale-y-50"],
                    [75, "md:disabled:scale-y-75"],
                    [90, "md:disabled:scale-y-90"],
                    [95, "md:disabled:scale-y-95"],
                    [100, "md:disabled:scale-y-100"],
                    [105, "md:disabled:scale-y-105"],
                    [110, "md:disabled:scale-y-110"],
                    [125, "md:disabled:scale-y-125"],
                    [150, "md:disabled:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "lg:disabled:scale-x-0"],
                    [50, "lg:disabled:scale-x-50"],
                    [75, "lg:disabled:scale-x-75"],
                    [90, "lg:disabled:scale-x-90"],
                    [95, "lg:disabled:scale-x-95"],
                    [100, "lg:disabled:scale-x-100"],
                    [105, "lg:disabled:scale-x-105"],
                    [110, "lg:disabled:scale-x-110"],
                    [125, "lg:disabled:scale-x-125"],
                    [150, "lg:disabled:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "lg:disabled:scale-y-0"],
                    [50, "lg:disabled:scale-y-50"],
                    [75, "lg:disabled:scale-y-75"],
                    [90, "lg:disabled:scale-y-90"],
                    [95, "lg:disabled:scale-y-95"],
                    [100, "lg:disabled:scale-y-100"],
                    [105, "lg:disabled:scale-y-105"],
                    [110, "lg:disabled:scale-y-110"],
                    [125, "lg:disabled:scale-y-125"],
                    [150, "lg:disabled:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xl:disabled:scale-x-0"],
                    [50, "xl:disabled:scale-x-50"],
                    [75, "xl:disabled:scale-x-75"],
                    [90, "xl:disabled:scale-x-90"],
                    [95, "xl:disabled:scale-x-95"],
                    [100, "xl:disabled:scale-x-100"],
                    [105, "xl:disabled:scale-x-105"],
                    [110, "xl:disabled:scale-x-110"],
                    [125, "xl:disabled:scale-x-125"],
                    [150, "xl:disabled:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xl:disabled:scale-y-0"],
                    [50, "xl:disabled:scale-y-50"],
                    [75, "xl:disabled:scale-y-75"],
                    [90, "xl:disabled:scale-y-90"],
                    [95, "xl:disabled:scale-y-95"],
                    [100, "xl:disabled:scale-y-100"],
                    [105, "xl:disabled:scale-y-105"],
                    [110, "xl:disabled:scale-y-110"],
                    [125, "xl:disabled:scale-y-125"],
                    [150, "xl:disabled:scale-y-150"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xs:hover:scale-x-0"],
                    [50, "xs:hover:scale-x-50"],
                    [75, "xs:hover:scale-x-75"],
                    [90, "xs:hover:scale-x-90"],
                    [95, "xs:hover:scale-x-95"],
                    [100, "xs:hover:scale-x-100"],
                    [105, "xs:hover:scale-x-105"],
                    [110, "xs:hover:scale-x-110"],
                    [125, "xs:hover:scale-x-125"],
                    [150, "xs:hover:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xs:hover:scale-y-0"],
                    [50, "xs:hover:scale-y-50"],
                    [75, "xs:hover:scale-y-75"],
                    [90, "xs:hover:scale-y-90"],
                    [95, "xs:hover:scale-y-95"],
                    [100, "xs:hover:scale-y-100"],
                    [105, "xs:hover:scale-y-105"],
                    [110, "xs:hover:scale-y-110"],
                    [125, "xs:hover:scale-y-125"],
                    [150, "xs:hover:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "sm:hover:scale-x-0"],
                    [50, "sm:hover:scale-x-50"],
                    [75, "sm:hover:scale-x-75"],
                    [90, "sm:hover:scale-x-90"],
                    [95, "sm:hover:scale-x-95"],
                    [100, "sm:hover:scale-x-100"],
                    [105, "sm:hover:scale-x-105"],
                    [110, "sm:hover:scale-x-110"],
                    [125, "sm:hover:scale-x-125"],
                    [150, "sm:hover:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "sm:hover:scale-y-0"],
                    [50, "sm:hover:scale-y-50"],
                    [75, "sm:hover:scale-y-75"],
                    [90, "sm:hover:scale-y-90"],
                    [95, "sm:hover:scale-y-95"],
                    [100, "sm:hover:scale-y-100"],
                    [105, "sm:hover:scale-y-105"],
                    [110, "sm:hover:scale-y-110"],
                    [125, "sm:hover:scale-y-125"],
                    [150, "sm:hover:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "md:hover:scale-x-0"],
                    [50, "md:hover:scale-x-50"],
                    [75, "md:hover:scale-x-75"],
                    [90, "md:hover:scale-x-90"],
                    [95, "md:hover:scale-x-95"],
                    [100, "md:hover:scale-x-100"],
                    [105, "md:hover:scale-x-105"],
                    [110, "md:hover:scale-x-110"],
                    [125, "md:hover:scale-x-125"],
                    [150, "md:hover:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "md:hover:scale-y-0"],
                    [50, "md:hover:scale-y-50"],
                    [75, "md:hover:scale-y-75"],
                    [90, "md:hover:scale-y-90"],
                    [95, "md:hover:scale-y-95"],
                    [100, "md:hover:scale-y-100"],
                    [105, "md:hover:scale-y-105"],
                    [110, "md:hover:scale-y-110"],
                    [125, "md:hover:scale-y-125"],
                    [150, "md:hover:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "lg:hover:scale-x-0"],
                    [50, "lg:hover:scale-x-50"],
                    [75, "lg:hover:scale-x-75"],
                    [90, "lg:hover:scale-x-90"],
                    [95, "lg:hover:scale-x-95"],
                    [100, "lg:hover:scale-x-100"],
                    [105, "lg:hover:scale-x-105"],
                    [110, "lg:hover:scale-x-110"],
                    [125, "lg:hover:scale-x-125"],
                    [150, "lg:hover:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "lg:hover:scale-y-0"],
                    [50, "lg:hover:scale-y-50"],
                    [75, "lg:hover:scale-y-75"],
                    [90, "lg:hover:scale-y-90"],
                    [95, "lg:hover:scale-y-95"],
                    [100, "lg:hover:scale-y-100"],
                    [105, "lg:hover:scale-y-105"],
                    [110, "lg:hover:scale-y-110"],
                    [125, "lg:hover:scale-y-125"],
                    [150, "lg:hover:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xl:hover:scale-x-0"],
                    [50, "xl:hover:scale-x-50"],
                    [75, "xl:hover:scale-x-75"],
                    [90, "xl:hover:scale-x-90"],
                    [95, "xl:hover:scale-x-95"],
                    [100, "xl:hover:scale-x-100"],
                    [105, "xl:hover:scale-x-105"],
                    [110, "xl:hover:scale-x-110"],
                    [125, "xl:hover:scale-x-125"],
                    [150, "xl:hover:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xl:hover:scale-y-0"],
                    [50, "xl:hover:scale-y-50"],
                    [75, "xl:hover:scale-y-75"],
                    [90, "xl:hover:scale-y-90"],
                    [95, "xl:hover:scale-y-95"],
                    [100, "xl:hover:scale-y-100"],
                    [105, "xl:hover:scale-y-105"],
                    [110, "xl:hover:scale-y-110"],
                    [125, "xl:hover:scale-y-125"],
                    [150, "xl:hover:scale-y-150"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xs:scale-x-0"],
                    [50, "xs:scale-x-50"],
                    [75, "xs:scale-x-75"],
                    [90, "xs:scale-x-90"],
                    [95, "xs:scale-x-95"],
                    [100, "xs:scale-x-100"],
                    [105, "xs:scale-x-105"],
                    [110, "xs:scale-x-110"],
                    [125, "xs:scale-x-125"],
                    [150, "xs:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xs:scale-y-0"],
                    [50, "xs:scale-y-50"],
                    [75, "xs:scale-y-75"],
                    [90, "xs:scale-y-90"],
                    [95, "xs:scale-y-95"],
                    [100, "xs:scale-y-100"],
                    [105, "xs:scale-y-105"],
                    [110, "xs:scale-y-110"],
                    [125, "xs:scale-y-125"],
                    [150, "xs:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "sm:scale-x-0"],
                    [50, "sm:scale-x-50"],
                    [75, "sm:scale-x-75"],
                    [90, "sm:scale-x-90"],
                    [95, "sm:scale-x-95"],
                    [100, "sm:scale-x-100"],
                    [105, "sm:scale-x-105"],
                    [110, "sm:scale-x-110"],
                    [125, "sm:scale-x-125"],
                    [150, "sm:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "sm:scale-y-0"],
                    [50, "sm:scale-y-50"],
                    [75, "sm:scale-y-75"],
                    [90, "sm:scale-y-90"],
                    [95, "sm:scale-y-95"],
                    [100, "sm:scale-y-100"],
                    [105, "sm:scale-y-105"],
                    [110, "sm:scale-y-110"],
                    [125, "sm:scale-y-125"],
                    [150, "sm:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "md:scale-x-0"],
                    [50, "md:scale-x-50"],
                    [75, "md:scale-x-75"],
                    [90, "md:scale-x-90"],
                    [95, "md:scale-x-95"],
                    [100, "md:scale-x-100"],
                    [105, "md:scale-x-105"],
                    [110, "md:scale-x-110"],
                    [125, "md:scale-x-125"],
                    [150, "md:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "md:scale-y-0"],
                    [50, "md:scale-y-50"],
                    [75, "md:scale-y-75"],
                    [90, "md:scale-y-90"],
                    [95, "md:scale-y-95"],
                    [100, "md:scale-y-100"],
                    [105, "md:scale-y-105"],
                    [110, "md:scale-y-110"],
                    [125, "md:scale-y-125"],
                    [150, "md:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "lg:scale-x-0"],
                    [50, "lg:scale-x-50"],
                    [75, "lg:scale-x-75"],
                    [90, "lg:scale-x-90"],
                    [95, "lg:scale-x-95"],
                    [100, "lg:scale-x-100"],
                    [105, "lg:scale-x-105"],
                    [110, "lg:scale-x-110"],
                    [125, "lg:scale-x-125"],
                    [150, "lg:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "lg:scale-y-0"],
                    [50, "lg:scale-y-50"],
                    [75, "lg:scale-y-75"],
                    [90, "lg:scale-y-90"],
                    [95, "lg:scale-y-95"],
                    [100, "lg:scale-y-100"],
                    [105, "lg:scale-y-105"],
                    [110, "lg:scale-y-110"],
                    [125, "lg:scale-y-125"],
                    [150, "lg:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xl:scale-x-0"],
                    [50, "xl:scale-x-50"],
                    [75, "xl:scale-x-75"],
                    [90, "xl:scale-x-90"],
                    [95, "xl:scale-x-95"],
                    [100, "xl:scale-x-100"],
                    [105, "xl:scale-x-105"],
                    [110, "xl:scale-x-110"],
                    [125, "xl:scale-x-125"],
                    [150, "xl:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xl:scale-y-0"],
                    [50, "xl:scale-y-50"],
                    [75, "xl:scale-y-75"],
                    [90, "xl:scale-y-90"],
                    [95, "xl:scale-y-95"],
                    [100, "xl:scale-y-100"],
                    [105, "xl:scale-y-105"],
                    [110, "xl:scale-y-110"],
                    [125, "xl:scale-y-125"],
                    [150, "xl:scale-y-150"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>([
            [
              "xs",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xs:open:scale-x-0"],
                    [50, "xs:open:scale-x-50"],
                    [75, "xs:open:scale-x-75"],
                    [90, "xs:open:scale-x-90"],
                    [95, "xs:open:scale-x-95"],
                    [100, "xs:open:scale-x-100"],
                    [105, "xs:open:scale-x-105"],
                    [110, "xs:open:scale-x-110"],
                    [125, "xs:open:scale-x-125"],
                    [150, "xs:open:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xs:open:scale-y-0"],
                    [50, "xs:open:scale-y-50"],
                    [75, "xs:open:scale-y-75"],
                    [90, "xs:open:scale-y-90"],
                    [95, "xs:open:scale-y-95"],
                    [100, "xs:open:scale-y-100"],
                    [105, "xs:open:scale-y-105"],
                    [110, "xs:open:scale-y-110"],
                    [125, "xs:open:scale-y-125"],
                    [150, "xs:open:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "sm:open:scale-x-0"],
                    [50, "sm:open:scale-x-50"],
                    [75, "sm:open:scale-x-75"],
                    [90, "sm:open:scale-x-90"],
                    [95, "sm:open:scale-x-95"],
                    [100, "sm:open:scale-x-100"],
                    [105, "sm:open:scale-x-105"],
                    [110, "sm:open:scale-x-110"],
                    [125, "sm:open:scale-x-125"],
                    [150, "sm:open:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "sm:open:scale-y-0"],
                    [50, "sm:open:scale-y-50"],
                    [75, "sm:open:scale-y-75"],
                    [90, "sm:open:scale-y-90"],
                    [95, "sm:open:scale-y-95"],
                    [100, "sm:open:scale-y-100"],
                    [105, "sm:open:scale-y-105"],
                    [110, "sm:open:scale-y-110"],
                    [125, "sm:open:scale-y-125"],
                    [150, "sm:open:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "md:open:scale-x-0"],
                    [50, "md:open:scale-x-50"],
                    [75, "md:open:scale-x-75"],
                    [90, "md:open:scale-x-90"],
                    [95, "md:open:scale-x-95"],
                    [100, "md:open:scale-x-100"],
                    [105, "md:open:scale-x-105"],
                    [110, "md:open:scale-x-110"],
                    [125, "md:open:scale-x-125"],
                    [150, "md:open:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "md:open:scale-y-0"],
                    [50, "md:open:scale-y-50"],
                    [75, "md:open:scale-y-75"],
                    [90, "md:open:scale-y-90"],
                    [95, "md:open:scale-y-95"],
                    [100, "md:open:scale-y-100"],
                    [105, "md:open:scale-y-105"],
                    [110, "md:open:scale-y-110"],
                    [125, "md:open:scale-y-125"],
                    [150, "md:open:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "lg:open:scale-x-0"],
                    [50, "lg:open:scale-x-50"],
                    [75, "lg:open:scale-x-75"],
                    [90, "lg:open:scale-x-90"],
                    [95, "lg:open:scale-x-95"],
                    [100, "lg:open:scale-x-100"],
                    [105, "lg:open:scale-x-105"],
                    [110, "lg:open:scale-x-110"],
                    [125, "lg:open:scale-x-125"],
                    [150, "lg:open:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "lg:open:scale-y-0"],
                    [50, "lg:open:scale-y-50"],
                    [75, "lg:open:scale-y-75"],
                    [90, "lg:open:scale-y-90"],
                    [95, "lg:open:scale-y-95"],
                    [100, "lg:open:scale-y-100"],
                    [105, "lg:open:scale-y-105"],
                    [110, "lg:open:scale-y-110"],
                    [125, "lg:open:scale-y-125"],
                    [150, "lg:open:scale-y-150"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<AxisMapping, Map<FlexScale, string>>([
                [
                  "x",
                  new Map<FlexScale, string>([
                    [0, "xl:open:scale-x-0"],
                    [50, "xl:open:scale-x-50"],
                    [75, "xl:open:scale-x-75"],
                    [90, "xl:open:scale-x-90"],
                    [95, "xl:open:scale-x-95"],
                    [100, "xl:open:scale-x-100"],
                    [105, "xl:open:scale-x-105"],
                    [110, "xl:open:scale-x-110"],
                    [125, "xl:open:scale-x-125"],
                    [150, "xl:open:scale-x-150"],
                  ]),
                ],
                [
                  "y",
                  new Map<FlexScale, string>([
                    [0, "xl:open:scale-y-0"],
                    [50, "xl:open:scale-y-50"],
                    [75, "xl:open:scale-y-75"],
                    [90, "xl:open:scale-y-90"],
                    [95, "xl:open:scale-y-95"],
                    [100, "xl:open:scale-y-100"],
                    [105, "xl:open:scale-y-105"],
                    [110, "xl:open:scale-y-110"],
                    [125, "xl:open:scale-y-125"],
                    [150, "xl:open:scale-y-150"],
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
