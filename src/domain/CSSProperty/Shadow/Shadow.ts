import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, FlexBoxShadow } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class Shadow extends CSSProperty<Map<FlexBoxShadow, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<FlexBoxShadow, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new ShadowClassesMapping();
    return new Shadow(classesMapping, selector);
  }

  public write(emphasis: FlexBoxShadow) {
    return this.getClassName(emphasis);
  }
}

class ShadowClassesMapping
  implements ClassesMapping<Map<FlexBoxShadow, string>>
{
  private defaultValue: DefaultValue<FlexBoxShadow, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexBoxShadow, string>(
      "none",
      "shadow-none"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexBoxShadow, string>>([
        [
          "active",
          new Map<FlexBoxShadow, string>([
            ["none", "active:shadow-none"],
            ["xs", "active:shadow-xs"],
            ["sm", "active:shadow-sm"],
            ["md", "active:shadow-md"],
            ["lg", "active:shadow-lg"],
            ["xl", "active:shadow-xl"],
            ["2xl", "active:shadow-2xl"],
            ["inner", "active:shadow-inner"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexBoxShadow, string>([
            ["none", "disabled:shadow-none"],
            ["xs", "disabled:shadow-xs"],
            ["sm", "disabled:shadow-sm"],
            ["md", "disabled:shadow-md"],
            ["lg", "disabled:shadow-lg"],
            ["xl", "disabled:shadow-xl"],
            ["2xl", "disabled:shadow-2xl"],
            ["inner", "disabled:shadow-inner"],
          ]),
        ],
        [
          "hover",
          new Map<FlexBoxShadow, string>([
            ["none", "hover:shadow-none"],
            ["xs", "hover:shadow-xs"],
            ["sm", "hover:shadow-sm"],
            ["md", "hover:shadow-md"],
            ["lg", "hover:shadow-lg"],
            ["xl", "hover:shadow-xl"],
            ["2xl", "hover:shadow-2xl"],
            ["inner", "hover:shadow-inner"],
          ]),
        ],
        [
          "none",
          new Map<FlexBoxShadow, string>([
            ["none", "shadow-none"],
            ["xs", "shadow-xs"],
            ["sm", "shadow-sm"],
            ["md", "shadow-md"],
            ["lg", "shadow-lg"],
            ["xl", "shadow-xl"],
            ["2xl", "shadow-2xl"],
            ["inner", "shadow-inner"],
          ]),
        ],
        [
          "open",
          new Map<FlexBoxShadow, string>([
            ["none", "open:shadow-none"],
            ["xs", "open:shadow-xs"],
            ["sm", "open:shadow-sm"],
            ["md", "open:shadow-md"],
            ["lg", "open:shadow-lg"],
            ["xl", "open:shadow-xl"],
            ["2xl", "open:shadow-2xl"],
            ["inner", "open:shadow-inner"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
