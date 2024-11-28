import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { BorderStyleMapping, CSSSelector } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class BorderStyle extends CSSProperty<Map<BorderStyleMapping, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<BorderStyleMapping, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderStyleClassesMapping();
    return new BorderStyle(classesMapping, selector);
  }

  public write(style: BorderStyleMapping) {
    return this.getClassName(style);
  }
}

class BorderStyleClassesMapping
  implements ClassesMapping<Map<BorderStyleMapping, string>>
{
  private defaultValue: DefaultValue<BorderStyleMapping, string>;

  constructor() {
    this.defaultValue = new DefaultValue<BorderStyleMapping, string>(
      "none",
      "border-none"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<BorderStyleMapping, string>>([
        [
          "active",
          new Map<BorderStyleMapping, string>([
            ["dashed", "active:border-dashed"],
            ["dotted", "active:border-dotted"],
            ["double", "active:border-double"],
            ["hidden", "active:border-hidden"],
            ["none", "active:border-none"],
            ["solid", "active:border-solid"],
          ]),
        ],
        [
          "disabled",
          new Map<BorderStyleMapping, string>([
            ["dashed", "disabled:border-dashed"],
            ["dotted", "disabled:border-dotted"],
            ["double", "disabled:border-double"],
            ["hidden", "disabled:border-hidden"],
            ["none", "disabled:border-none"],
            ["solid", "disabled:border-solid"],
          ]),
        ],
        [
          "hover",
          new Map<BorderStyleMapping, string>([
            ["dashed", "hover:border-dashed"],
            ["dotted", "hover:border-dotted"],
            ["double", "hover:border-double"],
            ["hidden", "hover:border-hidden"],
            ["none", "hover:border-none"],
            ["solid", "hover:border-solid"],
          ]),
        ],
        [
          "none",
          new Map<BorderStyleMapping, string>([
            ["dashed", "border-dashed"],
            ["dotted", "border-dotted"],
            ["double", "border-double"],
            ["hidden", "border-hidden"],
            ["none", "border-none"],
            ["solid", "border-solid"],
          ]),
        ],
        [
          "open",
          new Map<BorderStyleMapping, string>([
            ["dashed", "open:border-dashed"],
            ["dotted", "open:border-dotted"],
            ["double", "open:border-double"],
            ["hidden", "open:border-hidden"],
            ["none", "open:border-none"],
            ["solid", "open:border-solid"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
