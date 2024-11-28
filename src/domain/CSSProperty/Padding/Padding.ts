import {
  AxisMapping,
  Breakpoints,
  CSSSelector,
  FlexSpacing,
  SideMapping,
} from "../../types";
import { PaddingBreakpoints } from "./PaddingBreakpoints";
import { PaddingAxis } from "./PaddingAxis";
import { PaddingSides } from "./PaddingSides";
import { Axleable } from "../../Entities/Axleable";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";
import { Sideable } from "../../Entities/Sideable";

export class Padding
  extends Axleable<
    Map<FlexSpacing, string>,
    Map<AxisMapping, Map<FlexSpacing, string>>
  >
  implements
    Breakable<Map<Breakpoints, Map<FlexSpacing, string>>>,
    Sideable<Map<SideMapping, Map<FlexSpacing, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexSpacing, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new PaddingClassesMapping();
    return new Padding(classesMapping, selector);
  }

  public axis() {
    return PaddingAxis.create(this.cssSelector);
  }

  public breakpoints() {
    return PaddingBreakpoints.create(this.cssSelector);
  }

  public sides() {
    return PaddingSides.create(this.cssSelector);
  }

  public write(spacing: FlexSpacing) {
    return this.getClassName(spacing);
  }
}

class PaddingClassesMapping
  implements ClassesMapping<Map<FlexSpacing, string>>
{
  private defaultValue: DefaultValue<FlexSpacing, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexSpacing, string>(0, "p-0");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexSpacing, string>>([
        [
          "active",
          new Map<FlexSpacing, string>([
            [0, "active:p-0"],
            ["px", "active:p-px"],
            [0.5, "active:p-0.5"],
            [1, "active:p-1"],
            [1.5, "active:p-1.5"],
            [2, "active:p-2"],
            [2.5, "active:p-2.5"],
            [3, "active:p-3"],
            [3.5, "active:p-3.5"],
            [4, "active:p-4"],
            [5, "active:p-5"],
            [6, "active:p-6"],
            [7, "active:p-7"],
            [8, "active:p-8"],
            [9, "active:p-9"],
            [10, "active:p-10"],
            [11, "active:p-11"],
            [12, "active:p-12"],
            [14, "active:p-14"],
            [16, "active:p-16"],
            [20, "active:p-20"],
            [24, "active:p-24"],
            [28, "active:p-28"],
            [32, "active:p-32"],
            [36, "active:p-36"],
            [40, "active:p-40"],
            [44, "active:p-44"],
            [48, "active:p-48"],
            [52, "active:p-52"],
            [56, "active:p-56"],
            [60, "active:p-60"],
            [64, "active:p-64"],
            [72, "active:p-72"],
            [80, "active:p-80"],
            [96, "active:p-96"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexSpacing, string>([
            [0, "disabled:p-0"],
            ["px", "disabled:p-px"],
            [0.5, "disabled:p-0.5"],
            [1, "disabled:p-1"],
            [1.5, "disabled:p-1.5"],
            [2, "disabled:p-2"],
            [2.5, "disabled:p-2.5"],
            [3, "disabled:p-3"],
            [3.5, "disabled:p-3.5"],
            [4, "disabled:p-4"],
            [5, "disabled:p-5"],
            [6, "disabled:p-6"],
            [7, "disabled:p-7"],
            [8, "disabled:p-8"],
            [9, "disabled:p-9"],
            [10, "disabled:p-10"],
            [11, "disabled:p-11"],
            [12, "disabled:p-12"],
            [14, "disabled:p-14"],
            [16, "disabled:p-16"],
            [20, "disabled:p-20"],
            [24, "disabled:p-24"],
            [28, "disabled:p-28"],
            [32, "disabled:p-32"],
            [36, "disabled:p-36"],
            [40, "disabled:p-40"],
            [44, "disabled:p-44"],
            [48, "disabled:p-48"],
            [52, "disabled:p-52"],
            [56, "disabled:p-56"],
            [60, "disabled:p-60"],
            [64, "disabled:p-64"],
            [72, "disabled:p-72"],
            [80, "disabled:p-80"],
            [96, "disabled:p-96"],
          ]),
        ],
        [
          "hover",
          new Map<FlexSpacing, string>([
            [0, "hover:p-0"],
            ["px", "hover:p-px"],
            [0.5, "hover:p-0.5"],
            [1, "hover:p-1"],
            [1.5, "hover:p-1.5"],
            [2, "hover:p-2"],
            [2.5, "hover:p-2.5"],
            [3, "hover:p-3"],
            [3.5, "hover:p-3.5"],
            [4, "hover:p-4"],
            [5, "hover:p-5"],
            [6, "hover:p-6"],
            [7, "hover:p-7"],
            [8, "hover:p-8"],
            [9, "hover:p-9"],
            [10, "hover:p-10"],
            [11, "hover:p-11"],
            [12, "hover:p-12"],
            [14, "hover:p-14"],
            [16, "hover:p-16"],
            [20, "hover:p-20"],
            [24, "hover:p-24"],
            [28, "hover:p-28"],
            [32, "hover:p-32"],
            [36, "hover:p-36"],
            [40, "hover:p-40"],
            [44, "hover:p-44"],
            [48, "hover:p-48"],
            [52, "hover:p-52"],
            [56, "hover:p-56"],
            [60, "hover:p-60"],
            [64, "hover:p-64"],
            [72, "hover:p-72"],
            [80, "hover:p-80"],
            [96, "hover:p-96"],
          ]),
        ],
        [
          "none",
          new Map<FlexSpacing, string>([
            [0, "p-0"],
            ["px", "p-px"],
            [0.5, "p-0.5"],
            [1, "p-1"],
            [1.5, "p-1.5"],
            [2, "p-2"],
            [2.5, "p-2.5"],
            [3, "p-3"],
            [3.5, "p-3.5"],
            [4, "p-4"],
            [5, "p-5"],
            [6, "p-6"],
            [7, "p-7"],
            [8, "p-8"],
            [9, "p-9"],
            [10, "p-10"],
            [11, "p-11"],
            [12, "p-12"],
            [14, "p-14"],
            [16, "p-16"],
            [20, "p-20"],
            [24, "p-24"],
            [28, "p-28"],
            [32, "p-32"],
            [36, "p-36"],
            [40, "p-40"],
            [44, "p-44"],
            [48, "p-48"],
            [52, "p-52"],
            [56, "p-56"],
            [60, "p-60"],
            [64, "p-64"],
            [72, "p-72"],
            [80, "p-80"],
            [96, "p-96"],
          ]),
        ],
        [
          "open",
          new Map<FlexSpacing, string>([
            [0, "open:p-0"],
            ["px", "open:p-px"],
            [0.5, "open:p-0.5"],
            [1, "open:p-1"],
            [1.5, "open:p-1.5"],
            [2, "open:p-2"],
            [2.5, "open:p-2.5"],
            [3, "open:p-3"],
            [3.5, "open:p-3.5"],
            [4, "open:p-4"],
            [5, "open:p-5"],
            [6, "open:p-6"],
            [7, "open:p-7"],
            [8, "open:p-8"],
            [9, "open:p-9"],
            [10, "open:p-10"],
            [11, "open:p-11"],
            [12, "open:p-12"],
            [14, "open:p-14"],
            [16, "open:p-16"],
            [20, "open:p-20"],
            [24, "open:p-24"],
            [28, "open:p-28"],
            [32, "open:p-32"],
            [36, "open:p-36"],
            [40, "open:p-40"],
            [44, "open:p-44"],
            [48, "open:p-48"],
            [52, "open:p-52"],
            [56, "open:p-56"],
            [60, "open:p-60"],
            [64, "open:p-64"],
            [72, "open:p-72"],
            [80, "open:p-80"],
            [96, "open:p-96"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
