import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexMinHeight } from "../../types";
import { DefaultValue } from "../DefaultValue";
import { Breakable } from "../../Entities/Brekable";
import { MinHeightBreakpoints } from "./MinHeightBreakpoints";

export class MinHeight
  extends CSSProperty<Map<FlexMinHeight, string>>
  implements Breakable<Map<Breakpoints, Map<FlexMinHeight, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexMinHeight, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  breakpoints() {
    return MinHeightBreakpoints.create(this.cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new MinHeightClassesMapping();
    return new MinHeight(classesMapping, selector);
  }

  public write(grow: FlexMinHeight) {
    return this.getClassName(grow);
  }
}

class MinHeightClassesMapping
  implements ClassesMapping<Map<FlexMinHeight, string>>
{
  private defaultValue: DefaultValue<FlexMinHeight, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexMinHeight, string>(
      "fit",
      "min-h-fit"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexMinHeight, string>>([
        [
          "active",
          new Map<FlexMinHeight, string>([
            [0, "active:min-h-0"],
            [1, "active:min-h-1"],
            [2, "active:min-h-2"],
            [3, "active:min-h-3"],
            [4, "active:min-h-4"],
            [5, "active:min-h-5"],
            [6, "active:min-h-6"],
            [7, "active:min-h-7"],
            [8, "active:min-h-8"],
            [9, "active:min-h-9"],
            [10, "active:min-h-10"],
            [11, "active:min-h-11"],
            [12, "active:min-h-12"],
            [14, "active:min-h-14"],
            [16, "active:min-h-16"],
            [20, "active:min-h-20"],
            [24, "active:min-h-24"],
            [28, "active:min-h-28"],
            [32, "active:min-h-32"],
            [36, "active:min-h-36"],
            [40, "active:min-h-40"],
            [44, "active:min-h-44"],
            [48, "active:min-h-48"],
            [52, "active:min-h-52"],
            [56, "active:min-h-56"],
            [60, "active:min-h-60"],
            [64, "active:min-h-64"],
            [72, "active:min-h-72"],
            [80, "active:min-h-80"],
            [96, "active:min-h-96"],
            ["px", "active:min-h-px"],
            [0.5, "active:min-h-0.5"],
            [1.5, "active:min-h-1.5"],
            [2.5, "active:min-h-2.5"],
            [3.5, "active:min-h-3.5"],
            ["full", "active:min-h-full"],
            ["screen", "active:min-h-screen"],
            ["svh", "active:min-h-svh"],
            ["lvh", "active:min-h-lvh"],
            ["dvh", "active:min-h-dvh"],
            ["min", "active:min-h-min"],
            ["max", "active:min-h-max"],
            ["fit", "active:min-h-fit"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexMinHeight, string>([
            [0, "disabled:min-h-0"],
            [1, "disabled:min-h-1"],
            [2, "disabled:min-h-2"],
            [3, "disabled:min-h-3"],
            [4, "disabled:min-h-4"],
            [5, "disabled:min-h-5"],
            [6, "disabled:min-h-6"],
            [7, "disabled:min-h-7"],
            [8, "disabled:min-h-8"],
            [9, "disabled:min-h-9"],
            [10, "disabled:min-h-10"],
            [11, "disabled:min-h-11"],
            [12, "disabled:min-h-12"],
            [14, "disabled:min-h-14"],
            [16, "disabled:min-h-16"],
            [20, "disabled:min-h-20"],
            [24, "disabled:min-h-24"],
            [28, "disabled:min-h-28"],
            [32, "disabled:min-h-32"],
            [36, "disabled:min-h-36"],
            [40, "disabled:min-h-40"],
            [44, "disabled:min-h-44"],
            [48, "disabled:min-h-48"],
            [52, "disabled:min-h-52"],
            [56, "disabled:min-h-56"],
            [60, "disabled:min-h-60"],
            [64, "disabled:min-h-64"],
            [72, "disabled:min-h-72"],
            [80, "disabled:min-h-80"],
            [96, "disabled:min-h-96"],
            ["px", "disabled:min-h-px"],
            [0.5, "disabled:min-h-0.5"],
            [1.5, "disabled:min-h-1.5"],
            [2.5, "disabled:min-h-2.5"],
            [3.5, "disabled:min-h-3.5"],
            ["full", "disabled:min-h-full"],
            ["screen", "disabled:min-h-screen"],
            ["svh", "disabled:min-h-svh"],
            ["lvh", "disabled:min-h-lvh"],
            ["dvh", "disabled:min-h-dvh"],
            ["min", "disabled:min-h-min"],
            ["max", "disabled:min-h-max"],
            ["fit", "disabled:min-h-fit"],
          ]),
        ],
        [
          "hover",
          new Map<FlexMinHeight, string>([
            [0, "hover:min-h-0"],
            [1, "hover:min-h-1"],
            [2, "hover:min-h-2"],
            [3, "hover:min-h-3"],
            [4, "hover:min-h-4"],
            [5, "hover:min-h-5"],
            [6, "hover:min-h-6"],
            [7, "hover:min-h-7"],
            [8, "hover:min-h-8"],
            [9, "hover:min-h-9"],
            [10, "hover:min-h-10"],
            [11, "hover:min-h-11"],
            [12, "hover:min-h-12"],
            [14, "hover:min-h-14"],
            [16, "hover:min-h-16"],
            [20, "hover:min-h-20"],
            [24, "hover:min-h-24"],
            [28, "hover:min-h-28"],
            [32, "hover:min-h-32"],
            [36, "hover:min-h-36"],
            [40, "hover:min-h-40"],
            [44, "hover:min-h-44"],
            [48, "hover:min-h-48"],
            [52, "hover:min-h-52"],
            [56, "hover:min-h-56"],
            [60, "hover:min-h-60"],
            [64, "hover:min-h-64"],
            [72, "hover:min-h-72"],
            [80, "hover:min-h-80"],
            [96, "hover:min-h-96"],
            ["px", "hover:min-h-px"],
            [0.5, "hover:min-h-0.5"],
            [1.5, "hover:min-h-1.5"],
            [2.5, "hover:min-h-2.5"],
            [3.5, "hover:min-h-3.5"],
            ["full", "hover:min-h-full"],
            ["screen", "hover:min-h-screen"],
            ["svh", "hover:min-h-svh"],
            ["lvh", "hover:min-h-lvh"],
            ["dvh", "hover:min-h-dvh"],
            ["min", "hover:min-h-min"],
            ["max", "hover:min-h-max"],
            ["fit", "hover:min-h-fit"],
          ]),
        ],
        [
          "none",
          new Map<FlexMinHeight, string>([
            [0, "min-h-0"],
            [1, "min-h-1"],
            [2, "min-h-2"],
            [3, "min-h-3"],
            [4, "min-h-4"],
            [5, "min-h-5"],
            [6, "min-h-6"],
            [7, "min-h-7"],
            [8, "min-h-8"],
            [9, "min-h-9"],
            [10, "min-h-10"],
            [11, "min-h-11"],
            [12, "min-h-12"],
            [14, "min-h-14"],
            [16, "min-h-16"],
            [20, "min-h-20"],
            [24, "min-h-24"],
            [28, "min-h-28"],
            [32, "min-h-32"],
            [36, "min-h-36"],
            [40, "min-h-40"],
            [44, "min-h-44"],
            [48, "min-h-48"],
            [52, "min-h-52"],
            [56, "min-h-56"],
            [60, "min-h-60"],
            [64, "min-h-64"],
            [72, "min-h-72"],
            [80, "min-h-80"],
            [96, "min-h-96"],
            ["px", "min-h-px"],
            [0.5, "min-h-0.5"],
            [1.5, "min-h-1.5"],
            [2.5, "min-h-2.5"],
            [3.5, "min-h-3.5"],
            ["full", "min-h-full"],
            ["screen", "min-h-screen"],
            ["svh", "min-h-svh"],
            ["lvh", "min-h-lvh"],
            ["dvh", "min-h-dvh"],
            ["min", "min-h-min"],
            ["max", "min-h-max"],
            ["fit", "min-h-fit"],
          ]),
        ],
        [
          "open",
          new Map<FlexMinHeight, string>([
            [0, "open:min-h-0"],
            [1, "open:min-h-1"],
            [2, "open:min-h-2"],
            [3, "open:min-h-3"],
            [4, "open:min-h-4"],
            [5, "open:min-h-5"],
            [6, "open:min-h-6"],
            [7, "open:min-h-7"],
            [8, "open:min-h-8"],
            [9, "open:min-h-9"],
            [10, "open:min-h-10"],
            [11, "open:min-h-11"],
            [12, "open:min-h-12"],
            [14, "open:min-h-14"],
            [16, "open:min-h-16"],
            [20, "open:min-h-20"],
            [24, "open:min-h-24"],
            [28, "open:min-h-28"],
            [32, "open:min-h-32"],
            [36, "open:min-h-36"],
            [40, "open:min-h-40"],
            [44, "open:min-h-44"],
            [48, "open:min-h-48"],
            [52, "open:min-h-52"],
            [56, "open:min-h-56"],
            [60, "open:min-h-60"],
            [64, "open:min-h-64"],
            [72, "open:min-h-72"],
            [80, "open:min-h-80"],
            [96, "open:min-h-96"],
            ["px", "open:min-h-px"],
            [0.5, "open:min-h-0.5"],
            [1.5, "open:min-h-1.5"],
            [2.5, "open:min-h-2.5"],
            [3.5, "open:min-h-3.5"],
            ["full", "open:min-h-full"],
            ["screen", "open:min-h-screen"],
            ["svh", "open:min-h-svh"],
            ["lvh", "open:min-h-lvh"],
            ["dvh", "open:min-h-dvh"],
            ["min", "open:min-h-min"],
            ["max", "open:min-h-max"],
            ["fit", "open:min-h-fit"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
