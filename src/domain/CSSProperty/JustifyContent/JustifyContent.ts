import { Breakpoints, CSSSelector, FlexJustifyContent } from "../../types";
import { JustifyContentBreakpoints } from "./JustifyContentBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class JustifyContent
  extends CSSProperty<Map<FlexJustifyContent, string>>
  implements Breakable<Map<Breakpoints, Map<FlexJustifyContent, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexJustifyContent, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new JustifyContentClassesMapping();
    return new JustifyContent(classesMapping, selector);
  }

  public breakpoints() {
    return JustifyContentBreakpoints.create(this.cssSelector);
  }

  public write(spacing: FlexJustifyContent) {
    return this.getClassName(spacing);
  }
}

class JustifyContentClassesMapping
  implements ClassesMapping<Map<FlexJustifyContent, string>>
{
  private defaultValue: DefaultValue<FlexJustifyContent, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexJustifyContent, string>(
      "normal",
      "justify-normal"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexJustifyContent, string>>([
        [
          "active",
          new Map<FlexJustifyContent, string>([
            ["normal", "active:justify-normal"],
            ["start", "active:justify-start"],
            ["end", "active:justify-end"],
            ["center", "active:justify-center"],
            ["between", "active:justify-between"],
            ["around", "active:justify-around"],
            ["evenly", "active:justify-evenly"],
            ["stretch", "active:justify-stretch"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexJustifyContent, string>([
            ["normal", "disabled:justify-normal"],
            ["start", "disabled:justify-start"],
            ["end", "disabled:justify-end"],
            ["center", "disabled:justify-center"],
            ["between", "disabled:justify-between"],
            ["around", "disabled:justify-around"],
            ["evenly", "disabled:justify-evenly"],
            ["stretch", "disabled:justify-stretch"],
          ]),
        ],
        [
          "hover",
          new Map<FlexJustifyContent, string>([
            ["normal", "hover:justify-normal"],
            ["start", "hover:justify-start"],
            ["end", "hover:justify-end"],
            ["center", "hover:justify-center"],
            ["between", "hover:justify-between"],
            ["around", "hover:justify-around"],
            ["evenly", "hover:justify-evenly"],
            ["stretch", "hover:justify-stretch"],
          ]),
        ],
        [
          "none",
          new Map<FlexJustifyContent, string>([
            ["normal", "justify-normal"],
            ["start", "justify-start"],
            ["end", "justify-end"],
            ["center", "justify-center"],
            ["between", "justify-between"],
            ["around", "justify-around"],
            ["evenly", "justify-evenly"],
            ["stretch", "justify-stretch"],
          ]),
        ],
        [
          "open",
          new Map<FlexJustifyContent, string>([
            ["normal", "open:justify-normal"],
            ["start", "open:justify-start"],
            ["end", "open:justify-end"],
            ["center", "open:justify-center"],
            ["between", "open:justify-between"],
            ["around", "open:justify-around"],
            ["evenly", "open:justify-evenly"],
            ["stretch", "open:justify-stretch"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
