import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { AxisMapping, Breakpoints, CSSSelector, FlexScale } from "../../types";
import { DefaultValue } from "../DefaultValue";
import { Breakable } from "../../Entities/Brekable";
import { ScaleAxisBreakpoints } from "./ScaleAxisBreakpoints";

export class ScaleAxis
  extends CSSProperty<Map<AxisMapping, Map<FlexScale, string>>>
  implements
    Breakable<Map<Breakpoints, Map<AxisMapping, Map<FlexScale, string>>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<AxisMapping, Map<FlexScale, string>>>,
    selector: CSSSelector
  ) {
    super(classesMapping, selector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new ScaleAxisClassesMapping();
    return new ScaleAxis(classesMapping, selector);
  }

  public breakpoints() {
    return ScaleAxisBreakpoints.create(this.cssSelector);
  }

  public write(axis: AxisMapping, scale: FlexScale) {
    return this.getClassName(axis, scale);
  }
}

class ScaleAxisClassesMapping
  implements ClassesMapping<Map<AxisMapping, Map<FlexScale, string>>>
{
  private defaultValue: DefaultValue<AxisMapping, Map<FlexScale, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<AxisMapping, Map<FlexScale, string>>(
      "x",
      new Map<FlexScale, string>([
        [0, "scale-x-0"],
        [50, "scale-x-50"],
        [75, "scale-x-75"],
        [90, "scale-x-90"],
        [95, "scale-x-95"],
        [100, "scale-x-100"],
        [105, "scale-x-105"],
        [110, "scale-x-110"],
        [125, "scale-x-125"],
        [150, "scale-x-150"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<AxisMapping, Map<FlexScale, string>>>([
        [
          "active",
          new Map<AxisMapping, Map<FlexScale, string>>([
            [
              "x",
              new Map<FlexScale, string>([
                [0, "active:scale-x-0"],
                [50, "active:scale-x-50"],
                [75, "active:scale-x-75"],
                [90, "active:scale-x-90"],
                [95, "active:scale-x-95"],
                [100, "active:scale-x-100"],
                [105, "active:scale-x-105"],
                [110, "active:scale-x-110"],
                [125, "active:scale-x-125"],
                [150, "active:scale-x-150"],
              ]),
            ],
            [
              "y",
              new Map<FlexScale, string>([
                [0, "active:scale-y-0"],
                [50, "active:scale-y-50"],
                [75, "active:scale-y-75"],
                [90, "active:scale-y-90"],
                [95, "active:scale-y-95"],
                [100, "active:scale-y-100"],
                [105, "active:scale-y-105"],
                [110, "active:scale-y-110"],
                [125, "active:scale-y-125"],
                [150, "active:scale-y-150"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<AxisMapping, Map<FlexScale, string>>([
            [
              "x",
              new Map<FlexScale, string>([
                [0, "disabled:scale-x-0"],
                [50, "disabled:scale-x-50"],
                [75, "disabled:scale-x-75"],
                [90, "disabled:scale-x-90"],
                [95, "disabled:scale-x-95"],
                [100, "disabled:scale-x-100"],
                [105, "disabled:scale-x-105"],
                [110, "disabled:scale-x-110"],
                [125, "disabled:scale-x-125"],
                [150, "disabled:scale-x-150"],
              ]),
            ],
            [
              "y",
              new Map<FlexScale, string>([
                [0, "disabled:scale-y-0"],
                [50, "disabled:scale-y-50"],
                [75, "disabled:scale-y-75"],
                [90, "disabled:scale-y-90"],
                [95, "disabled:scale-y-95"],
                [100, "disabled:scale-y-100"],
                [105, "disabled:scale-y-105"],
                [110, "disabled:scale-y-110"],
                [125, "disabled:scale-y-125"],
                [150, "disabled:scale-y-150"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<AxisMapping, Map<FlexScale, string>>([
            [
              "x",
              new Map<FlexScale, string>([
                [0, "hover:scale-x-0"],
                [50, "hover:scale-x-50"],
                [75, "hover:scale-x-75"],
                [90, "hover:scale-x-90"],
                [95, "hover:scale-x-95"],
                [100, "hover:scale-x-100"],
                [105, "hover:scale-x-105"],
                [110, "hover:scale-x-110"],
                [125, "hover:scale-x-125"],
                [150, "hover:scale-x-150"],
              ]),
            ],
            [
              "y",
              new Map<FlexScale, string>([
                [0, "hover:scale-y-0"],
                [50, "hover:scale-y-50"],
                [75, "hover:scale-y-75"],
                [90, "hover:scale-y-90"],
                [95, "hover:scale-y-95"],
                [100, "hover:scale-y-100"],
                [105, "hover:scale-y-105"],
                [110, "hover:scale-y-110"],
                [125, "hover:scale-y-125"],
                [150, "hover:scale-y-150"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<AxisMapping, Map<FlexScale, string>>([
            [
              "x",
              new Map<FlexScale, string>([
                [0, "scale-x-0"],
                [50, "scale-x-50"],
                [75, "scale-x-75"],
                [90, "scale-x-90"],
                [95, "scale-x-95"],
                [100, "scale-x-100"],
                [105, "scale-x-105"],
                [110, "scale-x-110"],
                [125, "scale-x-125"],
                [150, "scale-x-150"],
              ]),
            ],
            [
              "y",
              new Map<FlexScale, string>([
                [0, "scale-y-0"],
                [50, "scale-y-50"],
                [75, "scale-y-75"],
                [90, "scale-y-90"],
                [95, "scale-y-95"],
                [100, "scale-y-100"],
                [105, "scale-y-105"],
                [110, "scale-y-110"],
                [125, "scale-y-125"],
                [150, "scale-y-150"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<AxisMapping, Map<FlexScale, string>>([
            [
              "x",
              new Map<FlexScale, string>([
                [0, "open:scale-x-0"],
                [50, "open:scale-x-50"],
                [75, "open:scale-x-75"],
                [90, "open:scale-x-90"],
                [95, "open:scale-x-95"],
                [100, "open:scale-x-100"],
                [105, "open:scale-x-105"],
                [110, "open:scale-x-110"],
                [125, "open:scale-x-125"],
                [150, "open:scale-x-150"],
              ]),
            ],
            [
              "y",
              new Map<FlexScale, string>([
                [0, "open:scale-y-0"],
                [50, "open:scale-y-50"],
                [75, "open:scale-y-75"],
                [90, "open:scale-y-90"],
                [95, "open:scale-y-95"],
                [100, "open:scale-y-100"],
                [105, "open:scale-y-105"],
                [110, "open:scale-y-110"],
                [125, "open:scale-y-125"],
                [150, "open:scale-y-150"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
