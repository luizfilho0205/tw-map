import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, TransitionTiming } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class TransitionDuration extends CSSProperty<
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
    return new TransitionDuration(classesMapping, selector);
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
      100,
      "duration-100"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<TransitionTiming, string>>([
        [
          "active",
          new Map<TransitionTiming, string>([
            [0, "active:duration-0"],
            [75, "active:duration-75"],
            [100, "active:duration-100"],
            [150, "active:duration-150"],
            [200, "active:duration-200"],
            [300, "active:duration-300"],
            [500, "active:duration-500"],
            [700, "active:duration-700"],
            [1000, "active:duration-1000"],
          ]),
        ],
        [
          "disabled",
          new Map<TransitionTiming, string>([
            [0, "disabled:duration-0"],
            [75, "disabled:duration-75"],
            [100, "disabled:duration-100"],
            [150, "disabled:duration-150"],
            [200, "disabled:duration-200"],
            [300, "disabled:duration-300"],
            [500, "disabled:duration-500"],
            [700, "disabled:duration-700"],
            [1000, "disabled:duration-1000"],
          ]),
        ],
        [
          "hover",
          new Map<TransitionTiming, string>([
            [0, "hover:duration-0"],
            [75, "hover:duration-75"],
            [100, "hover:duration-100"],
            [150, "hover:duration-150"],
            [200, "hover:duration-200"],
            [300, "hover:duration-300"],
            [500, "hover:duration-500"],
            [700, "hover:duration-700"],
            [1000, "hover:duration-1000"],
          ]),
        ],
        [
          "none",
          new Map<TransitionTiming, string>([
            [0, "duration-0"],
            [75, "duration-75"],
            [100, "duration-100"],
            [150, "duration-150"],
            [200, "duration-200"],
            [300, "duration-300"],
            [500, "duration-500"],
            [700, "duration-700"],
            [1000, "duration-1000"],
          ]),
        ],
        [
          "open",
          new Map<TransitionTiming, string>([
            [0, "open:duration-0"],
            [75, "open:duration-75"],
            [100, "open:duration-100"],
            [150, "open:duration-150"],
            [200, "open:duration-200"],
            [300, "open:duration-300"],
            [500, "open:duration-500"],
            [700, "open:duration-700"],
            [1000, "open:duration-1000"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
