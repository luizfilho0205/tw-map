import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { AnimateMapping, CSSSelector } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class Animate extends CSSProperty<Map<AnimateMapping, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<AnimateMapping, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new AnimateClassesMapping();
    return new Animate(classesMapping, selector);
  }

  public write(animate: AnimateMapping) {
    return this.getClassName(animate);
  }
}

class AnimateClassesMapping
  implements ClassesMapping<Map<AnimateMapping, string>>
{
  private defaultValue: DefaultValue<AnimateMapping, string>;

  constructor() {
    this.defaultValue = new DefaultValue<AnimateMapping, string>(
      "none",
      "animate-none"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<AnimateMapping, string>>([
        [
          "active",
          new Map<AnimateMapping, string>([
            ["bounce", "active:animate-bounce"],
            ["none", "active:animate-none"],
            ["ping", "active:animate-ping"],
            ["pulse", "active:animate-pulse"],
            ["spin", "active:animate-spin"],
          ]),
        ],
        [
          "disabled",
          new Map<AnimateMapping, string>([
            ["bounce", "disabled:animate-bounce"],
            ["none", "disabled:animate-none"],
            ["ping", "disabled:animate-ping"],
            ["pulse", "disabled:animate-pulse"],
            ["spin", "disabled:animate-spin"],
          ]),
        ],
        [
          "hover",
          new Map<AnimateMapping, string>([
            ["bounce", "hover:animate-bounce"],
            ["none", "hover:animate-none"],
            ["ping", "hover:animate-ping"],
            ["pulse", "hover:animate-pulse"],
            ["spin", "hover:animate-spin"],
          ]),
        ],
        [
          "none",
          new Map<AnimateMapping, string>([
            ["bounce", "animate-bounce"],
            ["none", "animate-none"],
            ["ping", "animate-ping"],
            ["pulse", "animate-pulse"],
            ["spin", "animate-spin"],
          ]),
        ],
        [
          "open",
          new Map<AnimateMapping, string>([
            ["bounce", "open:animate-bounce"],
            ["none", "open:animate-none"],
            ["ping", "open:animate-ping"],
            ["pulse", "open:animate-pulse"],
            ["spin", "open:animate-spin"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
