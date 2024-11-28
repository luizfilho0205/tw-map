import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { ColorsMapping, CSSSelector } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class TextColor extends CSSProperty<Map<ColorsMapping, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<ColorsMapping, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new TextColorClassesMapping();
    return new TextColor(classesMapping, selector);
  }

  public write(color: ColorsMapping) {
    return this.getClassName(color);
  }
}

class TextColorClassesMapping
  implements ClassesMapping<Map<ColorsMapping, string>>
{
  private defaultValue: DefaultValue<ColorsMapping, string>;

  constructor() {
    this.defaultValue = new DefaultValue<ColorsMapping, string>(
      "inherit",
      "text-inherit"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<ColorsMapping, string>>([
        [
          "active",
          new Map<ColorsMapping, string>([
            ["error", "active:text-error"],
            ["inherit", "active:text-inherit"],
            ["info", "active:text-info"],
            ["primary", "active:text-primary"],
            ["secondary", "active:text-secondary"],
            ["success", "active:text-success"],
            ["warning", "active:text-warning"],
          ]),
        ],
        [
          "disabled",
          new Map<ColorsMapping, string>([
            ["error", "disabled:text-error"],
            ["inherit", "disabled:text-inherit"],
            ["info", "disabled:text-info"],
            ["primary", "disabled:text-primary"],
            ["secondary", "disabled:text-secondary"],
            ["success", "disabled:text-success"],
            ["warning", "disabled:text-warning"],
          ]),
        ],
        [
          "hover",
          new Map<ColorsMapping, string>([
            ["error", "hover:text-error"],
            ["inherit", "hover:text-inherit"],
            ["info", "hover:text-info"],
            ["primary", "hover:text-primary"],
            ["secondary", "hover:text-secondary"],
            ["success", "hover:text-success"],
            ["warning", "hover:text-warning"],
          ]),
        ],
        [
          "none",
          new Map<ColorsMapping, string>([
            ["error", "text-error"],
            ["inherit", "text-inherit"],
            ["info", "text-info"],
            ["primary", "text-primary"],
            ["secondary", "text-secondary"],
            ["success", "text-success"],
            ["warning", "text-warning"],
          ]),
        ],
        [
          "open",
          new Map<ColorsMapping, string>([
            ["error", "open:text-error"],
            ["inherit", "open:text-inherit"],
            ["info", "open:text-info"],
            ["primary", "open:text-primary"],
            ["secondary", "open:text-secondary"],
            ["success", "open:text-success"],
            ["warning", "open:text-warning"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
