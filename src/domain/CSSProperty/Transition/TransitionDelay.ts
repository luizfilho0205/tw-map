import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, TransitionTiming } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class TransitionDelay extends CSSProperty<
  Map<TransitionTiming, string>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<TransitionTiming, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new TransitionClassesMapping();
    return new TransitionDelay(classesMapping, selector);
  }

  public write(delay: TransitionTiming) {
    return this.getClassName(delay);
  }
}

class TransitionClassesMapping
  implements ClassesMapping<Map<TransitionTiming, string>>
{
  private defaultValue: DefaultValue<TransitionTiming, string>;

  constructor() {
    this.defaultValue = new DefaultValue<TransitionTiming, string>(
      0,
      "delay-0"
    );
  }
  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<TransitionTiming, string>>([
        [
          "active",
          new Map<TransitionTiming, string>([
            [0, "active:delay-0"],
            [75, "active:delay-75"],
            [100, "active:delay-100"],
            [150, "active:delay-150"],
            [200, "active:delay-200"],
            [300, "active:delay-300"],
            [500, "active:delay-500"],
            [700, "active:delay-700"],
            [1000, "active:delay-1000"],
          ]),
        ],
        [
          "disabled",
          new Map<TransitionTiming, string>([
            [0, "disabled:delay-0"],
            [75, "disabled:delay-75"],
            [100, "disabled:delay-100"],
            [150, "disabled:delay-150"],
            [200, "disabled:delay-200"],
            [300, "disabled:delay-300"],
            [500, "disabled:delay-500"],
            [700, "disabled:delay-700"],
            [1000, "disabled:delay-1000"],
          ]),
        ],
        [
          "hover",
          new Map<TransitionTiming, string>([
            [0, "hover:delay-0"],
            [75, "hover:delay-75"],
            [100, "hover:delay-100"],
            [150, "hover:delay-150"],
            [200, "hover:delay-200"],
            [300, "hover:delay-300"],
            [500, "hover:delay-500"],
            [700, "hover:delay-700"],
            [1000, "hover:delay-1000"],
          ]),
        ],
        [
          "none",
          new Map<TransitionTiming, string>([
            [0, "delay-0"],
            [75, "delay-75"],
            [100, "delay-100"],
            [150, "delay-150"],
            [200, "delay-200"],
            [300, "delay-300"],
            [500, "delay-500"],
            [700, "delay-700"],
            [1000, "delay-1000"],
          ]),
        ],
        [
          "open",
          new Map<TransitionTiming, string>([
            [0, "open:delay-0"],
            [75, "open:delay-75"],
            [100, "open:delay-100"],
            [150, "open:delay-150"],
            [200, "open:delay-200"],
            [300, "open:delay-300"],
            [500, "open:delay-500"],
            [700, "open:delay-700"],
            [1000, "open:delay-1000"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
