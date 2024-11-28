import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexMinWidth } from "../../types";
import { DefaultValue } from "../DefaultValue";
import { MinWidthBreakpoints } from "./MinWidthBreakpoints";

export class MinWidth
  extends CSSProperty<Map<FlexMinWidth, string>>
  implements Breakable<Map<Breakpoints, Map<FlexMinWidth, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexMinWidth, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new MinWidthClassesMapping();
    return new MinWidth(classesMapping, selector);
  }

  public breakpoints() {
    return MinWidthBreakpoints.create(this.cssSelector);
  }

  public write(grow: FlexMinWidth) {
    return this.getClassName(grow);
  }
}

class MinWidthClassesMapping
  implements ClassesMapping<Map<FlexMinWidth, string>>
{
  private defaultValue: DefaultValue<FlexMinWidth, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexMinWidth, string>(
      "fit",
      "min-w-fit"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexMinWidth, string>>([
        [
          "active",
          new Map<FlexMinWidth, string>([
            [0, "active:min-w-0"],
            [1, "active:min-w-1"],
            [2, "active:min-w-2"],
            [3, "active:min-w-3"],
            [4, "active:min-w-4"],
            [5, "active:min-w-5"],
            [6, "active:min-w-6"],
            [7, "active:min-w-7"],
            [8, "active:min-w-8"],
            [9, "active:min-w-9"],
            [10, "active:min-w-10"],
            [11, "active:min-w-11"],
            [12, "active:min-w-12"],
            [14, "active:min-w-14"],
            [16, "active:min-w-16"],
            [20, "active:min-w-20"],
            [24, "active:min-w-24"],
            [28, "active:min-w-28"],
            [32, "active:min-w-32"],
            [36, "active:min-w-36"],
            [40, "active:min-w-40"],
            [44, "active:min-w-44"],
            [48, "active:min-w-48"],
            [52, "active:min-w-52"],
            [56, "active:min-w-56"],
            [60, "active:min-w-60"],
            [64, "active:min-w-64"],
            [72, "active:min-w-72"],
            [80, "active:min-w-80"],
            [96, "active:min-w-96"],
            ["px", "active:min-w-px"],
            [0.5, "active:min-w-0.5"],
            [1.5, "active:min-w-1.5"],
            [2.5, "active:min-w-2.5"],
            [3.5, "active:min-w-3.5"],
            ["full", "active:min-w-full"],
            ["min", "active:min-w-min"],
            ["max", "active:min-w-max"],
            ["fit", "active:min-w-fit"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexMinWidth, string>([
            [0, "disabled:min-w-0"],
            [1, "disabled:min-w-1"],
            [2, "disabled:min-w-2"],
            [3, "disabled:min-w-3"],
            [4, "disabled:min-w-4"],
            [5, "disabled:min-w-5"],
            [6, "disabled:min-w-6"],
            [7, "disabled:min-w-7"],
            [8, "disabled:min-w-8"],
            [9, "disabled:min-w-9"],
            [10, "disabled:min-w-10"],
            [11, "disabled:min-w-11"],
            [12, "disabled:min-w-12"],
            [14, "disabled:min-w-14"],
            [16, "disabled:min-w-16"],
            [20, "disabled:min-w-20"],
            [24, "disabled:min-w-24"],
            [28, "disabled:min-w-28"],
            [32, "disabled:min-w-32"],
            [36, "disabled:min-w-36"],
            [40, "disabled:min-w-40"],
            [44, "disabled:min-w-44"],
            [48, "disabled:min-w-48"],
            [52, "disabled:min-w-52"],
            [56, "disabled:min-w-56"],
            [60, "disabled:min-w-60"],
            [64, "disabled:min-w-64"],
            [72, "disabled:min-w-72"],
            [80, "disabled:min-w-80"],
            [96, "disabled:min-w-96"],
            ["px", "disabled:min-w-px"],
            [0.5, "disabled:min-w-0.5"],
            [1.5, "disabled:min-w-1.5"],
            [2.5, "disabled:min-w-2.5"],
            [3.5, "disabled:min-w-3.5"],
            ["full", "disabled:min-w-full"],
            ["min", "disabled:min-w-min"],
            ["max", "disabled:min-w-max"],
            ["fit", "disabled:min-w-fit"],
          ]),
        ],
        [
          "hover",
          new Map<FlexMinWidth, string>([
            [0, "hover:min-w-0"],
            [1, "hover:min-w-1"],
            [2, "hover:min-w-2"],
            [3, "hover:min-w-3"],
            [4, "hover:min-w-4"],
            [5, "hover:min-w-5"],
            [6, "hover:min-w-6"],
            [7, "hover:min-w-7"],
            [8, "hover:min-w-8"],
            [9, "hover:min-w-9"],
            [10, "hover:min-w-10"],
            [11, "hover:min-w-11"],
            [12, "hover:min-w-12"],
            [14, "hover:min-w-14"],
            [16, "hover:min-w-16"],
            [20, "hover:min-w-20"],
            [24, "hover:min-w-24"],
            [28, "hover:min-w-28"],
            [32, "hover:min-w-32"],
            [36, "hover:min-w-36"],
            [40, "hover:min-w-40"],
            [44, "hover:min-w-44"],
            [48, "hover:min-w-48"],
            [52, "hover:min-w-52"],
            [56, "hover:min-w-56"],
            [60, "hover:min-w-60"],
            [64, "hover:min-w-64"],
            [72, "hover:min-w-72"],
            [80, "hover:min-w-80"],
            [96, "hover:min-w-96"],
            ["px", "hover:min-w-px"],
            [0.5, "hover:min-w-0.5"],
            [1.5, "hover:min-w-1.5"],
            [2.5, "hover:min-w-2.5"],
            [3.5, "hover:min-w-3.5"],
            ["full", "hover:min-w-full"],
            ["min", "hover:min-w-min"],
            ["max", "hover:min-w-max"],
            ["fit", "hover:min-w-fit"],
          ]),
        ],
        [
          "none",
          new Map<FlexMinWidth, string>([
            [0, "min-w-0"],
            [1, "min-w-1"],
            [2, "min-w-2"],
            [3, "min-w-3"],
            [4, "min-w-4"],
            [5, "min-w-5"],
            [6, "min-w-6"],
            [7, "min-w-7"],
            [8, "min-w-8"],
            [9, "min-w-9"],
            [10, "min-w-10"],
            [11, "min-w-11"],
            [12, "min-w-12"],
            [14, "min-w-14"],
            [16, "min-w-16"],
            [20, "min-w-20"],
            [24, "min-w-24"],
            [28, "min-w-28"],
            [32, "min-w-32"],
            [36, "min-w-36"],
            [40, "min-w-40"],
            [44, "min-w-44"],
            [48, "min-w-48"],
            [52, "min-w-52"],
            [56, "min-w-56"],
            [60, "min-w-60"],
            [64, "min-w-64"],
            [72, "min-w-72"],
            [80, "min-w-80"],
            [96, "min-w-96"],
            ["px", "min-w-px"],
            [0.5, "min-w-0.5"],
            [1.5, "min-w-1.5"],
            [2.5, "min-w-2.5"],
            [3.5, "min-w-3.5"],
            ["full", "min-w-full"],
            ["min", "min-w-min"],
            ["max", "min-w-max"],
            ["fit", "min-w-fit"],
          ]),
        ],
        [
          "open",
          new Map<FlexMinWidth, string>([
            [0, "open:min-w-0"],
            [1, "open:min-w-1"],
            [2, "open:min-w-2"],
            [3, "open:min-w-3"],
            [4, "open:min-w-4"],
            [5, "open:min-w-5"],
            [6, "open:min-w-6"],
            [7, "open:min-w-7"],
            [8, "open:min-w-8"],
            [9, "open:min-w-9"],
            [10, "open:min-w-10"],
            [11, "open:min-w-11"],
            [12, "open:min-w-12"],
            [14, "open:min-w-14"],
            [16, "open:min-w-16"],
            [20, "open:min-w-20"],
            [24, "open:min-w-24"],
            [28, "open:min-w-28"],
            [32, "open:min-w-32"],
            [36, "open:min-w-36"],
            [40, "open:min-w-40"],
            [44, "open:min-w-44"],
            [48, "open:min-w-48"],
            [52, "open:min-w-52"],
            [56, "open:min-w-56"],
            [60, "open:min-w-60"],
            [64, "open:min-w-64"],
            [72, "open:min-w-72"],
            [80, "open:min-w-80"],
            [96, "open:min-w-96"],
            ["px", "open:min-w-px"],
            [0.5, "open:min-w-0.5"],
            [1.5, "open:min-w-1.5"],
            [2.5, "open:min-w-2.5"],
            [3.5, "open:min-w-3.5"],
            ["full", "open:min-w-full"],
            ["min", "open:min-w-min"],
            ["max", "open:min-w-max"],
            ["fit", "open:min-w-fit"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
