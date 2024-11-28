import { Breakpoints, CSSSelector, FlexSize } from "../../types";
import { SizeBreakpoints } from "./SizeBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";
import { Breakable } from "../../Entities/Brekable";

export class Size
  extends CSSProperty<Map<FlexSize, string>>
  implements Breakable<Map<Breakpoints, Map<FlexSize, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexSize, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new SizeClassesMapping();
    return new Size(classesMapping, selector);
  }

  public breakpoints() {
    return SizeBreakpoints.create(this.cssSelector);
  }

  public write(size: FlexSize) {
    return this.getClassName(size);
  }
}

class SizeClassesMapping implements ClassesMapping<Map<FlexSize, string>> {
  private defaultValue: DefaultValue<FlexSize, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexSize, string>("auto", "size-auto");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexSize, string>>([
        [
          "active",
          new Map<FlexSize, string>([
            [0, "active:size-0"],
            ["px", "active:size-px"],
            [0.5, "active:size-0.5"],
            [1, "active:size-1"],
            [1.5, "active:size-1.5"],
            [2, "active:size-2"],
            [2.5, "active:size-2.5"],
            [3, "active:size-3"],
            [3.5, "active:size-3.5"],
            [4, "active:size-4"],
            [5, "active:size-5"],
            [6, "active:size-6"],
            [7, "active:size-7"],
            [8, "active:size-8"],
            [9, "active:size-9"],
            [10, "active:size-10"],
            [11, "active:size-11"],
            [12, "active:size-12"],
            [14, "active:size-14"],
            [16, "active:size-16"],
            [20, "active:size-20"],
            [24, "active:size-24"],
            [28, "active:size-28"],
            [32, "active:size-32"],
            [36, "active:size-36"],
            [40, "active:size-40"],
            [44, "active:size-44"],
            [48, "active:size-48"],
            [52, "active:size-52"],
            [56, "active:size-56"],
            [60, "active:size-60"],
            [64, "active:size-64"],
            [72, "active:size-72"],
            [80, "active:size-80"],
            [96, "active:size-96"],
            ["auto", "active:size-auto"],
            ["1/2", "active:size-1/2"],
            ["1/3", "active:size-1/3"],
            ["2/3", "active:size-2/3"],
            ["1/4", "active:size-1/4"],
            ["2/4", "active:size-2/4"],
            ["3/4", "active:size-3/4"],
            ["1/5", "active:size-1/5"],
            ["2/5", "active:size-2/5"],
            ["3/5", "active:size-3/5"],
            ["4/5", "active:size-4/5"],
            ["1/6", "active:size-1/6"],
            ["2/6", "active:size-2/6"],
            ["3/6", "active:size-3/6"],
            ["4/6", "active:size-4/6"],
            ["5/6", "active:size-5/6"],
            ["1/12", "active:size-1/12"],
            ["2/12", "active:size-2/12"],
            ["3/12", "active:size-3/12"],
            ["4/12", "active:size-4/12"],
            ["5/12", "active:size-5/12"],
            ["6/12", "active:size-6/12"],
            ["7/12", "active:size-7/12"],
            ["8/12", "active:size-8/12"],
            ["9/12", "active:size-9/12"],
            ["10/12", "active:size-10/12"],
            ["11/12", "active:size-11/12"],
            ["full", "active:size-full"],
            ["min", "active:size-min"],
            ["max", "active:size-max"],
            ["fit", "active:size-fit"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexSize, string>([
            [0, "disabled:size-0"],
            ["px", "disabled:size-px"],
            [0.5, "disabled:size-0.5"],
            [1, "disabled:size-1"],
            [1.5, "disabled:size-1.5"],
            [2, "disabled:size-2"],
            [2.5, "disabled:size-2.5"],
            [3, "disabled:size-3"],
            [3.5, "disabled:size-3.5"],
            [4, "disabled:size-4"],
            [5, "disabled:size-5"],
            [6, "disabled:size-6"],
            [7, "disabled:size-7"],
            [8, "disabled:size-8"],
            [9, "disabled:size-9"],
            [10, "disabled:size-10"],
            [11, "disabled:size-11"],
            [12, "disabled:size-12"],
            [14, "disabled:size-14"],
            [16, "disabled:size-16"],
            [20, "disabled:size-20"],
            [24, "disabled:size-24"],
            [28, "disabled:size-28"],
            [32, "disabled:size-32"],
            [36, "disabled:size-36"],
            [40, "disabled:size-40"],
            [44, "disabled:size-44"],
            [48, "disabled:size-48"],
            [52, "disabled:size-52"],
            [56, "disabled:size-56"],
            [60, "disabled:size-60"],
            [64, "disabled:size-64"],
            [72, "disabled:size-72"],
            [80, "disabled:size-80"],
            [96, "disabled:size-96"],
            ["auto", "disabled:size-auto"],
            ["1/2", "disabled:size-1/2"],
            ["1/3", "disabled:size-1/3"],
            ["2/3", "disabled:size-2/3"],
            ["1/4", "disabled:size-1/4"],
            ["2/4", "disabled:size-2/4"],
            ["3/4", "disabled:size-3/4"],
            ["1/5", "disabled:size-1/5"],
            ["2/5", "disabled:size-2/5"],
            ["3/5", "disabled:size-3/5"],
            ["4/5", "disabled:size-4/5"],
            ["1/6", "disabled:size-1/6"],
            ["2/6", "disabled:size-2/6"],
            ["3/6", "disabled:size-3/6"],
            ["4/6", "disabled:size-4/6"],
            ["5/6", "disabled:size-5/6"],
            ["1/12", "disabled:size-1/12"],
            ["2/12", "disabled:size-2/12"],
            ["3/12", "disabled:size-3/12"],
            ["4/12", "disabled:size-4/12"],
            ["5/12", "disabled:size-5/12"],
            ["6/12", "disabled:size-6/12"],
            ["7/12", "disabled:size-7/12"],
            ["8/12", "disabled:size-8/12"],
            ["9/12", "disabled:size-9/12"],
            ["10/12", "disabled:size-10/12"],
            ["11/12", "disabled:size-11/12"],
            ["full", "disabled:size-full"],
            ["min", "disabled:size-min"],
            ["max", "disabled:size-max"],
            ["fit", "disabled:size-fit"],
          ]),
        ],
        [
          "hover",
          new Map<FlexSize, string>([
            [0, "hover:size-0"],
            ["px", "hover:size-px"],
            [0.5, "hover:size-0.5"],
            [1, "hover:size-1"],
            [1.5, "hover:size-1.5"],
            [2, "hover:size-2"],
            [2.5, "hover:size-2.5"],
            [3, "hover:size-3"],
            [3.5, "hover:size-3.5"],
            [4, "hover:size-4"],
            [5, "hover:size-5"],
            [6, "hover:size-6"],
            [7, "hover:size-7"],
            [8, "hover:size-8"],
            [9, "hover:size-9"],
            [10, "hover:size-10"],
            [11, "hover:size-11"],
            [12, "hover:size-12"],
            [14, "hover:size-14"],
            [16, "hover:size-16"],
            [20, "hover:size-20"],
            [24, "hover:size-24"],
            [28, "hover:size-28"],
            [32, "hover:size-32"],
            [36, "hover:size-36"],
            [40, "hover:size-40"],
            [44, "hover:size-44"],
            [48, "hover:size-48"],
            [52, "hover:size-52"],
            [56, "hover:size-56"],
            [60, "hover:size-60"],
            [64, "hover:size-64"],
            [72, "hover:size-72"],
            [80, "hover:size-80"],
            [96, "hover:size-96"],
            ["auto", "hover:size-auto"],
            ["1/2", "hover:size-1/2"],
            ["1/3", "hover:size-1/3"],
            ["2/3", "hover:size-2/3"],
            ["1/4", "hover:size-1/4"],
            ["2/4", "hover:size-2/4"],
            ["3/4", "hover:size-3/4"],
            ["1/5", "hover:size-1/5"],
            ["2/5", "hover:size-2/5"],
            ["3/5", "hover:size-3/5"],
            ["4/5", "hover:size-4/5"],
            ["1/6", "hover:size-1/6"],
            ["2/6", "hover:size-2/6"],
            ["3/6", "hover:size-3/6"],
            ["4/6", "hover:size-4/6"],
            ["5/6", "hover:size-5/6"],
            ["1/12", "hover:size-1/12"],
            ["2/12", "hover:size-2/12"],
            ["3/12", "hover:size-3/12"],
            ["4/12", "hover:size-4/12"],
            ["5/12", "hover:size-5/12"],
            ["6/12", "hover:size-6/12"],
            ["7/12", "hover:size-7/12"],
            ["8/12", "hover:size-8/12"],
            ["9/12", "hover:size-9/12"],
            ["10/12", "hover:size-10/12"],
            ["11/12", "hover:size-11/12"],
            ["full", "hover:size-full"],
            ["min", "hover:size-min"],
            ["max", "hover:size-max"],
            ["fit", "hover:size-fit"],
          ]),
        ],
        [
          "none",
          new Map<FlexSize, string>([
            [0, "size-0"],
            ["px", "size-px"],
            [0.5, "size-0.5"],
            [1, "size-1"],
            [1.5, "size-1.5"],
            [2, "size-2"],
            [2.5, "size-2.5"],
            [3, "size-3"],
            [3.5, "size-3.5"],
            [4, "size-4"],
            [5, "size-5"],
            [6, "size-6"],
            [7, "size-7"],
            [8, "size-8"],
            [9, "size-9"],
            [10, "size-10"],
            [11, "size-11"],
            [12, "size-12"],
            [14, "size-14"],
            [16, "size-16"],
            [20, "size-20"],
            [24, "size-24"],
            [28, "size-28"],
            [32, "size-32"],
            [36, "size-36"],
            [40, "size-40"],
            [44, "size-44"],
            [48, "size-48"],
            [52, "size-52"],
            [56, "size-56"],
            [60, "size-60"],
            [64, "size-64"],
            [72, "size-72"],
            [80, "size-80"],
            [96, "size-96"],
            ["auto", "size-auto"],
            ["1/2", "size-1/2"],
            ["1/3", "size-1/3"],
            ["2/3", "size-2/3"],
            ["1/4", "size-1/4"],
            ["2/4", "size-2/4"],
            ["3/4", "size-3/4"],
            ["1/5", "size-1/5"],
            ["2/5", "size-2/5"],
            ["3/5", "size-3/5"],
            ["4/5", "size-4/5"],
            ["1/6", "size-1/6"],
            ["2/6", "size-2/6"],
            ["3/6", "size-3/6"],
            ["4/6", "size-4/6"],
            ["5/6", "size-5/6"],
            ["1/12", "size-1/12"],
            ["2/12", "size-2/12"],
            ["3/12", "size-3/12"],
            ["4/12", "size-4/12"],
            ["5/12", "size-5/12"],
            ["6/12", "size-6/12"],
            ["7/12", "size-7/12"],
            ["8/12", "size-8/12"],
            ["9/12", "size-9/12"],
            ["10/12", "size-10/12"],
            ["11/12", "size-11/12"],
            ["full", "size-full"],
            ["min", "size-min"],
            ["max", "size-max"],
            ["fit", "size-fit"],
          ]),
        ],
        [
          "open",
          new Map<FlexSize, string>([
            [0, "open:size-0"],
            ["px", "open:size-px"],
            [0.5, "open:size-0.5"],
            [1, "open:size-1"],
            [1.5, "open:size-1.5"],
            [2, "open:size-2"],
            [2.5, "open:size-2.5"],
            [3, "open:size-3"],
            [3.5, "open:size-3.5"],
            [4, "open:size-4"],
            [5, "open:size-5"],
            [6, "open:size-6"],
            [7, "open:size-7"],
            [8, "open:size-8"],
            [9, "open:size-9"],
            [10, "open:size-10"],
            [11, "open:size-11"],
            [12, "open:size-12"],
            [14, "open:size-14"],
            [16, "open:size-16"],
            [20, "open:size-20"],
            [24, "open:size-24"],
            [28, "open:size-28"],
            [32, "open:size-32"],
            [36, "open:size-36"],
            [40, "open:size-40"],
            [44, "open:size-44"],
            [48, "open:size-48"],
            [52, "open:size-52"],
            [56, "open:size-56"],
            [60, "open:size-60"],
            [64, "open:size-64"],
            [72, "open:size-72"],
            [80, "open:size-80"],
            [96, "open:size-96"],
            ["auto", "open:size-auto"],
            ["1/2", "open:size-1/2"],
            ["1/3", "open:size-1/3"],
            ["2/3", "open:size-2/3"],
            ["1/4", "open:size-1/4"],
            ["2/4", "open:size-2/4"],
            ["3/4", "open:size-3/4"],
            ["1/5", "open:size-1/5"],
            ["2/5", "open:size-2/5"],
            ["3/5", "open:size-3/5"],
            ["4/5", "open:size-4/5"],
            ["1/6", "open:size-1/6"],
            ["2/6", "open:size-2/6"],
            ["3/6", "open:size-3/6"],
            ["4/6", "open:size-4/6"],
            ["5/6", "open:size-5/6"],
            ["1/12", "open:size-1/12"],
            ["2/12", "open:size-2/12"],
            ["3/12", "open:size-3/12"],
            ["4/12", "open:size-4/12"],
            ["5/12", "open:size-5/12"],
            ["6/12", "open:size-6/12"],
            ["7/12", "open:size-7/12"],
            ["8/12", "open:size-8/12"],
            ["9/12", "open:size-9/12"],
            ["10/12", "open:size-10/12"],
            ["11/12", "open:size-11/12"],
            ["full", "open:size-full"],
            ["min", "open:size-min"],
            ["max", "open:size-max"],
            ["fit", "open:size-fit"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}