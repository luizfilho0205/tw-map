import { AxisMapping, Breakpoints, CSSSelector, FlexOverflow } from "../../types";
import { OverflowBreakpoints } from "./OverflowBreakpoints";
import { OverflowAxis } from "./OverflowAxis";
import { Axleable } from "../../Entities/Axleable";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class Overflow
  extends Axleable<
    Map<FlexOverflow, string>,
    Map<AxisMapping, Map<FlexOverflow, string>>
  >
  implements Breakable<Map<Breakpoints, Map<FlexOverflow, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexOverflow, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new OverflowClassesMapping();
    return new Overflow(classesMapping, selector);
  }

  public axis() {
    return OverflowAxis.create(this.cssSelector);
  }

  public breakpoints() {
    return OverflowBreakpoints.create(this.cssSelector);
  }

  public write(overflow: FlexOverflow) {
    return this.getClassName(overflow);
  }
}

class OverflowClassesMapping
  implements ClassesMapping<Map<FlexOverflow, string>>
{
  private defaultValue: DefaultValue<FlexOverflow, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexOverflow, string>(
      "auto",
      "overflow-auto"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexOverflow, string>>([
        [
          "active",
          new Map<FlexOverflow, string>([
            ["auto", "active:overflow-auto"],
            ["clip", "active:overflow-clip"],
            ["hidden", "active:overflow-hidden"],
            ["scroll", "active:overflow-scroll"],
            ["visible", "active:overflow-visible"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexOverflow, string>([
            ["auto", "disabled:overflow-auto"],
            ["clip", "disabled:overflow-clip"],
            ["hidden", "disabled:overflow-hidden"],
            ["scroll", "disabled:overflow-scroll"],
            ["visible", "disabled:overflow-visible"],
          ]),
        ],
        [
          "hover",
          new Map<FlexOverflow, string>([
            ["auto", "hover:overflow-auto"],
            ["clip", "hover:overflow-clip"],
            ["hidden", "hover:overflow-hidden"],
            ["scroll", "hover:overflow-scroll"],
            ["visible", "hover:overflow-visible"],
          ]),
        ],
        [
          "none",
          new Map<FlexOverflow, string>([
            ["auto", "overflow-auto"],
            ["clip", "overflow-clip"],
            ["hidden", "overflow-hidden"],
            ["scroll", "overflow-scroll"],
            ["visible", "overflow-visible"],
          ]),
        ],
        [
          "open",
          new Map<FlexOverflow, string>([
            ["auto", "open:overflow-auto"],
            ["clip", "open:overflow-clip"],
            ["hidden", "open:overflow-hidden"],
            ["scroll", "open:overflow-scroll"],
            ["visible", "open:overflow-visible"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
