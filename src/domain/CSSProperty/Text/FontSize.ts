import { Breakpoints, CSSSelector, FlexFontSize } from "../../types";
import { FontSizeBreakpoints } from "./FontSizeBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class FontSize
  extends CSSProperty<Map<FlexFontSize, string>>
  implements Breakable<Map<Breakpoints, Map<FlexFontSize, string>>>
{
  private constructor(
    classMapping: ClassesMapping<Map<FlexFontSize, string>>,
    cssSelector: CSSSelector
  ) {
    super(classMapping, cssSelector);
  }

  static create(cssSelector: CSSSelector = "none") {
    const classesMapping = new FontSizeClassesMapping();
    return new FontSize(classesMapping, cssSelector);
  }

  public breakpoints() {
    return FontSizeBreakpoints.create(this.cssSelector);
  }

  public write(size: FlexFontSize) {
    return this.getClassName(size);
  }
}

class FontSizeClassesMapping
  implements ClassesMapping<Map<FlexFontSize, string>>
{
  private defaultValue: DefaultValue<FlexFontSize, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexFontSize, string>(
      "base",
      "text-base"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexFontSize, string>>([
        [
          "active",
          new Map<FlexFontSize, string>([
            ["base", "active:text-base"],
            ["xs", "active:text-xs"],
            ["sm", "active:text-sm"],
            ["lg", "active:text-lg"],
            ["xl", "active:text-xl"],
            ["2xl", "active:text-2xl"],
            ["3xl", "active:text-3xl"],
            ["4xl", "active:text-4xl"],
            ["5xl", "active:text-5xl"],
            ["6xl", "active:text-6xl"],
            ["7xl", "active:text-7xl"],
            ["8xl", "active:text-8xl"],
            ["9xl", "active:text-9xl"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexFontSize, string>([
            ["base", "disabled:text-base"],
            ["xs", "disabled:text-xs"],
            ["sm", "disabled:text-sm"],
            ["lg", "disabled:text-lg"],
            ["xl", "disabled:text-xl"],
            ["2xl", "disabled:text-2xl"],
            ["3xl", "disabled:text-3xl"],
            ["4xl", "disabled:text-4xl"],
            ["5xl", "disabled:text-5xl"],
            ["6xl", "disabled:text-6xl"],
            ["7xl", "disabled:text-7xl"],
            ["8xl", "disabled:text-8xl"],
            ["9xl", "disabled:text-9xl"],
          ]),
        ],
        [
          "hover",
          new Map<FlexFontSize, string>([
            ["base", "hover:text-base"],
            ["xs", "hover:text-xs"],
            ["sm", "hover:text-sm"],
            ["lg", "hover:text-lg"],
            ["xl", "hover:text-xl"],
            ["2xl", "hover:text-2xl"],
            ["3xl", "hover:text-3xl"],
            ["4xl", "hover:text-4xl"],
            ["5xl", "hover:text-5xl"],
            ["6xl", "hover:text-6xl"],
            ["7xl", "hover:text-7xl"],
            ["8xl", "hover:text-8xl"],
            ["9xl", "hover:text-9xl"],
          ]),
        ],
        [
          "none",
          new Map<FlexFontSize, string>([
            ["base", "text-base"],
            ["xs", "text-xs"],
            ["sm", "text-sm"],
            ["lg", "text-lg"],
            ["xl", "text-xl"],
            ["2xl", "text-2xl"],
            ["3xl", "text-3xl"],
            ["4xl", "text-4xl"],
            ["5xl", "text-5xl"],
            ["6xl", "text-6xl"],
            ["7xl", "text-7xl"],
            ["8xl", "text-8xl"],
            ["9xl", "text-9xl"],
          ]),
        ],
        [
          "open",
          new Map<FlexFontSize, string>([
            ["base", "open:text-base"],
            ["xs", "open:text-xs"],
            ["sm", "open:text-sm"],
            ["lg", "open:text-lg"],
            ["xl", "open:text-xl"],
            ["2xl", "open:text-2xl"],
            ["3xl", "open:text-3xl"],
            ["4xl", "open:text-4xl"],
            ["5xl", "open:text-5xl"],
            ["6xl", "open:text-6xl"],
            ["7xl", "open:text-7xl"],
            ["8xl", "open:text-8xl"],
            ["9xl", "open:text-9xl"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
