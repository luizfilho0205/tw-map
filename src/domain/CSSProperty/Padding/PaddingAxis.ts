import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { AxisMapping, Breakpoints, CSSSelector, FlexSpacing } from "../../types";
import { PaddingAxisInsideBreakpoints } from "./PaddingAxisInsideBreakpoints";
import { DefaultValue } from "../DefaultValue";

export class PaddingAxis
  extends CSSProperty<Map<AxisMapping, Map<FlexSpacing, string>>>
  implements
    Breakable<Map<Breakpoints, Map<AxisMapping, Map<FlexSpacing, string>>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<AxisMapping, Map<FlexSpacing, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new PaddingClassesMapping();
    return new PaddingAxis(classesMapping, selector);
  }

  public breakpoints() {
    return PaddingAxisInsideBreakpoints.create(this.cssSelector);
  }

  public write(axis: AxisMapping, spacing: FlexSpacing) {
    return this.getClassName(axis, spacing);
  }
}

class PaddingClassesMapping
  implements ClassesMapping<Map<AxisMapping, Map<FlexSpacing, string>>>
{
  private defaultValue: DefaultValue<AxisMapping, Map<FlexSpacing, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<AxisMapping, Map<FlexSpacing, string>>(
      "x",
      new Map<FlexSpacing, string>([
        [0, "px-0"],
        ["px", "px-px"],
        [0.5, "px-0.5"],
        [1, "px-1"],
        [1.5, "px-1.5"],
        [2, "px-2"],
        [2.5, "px-2.5"],
        [3, "px-3"],
        [3.5, "px-3.5"],
        [4, "px-4"],
        [5, "px-5"],
        [6, "px-6"],
        [7, "px-7"],
        [8, "px-8"],
        [9, "px-9"],
        [10, "px-10"],
        [11, "px-11"],
        [12, "px-12"],
        [14, "px-14"],
        [16, "px-16"],
        [20, "px-20"],
        [24, "px-24"],
        [28, "px-28"],
        [32, "px-32"],
        [36, "px-36"],
        [40, "px-40"],
        [44, "px-44"],
        [48, "px-48"],
        [52, "px-52"],
        [56, "px-56"],
        [60, "px-60"],
        [64, "px-64"],
        [72, "px-72"],
        [80, "px-80"],
        [96, "px-96"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<AxisMapping, Map<FlexSpacing, string>>>([
        [
          "active",
          new Map<AxisMapping, Map<FlexSpacing, string>>([
            [
              "x",
              new Map<FlexSpacing, string>([
                [0, "active:px-0"],
                ["px", "active:px-px"],
                [0.5, "active:px-0.5"],
                [1, "active:px-1"],
                [1.5, "active:px-1.5"],
                [2, "active:px-2"],
                [2.5, "active:px-2.5"],
                [3, "active:px-3"],
                [3.5, "active:px-3.5"],
                [4, "active:px-4"],
                [5, "active:px-5"],
                [6, "active:px-6"],
                [7, "active:px-7"],
                [8, "active:px-8"],
                [9, "active:px-9"],
                [10, "active:px-10"],
                [11, "active:px-11"],
                [12, "active:px-12"],
                [14, "active:px-14"],
                [16, "active:px-16"],
                [20, "active:px-20"],
                [24, "active:px-24"],
                [28, "active:px-28"],
                [32, "active:px-32"],
                [36, "active:px-36"],
                [40, "active:px-40"],
                [44, "active:px-44"],
                [48, "active:px-48"],
                [52, "active:px-52"],
                [56, "active:px-56"],
                [60, "active:px-60"],
                [64, "active:px-64"],
                [72, "active:px-72"],
                [80, "active:px-80"],
                [96, "active:px-96"],
              ]),
            ],
            [
              "y",
              new Map<FlexSpacing, string>([
                [0, "active:py-0"],
                ["px", "active:py-px"],
                [0.5, "active:py-0.5"],
                [1, "active:py-1"],
                [1.5, "active:py-1.5"],
                [2, "active:py-2"],
                [2.5, "active:py-2.5"],
                [3, "active:py-3"],
                [3.5, "active:py-3.5"],
                [4, "active:py-4"],
                [5, "active:py-5"],
                [6, "active:py-6"],
                [7, "active:py-7"],
                [8, "active:py-8"],
                [9, "active:py-9"],
                [10, "active:py-10"],
                [11, "active:py-11"],
                [12, "active:py-12"],
                [14, "active:py-14"],
                [16, "active:py-16"],
                [20, "active:py-20"],
                [24, "active:py-24"],
                [28, "active:py-28"],
                [32, "active:py-32"],
                [36, "active:py-36"],
                [40, "active:py-40"],
                [44, "active:py-44"],
                [48, "active:py-48"],
                [52, "active:py-52"],
                [56, "active:py-56"],
                [60, "active:py-60"],
                [64, "active:py-64"],
                [72, "active:py-72"],
                [80, "active:py-80"],
                [96, "active:py-96"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<AxisMapping, Map<FlexSpacing, string>>([
            [
              "x",
              new Map<FlexSpacing, string>([
                [0, "disabled:px-0"],
                ["px", "disabled:px-px"],
                [0.5, "disabled:px-0.5"],
                [1, "disabled:px-1"],
                [1.5, "disabled:px-1.5"],
                [2, "disabled:px-2"],
                [2.5, "disabled:px-2.5"],
                [3, "disabled:px-3"],
                [3.5, "disabled:px-3.5"],
                [4, "disabled:px-4"],
                [5, "disabled:px-5"],
                [6, "disabled:px-6"],
                [7, "disabled:px-7"],
                [8, "disabled:px-8"],
                [9, "disabled:px-9"],
                [10, "disabled:px-10"],
                [11, "disabled:px-11"],
                [12, "disabled:px-12"],
                [14, "disabled:px-14"],
                [16, "disabled:px-16"],
                [20, "disabled:px-20"],
                [24, "disabled:px-24"],
                [28, "disabled:px-28"],
                [32, "disabled:px-32"],
                [36, "disabled:px-36"],
                [40, "disabled:px-40"],
                [44, "disabled:px-44"],
                [48, "disabled:px-48"],
                [52, "disabled:px-52"],
                [56, "disabled:px-56"],
                [60, "disabled:px-60"],
                [64, "disabled:px-64"],
                [72, "disabled:px-72"],
                [80, "disabled:px-80"],
                [96, "disabled:px-96"],
              ]),
            ],
            [
              "y",
              new Map<FlexSpacing, string>([
                [0, "disabled:py-0"],
                ["px", "disabled:py-px"],
                [0.5, "disabled:py-0.5"],
                [1, "disabled:py-1"],
                [1.5, "disabled:py-1.5"],
                [2, "disabled:py-2"],
                [2.5, "disabled:py-2.5"],
                [3, "disabled:py-3"],
                [3.5, "disabled:py-3.5"],
                [4, "disabled:py-4"],
                [5, "disabled:py-5"],
                [6, "disabled:py-6"],
                [7, "disabled:py-7"],
                [8, "disabled:py-8"],
                [9, "disabled:py-9"],
                [10, "disabled:py-10"],
                [11, "disabled:py-11"],
                [12, "disabled:py-12"],
                [14, "disabled:py-14"],
                [16, "disabled:py-16"],
                [20, "disabled:py-20"],
                [24, "disabled:py-24"],
                [28, "disabled:py-28"],
                [32, "disabled:py-32"],
                [36, "disabled:py-36"],
                [40, "disabled:py-40"],
                [44, "disabled:py-44"],
                [48, "disabled:py-48"],
                [52, "disabled:py-52"],
                [56, "disabled:py-56"],
                [60, "disabled:py-60"],
                [64, "disabled:py-64"],
                [72, "disabled:py-72"],
                [80, "disabled:py-80"],
                [96, "disabled:py-96"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<AxisMapping, Map<FlexSpacing, string>>([
            [
              "x",
              new Map<FlexSpacing, string>([
                [0, "hover:px-0"],
                ["px", "hover:px-px"],
                [0.5, "hover:px-0.5"],
                [1, "hover:px-1"],
                [1.5, "hover:px-1.5"],
                [2, "hover:px-2"],
                [2.5, "hover:px-2.5"],
                [3, "hover:px-3"],
                [3.5, "hover:px-3.5"],
                [4, "hover:px-4"],
                [5, "hover:px-5"],
                [6, "hover:px-6"],
                [7, "hover:px-7"],
                [8, "hover:px-8"],
                [9, "hover:px-9"],
                [10, "hover:px-10"],
                [11, "hover:px-11"],
                [12, "hover:px-12"],
                [14, "hover:px-14"],
                [16, "hover:px-16"],
                [20, "hover:px-20"],
                [24, "hover:px-24"],
                [28, "hover:px-28"],
                [32, "hover:px-32"],
                [36, "hover:px-36"],
                [40, "hover:px-40"],
                [44, "hover:px-44"],
                [48, "hover:px-48"],
                [52, "hover:px-52"],
                [56, "hover:px-56"],
                [60, "hover:px-60"],
                [64, "hover:px-64"],
                [72, "hover:px-72"],
                [80, "hover:px-80"],
                [96, "hover:px-96"],
              ]),
            ],
            [
              "y",
              new Map<FlexSpacing, string>([
                [0, "hover:py-0"],
                ["px", "hover:py-px"],
                [0.5, "hover:py-0.5"],
                [1, "hover:py-1"],
                [1.5, "hover:py-1.5"],
                [2, "hover:py-2"],
                [2.5, "hover:py-2.5"],
                [3, "hover:py-3"],
                [3.5, "hover:py-3.5"],
                [4, "hover:py-4"],
                [5, "hover:py-5"],
                [6, "hover:py-6"],
                [7, "hover:py-7"],
                [8, "hover:py-8"],
                [9, "hover:py-9"],
                [10, "hover:py-10"],
                [11, "hover:py-11"],
                [12, "hover:py-12"],
                [14, "hover:py-14"],
                [16, "hover:py-16"],
                [20, "hover:py-20"],
                [24, "hover:py-24"],
                [28, "hover:py-28"],
                [32, "hover:py-32"],
                [36, "hover:py-36"],
                [40, "hover:py-40"],
                [44, "hover:py-44"],
                [48, "hover:py-48"],
                [52, "hover:py-52"],
                [56, "hover:py-56"],
                [60, "hover:py-60"],
                [64, "hover:py-64"],
                [72, "hover:py-72"],
                [80, "hover:py-80"],
                [96, "hover:py-96"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<AxisMapping, Map<FlexSpacing, string>>([
            [
              "x",
              new Map<FlexSpacing, string>([
                [0, "px-0"],
                ["px", "px-px"],
                [0.5, "px-0.5"],
                [1, "px-1"],
                [1.5, "px-1.5"],
                [2, "px-2"],
                [2.5, "px-2.5"],
                [3, "px-3"],
                [3.5, "px-3.5"],
                [4, "px-4"],
                [5, "px-5"],
                [6, "px-6"],
                [7, "px-7"],
                [8, "px-8"],
                [9, "px-9"],
                [10, "px-10"],
                [11, "px-11"],
                [12, "px-12"],
                [14, "px-14"],
                [16, "px-16"],
                [20, "px-20"],
                [24, "px-24"],
                [28, "px-28"],
                [32, "px-32"],
                [36, "px-36"],
                [40, "px-40"],
                [44, "px-44"],
                [48, "px-48"],
                [52, "px-52"],
                [56, "px-56"],
                [60, "px-60"],
                [64, "px-64"],
                [72, "px-72"],
                [80, "px-80"],
                [96, "px-96"],
              ]),
            ],
            [
              "y",
              new Map<FlexSpacing, string>([
                [0, "py-0"],
                ["px", "py-px"],
                [0.5, "py-0.5"],
                [1, "py-1"],
                [1.5, "py-1.5"],
                [2, "py-2"],
                [2.5, "py-2.5"],
                [3, "py-3"],
                [3.5, "py-3.5"],
                [4, "py-4"],
                [5, "py-5"],
                [6, "py-6"],
                [7, "py-7"],
                [8, "py-8"],
                [9, "py-9"],
                [10, "py-10"],
                [11, "py-11"],
                [12, "py-12"],
                [14, "py-14"],
                [16, "py-16"],
                [20, "py-20"],
                [24, "py-24"],
                [28, "py-28"],
                [32, "py-32"],
                [36, "py-36"],
                [40, "py-40"],
                [44, "py-44"],
                [48, "py-48"],
                [52, "py-52"],
                [56, "py-56"],
                [60, "py-60"],
                [64, "py-64"],
                [72, "py-72"],
                [80, "py-80"],
                [96, "py-96"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<AxisMapping, Map<FlexSpacing, string>>([
            [
              "x",
              new Map<FlexSpacing, string>([
                [0, "open:px-0"],
                ["px", "open:px-px"],
                [0.5, "open:px-0.5"],
                [1, "open:px-1"],
                [1.5, "open:px-1.5"],
                [2, "open:px-2"],
                [2.5, "open:px-2.5"],
                [3, "open:px-3"],
                [3.5, "open:px-3.5"],
                [4, "open:px-4"],
                [5, "open:px-5"],
                [6, "open:px-6"],
                [7, "open:px-7"],
                [8, "open:px-8"],
                [9, "open:px-9"],
                [10, "open:px-10"],
                [11, "open:px-11"],
                [12, "open:px-12"],
                [14, "open:px-14"],
                [16, "open:px-16"],
                [20, "open:px-20"],
                [24, "open:px-24"],
                [28, "open:px-28"],
                [32, "open:px-32"],
                [36, "open:px-36"],
                [40, "open:px-40"],
                [44, "open:px-44"],
                [48, "open:px-48"],
                [52, "open:px-52"],
                [56, "open:px-56"],
                [60, "open:px-60"],
                [64, "open:px-64"],
                [72, "open:px-72"],
                [80, "open:px-80"],
                [96, "open:px-96"],
              ]),
            ],
            [
              "y",
              new Map<FlexSpacing, string>([
                [0, "open:py-0"],
                ["px", "open:py-px"],
                [0.5, "open:py-0.5"],
                [1, "open:py-1"],
                [1.5, "open:py-1.5"],
                [2, "open:py-2"],
                [2.5, "open:py-2.5"],
                [3, "open:py-3"],
                [3.5, "open:py-3.5"],
                [4, "open:py-4"],
                [5, "open:py-5"],
                [6, "open:py-6"],
                [7, "open:py-7"],
                [8, "open:py-8"],
                [9, "open:py-9"],
                [10, "open:py-10"],
                [11, "open:py-11"],
                [12, "open:py-12"],
                [14, "open:py-14"],
                [16, "open:py-16"],
                [20, "open:py-20"],
                [24, "open:py-24"],
                [28, "open:py-28"],
                [32, "open:py-32"],
                [36, "open:py-36"],
                [40, "open:py-40"],
                [44, "open:py-44"],
                [48, "open:py-48"],
                [52, "open:py-52"],
                [56, "open:py-56"],
                [60, "open:py-60"],
                [64, "open:py-64"],
                [72, "open:py-72"],
                [80, "open:py-80"],
                [96, "open:py-96"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}