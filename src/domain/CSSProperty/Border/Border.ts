import { BorderAxis } from "./BorderAxis";
import { BorderBreakpointsOnly } from "./BorderBreakpointsOnly";
import { BorderSides } from "./BorderSides";
import {
  AxisMapping,
  Breakpoints,
  CSSSelector,
  FlexBorder,
  SideMapping,
} from "../../types";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { Sideable } from "../../Entities/Sideable";
import { Axleable } from "../../Entities/Axleable";
import { DefaultValue } from "../DefaultValue";

export class Border
  extends Axleable<
    Map<FlexBorder, string>,
    Map<AxisMapping, Map<FlexBorder, string>>
  >
  implements
    Breakable<Map<Breakpoints, Map<FlexBorder, string>>>,
    Sideable<Map<SideMapping, Map<FlexBorder, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexBorder, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderClassesMapping();
    return new Border(classesMapping, selector);
  }

  public axis() {
    return BorderAxis.create(this.cssSelector);
  }

  public breakpoints() {
    return BorderBreakpointsOnly.create(this.cssSelector);
  }

  public sides() {
    return BorderSides.create(this.cssSelector);
  }

  public write(emphasis: FlexBorder) {
    return this.getClassName(emphasis);
  }
}

class BorderClassesMapping implements ClassesMapping<Map<FlexBorder, string>> {
  private defaultValue: DefaultValue<FlexBorder, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexBorder, string>(0, "border-0");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexBorder, string>>([
        [
          "active",
          new Map<FlexBorder, string>([
            [0, "active:border-0"],
            [2, "active:border-2"],
            [4, "active:border-4"],
            [8, "active:border-8"],
            ["px", "active:border"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexBorder, string>([
            [0, "disabled:border-0"],
            [2, "disabled:border-2"],
            [4, "disabled:border-4"],
            [8, "disabled:border-8"],
            ["px", "disabled:border"],
          ]),
        ],
        [
          "hover",
          new Map<FlexBorder, string>([
            [0, "hover:border-0"],
            [2, "hover:border-2"],
            [4, "hover:border-4"],
            [8, "hover:border-8"],
            ["px", "hover:border"],
          ]),
        ],

        [
          "none",
          new Map<FlexBorder, string>([
            [0, "border-0"],
            [2, "border-2"],
            [4, "border-4"],
            [8, "border-8"],
            ["px", "border"],
          ]),
        ],
        [
          "open",
          new Map<FlexBorder, string>([
            [0, "open:border-0"],
            [2, "open:border-2"],
            [4, "open:border-4"],
            [8, "open:border-8"],
            ["px", "open:border"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
