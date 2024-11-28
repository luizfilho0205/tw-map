import { Breakpoints, CSSSelector, FlexTextAlign } from "../../types";
import { TextAlignBreakpoints } from "./TextAlignBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class TextAlign
  extends CSSProperty<Map<FlexTextAlign, string>>
  implements Breakable<Map<Breakpoints, Map<FlexTextAlign, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexTextAlign, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new TextAlignClassesMapping();
    return new TextAlign(classesMapping, selector);
  }

  public breakpoints() {
    return TextAlignBreakpoints.create(this.cssSelector);
  }

  public write(align: FlexTextAlign) {
    return this.getClassName(align);
  }
}

class TextAlignClassesMapping
  implements ClassesMapping<Map<FlexTextAlign, string>>
{
  private defaultValue: DefaultValue<FlexTextAlign, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexTextAlign, string>(
      "center",
      "text-center"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexTextAlign, string>>([
        [
          "active",
          new Map<FlexTextAlign, string>([
            ["center", "active:text-center"],
            ["end", "active:text-end"],
            ["justify", "active:text-justify"],
            ["left", "active:text-left"],
            ["right", "active:text-right"],
            ["start", "active:text-start"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexTextAlign, string>([
            ["center", "disabled:text-center"],
            ["end", "disabled:text-end"],
            ["justify", "disabled:text-justify"],
            ["left", "disabled:text-left"],
            ["right", "disabled:text-right"],
            ["start", "disabled:text-start"],
          ]),
        ],
        [
          "hover",
          new Map<FlexTextAlign, string>([
            ["center", "hover:text-center"],
            ["end", "hover:text-end"],
            ["justify", "hover:text-justify"],
            ["left", "hover:text-left"],
            ["right", "hover:text-right"],
            ["start", "hover:text-start"],
          ]),
        ],
        [
          "none",
          new Map<FlexTextAlign, string>([
            ["center", "text-center"],
            ["end", "text-end"],
            ["justify", "text-justify"],
            ["left", "text-left"],
            ["right", "text-right"],
            ["start", "text-start"],
          ]),
        ],
        [
          "open",
          new Map<FlexTextAlign, string>([
            ["center", "open:text-center"],
            ["end", "open:text-end"],
            ["justify", "open:text-justify"],
            ["left", "open:text-left"],
            ["right", "open:text-right"],
            ["start", "open:text-start"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
