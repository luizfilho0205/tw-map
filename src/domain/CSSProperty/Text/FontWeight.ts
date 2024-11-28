import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, FlexFontWeight } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class FontWeight extends CSSProperty<Map<FlexFontWeight, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<FlexFontWeight, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new FontWeightClassesMapping();
    return new FontWeight(classesMapping, selector);
  }

  public write(weight: FlexFontWeight) {
    return this.getClassName(weight);
  }
}

class FontWeightClassesMapping
  implements ClassesMapping<Map<FlexFontWeight, string>>
{
  private defaultValue: DefaultValue<FlexFontWeight, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexFontWeight, string>(
      "normal",
      "font-normal"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexFontWeight, string>>([
        [
          "active",
          new Map<FlexFontWeight, string>([
            ["thin", "active:font-thin"],
            ["extralight", "active:font-extralight"],
            ["light", "active:font-light"],
            ["normal", "active:font-normal"],
            ["medium", "active:font-medium"],
            ["semibold", "active:font-semibold"],
            ["bold", "active:font-bold"],
            ["extrabold", "active:font-extrabold"],
            ["black", "active:font-black"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexFontWeight, string>([
            ["thin", "disabled:font-thin"],
            ["extralight", "disabled:font-extralight"],
            ["light", "disabled:font-light"],
            ["normal", "disabled:font-normal"],
            ["medium", "disabled:font-medium"],
            ["semibold", "disabled:font-semibold"],
            ["bold", "disabled:font-bold"],
            ["extrabold", "disabled:font-extrabold"],
            ["black", "disabled:font-black"],
          ]),
        ],
        [
          "hover",
          new Map<FlexFontWeight, string>([
            ["thin", "hover:font-thin"],
            ["extralight", "hover:font-extralight"],
            ["light", "hover:font-light"],
            ["normal", "hover:font-normal"],
            ["medium", "hover:font-medium"],
            ["semibold", "hover:font-semibold"],
            ["bold", "hover:font-bold"],
            ["extrabold", "hover:font-extrabold"],
            ["black", "hover:font-black"],
          ]),
        ],
        [
          "none",
          new Map<FlexFontWeight, string>([
            ["thin", "font-thin"],
            ["extralight", "font-extralight"],
            ["light", "font-light"],
            ["normal", "font-normal"],
            ["medium", "font-medium"],
            ["semibold", "font-semibold"],
            ["bold", "font-bold"],
            ["extrabold", "font-extrabold"],
            ["black", "font-black"],
          ]),
        ],
        [
          "open",
          new Map<FlexFontWeight, string>([
            ["thin", "open:font-thin"],
            ["extralight", "open:font-extralight"],
            ["light", "open:font-light"],
            ["normal", "open:font-normal"],
            ["medium", "open:font-medium"],
            ["semibold", "open:font-semibold"],
            ["bold", "open:font-bold"],
            ["extrabold", "open:font-extrabold"],
            ["black", "open:font-black"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
