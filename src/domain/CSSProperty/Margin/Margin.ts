import { AxisMapping, Breakpoints, CSSSelector, MarginSpacing } from "../../types";
import { MarginAxis } from "./MarginAxis";
import { MarginSides } from "./MarginSides";
import { MarginBreakpoints } from "./MarginBreakpoints";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { Axleable } from "../../Entities/Axleable";
import { DefaultValue } from "../DefaultValue";

export class Margin
  extends Axleable<
    Map<MarginSpacing, string>,
    Map<AxisMapping, Map<MarginSpacing, string>>
  >
  implements Breakable<Map<Breakpoints, Map<MarginSpacing, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<MarginSpacing, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new MarginClassesMapping();
    return new Margin(classesMapping, selector);
  }

  public axis() {
    return MarginAxis.create(this.cssSelector);
  }

  public breakpoints() {
    return MarginBreakpoints.create(this.cssSelector);
  }

  public sides() {
    return MarginSides.create(this.cssSelector);
  }

  public write(spacing: MarginSpacing) {
    return this.getClassName(spacing);
  }
}

class MarginClassesMapping
  implements ClassesMapping<Map<MarginSpacing, string>>
{
  private defaultValue: DefaultValue<MarginSpacing, string>;

  constructor() {
    this.defaultValue = new DefaultValue<MarginSpacing, string>(0, "m-0");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<MarginSpacing, string>>([
        [
          "active",
          new Map<MarginSpacing, string>([
            [0, "active:m-0"],
            ["px", "active:m-px"],
            [0.5, "active:m-0.5"],
            [1, "active:m-1"],
            [1.5, "active:m-1.5"],
            [2, "active:m-2"],
            [2.5, "active:m-2.5"],
            [3, "active:m-3"],
            [3.5, "active:m-3.5"],
            [4, "active:m-4"],
            [5, "active:m-5"],
            [6, "active:m-6"],
            [7, "active:m-7"],
            [8, "active:m-8"],
            [9, "active:m-9"],
            [10, "active:m-10"],
            [11, "active:m-11"],
            [12, "active:m-12"],
            [14, "active:m-14"],
            [16, "active:m-16"],
            [20, "active:m-20"],
            [24, "active:m-24"],
            [28, "active:m-28"],
            [32, "active:m-32"],
            [36, "active:m-36"],
            [40, "active:m-40"],
            [44, "active:m-44"],
            [48, "active:m-48"],
            [52, "active:m-52"],
            [56, "active:m-56"],
            [60, "active:m-60"],
            [64, "active:m-64"],
            [72, "active:m-72"],
            [80, "active:m-80"],
            [96, "active:m-96"],
            ["auto", "active:m-auto"],
          ]),
        ],
        [
          "disabled",
          new Map<MarginSpacing, string>([
            [0, "disabled:m-0"],
            ["px", "disabled:m-px"],
            [0.5, "disabled:m-0.5"],
            [1, "disabled:m-1"],
            [1.5, "disabled:m-1.5"],
            [2, "disabled:m-2"],
            [2.5, "disabled:m-2.5"],
            [3, "disabled:m-3"],
            [3.5, "disabled:m-3.5"],
            [4, "disabled:m-4"],
            [5, "disabled:m-5"],
            [6, "disabled:m-6"],
            [7, "disabled:m-7"],
            [8, "disabled:m-8"],
            [9, "disabled:m-9"],
            [10, "disabled:m-10"],
            [11, "disabled:m-11"],
            [12, "disabled:m-12"],
            [14, "disabled:m-14"],
            [16, "disabled:m-16"],
            [20, "disabled:m-20"],
            [24, "disabled:m-24"],
            [28, "disabled:m-28"],
            [32, "disabled:m-32"],
            [36, "disabled:m-36"],
            [40, "disabled:m-40"],
            [44, "disabled:m-44"],
            [48, "disabled:m-48"],
            [52, "disabled:m-52"],
            [56, "disabled:m-56"],
            [60, "disabled:m-60"],
            [64, "disabled:m-64"],
            [72, "disabled:m-72"],
            [80, "disabled:m-80"],
            [96, "disabled:m-96"],
            ["auto", "disabled:m-auto"],
          ]),
        ],
        [
          "hover",
          new Map<MarginSpacing, string>([
            [0, "hover:m-0"],
            ["px", "hover:m-px"],
            [0.5, "hover:m-0.5"],
            [1, "hover:m-1"],
            [1.5, "hover:m-1.5"],
            [2, "hover:m-2"],
            [2.5, "hover:m-2.5"],
            [3, "hover:m-3"],
            [3.5, "hover:m-3.5"],
            [4, "hover:m-4"],
            [5, "hover:m-5"],
            [6, "hover:m-6"],
            [7, "hover:m-7"],
            [8, "hover:m-8"],
            [9, "hover:m-9"],
            [10, "hover:m-10"],
            [11, "hover:m-11"],
            [12, "hover:m-12"],
            [14, "hover:m-14"],
            [16, "hover:m-16"],
            [20, "hover:m-20"],
            [24, "hover:m-24"],
            [28, "hover:m-28"],
            [32, "hover:m-32"],
            [36, "hover:m-36"],
            [40, "hover:m-40"],
            [44, "hover:m-44"],
            [48, "hover:m-48"],
            [52, "hover:m-52"],
            [56, "hover:m-56"],
            [60, "hover:m-60"],
            [64, "hover:m-64"],
            [72, "hover:m-72"],
            [80, "hover:m-80"],
            [96, "hover:m-96"],
            ["auto", "hover:m-auto"],
          ]),
        ],
        [
          "none",
          new Map<MarginSpacing, string>([
            [0, "m-0"],
            ["px", "m-px"],
            [0.5, "m-0.5"],
            [1, "m-1"],
            [1.5, "m-1.5"],
            [2, "m-2"],
            [2.5, "m-2.5"],
            [3, "m-3"],
            [3.5, "m-3.5"],
            [4, "m-4"],
            [5, "m-5"],
            [6, "m-6"],
            [7, "m-7"],
            [8, "m-8"],
            [9, "m-9"],
            [10, "m-10"],
            [11, "m-11"],
            [12, "m-12"],
            [14, "m-14"],
            [16, "m-16"],
            [20, "m-20"],
            [24, "m-24"],
            [28, "m-28"],
            [32, "m-32"],
            [36, "m-36"],
            [40, "m-40"],
            [44, "m-44"],
            [48, "m-48"],
            [52, "m-52"],
            [56, "m-56"],
            [60, "m-60"],
            [64, "m-64"],
            [72, "m-72"],
            [80, "m-80"],
            [96, "m-96"],
            ["auto", "m-auto"],
          ]),
        ],
        [
          "open",
          new Map<MarginSpacing, string>([
            [0, "open:m-0"],
            ["px", "open:m-px"],
            [0.5, "open:m-0.5"],
            [1, "open:m-1"],
            [1.5, "open:m-1.5"],
            [2, "open:m-2"],
            [2.5, "open:m-2.5"],
            [3, "open:m-3"],
            [3.5, "open:m-3.5"],
            [4, "open:m-4"],
            [5, "open:m-5"],
            [6, "open:m-6"],
            [7, "open:m-7"],
            [8, "open:m-8"],
            [9, "open:m-9"],
            [10, "open:m-10"],
            [11, "open:m-11"],
            [12, "open:m-12"],
            [14, "open:m-14"],
            [16, "open:m-16"],
            [20, "open:m-20"],
            [24, "open:m-24"],
            [28, "open:m-28"],
            [32, "open:m-32"],
            [36, "open:m-36"],
            [40, "open:m-40"],
            [44, "open:m-44"],
            [48, "open:m-48"],
            [52, "open:m-52"],
            [56, "open:m-56"],
            [60, "open:m-60"],
            [64, "open:m-64"],
            [72, "open:m-72"],
            [80, "open:m-80"],
            [96, "open:m-96"],
            ["auto", "open:m-auto"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
