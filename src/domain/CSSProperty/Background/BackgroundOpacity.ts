import { DefaultValue } from "./../DefaultValue";
import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, FlexOpacity } from "../../types";

export class BackgroundOpacity extends CSSProperty<Map<FlexOpacity, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<FlexOpacity, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BackgroundOpacityMapping();
    return new BackgroundOpacity(classesMapping, selector);
  }

  public write(opacity: FlexOpacity) {
    return this.getClassName(opacity);
  }
}

class BackgroundOpacityMapping
  implements ClassesMapping<Map<FlexOpacity, string>>
{
  private defaultValue: DefaultValue<FlexOpacity, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexOpacity, string>(
      100,
      "bg-opacity-100"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexOpacity, string>>([
        [
          "active",
          new Map<FlexOpacity, string>([
            [0, "active:bg-opacity-0"],
            [5, "active:bg-opacity-5"],
            [10, "active:bg-opacity-10"],
            [15, "active:bg-opacity-15"],
            [20, "active:bg-opacity-20"],
            [25, "active:bg-opacity-25"],
            [30, "active:bg-opacity-30"],
            [35, "active:bg-opacity-35"],
            [40, "active:bg-opacity-40"],
            [45, "active:bg-opacity-45"],
            [50, "active:bg-opacity-50"],
            [55, "active:bg-opacity-55"],
            [60, "active:bg-opacity-60"],
            [65, "active:bg-opacity-65"],
            [70, "active:bg-opacity-70"],
            [75, "active:bg-opacity-75"],
            [80, "active:bg-opacity-80"],
            [85, "active:bg-opacity-85"],
            [90, "active:bg-opacity-90"],
            [95, "active:bg-opacity-95"],
            [100, "active:bg-opacity-100"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexOpacity, string>([
            [0, "disabled:bg-opacity-0"],
            [5, "disabled:bg-opacity-5"],
            [10, "disabled:bg-opacity-10"],
            [15, "disabled:bg-opacity-15"],
            [20, "disabled:bg-opacity-20"],
            [25, "disabled:bg-opacity-25"],
            [30, "disabled:bg-opacity-30"],
            [35, "disabled:bg-opacity-35"],
            [40, "disabled:bg-opacity-40"],
            [45, "disabled:bg-opacity-45"],
            [50, "disabled:bg-opacity-50"],
            [55, "disabled:bg-opacity-55"],
            [60, "disabled:bg-opacity-60"],
            [65, "disabled:bg-opacity-65"],
            [70, "disabled:bg-opacity-70"],
            [75, "disabled:bg-opacity-75"],
            [80, "disabled:bg-opacity-80"],
            [85, "disabled:bg-opacity-85"],
            [90, "disabled:bg-opacity-90"],
            [95, "disabled:bg-opacity-95"],
            [100, "disabled:bg-opacity-100"],
          ]),
        ],
        [
          "hover",
          new Map<FlexOpacity, string>([
            [0, "hover:bg-opacity-0"],
            [5, "hover:bg-opacity-5"],
            [10, "hover:bg-opacity-10"],
            [15, "hover:bg-opacity-15"],
            [20, "hover:bg-opacity-20"],
            [25, "hover:bg-opacity-25"],
            [30, "hover:bg-opacity-30"],
            [35, "hover:bg-opacity-35"],
            [40, "hover:bg-opacity-40"],
            [45, "hover:bg-opacity-45"],
            [50, "hover:bg-opacity-50"],
            [55, "hover:bg-opacity-55"],
            [60, "hover:bg-opacity-60"],
            [65, "hover:bg-opacity-65"],
            [70, "hover:bg-opacity-70"],
            [75, "hover:bg-opacity-75"],
            [80, "hover:bg-opacity-80"],
            [85, "hover:bg-opacity-85"],
            [90, "hover:bg-opacity-90"],
            [95, "hover:bg-opacity-95"],
            [100, "hover:bg-opacity-100"],
          ]),
        ],
        [
          "none",
          new Map<FlexOpacity, string>([
            [0, "bg-opacity-0"],
            [5, "bg-opacity-5"],
            [10, "bg-opacity-10"],
            [15, "bg-opacity-15"],
            [20, "bg-opacity-20"],
            [25, "bg-opacity-25"],
            [30, "bg-opacity-30"],
            [35, "bg-opacity-35"],
            [40, "bg-opacity-40"],
            [45, "bg-opacity-45"],
            [50, "bg-opacity-50"],
            [55, "bg-opacity-55"],
            [60, "bg-opacity-60"],
            [65, "bg-opacity-65"],
            [70, "bg-opacity-70"],
            [75, "bg-opacity-75"],
            [80, "bg-opacity-80"],
            [85, "bg-opacity-85"],
            [90, "bg-opacity-90"],
            [95, "bg-opacity-95"],
            [100, "bg-opacity-100"],
          ]),
        ],
        [
          "open",
          new Map<FlexOpacity, string>([
            [0, "open:bg-opacity-0"],
            [5, "open:bg-opacity-5"],
            [10, "open:bg-opacity-10"],
            [15, "open:bg-opacity-15"],
            [20, "open:bg-opacity-20"],
            [25, "open:bg-opacity-25"],
            [30, "open:bg-opacity-30"],
            [35, "open:bg-opacity-35"],
            [40, "open:bg-opacity-40"],
            [45, "open:bg-opacity-45"],
            [50, "open:bg-opacity-50"],
            [55, "open:bg-opacity-55"],
            [60, "open:bg-opacity-60"],
            [65, "open:bg-opacity-65"],
            [70, "open:bg-opacity-70"],
            [75, "open:bg-opacity-75"],
            [80, "open:bg-opacity-80"],
            [85, "open:bg-opacity-85"],
            [90, "open:bg-opacity-90"],
            [95, "open:bg-opacity-95"],
            [100, "open:bg-opacity-100"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
