import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { AxisMapping, Breakpoints, CSSSelector, FlexOverflow } from "../../types";
import { OverflowAxisInsideBreakpoints } from "./OverflowAxisInsideBreakpoints";
import { DefaultValue } from "../DefaultValue";

export class OverflowAxis
  extends CSSProperty<Map<AxisMapping, Map<FlexOverflow, string>>>
  implements
    Breakable<Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<AxisMapping, Map<FlexOverflow, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new OverflowClassesMapping();
    return new OverflowAxis(classesMapping, selector);
  }

  public breakpoints() {
    return OverflowAxisInsideBreakpoints.create(this.cssSelector);
  }

  public write(axis: AxisMapping, overflow: FlexOverflow) {
    return this.getClassName(axis, overflow);
  }
}

class OverflowClassesMapping
  implements ClassesMapping<Map<AxisMapping, Map<FlexOverflow, string>>>
{
  private defaultValue: DefaultValue<AxisMapping, Map<FlexOverflow, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      AxisMapping,
      Map<FlexOverflow, string>
    >(
      "x",
      new Map<FlexOverflow, string>([
        ["auto", "overflow-x-auto"],
        ["clip", "overflow-x-clip"],
        ["hidden", "overflow-x-hidden"],
        ["scroll", "overflow-x-scroll"],
        ["visible", "overflow-x-visible"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return new Map<CSSSelector, Map<AxisMapping, Map<FlexOverflow, string>>>([
      [
        "active",
        new Map<AxisMapping, Map<FlexOverflow, string>>([
          [
            "x",
            new Map<FlexOverflow, string>([
              ["auto", "active:overflow-x-auto"],
              ["clip", "active:overflow-x-clip"],
              ["hidden", "active:overflow-x-hidden"],
              ["scroll", "active:overflow-x-scroll"],
              ["visible", "active:overflow-x-visible"],
            ]),
          ],
          [
            "y",
            new Map<FlexOverflow, string>([
              ["auto", "active:overflow-y-auto"],
              ["clip", "active:overflow-y-clip"],
              ["hidden", "active:overflow-y-hidden"],
              ["scroll", "active:overflow-y-scroll"],
              ["visible", "active:overflow-y-visible"],
            ]),
          ],
        ]),
      ],
      [
        "disabled",
        new Map<AxisMapping, Map<FlexOverflow, string>>([
          [
            "x",
            new Map<FlexOverflow, string>([
              ["auto", "disabled:overflow-x-auto"],
              ["clip", "disabled:overflow-x-clip"],
              ["hidden", "disabled:overflow-x-hidden"],
              ["scroll", "disabled:overflow-x-scroll"],
              ["visible", "disabled:overflow-x-visible"],
            ]),
          ],
          [
            "y",
            new Map<FlexOverflow, string>([
              ["auto", "disabled:overflow-y-auto"],
              ["clip", "disabled:overflow-y-clip"],
              ["hidden", "disabled:overflow-y-hidden"],
              ["scroll", "disabled:overflow-y-scroll"],
              ["visible", "disabled:overflow-y-visible"],
            ]),
          ],
        ]),
      ],
      [
        "hover",
        new Map<AxisMapping, Map<FlexOverflow, string>>([
          [
            "x",
            new Map<FlexOverflow, string>([
              ["auto", "hover:overflow-x-auto"],
              ["clip", "hover:overflow-x-clip"],
              ["hidden", "hover:overflow-x-hidden"],
              ["scroll", "hover:overflow-x-scroll"],
              ["visible", "hover:overflow-x-visible"],
            ]),
          ],
          [
            "y",
            new Map<FlexOverflow, string>([
              ["auto", "hover:overflow-y-auto"],
              ["clip", "hover:overflow-y-clip"],
              ["hidden", "hover:overflow-y-hidden"],
              ["scroll", "hover:overflow-y-scroll"],
              ["visible", "hover:overflow-y-visible"],
            ]),
          ],
        ]),
      ],
      [
        "none",
        new Map<AxisMapping, Map<FlexOverflow, string>>([
          [
            "x",
            new Map<FlexOverflow, string>([
              ["auto", "overflow-x-auto"],
              ["clip", "overflow-x-clip"],
              ["hidden", "overflow-x-hidden"],
              ["scroll", "overflow-x-scroll"],
              ["visible", "overflow-x-visible"],
            ]),
          ],
          [
            "y",
            new Map<FlexOverflow, string>([
              ["auto", "overflow-y-auto"],
              ["clip", "overflow-y-clip"],
              ["hidden", "overflow-y-hidden"],
              ["scroll", "overflow-y-scroll"],
              ["visible", "overflow-y-visible"],
            ]),
          ],
        ]),
      ],
      [
        "open",
        new Map<AxisMapping, Map<FlexOverflow, string>>([
          [
            "x",
            new Map<FlexOverflow, string>([
              ["auto", "open:overflow-x-auto"],
              ["clip", "open:overflow-x-clip"],
              ["hidden", "open:overflow-x-hidden"],
              ["scroll", "open:overflow-x-scroll"],
              ["visible", "open:overflow-x-visible"],
            ]),
          ],
          [
            "y",
            new Map<FlexOverflow, string>([
              ["auto", "open:overflow-y-auto"],
              ["clip", "open:overflow-y-clip"],
              ["hidden", "open:overflow-y-hidden"],
              ["scroll", "open:overflow-y-scroll"],
              ["visible", "open:overflow-y-visible"],
            ]),
          ],
        ]),
      ],
    ]).get(selector) ?? this.defaultValue.getValue();
  }
}
