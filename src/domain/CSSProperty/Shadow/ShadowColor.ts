import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { ColorsMapping, CSSSelector } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class ShadowColor extends CSSProperty<Map<ColorsMapping, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<ColorsMapping, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new ShadowClassesMapping();
    return new ShadowColor(classesMapping, selector);
  }

  public write(color: ColorsMapping) {
    return this.getClassName(color);
  }
}

class ShadowClassesMapping
  implements ClassesMapping<Map<ColorsMapping, string>>
{
  private defaultValue: DefaultValue<ColorsMapping, string>;

  constructor() {
    this.defaultValue = new DefaultValue<ColorsMapping, string>(
      "inherit",
      "shadow-inherit"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<ColorsMapping, string>>([
        [
          "active",
          new Map<ColorsMapping, string>([
            ["error", "active:shadow-error"],
            ["inherit", "active:shadow-inherit"],
            ["info", "active:shadow-info"],
            ["primary", "active:shadow-primary"],
            ["secondary", "active:shadow-secondary"],
            ["success", "active:shadow-success"],
            ["transparent", "active:shadow-transparent"],
            ["warning", "active:shadow-warning"],
            ["white", "active:shadow-white"],
          ]),
        ],
        [
          "disabled",
          new Map<ColorsMapping, string>([
            ["error", "disabled:shadow-error"],
            ["inherit", "disabled:shadow-inherit"],
            ["info", "disabled:shadow-info"],
            ["primary", "disabled:shadow-primary"],
            ["secondary", "disabled:shadow-secondary"],
            ["success", "disabled:shadow-success"],
            ["transparent", "disabled:shadow-transparent"],
            ["warning", "disabled:shadow-warning"],
            ["white", "disabled:shadow-white"],
          ]),
        ],
        [
          "hover",
          new Map<ColorsMapping, string>([
            ["error", "hover:shadow-error"],
            ["inherit", "hover:shadow-inherit"],
            ["info", "hover:shadow-info"],
            ["primary", "hover:shadow-primary"],
            ["secondary", "hover:shadow-secondary"],
            ["success", "hover:shadow-success"],
            ["transparent", "hover:shadow-transparent"],
            ["warning", "hover:shadow-warning"],
            ["white", "hover:shadow-white"],
          ]),
        ],
        [
          "none",
          new Map<ColorsMapping, string>([
            ["error", "shadow-error"],
            ["inherit", "shadow-inherit"],
            ["info", "shadow-info"],
            ["primary", "shadow-primary"],
            ["secondary", "shadow-secondary"],
            ["success", "shadow-success"],
            ["transparent", "shadow-transparent"],
            ["warning", "shadow-warning"],
            ["white", "shadow-white"],
          ]),
        ],
        [
          "open",
          new Map<ColorsMapping, string>([
            ["error", "open:shadow-error"],
            ["inherit", "open:shadow-inherit"],
            ["info", "open:shadow-info"],
            ["primary", "open:shadow-primary"],
            ["secondary", "open:shadow-secondary"],
            ["success", "open:shadow-success"],
            ["transparent", "open:shadow-transparent"],
            ["white", "open:shadow-white"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
