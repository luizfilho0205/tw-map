import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { ColorsMapping, CSSSelector } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class BorderColor extends CSSProperty<Map<ColorsMapping, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<ColorsMapping, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderColorMapping();
    return new BorderColor(classesMapping, selector);
  }

  public write(color: ColorsMapping) {
    return this.getClassName(color);
  }
}

class BorderColorMapping implements ClassesMapping<Map<ColorsMapping, string>> {
  private defaultValue: DefaultValue<ColorsMapping, string>;

  constructor() {
    this.defaultValue = new DefaultValue<ColorsMapping, string>(
      "transparent",
      "border-transparent"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<ColorsMapping, string>>([
        [
          "active",
          new Map<ColorsMapping, string>([
            ["error", "active:border-error"],
            ["inherit", "active:border-inherit"],
            ["info", "active:border-info"],
            ["primary", "active:border-primary"],
            ["secondary", "active:border-secondary"],
            ["success", "active:border-success"],
            ["transparent", "active:border-transparent"],
            ["warning", "active:border-warning"],
            ["white", "active:border-white"],
          ]),
        ],
        [
          "disabled",
          new Map<ColorsMapping, string>([
            ["error", "disabled:border-error"],
            ["inherit", "disabled:border-inherit"],
            ["info", "disabled:border-info"],
            ["primary", "disabled:border-primary"],
            ["secondary", "disabled:border-secondary"],
            ["success", "disabled:border-success"],
            ["transparent", "disabled:border-transparent"],
            ["warning", "disabled:border-warning"],
            ["white", "disabled:border-white"],
          ]),
        ],
        [
          "hover",
          new Map<ColorsMapping, string>([
            ["error", "hover:border-error"],
            ["inherit", "hover:border-inherit"],
            ["info", "hover:border-info"],
            ["primary", "hover:border-primary"],
            ["secondary", "hover:border-secondary"],
            ["success", "hover:border-success"],
            ["transparent", "hover:border-transparent"],
            ["warning", "hover:border-warning"],
            ["white", "hover:border-white"],
          ]),
        ],
        [
          "none",
          new Map<ColorsMapping, string>([
            ["error", "border-error"],
            ["inherit", "border-inherit"],
            ["info", "border-info"],
            ["primary", "border-primary"],
            ["secondary", "border-secondary"],
            ["success", "border-success"],
            ["transparent", "border-transparent"],
            ["warning", "border-warning"],
            ["white", "border-white"],
          ]),
        ],
        [
          "open",
          new Map<ColorsMapping, string>([
            ["error", "open:border-error"],
            ["inherit", "open:border-inherit"],
            ["info", "open:border-info"],
            ["primary", "open:border-primary"],
            ["secondary", "open:border-secondary"],
            ["success", "open:border-success"],
            ["transparent", "open:border-transparent"],
            ["warning", "open:border-warning"],
            ["white", "open:border-white"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
