import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { ColorsMapping, CSSSelector } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class BackgroundColor extends CSSProperty<Map<ColorsMapping, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<ColorsMapping, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BackgroundColorMapping();
    return new BackgroundColor(classesMapping, selector);
  }

  public write(color: ColorsMapping) {
    return this.getClassName(color);
  }
}

class BackgroundColorMapping
  implements ClassesMapping<Map<ColorsMapping, string>>
{
  private defaultValue: DefaultValue<ColorsMapping, string>;

  constructor() {
    this.defaultValue = new DefaultValue<ColorsMapping, string>(
      "transparent",
      "bg-transparent"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<ColorsMapping, string>>([
        [
          "active",
          new Map<ColorsMapping, string>([
            ["error", "active:bg-error"],
            ["inherit", "active:bg-inherit"],
            ["info", "active:bg-info"],
            ["primary", "active:bg-primary"],
            ["secondary", "active:bg-secondary"],
            ["success", "active:bg-success"],
            ["transparent", "active:bg-transparent"],
            ["warning", "active:bg-warning"],
            ["white", "active:bg-white"],
          ]),
        ],
        [
          "disabled",
          new Map<ColorsMapping, string>([
            ["error", "disabled:bg-error"],
            ["inherit", "disabled:bg-inherit"],
            ["info", "disabled:bg-info"],
            ["primary", "disabled:bg-primary"],
            ["secondary", "disabled:bg-secondary"],
            ["success", "disabled:bg-success"],
            ["transparent", "disabled:bg-transparent"],
            ["warning", "disabled:bg-warning"],
            ["white", "disabled:bg-white"],
          ]),
        ],
        [
          "hover",
          new Map<ColorsMapping, string>([
            ["error", "hover:bg-error"],
            ["inherit", "hover:bg-inherit"],
            ["info", "hover:bg-info"],
            ["primary", "hover:bg-primary"],
            ["secondary", "hover:bg-secondary"],
            ["success", "hover:bg-success"],
            ["transparent", "hover:bg-transparent"],
            ["warning", "hover:bg-warning"],
            ["white", "hover:bg-white"],
          ]),
        ],
        [
          "none",
          new Map<ColorsMapping, string>([
            ["error", "bg-error"],
            ["inherit", "bg-inherit"],
            ["info", "bg-info"],
            ["primary", "bg-primary"],
            ["secondary", "bg-secondary"],
            ["success", "bg-success"],
            ["transparent", "bg-transparent"],
            ["warning", "bg-warning"],
            ["white", "bg-white"],
          ]),
        ],
        [
          "open",
          new Map<ColorsMapping, string>([
            ["error", "open:bg-error"],
            ["inherit", "open:bg-inherit"],
            ["info", "open:bg-info"],
            ["primary", "open:bg-primary"],
            ["secondary", "open:bg-secondary"],
            ["success", "open:bg-success"],
            ["transparent", "open:bg-transparent"],
            ["warning", "open:bg-warning"],
            ["white", "open:bg-white"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
