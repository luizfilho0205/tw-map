import { Breakpoints, CSSSelector, FlexDirections } from "../../types";
import { DirectionBreakpoints } from "./DirectionBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class Direction
  extends CSSProperty<Map<FlexDirections, string>>
  implements Breakable<Map<Breakpoints, Map<FlexDirections, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexDirections, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(cssSelector: CSSSelector = "none") {
    const classesMapping = new DirectionMapping();
    return new Direction(classesMapping, cssSelector);
  }

  public breakpoints() {
    return DirectionBreakpoints.create(this.cssSelector);
  }

  public write(direction: FlexDirections) {
    return this.getClassName(direction);
  }
}

class DirectionMapping implements ClassesMapping<Map<FlexDirections, string>> {
  private defaultValue: DefaultValue<FlexDirections, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexDirections, string>(
      "row",
      "flex-row"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexDirections, string>>([
        [
          "active",
          new Map<FlexDirections, string>([
            ["column", "active:flex-col"],
            ["col-reverse", "active:flex-col-reverse"],
            ["row", "active:flex-row"],
            ["row-reverse", "active:flex-row-reverse"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexDirections, string>([
            ["column", "disabled:flex-col"],
            ["col-reverse", "disabled:flex-col-reverse"],
            ["row", "disabled:flex-row"],
            ["row-reverse", "disabled:flex-row-reverse"],
          ]),
        ],
        [
          "hover",
          new Map<FlexDirections, string>([
            ["column", "hover:flex-col"],
            ["col-reverse", "hover:flex-col-reverse"],
            ["row", "hover:flex-row"],
            ["row-reverse", "hover:flex-row-reverse"],
          ]),
        ],
        [
          "none",
          new Map<FlexDirections, string>([
            ["column", "flex-col"],
            ["col-reverse", "flex-col-reverse"],
            ["row", "flex-row"],
            ["row-reverse", "flex-row-reverse"],
          ]),
        ],
        [
          "open",
          new Map<FlexDirections, string>([
            ["column", "open:flex-col"],
            ["col-reverse", "open:flex-col-reverse"],
            ["row", "open:flex-row"],
            ["row-reverse", "open:flex-row-reverse"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
