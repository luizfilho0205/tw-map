import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, FlexOpacity } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class BorderOpacity extends CSSProperty<Map<FlexOpacity, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<FlexOpacity, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderOpacityMapping();
    return new BorderOpacity(classesMapping, selector);
  }

  public write(opacity: FlexOpacity) {
    return this.getClassName(opacity);
  }
}
class BorderOpacityMapping implements ClassesMapping<Map<FlexOpacity, string>> {
  private defaultValue: DefaultValue<FlexOpacity, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexOpacity, string>(
      100,
      "border-opacity-100"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexOpacity, string>>([
        [
          "active",
          new Map<FlexOpacity, string>([
            [0, "active:border-opacity-0"],
            [5, "active:border-opacity-5"],
            [10, "active:border-opacity-10"],
            [15, "active:border-opacity-15"],
            [20, "active:border-opacity-20"],
            [25, "active:border-opacity-25"],
            [30, "active:border-opacity-30"],
            [35, "active:border-opacity-35"],
            [40, "active:border-opacity-40"],
            [45, "active:border-opacity-45"],
            [50, "active:border-opacity-50"],
            [55, "active:border-opacity-55"],
            [60, "active:border-opacity-60"],
            [65, "active:border-opacity-65"],
            [70, "active:border-opacity-70"],
            [75, "active:border-opacity-75"],
            [80, "active:border-opacity-80"],
            [85, "active:border-opacity-85"],
            [90, "active:border-opacity-90"],
            [95, "active:border-opacity-95"],
            [100, "active:border-opacity-100"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexOpacity, string>([
            [0, "disabled:border-opacity-0"],
            [5, "disabled:border-opacity-5"],
            [10, "disabled:border-opacity-10"],
            [15, "disabled:border-opacity-15"],
            [20, "disabled:border-opacity-20"],
            [25, "disabled:border-opacity-25"],
            [30, "disabled:border-opacity-30"],
            [35, "disabled:border-opacity-35"],
            [40, "disabled:border-opacity-40"],
            [45, "disabled:border-opacity-45"],
            [50, "disabled:border-opacity-50"],
            [55, "disabled:border-opacity-55"],
            [60, "disabled:border-opacity-60"],
            [65, "disabled:border-opacity-65"],
            [70, "disabled:border-opacity-70"],
            [75, "disabled:border-opacity-75"],
            [80, "disabled:border-opacity-80"],
            [85, "disabled:border-opacity-85"],
            [90, "disabled:border-opacity-90"],
            [95, "disabled:border-opacity-95"],
            [100, "disabled:border-opacity-100"],
          ]),
        ],
        [
          "hover",
          new Map<FlexOpacity, string>([
            [0, "hover:border-opacity-0"],
            [5, "hover:border-opacity-5"],
            [10, "hover:border-opacity-10"],
            [15, "hover:border-opacity-15"],
            [20, "hover:border-opacity-20"],
            [25, "hover:border-opacity-25"],
            [30, "hover:border-opacity-30"],
            [35, "hover:border-opacity-35"],
            [40, "hover:border-opacity-40"],
            [45, "hover:border-opacity-45"],
            [50, "hover:border-opacity-50"],
            [55, "hover:border-opacity-55"],
            [60, "hover:border-opacity-60"],
            [65, "hover:border-opacity-65"],
            [70, "hover:border-opacity-70"],
            [75, "hover:border-opacity-75"],
            [80, "hover:border-opacity-80"],
            [85, "hover:border-opacity-85"],
            [90, "hover:border-opacity-90"],
            [95, "hover:border-opacity-95"],
            [100, "hover:border-opacity-100"],
          ]),
        ],
        [
          "none",
          new Map<FlexOpacity, string>([
            [0, "border-opacity-0"],
            [5, "border-opacity-5"],
            [10, "border-opacity-10"],
            [15, "border-opacity-15"],
            [20, "border-opacity-20"],
            [25, "border-opacity-25"],
            [30, "border-opacity-30"],
            [35, "border-opacity-35"],
            [40, "border-opacity-40"],
            [45, "border-opacity-45"],
            [50, "border-opacity-50"],
            [55, "border-opacity-55"],
            [60, "border-opacity-60"],
            [65, "border-opacity-65"],
            [70, "border-opacity-70"],
            [75, "border-opacity-75"],
            [80, "border-opacity-80"],
            [85, "border-opacity-85"],
            [90, "border-opacity-90"],
            [95, "border-opacity-95"],
            [100, "border-opacity-100"],
          ]),
        ],
        [
          "open",
          new Map<FlexOpacity, string>([
            [0, "open:border-opacity-0"],
            [5, "open:border-opacity-5"],
            [10, "open:border-opacity-10"],
            [15, "open:border-opacity-15"],
            [20, "open:border-opacity-20"],
            [25, "open:border-opacity-25"],
            [30, "open:border-opacity-30"],
            [35, "open:border-opacity-35"],
            [40, "open:border-opacity-40"],
            [45, "open:border-opacity-45"],
            [50, "open:border-opacity-50"],
            [55, "open:border-opacity-55"],
            [60, "open:border-opacity-60"],
            [65, "open:border-opacity-65"],
            [70, "open:border-opacity-70"],
            [75, "open:border-opacity-75"],
            [80, "open:border-opacity-80"],
            [85, "open:border-opacity-85"],
            [90, "open:border-opacity-90"],
            [95, "open:border-opacity-95"],
            [100, "open:border-opacity-100"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
