import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CornerRadius, CSSSelector } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class Rounded extends CSSProperty<Map<CornerRadius, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<CornerRadius, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new RoundedClassesMapping();
    return new Rounded(classesMapping, selector);
  }

  public write(corner: CornerRadius) {
    return this.getClassName(corner);
  }
}

class RoundedClassesMapping
  implements ClassesMapping<Map<CornerRadius, string>>
{
  private defaultValue: DefaultValue<CornerRadius, string>;

  constructor() {
    this.defaultValue = new DefaultValue<CornerRadius, string>(
      "none",
      "rounded-none"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<CornerRadius, string>>([
        [
          "active",
          new Map<CornerRadius, string>([
            ["xs", "active:rounded-xs"],
            ["sm", "active:rounded-sm"],
            ["md", "active:rounded-md"],
            ["lg", "active:rounded-lg"],
            ["xl", "active:rounded-xl"],
            ["2xl", "active:rounded-2xl"],
            ["3xl", "active:rounded-3xl"],
            ["none", "active:rounded-none"],
            ["full", "active:rounded-full"],
          ]),
        ],
        [
          "disabled",
          new Map<CornerRadius, string>([
            ["xs", "disabled:rounded-xs"],
            ["sm", "disabled:rounded-sm"],
            ["md", "disabled:rounded-md"],
            ["lg", "disabled:rounded-lg"],
            ["xl", "disabled:rounded-xl"],
            ["2xl", "disabled:rounded-2xl"],
            ["3xl", "disabled:rounded-3xl"],
            ["none", "disabled:rounded-none"],
            ["full", "disabled:rounded-full"],
          ]),
        ],
        [
          "hover",
          new Map<CornerRadius, string>([
            ["xs", "hover:rounded-xs"],
            ["sm", "hover:rounded-sm"],
            ["md", "hover:rounded-md"],
            ["lg", "hover:rounded-lg"],
            ["xl", "hover:rounded-xl"],
            ["2xl", "hover:rounded-2xl"],
            ["3xl", "hover:rounded-3xl"],
            ["none", "hover:rounded-none"],
            ["full", "hover:rounded-full"],
          ]),
        ],
        [
          "none",
          new Map<CornerRadius, string>([
            ["xs", "rounded-xs"],
            ["sm", "rounded-sm"],
            ["md", "rounded-md"],
            ["lg", "rounded-lg"],
            ["xl", "rounded-xl"],
            ["2xl", "rounded-2xl"],
            ["3xl", "rounded-3xl"],
            ["none", "rounded-none"],
            ["full", "rounded-full"],
          ]),
        ],
        [
          "open",
          new Map<CornerRadius, string>([
            ["xs", "open:rounded-xs"],
            ["sm", "open:rounded-sm"],
            ["md", "open:rounded-md"],
            ["lg", "open:rounded-lg"],
            ["xl", "open:rounded-xl"],
            ["2xl", "open:rounded-2xl"],
            ["3xl", "open:rounded-3xl"],
            ["none", "open:rounded-none"],
            ["full", "open:rounded-full"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
