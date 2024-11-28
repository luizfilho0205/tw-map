import { Breakpoints, CSSSelector, FlexPosition } from "../../types";
import { PositionBreakpoints } from "./PositionBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class Position
  extends CSSProperty<Map<FlexPosition, string>>
  implements Breakable<Map<Breakpoints, Map<FlexPosition, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexPosition, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new PositionClassesMapping();
    return new Position(classesMapping, selector);
  }

  public breakpoints() {
    return PositionBreakpoints.create(this.cssSelector);
  }

  public write(position: FlexPosition) {
    return this.getClassName(position);
  }
}

class PositionClassesMapping
  implements ClassesMapping<Map<FlexPosition, string>>
{
  private defaultValue: DefaultValue<FlexPosition, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexPosition, string>(
      "static",
      "static"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexPosition, string>>([
        [
          "active",
          new Map<FlexPosition, string>([
            ["absolute", "active:absolute"],
            ["fixed", "active:fixed"],
            ["relative", "active:relative"],
            ["static", "active:static"],
            ["sticky", "active:sticky"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexPosition, string>([
            ["absolute", "disabled:absolute"],
            ["fixed", "disabled:fixed"],
            ["relative", "disabled:relative"],
            ["static", "disabled:static"],
            ["sticky", "disabled:sticky"],
          ]),
        ],
        [
          "hover",
          new Map<FlexPosition, string>([
            ["absolute", "hover:absolute"],
            ["fixed", "hover:fixed"],
            ["relative", "hover:relative"],
            ["static", "hover:static"],
            ["sticky", "hover:sticky"],
          ]),
        ],
        [
          "none",
          new Map<FlexPosition, string>([
            ["absolute", "absolute"],
            ["fixed", "fixed"],
            ["relative", "relative"],
            ["static", "static"],
            ["sticky", "sticky"],
          ]),
        ],
        [
          "open",
          new Map<FlexPosition, string>([
            ["absolute", "open:absolute"],
            ["fixed", "open:fixed"],
            ["relative", "open:relative"],
            ["static", "open:static"],
            ["sticky", "open:sticky"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
