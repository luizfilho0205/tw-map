import { AxisMapping, Breakpoints, CSSSelector, FlexScale } from "../../types";
import { ScaleBreakpoints } from "./ScaleBreakpoints";
import { Axleable } from "../../Entities/Axleable";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";
import { ScaleAxis } from "./ScaleAxis";

export class Scale
  extends Axleable<
    Map<FlexScale, string>,
    Map<AxisMapping, Map<FlexScale, string>>
  >
  implements Breakable<Map<Breakpoints, Map<FlexScale, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexScale, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new ScaleClassesMapping();
    return new Scale(classesMapping, selector);
  }

  public axis() {
    return ScaleAxis.create(this.cssSelector);
  }

  public breakpoints() {
    return ScaleBreakpoints.create(this.cssSelector);
  }

  public write(spacing: FlexScale) {
    return this.getClassName(spacing);
  }
}

class ScaleClassesMapping implements ClassesMapping<Map<FlexScale, string>> {
  private defaultValue: DefaultValue<FlexScale, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexScale, string>(100, "scale-100");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexScale, string>>([
        [
          "active",
          new Map<FlexScale, string>([
            [0, "active:scale-0"],
            [50, "active:scale-50"],
            [75, "active:scale-75"],
            [90, "active:scale-90"],
            [95, "active:scale-95"],
            [100, "active:scale-100"],
            [105, "active:scale-105"],
            [110, "active:scale-110"],
            [125, "active:scale-125"],
            [150, "active:scale-150"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexScale, string>([
            [0, "disabled:scale-0"],
            [50, "disabled:scale-50"],
            [75, "disabled:scale-75"],
            [90, "disabled:scale-90"],
            [95, "disabled:scale-95"],
            [100, "disabled:scale-100"],
            [105, "disabled:scale-105"],
            [110, "disabled:scale-110"],
            [125, "disabled:scale-125"],
            [150, "disabled:scale-150"],
          ]),
        ],
        [
          "hover",
          new Map<FlexScale, string>([
            [0, "hover:scale-0"],
            [50, "hover:scale-50"],
            [75, "hover:scale-75"],
            [90, "hover:scale-90"],
            [95, "hover:scale-95"],
            [100, "hover:scale-100"],
            [105, "hover:scale-105"],
            [110, "hover:scale-110"],
            [125, "hover:scale-125"],
            [150, "hover:scale-150"],
          ]),
        ],
        [
          "none",
          new Map<FlexScale, string>([
            [0, "scale-0"],
            [50, "scale-50"],
            [75, "scale-75"],
            [90, "scale-90"],
            [95, "scale-95"],
            [100, "scale-100"],
            [105, "scale-105"],
            [110, "scale-110"],
            [125, "scale-125"],
            [150, "scale-150"],
          ]),
        ],
        [
          "open",
          new Map<FlexScale, string>([
            [0, "open:scale-0"],
            [50, "open:scale-50"],
            [75, "open:scale-75"],
            [90, "open:scale-90"],
            [95, "open:scale-95"],
            [100, "open:scale-100"],
            [105, "open:scale-105"],
            [110, "open:scale-110"],
            [125, "open:scale-125"],
            [150, "open:scale-150"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
