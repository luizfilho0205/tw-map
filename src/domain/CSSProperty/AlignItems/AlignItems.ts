import { Breakpoints, CSSSelector, FlexAlign } from "../../types";
import { AlignItemsBreakpoints } from "./AlignItemsBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class AlignItems
  extends CSSProperty<Map<FlexAlign, string>>
  implements Breakable<Map<Breakpoints, Map<FlexAlign, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexAlign, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new AlignItemsMapping();
    return new AlignItems(classesMapping, selector);
  }

  public breakpoints() {
    return AlignItemsBreakpoints.create(this.cssSelector);
  }

  public write(align: FlexAlign) {
    return this.getClassName(align);
  }
}

class AlignItemsMapping implements ClassesMapping<Map<FlexAlign, string>> {
  private defaultValue: DefaultValue<FlexAlign, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexAlign, string>(
      "baseline",
      "items-baseline"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexAlign, string>>([
        [
          "active",
          new Map<FlexAlign, string>([
            ["center", "active:items-center"],
            ["start", "active:items-start"],
            ["end", "active:items-end"],
            ["stretch", "active:items-stretch"],
            ["baseline", "active:items-baseline"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexAlign, string>([
            ["center", "disabled:items-center"],
            ["start", "disabled:items-start"],
            ["end", "disabled:items-end"],
            ["stretch", "disabled:items-stretch"],
            ["baseline", "disabled:items-baseline"],
          ]),
        ],
        [
          "hover",
          new Map<FlexAlign, string>([
            ["center", "hover:items-center"],
            ["start", "hover:items-start"],
            ["end", "hover:items-end"],
            ["stretch", "hover:items-stretch"],
            ["baseline", "hover:items-baseline"],
          ]),
        ],
        [
          "none",
          new Map<FlexAlign, string>([
            ["center", "items-center"],
            ["start", "items-start"],
            ["end", "items-end"],
            ["stretch", "items-stretch"],
            ["baseline", "items-baseline"],
          ]),
        ],
        [
          "open",
          new Map<FlexAlign, string>([
            ["center", "open:items-center"],
            ["start", "open:items-start"],
            ["end", "open:items-end"],
            ["stretch", "open:items-stretch"],
            ["baseline", "open:items-baseline"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
