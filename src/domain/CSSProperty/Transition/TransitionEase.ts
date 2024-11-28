import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, TransitionFunction } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class TransitionEase extends CSSProperty<
  Map<TransitionFunction, string>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<TransitionFunction, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new TransitionClassesMapping();
    return new TransitionEase(classesMapping, selector);
  }

  public write(ease: TransitionFunction) {
    return this.getClassName(ease);
  }
}

class TransitionClassesMapping
  implements ClassesMapping<Map<TransitionFunction, string>>
{
  private defaultValue: DefaultValue<TransitionFunction, string>;

  constructor() {
    this.defaultValue = new DefaultValue<TransitionFunction, string>(
      "linear",
      "ease-linear"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<TransitionFunction, string>>([
        [
          "active",
          new Map<TransitionFunction, string>([
            ["in", "active:ease-in"],
            ["in-out", "active:ease-in-out"],
            ["linear", "active:ease-linear"],
            ["out", "active:ease-out"],
          ]),
        ],
        [
          "disabled",
          new Map<TransitionFunction, string>([
            ["in", "disabled:ease-in"],
            ["in-out", "disabled:ease-in-out"],
            ["linear", "disabled:ease-linear"],
            ["out", "disabled:ease-out"],
          ]),
        ],
        [
          "hover",
          new Map<TransitionFunction, string>([
            ["in", "hover:ease-in"],
            ["in-out", "hover:ease-in-out"],
            ["linear", "hover:ease-linear"],
            ["out", "hover:ease-out"],
          ]),
        ],
        [
          "none",
          new Map<TransitionFunction, string>([
            ["in", "ease-in"],
            ["in-out", "ease-in-out"],
            ["linear", "ease-linear"],
            ["out", "ease-out"],
          ]),
        ],
        [
          "open",
          new Map<TransitionFunction, string>([
            ["in", "open:ease-in"],
            ["in-out", "open:ease-in-out"],
            ["linear", "open:ease-linear"],
            ["out", "open:ease-out"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
