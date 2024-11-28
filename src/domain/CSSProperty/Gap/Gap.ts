import { AxisMapping, Breakpoints, CSSSelector, FlexSpacing } from "../../types";
import { GapBreakpoints } from "./GapBreakpoints";
import { GapAxis } from "./GapAxis";
import { Axleable } from "../../Entities/Axleable";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class Gap
  extends Axleable<
    Map<FlexSpacing, string>,
    Map<AxisMapping, Map<FlexSpacing, string>>
  >
  implements Breakable<Map<Breakpoints, Map<FlexSpacing, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexSpacing, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new GapClassesMapping();
    return new Gap(classesMapping, selector);
  }

  public axis() {
    return GapAxis.create(this.cssSelector);
  }

  public breakpoints() {
    return GapBreakpoints.create(this.cssSelector);
  }

  public write(spacing: FlexSpacing) {
    return this.getClassName(spacing);
  }
}

class GapClassesMapping implements ClassesMapping<Map<FlexSpacing, string>> {
  private defaultValue: DefaultValue<FlexSpacing, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexSpacing, string>(0, "gap-0");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexSpacing, string>>([
        [
          "active",
          new Map<FlexSpacing, string>([
            [0, "active:gap-0"],
            ["px", "active:gap-px"],
            [0.5, "active:gap-0.5"],
            [1, "active:gap-1"],
            [1.5, "active:gap-1.5"],
            [2, "active:gap-2"],
            [2.5, "active:gap-2.5"],
            [3, "active:gap-3"],
            [3.5, "active:gap-3.5"],
            [4, "active:gap-4"],
            [5, "active:gap-5"],
            [6, "active:gap-6"],
            [7, "active:gap-7"],
            [8, "active:gap-8"],
            [9, "active:gap-9"],
            [10, "active:gap-10"],
            [11, "active:gap-11"],
            [12, "active:gap-12"],
            [14, "active:gap-14"],
            [16, "active:gap-16"],
            [20, "active:gap-20"],
            [24, "active:gap-24"],
            [28, "active:gap-28"],
            [32, "active:gap-32"],
            [36, "active:gap-36"],
            [40, "active:gap-40"],
            [44, "active:gap-44"],
            [48, "active:gap-48"],
            [52, "active:gap-52"],
            [56, "active:gap-56"],
            [60, "active:gap-60"],
            [64, "active:gap-64"],
            [72, "active:gap-72"],
            [80, "active:gap-80"],
            [96, "active:gap-96"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexSpacing, string>([
            [0, "disabled:gap-0"],
            ["px", "disabled:gap-px"],
            [0.5, "disabled:gap-0.5"],
            [1, "disabled:gap-1"],
            [1.5, "disabled:gap-1.5"],
            [2, "disabled:gap-2"],
            [2.5, "disabled:gap-2.5"],
            [3, "disabled:gap-3"],
            [3.5, "disabled:gap-3.5"],
            [4, "disabled:gap-4"],
            [5, "disabled:gap-5"],
            [6, "disabled:gap-6"],
            [7, "disabled:gap-7"],
            [8, "disabled:gap-8"],
            [9, "disabled:gap-9"],
            [10, "disabled:gap-10"],
            [11, "disabled:gap-11"],
            [12, "disabled:gap-12"],
            [14, "disabled:gap-14"],
            [16, "disabled:gap-16"],
            [20, "disabled:gap-20"],
            [24, "disabled:gap-24"],
            [28, "disabled:gap-28"],
            [32, "disabled:gap-32"],
            [36, "disabled:gap-36"],
            [40, "disabled:gap-40"],
            [44, "disabled:gap-44"],
            [48, "disabled:gap-48"],
            [52, "disabled:gap-52"],
            [56, "disabled:gap-56"],
            [60, "disabled:gap-60"],
            [64, "disabled:gap-64"],
            [72, "disabled:gap-72"],
            [80, "disabled:gap-80"],
            [96, "disabled:gap-96"],
          ]),
        ],
        [
          "hover",
          new Map<FlexSpacing, string>([
            [0, "hover:gap-0"],
            ["px", "hover:gap-px"],
            [0.5, "hover:gap-0.5"],
            [1, "hover:gap-1"],
            [1.5, "hover:gap-1.5"],
            [2, "hover:gap-2"],
            [2.5, "hover:gap-2.5"],
            [3, "hover:gap-3"],
            [3.5, "hover:gap-3.5"],
            [4, "hover:gap-4"],
            [5, "hover:gap-5"],
            [6, "hover:gap-6"],
            [7, "hover:gap-7"],
            [8, "hover:gap-8"],
            [9, "hover:gap-9"],
            [10, "hover:gap-10"],
            [11, "hover:gap-11"],
            [12, "hover:gap-12"],
            [14, "hover:gap-14"],
            [16, "hover:gap-16"],
            [20, "hover:gap-20"],
            [24, "hover:gap-24"],
            [28, "hover:gap-28"],
            [32, "hover:gap-32"],
            [36, "hover:gap-36"],
            [40, "hover:gap-40"],
            [44, "hover:gap-44"],
            [48, "hover:gap-48"],
            [52, "hover:gap-52"],
            [56, "hover:gap-56"],
            [60, "hover:gap-60"],
            [64, "hover:gap-64"],
            [72, "hover:gap-72"],
            [80, "hover:gap-80"],
            [96, "hover:gap-96"],
          ]),
        ],
        [
          "none",
          new Map<FlexSpacing, string>([
            [0, "gap-0"],
            ["px", "gap-px"],
            [0.5, "gap-0.5"],
            [1, "gap-1"],
            [1.5, "gap-1.5"],
            [2, "gap-2"],
            [2.5, "gap-2.5"],
            [3, "gap-3"],
            [3.5, "gap-3.5"],
            [4, "gap-4"],
            [5, "gap-5"],
            [6, "gap-6"],
            [7, "gap-7"],
            [8, "gap-8"],
            [9, "gap-9"],
            [10, "gap-10"],
            [11, "gap-11"],
            [12, "gap-12"],
            [14, "gap-14"],
            [16, "gap-16"],
            [20, "gap-20"],
            [24, "gap-24"],
            [28, "gap-28"],
            [32, "gap-32"],
            [36, "gap-36"],
            [40, "gap-40"],
            [44, "gap-44"],
            [48, "gap-48"],
            [52, "gap-52"],
            [56, "gap-56"],
            [60, "gap-60"],
            [64, "gap-64"],
            [72, "gap-72"],
            [80, "gap-80"],
            [96, "gap-96"],
          ]),
        ],
        [
          "open",
          new Map<FlexSpacing, string>([
            [0, "open:gap-0"],
            ["px", "open:gap-px"],
            [0.5, "open:gap-0.5"],
            [1, "open:gap-1"],
            [1.5, "open:gap-1.5"],
            [2, "open:gap-2"],
            [2.5, "open:gap-2.5"],
            [3, "open:gap-3"],
            [3.5, "open:gap-3.5"],
            [4, "open:gap-4"],
            [5, "open:gap-5"],
            [6, "open:gap-6"],
            [7, "open:gap-7"],
            [8, "open:gap-8"],
            [9, "open:gap-9"],
            [10, "open:gap-10"],
            [11, "open:gap-11"],
            [12, "open:gap-12"],
            [14, "open:gap-14"],
            [16, "open:gap-16"],
            [20, "open:gap-20"],
            [24, "open:gap-24"],
            [28, "open:gap-28"],
            [32, "open:gap-32"],
            [36, "open:gap-36"],
            [40, "open:gap-40"],
            [44, "open:gap-44"],
            [48, "open:gap-48"],
            [52, "open:gap-52"],
            [56, "open:gap-56"],
            [60, "open:gap-60"],
            [64, "open:gap-64"],
            [72, "open:gap-72"],
            [80, "open:gap-80"],
            [96, "open:gap-96"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
