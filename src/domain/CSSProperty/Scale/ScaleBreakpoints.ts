import { Axleable } from "../../Entities/Axleable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { AxisMapping, Breakpoints, CSSSelector, FlexScale } from "../../types";
import { DefaultValue } from "../DefaultValue";
import { ScaleAxisBreakpoints } from "./ScaleAxisBreakpoints";

export class ScaleBreakpoints extends Axleable<
  Map<Breakpoints, Map<FlexScale, string>>,
  Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<FlexScale, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new ScaleClassesMapping();
    return new ScaleBreakpoints(classesMapping, selector);
  }

  public axis() {
    return ScaleAxisBreakpoints.create(this.cssSelector);
  }

  public write(breakpoint: Breakpoints, spacing: FlexScale) {
    return this.getClassName(breakpoint, spacing);
  }
}

class ScaleClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexScale, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexScale, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<Breakpoints, Map<FlexScale, string>>(
      "xs",
      new Map<FlexScale, string>([
        [0, "xs:scale-0"],
        [50, "xs:scale-50"],
        [75, "xs:scale-75"],
        [90, "xs:scale-90"],
        [95, "xs:scale-95"],
        [100, "xs:scale-100"],
        [105, "xs:scale-105"],
        [110, "xs:scale-110"],
        [125, "xs:scale-125"],
        [150, "xs:scale-150"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexScale, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexScale, string>>([
            [
              "xs",
              new Map<FlexScale, string>([
                [0, "xs:active:scale-0"],
                [50, "xs:active:scale-50"],
                [75, "xs:active:scale-75"],
                [90, "xs:active:scale-90"],
                [95, "xs:active:scale-95"],
                [100, "xs:active:scale-100"],
                [105, "xs:active:scale-105"],
                [110, "xs:active:scale-110"],
                [125, "xs:active:scale-125"],
                [150, "xs:active:scale-150"],
              ]),
            ],
            [
              "sm",
              new Map<FlexScale, string>([
                [0, "sm:active:scale-0"],
                [50, "sm:active:scale-50"],
                [75, "sm:active:scale-75"],
                [90, "sm:active:scale-90"],
                [95, "sm:active:scale-95"],
                [100, "sm:active:scale-100"],
                [105, "sm:active:scale-105"],
                [110, "sm:active:scale-110"],
                [125, "sm:active:scale-125"],
                [150, "sm:active:scale-150"],
              ]),
            ],
            [
              "md",
              new Map<FlexScale, string>([
                [0, "md:active:scale-0"],
                [50, "md:active:scale-50"],
                [75, "md:active:scale-75"],
                [90, "md:active:scale-90"],
                [95, "md:active:scale-95"],
                [100, "md:active:scale-100"],
                [105, "md:active:scale-105"],
                [110, "md:active:scale-110"],
                [125, "md:active:scale-125"],
                [150, "md:active:scale-150"],
              ]),
            ],
            [
              "lg",
              new Map<FlexScale, string>([
                [0, "lg:active:scale-0"],
                [50, "lg:active:scale-50"],
                [75, "lg:active:scale-75"],
                [90, "lg:active:scale-90"],
                [95, "lg:active:scale-95"],
                [100, "lg:active:scale-100"],
                [105, "lg:active:scale-105"],
                [110, "lg:active:scale-110"],
                [125, "lg:active:scale-125"],
                [150, "lg:active:scale-150"],
              ]),
            ],
            [
              "xl",
              new Map<FlexScale, string>([
                [0, "xl:active:scale-0"],
                [50, "xl:active:scale-50"],
                [75, "xl:active:scale-75"],
                [90, "xl:active:scale-90"],
                [95, "xl:active:scale-95"],
                [100, "xl:active:scale-100"],
                [105, "xl:active:scale-105"],
                [110, "xl:active:scale-110"],
                [125, "xl:active:scale-125"],
                [150, "xl:active:scale-150"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<FlexScale, string>>([
            [
              "xs",
              new Map<FlexScale, string>([
                [0, "xs:disabled:scale-0"],
                [50, "xs:disabled:scale-50"],
                [75, "xs:disabled:scale-75"],
                [90, "xs:disabled:scale-90"],
                [95, "xs:disabled:scale-95"],
                [100, "xs:disabled:scale-100"],
                [105, "xs:disabled:scale-105"],
                [110, "xs:disabled:scale-110"],
                [125, "xs:disabled:scale-125"],
                [150, "xs:disabled:scale-150"],
              ]),
            ],
            [
              "sm",
              new Map<FlexScale, string>([
                [0, "sm:disabled:scale-0"],
                [50, "sm:disabled:scale-50"],
                [75, "sm:disabled:scale-75"],
                [90, "sm:disabled:scale-90"],
                [95, "sm:disabled:scale-95"],
                [100, "sm:disabled:scale-100"],
                [105, "sm:disabled:scale-105"],
                [110, "sm:disabled:scale-110"],
                [125, "sm:disabled:scale-125"],
                [150, "sm:disabled:scale-150"],
              ]),
            ],
            [
              "md",
              new Map<FlexScale, string>([
                [0, "md:disabled:scale-0"],
                [50, "md:disabled:scale-50"],
                [75, "md:disabled:scale-75"],
                [90, "md:disabled:scale-90"],
                [95, "md:disabled:scale-95"],
                [100, "md:disabled:scale-100"],
                [105, "md:disabled:scale-105"],
                [110, "md:disabled:scale-110"],
                [125, "md:disabled:scale-125"],
                [150, "md:disabled:scale-150"],
              ]),
            ],
            [
              "lg",
              new Map<FlexScale, string>([
                [0, "lg:disabled:scale-0"],
                [50, "lg:disabled:scale-50"],
                [75, "lg:disabled:scale-75"],
                [90, "lg:disabled:scale-90"],
                [95, "lg:disabled:scale-95"],
                [100, "lg:disabled:scale-100"],
                [105, "lg:disabled:scale-105"],
                [110, "lg:disabled:scale-110"],
                [125, "lg:disabled:scale-125"],
                [150, "lg:disabled:scale-150"],
              ]),
            ],
            [
              "xl",
              new Map<FlexScale, string>([
                [0, "xl:disabled:scale-0"],
                [50, "xl:disabled:scale-50"],
                [75, "xl:disabled:scale-75"],
                [90, "xl:disabled:scale-90"],
                [95, "xl:disabled:scale-95"],
                [100, "xl:disabled:scale-100"],
                [105, "xl:disabled:scale-105"],
                [110, "xl:disabled:scale-110"],
                [125, "xl:disabled:scale-125"],
                [150, "xl:disabled:scale-150"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexScale, string>>([
            [
              "xs",
              new Map<FlexScale, string>([
                [0, "xs:hover:scale-0"],
                [50, "xs:hover:scale-50"],
                [75, "xs:hover:scale-75"],
                [90, "xs:hover:scale-90"],
                [95, "xs:hover:scale-95"],
                [100, "xs:hover:scale-100"],
                [105, "xs:hover:scale-105"],
                [110, "xs:hover:scale-110"],
                [125, "xs:hover:scale-125"],
                [150, "xs:hover:scale-150"],
              ]),
            ],
            [
              "sm",
              new Map<FlexScale, string>([
                [0, "sm:hover:scale-0"],
                [50, "sm:hover:scale-50"],
                [75, "sm:hover:scale-75"],
                [90, "sm:hover:scale-90"],
                [95, "sm:hover:scale-95"],
                [100, "sm:hover:scale-100"],
                [105, "sm:hover:scale-105"],
                [110, "sm:hover:scale-110"],
                [125, "sm:hover:scale-125"],
                [150, "sm:hover:scale-150"],
              ]),
            ],
            [
              "md",
              new Map<FlexScale, string>([
                [0, "md:hover:scale-0"],
                [50, "md:hover:scale-50"],
                [75, "md:hover:scale-75"],
                [90, "md:hover:scale-90"],
                [95, "md:hover:scale-95"],
                [100, "md:hover:scale-100"],
                [105, "md:hover:scale-105"],
                [110, "md:hover:scale-110"],
                [125, "md:hover:scale-125"],
                [150, "md:hover:scale-150"],
              ]),
            ],
            [
              "lg",
              new Map<FlexScale, string>([
                [0, "lg:hover:scale-0"],
                [50, "lg:hover:scale-50"],
                [75, "lg:hover:scale-75"],
                [90, "lg:hover:scale-90"],
                [95, "lg:hover:scale-95"],
                [100, "lg:hover:scale-100"],
                [105, "lg:hover:scale-105"],
                [110, "lg:hover:scale-110"],
                [125, "lg:hover:scale-125"],
                [150, "lg:hover:scale-150"],
              ]),
            ],
            [
              "xl",
              new Map<FlexScale, string>([
                [0, "xl:hover:scale-0"],
                [50, "xl:hover:scale-50"],
                [75, "xl:hover:scale-75"],
                [90, "xl:hover:scale-90"],
                [95, "xl:hover:scale-95"],
                [100, "xl:hover:scale-100"],
                [105, "xl:hover:scale-105"],
                [110, "xl:hover:scale-110"],
                [125, "xl:hover:scale-125"],
                [150, "xl:hover:scale-150"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexScale, string>>([
            [
              "xs",
              new Map<FlexScale, string>([
                [0, "xs:scale-0"],
                [50, "xs:scale-50"],
                [75, "xs:scale-75"],
                [90, "xs:scale-90"],
                [95, "xs:scale-95"],
                [100, "xs:scale-100"],
                [105, "xs:scale-105"],
                [110, "xs:scale-110"],
                [125, "xs:scale-125"],
                [150, "xs:scale-150"],
              ]),
            ],
            [
              "sm",
              new Map<FlexScale, string>([
                [0, "sm:scale-0"],
                [50, "sm:scale-50"],
                [75, "sm:scale-75"],
                [90, "sm:scale-90"],
                [95, "sm:scale-95"],
                [100, "sm:scale-100"],
                [105, "sm:scale-105"],
                [110, "sm:scale-110"],
                [125, "sm:scale-125"],
                [150, "sm:scale-150"],
              ]),
            ],
            [
              "md",
              new Map<FlexScale, string>([
                [0, "md:scale-0"],
                [50, "md:scale-50"],
                [75, "md:scale-75"],
                [90, "md:scale-90"],
                [95, "md:scale-95"],
                [100, "md:scale-100"],
                [105, "md:scale-105"],
                [110, "md:scale-110"],
                [125, "md:scale-125"],
                [150, "md:scale-150"],
              ]),
            ],
            [
              "lg",
              new Map<FlexScale, string>([
                [0, "lg:scale-0"],
                [50, "lg:scale-50"],
                [75, "lg:scale-75"],
                [90, "lg:scale-90"],
                [95, "lg:scale-95"],
                [100, "lg:scale-100"],
                [105, "lg:scale-105"],
                [110, "lg:scale-110"],
                [125, "lg:scale-125"],
                [150, "lg:scale-150"],
              ]),
            ],
            [
              "xl",
              new Map<FlexScale, string>([
                [0, "xl:scale-0"],
                [50, "xl:scale-50"],
                [75, "xl:scale-75"],
                [90, "xl:scale-90"],
                [95, "xl:scale-95"],
                [100, "xl:scale-100"],
                [105, "xl:scale-105"],
                [110, "xl:scale-110"],
                [125, "xl:scale-125"],
                [150, "xl:scale-150"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexScale, string>>([
            [
              "xs",
              new Map<FlexScale, string>([
                [0, "xs:open:scale-0"],
                [50, "xs:open:scale-50"],
                [75, "xs:open:scale-75"],
                [90, "xs:open:scale-90"],
                [95, "xs:open:scale-95"],
                [100, "xs:open:scale-100"],
                [105, "xs:open:scale-105"],
                [110, "xs:open:scale-110"],
                [125, "xs:open:scale-125"],
                [150, "xs:open:scale-150"],
              ]),
            ],
            [
              "sm",
              new Map<FlexScale, string>([
                [0, "sm:open:scale-0"],
                [50, "sm:open:scale-50"],
                [75, "sm:open:scale-75"],
                [90, "sm:open:scale-90"],
                [95, "sm:open:scale-95"],
                [100, "sm:open:scale-100"],
                [105, "sm:open:scale-105"],
                [110, "sm:open:scale-110"],
                [125, "sm:open:scale-125"],
                [150, "sm:open:scale-150"],
              ]),
            ],
            [
              "md",
              new Map<FlexScale, string>([
                [0, "md:open:scale-0"],
                [50, "md:open:scale-50"],
                [75, "md:open:scale-75"],
                [90, "md:open:scale-90"],
                [95, "md:open:scale-95"],
                [100, "md:open:scale-100"],
                [105, "md:open:scale-105"],
                [110, "md:open:scale-110"],
                [125, "md:open:scale-125"],
                [150, "md:open:scale-150"],
              ]),
            ],
            [
              "lg",
              new Map<FlexScale, string>([
                [0, "lg:open:scale-0"],
                [50, "lg:open:scale-50"],
                [75, "lg:open:scale-75"],
                [90, "lg:open:scale-90"],
                [95, "lg:open:scale-95"],
                [100, "lg:open:scale-100"],
                [105, "lg:open:scale-105"],
                [110, "lg:open:scale-110"],
                [125, "lg:open:scale-125"],
                [150, "lg:open:scale-150"],
              ]),
            ],
            [
              "xl",
              new Map<FlexScale, string>([
                [0, "xl:open:scale-0"],
                [50, "xl:open:scale-50"],
                [75, "xl:open:scale-75"],
                [90, "xl:open:scale-90"],
                [95, "xl:open:scale-95"],
                [100, "xl:open:scale-100"],
                [105, "xl:open:scale-105"],
                [110, "xl:open:scale-110"],
                [125, "xl:open:scale-125"],
                [150, "xl:open:scale-150"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
