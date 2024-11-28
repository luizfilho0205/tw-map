import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, TransitionProperty } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class Transition extends CSSProperty<Map<TransitionProperty, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<TransitionProperty, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new TransitionClassesMapping();
    return new Transition(classesMapping, selector);
  }

  public write(transition: TransitionProperty) {
    return this.getClassName(transition);
  }
}

class TransitionClassesMapping
  implements ClassesMapping<Map<TransitionProperty, string>>
{
  private defaultValue: DefaultValue<TransitionProperty, string>;

  constructor() {
    this.defaultValue = new DefaultValue<TransitionProperty, string>(
      "all",
      "transition-all"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<TransitionProperty, string>>([
        [
          "active",
          new Map<TransitionProperty, string>([
            ["none", "active:transition-none"],
            ["all", "active:transition-all"],
            ["colors", "active:transition-colors"],
            ["opacity", "active:transition-opacity"],
            ["shadow", "active:transition-shadow"],
            ["transform", "active:transition-transform"],
          ]),
        ],
        [
          "disabled",
          new Map<TransitionProperty, string>([
            ["none", "disabled:transition-none"],
            ["all", "disabled:transition-all"],
            ["colors", "disabled:transition-colors"],
            ["opacity", "disabled:transition-opacity"],
            ["shadow", "disabled:transition-shadow"],
            ["transform", "disabled:transition-transform"],
          ]),
        ],
        [
          "hover",
          new Map<TransitionProperty, string>([
            ["none", "hover:transition-none"],
            ["all", "hover:transition-all"],
            ["colors", "hover:transition-colors"],
            ["opacity", "hover:transition-opacity"],
            ["shadow", "hover:transition-shadow"],
            ["transform", "hover:transition-transform"],
          ]),
        ],
        [
          "none",
          new Map<TransitionProperty, string>([
            ["none", "transition-none"],
            ["all", "transition-all"],
            ["colors", "transition-colors"],
            ["opacity", "transition-opacity"],
            ["shadow", "transition-shadow"],
            ["transform", "transition-transform"],
          ]),
        ],
        [
          "open",
          new Map<TransitionProperty, string>([
            ["none", "open:transition-none"],
            ["all", "open:transition-all"],
            ["colors", "open:transition-colors"],
            ["opacity", "open:transition-opacity"],
            ["shadow", "open:transition-shadow"],
            ["transform", "open:transition-transform"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
