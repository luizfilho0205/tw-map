import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexSpacing, SideMapping } from "../../types";
import { PaddingSidesInsideBreakpoints } from "./PaddingSidesInsideBreakpoints";
import { DefaultValue } from "../DefaultValue";

export class PaddingSides
  extends CSSProperty<Map<SideMapping, Map<FlexSpacing, string>>>
  implements
    Breakable<Map<Breakpoints, Map<SideMapping, Map<FlexSpacing, string>>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<SideMapping, Map<FlexSpacing, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new PaddingClassesMapping();
    return new PaddingSides(classesMapping, selector);
  }

  public breakpoints() {
    return PaddingSidesInsideBreakpoints.create(this.cssSelector);
  }

  public write(side: SideMapping, spacing: FlexSpacing) {
    return this.getClassName(side, spacing);
  }
}

class PaddingClassesMapping
  implements ClassesMapping<Map<SideMapping, Map<FlexSpacing, string>>>
{
  private defaultValue: DefaultValue<SideMapping, Map<FlexSpacing, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<SideMapping, Map<FlexSpacing, string>>(
      "bottom",
      new Map<FlexSpacing, string>([
        [0, "pb-0"],
        ["px", "pb-px"],
        [0.5, "pb-0.5"],
        [1, "pb-1"],
        [1.5, "pb-1.5"],
        [2, "pb-2"],
        [2.5, "pb-2.5"],
        [3, "pb-3"],
        [3.5, "pb-3.5"],
        [4, "pb-4"],
        [5, "pb-5"],
        [6, "pb-6"],
        [7, "pb-7"],
        [8, "pb-8"],
        [9, "pb-9"],
        [10, "pb-10"],
        [11, "pb-11"],
        [12, "pb-12"],
        [14, "pb-14"],
        [16, "pb-16"],
        [20, "pb-20"],
        [24, "pb-24"],
        [28, "pb-28"],
        [32, "pb-32"],
        [36, "pb-36"],
        [40, "pb-40"],
        [44, "pb-44"],
        [48, "pb-48"],
        [52, "pb-52"],
        [56, "pb-56"],
        [60, "pb-60"],
        [64, "pb-64"],
        [72, "pb-72"],
        [80, "pb-80"],
        [96, "pb-96"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<SideMapping, Map<FlexSpacing, string>>>([
        [
          "active",
          new Map<SideMapping, Map<FlexSpacing, string>>([
            [
              "bottom",
              new Map<FlexSpacing, string>([
                [0, "active:pb-0"],
                ["px", "active:pb-px"],
                [0.5, "active:pb-0.5"],
                [1, "active:pb-1"],
                [1.5, "active:pb-1.5"],
                [2, "active:pb-2"],
                [2.5, "active:pb-2.5"],
                [3, "active:pb-3"],
                [3.5, "active:pb-3.5"],
                [4, "active:pb-4"],
                [5, "active:pb-5"],
                [6, "active:pb-6"],
                [7, "active:pb-7"],
                [8, "active:pb-8"],
                [9, "active:pb-9"],
                [10, "active:pb-10"],
                [11, "active:pb-11"],
                [12, "active:pb-12"],
                [14, "active:pb-14"],
                [16, "active:pb-16"],
                [20, "active:pb-20"],
                [24, "active:pb-24"],
                [28, "active:pb-28"],
                [32, "active:pb-32"],
                [36, "active:pb-36"],
                [40, "active:pb-40"],
                [44, "active:pb-44"],
                [48, "active:pb-48"],
                [52, "active:pb-52"],
                [56, "active:pb-56"],
                [60, "active:pb-60"],
                [64, "active:pb-64"],
                [72, "active:pb-72"],
                [80, "active:pb-80"],
                [96, "active:pb-96"],
              ]),
            ],
            [
              "left",
              new Map<FlexSpacing, string>([
                [0, "active:pl-0"],
                ["px", "active:pl-px"],
                [0.5, "active:pl-0.5"],
                [1, "active:pl-1"],
                [1.5, "active:pl-1.5"],
                [2, "active:pl-2"],
                [2.5, "active:pl-2.5"],
                [3, "active:pl-3"],
                [3.5, "active:pl-3.5"],
                [4, "active:pl-4"],
                [5, "active:pl-5"],
                [6, "active:pl-6"],
                [7, "active:pl-7"],
                [8, "active:pl-8"],
                [9, "active:pl-9"],
                [10, "active:pl-10"],
                [11, "active:pl-11"],
                [12, "active:pl-12"],
                [14, "active:pl-14"],
                [16, "active:pl-16"],
                [20, "active:pl-20"],
                [24, "active:pl-24"],
                [28, "active:pl-28"],
                [32, "active:pl-32"],
                [36, "active:pl-36"],
                [40, "active:pl-40"],
                [44, "active:pl-44"],
                [48, "active:pl-48"],
                [52, "active:pl-52"],
                [56, "active:pl-56"],
                [60, "active:pl-60"],
                [64, "active:pl-64"],
                [72, "active:pl-72"],
                [80, "active:pl-80"],
                [96, "active:pl-96"],
              ]),
            ],
            [
              "right",
              new Map<FlexSpacing, string>([
                [0, "active:pr-0"],
                ["px", "active:pr-px"],
                [0.5, "active:pr-0.5"],
                [1, "active:pr-1"],
                [1.5, "active:pr-1.5"],
                [2, "active:pr-2"],
                [2.5, "active:pr-2.5"],
                [3, "active:pr-3"],
                [3.5, "active:pr-3.5"],
                [4, "active:pr-4"],
                [5, "active:pr-5"],
                [6, "active:pr-6"],
                [7, "active:pr-7"],
                [8, "active:pr-8"],
                [9, "active:pr-9"],
                [10, "active:pr-10"],
                [11, "active:pr-11"],
                [12, "active:pr-12"],
                [14, "active:pr-14"],
                [16, "active:pr-16"],
                [20, "active:pr-20"],
                [24, "active:pr-24"],
                [28, "active:pr-28"],
                [32, "active:pr-32"],
                [36, "active:pr-36"],
                [40, "active:pr-40"],
                [44, "active:pr-44"],
                [48, "active:pr-48"],
                [52, "active:pr-52"],
                [56, "active:pr-56"],
                [60, "active:pr-60"],
                [64, "active:pr-64"],
                [72, "active:pr-72"],
                [80, "active:pr-80"],
                [96, "active:pr-96"],
              ]),
            ],
            [
              "top",
              new Map<FlexSpacing, string>([
                [0, "active:pt-0"],
                ["px", "active:pt-px"],
                [0.5, "active:pt-0.5"],
                [1, "active:pt-1"],
                [1.5, "active:pt-1.5"],
                [2, "active:pt-2"],
                [2.5, "active:pt-2.5"],
                [3, "active:pt-3"],
                [3.5, "active:pt-3.5"],
                [4, "active:pt-4"],
                [5, "active:pt-5"],
                [6, "active:pt-6"],
                [7, "active:pt-7"],
                [8, "active:pt-8"],
                [9, "active:pt-9"],
                [10, "active:pt-10"],
                [11, "active:pt-11"],
                [12, "active:pt-12"],
                [14, "active:pt-14"],
                [16, "active:pt-16"],
                [20, "active:pt-20"],
                [24, "active:pt-24"],
                [28, "active:pt-28"],
                [32, "active:pt-32"],
                [36, "active:pt-36"],
                [40, "active:pt-40"],
                [44, "active:pt-44"],
                [48, "active:pt-48"],
                [52, "active:pt-52"],
                [56, "active:pt-56"],
                [60, "active:pt-60"],
                [64, "active:pt-64"],
                [72, "active:pt-72"],
                [80, "active:pt-80"],
                [96, "active:pt-96"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<SideMapping, Map<FlexSpacing, string>>([
            [
              "bottom",
              new Map<FlexSpacing, string>([
                [0, "disabled:pb-0"],
                ["px", "disabled:pb-px"],
                [0.5, "disabled:pb-0.5"],
                [1, "disabled:pb-1"],
                [1.5, "disabled:pb-1.5"],
                [2, "disabled:pb-2"],
                [2.5, "disabled:pb-2.5"],
                [3, "disabled:pb-3"],
                [3.5, "disabled:pb-3.5"],
                [4, "disabled:pb-4"],
                [5, "disabled:pb-5"],
                [6, "disabled:pb-6"],
                [7, "disabled:pb-7"],
                [8, "disabled:pb-8"],
                [9, "disabled:pb-9"],
                [10, "disabled:pb-10"],
                [11, "disabled:pb-11"],
                [12, "disabled:pb-12"],
                [14, "disabled:pb-14"],
                [16, "disabled:pb-16"],
                [20, "disabled:pb-20"],
                [24, "disabled:pb-24"],
                [28, "disabled:pb-28"],
                [32, "disabled:pb-32"],
                [36, "disabled:pb-36"],
                [40, "disabled:pb-40"],
                [44, "disabled:pb-44"],
                [48, "disabled:pb-48"],
                [52, "disabled:pb-52"],
                [56, "disabled:pb-56"],
                [60, "disabled:pb-60"],
                [64, "disabled:pb-64"],
                [72, "disabled:pb-72"],
                [80, "disabled:pb-80"],
                [96, "disabled:pb-96"],
              ]),
            ],
            [
              "left",
              new Map<FlexSpacing, string>([
                [0, "disabled:pl-0"],
                ["px", "disabled:pl-px"],
                [0.5, "disabled:pl-0.5"],
                [1, "disabled:pl-1"],
                [1.5, "disabled:pl-1.5"],
                [2, "disabled:pl-2"],
                [2.5, "disabled:pl-2.5"],
                [3, "disabled:pl-3"],
                [3.5, "disabled:pl-3.5"],
                [4, "disabled:pl-4"],
                [5, "disabled:pl-5"],
                [6, "disabled:pl-6"],
                [7, "disabled:pl-7"],
                [8, "disabled:pl-8"],
                [9, "disabled:pl-9"],
                [10, "disabled:pl-10"],
                [11, "disabled:pl-11"],
                [12, "disabled:pl-12"],
                [14, "disabled:pl-14"],
                [16, "disabled:pl-16"],
                [20, "disabled:pl-20"],
                [24, "disabled:pl-24"],
                [28, "disabled:pl-28"],
                [32, "disabled:pl-32"],
                [36, "disabled:pl-36"],
                [40, "disabled:pl-40"],
                [44, "disabled:pl-44"],
                [48, "disabled:pl-48"],
                [52, "disabled:pl-52"],
                [56, "disabled:pl-56"],
                [60, "disabled:pl-60"],
                [64, "disabled:pl-64"],
                [72, "disabled:pl-72"],
                [80, "disabled:pl-80"],
                [96, "disabled:pl-96"],
              ]),
            ],
            [
              "right",
              new Map<FlexSpacing, string>([
                [0, "disabled:pr-0"],
                ["px", "disabled:pr-px"],
                [0.5, "disabled:pr-0.5"],
                [1, "disabled:pr-1"],
                [1.5, "disabled:pr-1.5"],
                [2, "disabled:pr-2"],
                [2.5, "disabled:pr-2.5"],
                [3, "disabled:pr-3"],
                [3.5, "disabled:pr-3.5"],
                [4, "disabled:pr-4"],
                [5, "disabled:pr-5"],
                [6, "disabled:pr-6"],
                [7, "disabled:pr-7"],
                [8, "disabled:pr-8"],
                [9, "disabled:pr-9"],
                [10, "disabled:pr-10"],
                [11, "disabled:pr-11"],
                [12, "disabled:pr-12"],
                [14, "disabled:pr-14"],
                [16, "disabled:pr-16"],
                [20, "disabled:pr-20"],
                [24, "disabled:pr-24"],
                [28, "disabled:pr-28"],
                [32, "disabled:pr-32"],
                [36, "disabled:pr-36"],
                [40, "disabled:pr-40"],
                [44, "disabled:pr-44"],
                [48, "disabled:pr-48"],
                [52, "disabled:pr-52"],
                [56, "disabled:pr-56"],
                [60, "disabled:pr-60"],
                [64, "disabled:pr-64"],
                [72, "disabled:pr-72"],
                [80, "disabled:pr-80"],
                [96, "disabled:pr-96"],
              ]),
            ],
            [
              "top",
              new Map<FlexSpacing, string>([
                [0, "disabled:pt-0"],
                ["px", "disabled:pt-px"],
                [0.5, "disabled:pt-0.5"],
                [1, "disabled:pt-1"],
                [1.5, "disabled:pt-1.5"],
                [2, "disabled:pt-2"],
                [2.5, "disabled:pt-2.5"],
                [3, "disabled:pt-3"],
                [3.5, "disabled:pt-3.5"],
                [4, "disabled:pt-4"],
                [5, "disabled:pt-5"],
                [6, "disabled:pt-6"],
                [7, "disabled:pt-7"],
                [8, "disabled:pt-8"],
                [9, "disabled:pt-9"],
                [10, "disabled:pt-10"],
                [11, "disabled:pt-11"],
                [12, "disabled:pt-12"],
                [14, "disabled:pt-14"],
                [16, "disabled:pt-16"],
                [20, "disabled:pt-20"],
                [24, "disabled:pt-24"],
                [28, "disabled:pt-28"],
                [32, "disabled:pt-32"],
                [36, "disabled:pt-36"],
                [40, "disabled:pt-40"],
                [44, "disabled:pt-44"],
                [48, "disabled:pt-48"],
                [52, "disabled:pt-52"],
                [56, "disabled:pt-56"],
                [60, "disabled:pt-60"],
                [64, "disabled:pt-64"],
                [72, "disabled:pt-72"],
                [80, "disabled:pt-80"],
                [96, "disabled:pt-96"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<SideMapping, Map<FlexSpacing, string>>([
            [
              "bottom",
              new Map<FlexSpacing, string>([
                [0, "hover:pb-0"],
                ["px", "hover:pb-px"],
                [0.5, "hover:pb-0.5"],
                [1, "hover:pb-1"],
                [1.5, "hover:pb-1.5"],
                [2, "hover:pb-2"],
                [2.5, "hover:pb-2.5"],
                [3, "hover:pb-3"],
                [3.5, "hover:pb-3.5"],
                [4, "hover:pb-4"],
                [5, "hover:pb-5"],
                [6, "hover:pb-6"],
                [7, "hover:pb-7"],
                [8, "hover:pb-8"],
                [9, "hover:pb-9"],
                [10, "hover:pb-10"],
                [11, "hover:pb-11"],
                [12, "hover:pb-12"],
                [14, "hover:pb-14"],
                [16, "hover:pb-16"],
                [20, "hover:pb-20"],
                [24, "hover:pb-24"],
                [28, "hover:pb-28"],
                [32, "hover:pb-32"],
                [36, "hover:pb-36"],
                [40, "hover:pb-40"],
                [44, "hover:pb-44"],
                [48, "hover:pb-48"],
                [52, "hover:pb-52"],
                [56, "hover:pb-56"],
                [60, "hover:pb-60"],
                [64, "hover:pb-64"],
                [72, "hover:pb-72"],
                [80, "hover:pb-80"],
                [96, "hover:pb-96"],
              ]),
            ],
            [
              "left",
              new Map<FlexSpacing, string>([
                [0, "hover:pl-0"],
                ["px", "hover:pl-px"],
                [0.5, "hover:pl-0.5"],
                [1, "hover:pl-1"],
                [1.5, "hover:pl-1.5"],
                [2, "hover:pl-2"],
                [2.5, "hover:pl-2.5"],
                [3, "hover:pl-3"],
                [3.5, "hover:pl-3.5"],
                [4, "hover:pl-4"],
                [5, "hover:pl-5"],
                [6, "hover:pl-6"],
                [7, "hover:pl-7"],
                [8, "hover:pl-8"],
                [9, "hover:pl-9"],
                [10, "hover:pl-10"],
                [11, "hover:pl-11"],
                [12, "hover:pl-12"],
                [14, "hover:pl-14"],
                [16, "hover:pl-16"],
                [20, "hover:pl-20"],
                [24, "hover:pl-24"],
                [28, "hover:pl-28"],
                [32, "hover:pl-32"],
                [36, "hover:pl-36"],
                [40, "hover:pl-40"],
                [44, "hover:pl-44"],
                [48, "hover:pl-48"],
                [52, "hover:pl-52"],
                [56, "hover:pl-56"],
                [60, "hover:pl-60"],
                [64, "hover:pl-64"],
                [72, "hover:pl-72"],
                [80, "hover:pl-80"],
                [96, "hover:pl-96"],
              ]),
            ],
            [
              "right",
              new Map<FlexSpacing, string>([
                [0, "hover:pr-0"],
                ["px", "hover:pr-px"],
                [0.5, "hover:pr-0.5"],
                [1, "hover:pr-1"],
                [1.5, "hover:pr-1.5"],
                [2, "hover:pr-2"],
                [2.5, "hover:pr-2.5"],
                [3, "hover:pr-3"],
                [3.5, "hover:pr-3.5"],
                [4, "hover:pr-4"],
                [5, "hover:pr-5"],
                [6, "hover:pr-6"],
                [7, "hover:pr-7"],
                [8, "hover:pr-8"],
                [9, "hover:pr-9"],
                [10, "hover:pr-10"],
                [11, "hover:pr-11"],
                [12, "hover:pr-12"],
                [14, "hover:pr-14"],
                [16, "hover:pr-16"],
                [20, "hover:pr-20"],
                [24, "hover:pr-24"],
                [28, "hover:pr-28"],
                [32, "hover:pr-32"],
                [36, "hover:pr-36"],
                [40, "hover:pr-40"],
                [44, "hover:pr-44"],
                [48, "hover:pr-48"],
                [52, "hover:pr-52"],
                [56, "hover:pr-56"],
                [60, "hover:pr-60"],
                [64, "hover:pr-64"],
                [72, "hover:pr-72"],
                [80, "hover:pr-80"],
                [96, "hover:pr-96"],
              ]),
            ],
            [
              "top",
              new Map<FlexSpacing, string>([
                [0, "hover:pt-0"],
                ["px", "hover:pt-px"],
                [0.5, "hover:pt-0.5"],
                [1, "hover:pt-1"],
                [1.5, "hover:pt-1.5"],
                [2, "hover:pt-2"],
                [2.5, "hover:pt-2.5"],
                [3, "hover:pt-3"],
                [3.5, "hover:pt-3.5"],
                [4, "hover:pt-4"],
                [5, "hover:pt-5"],
                [6, "hover:pt-6"],
                [7, "hover:pt-7"],
                [8, "hover:pt-8"],
                [9, "hover:pt-9"],
                [10, "hover:pt-10"],
                [11, "hover:pt-11"],
                [12, "hover:pt-12"],
                [14, "hover:pt-14"],
                [16, "hover:pt-16"],
                [20, "hover:pt-20"],
                [24, "hover:pt-24"],
                [28, "hover:pt-28"],
                [32, "hover:pt-32"],
                [36, "hover:pt-36"],
                [40, "hover:pt-40"],
                [44, "hover:pt-44"],
                [48, "hover:pt-48"],
                [52, "hover:pt-52"],
                [56, "hover:pt-56"],
                [60, "hover:pt-60"],
                [64, "hover:pt-64"],
                [72, "hover:pt-72"],
                [80, "hover:pt-80"],
                [96, "hover:pt-96"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<SideMapping, Map<FlexSpacing, string>>([
            [
              "bottom",
              new Map<FlexSpacing, string>([
                [0, "pb-0"],
                ["px", "pb-px"],
                [0.5, "pb-0.5"],
                [1, "pb-1"],
                [1.5, "pb-1.5"],
                [2, "pb-2"],
                [2.5, "pb-2.5"],
                [3, "pb-3"],
                [3.5, "pb-3.5"],
                [4, "pb-4"],
                [5, "pb-5"],
                [6, "pb-6"],
                [7, "pb-7"],
                [8, "pb-8"],
                [9, "pb-9"],
                [10, "pb-10"],
                [11, "pb-11"],
                [12, "pb-12"],
                [14, "pb-14"],
                [16, "pb-16"],
                [20, "pb-20"],
                [24, "pb-24"],
                [28, "pb-28"],
                [32, "pb-32"],
                [36, "pb-36"],
                [40, "pb-40"],
                [44, "pb-44"],
                [48, "pb-48"],
                [52, "pb-52"],
                [56, "pb-56"],
                [60, "pb-60"],
                [64, "pb-64"],
                [72, "pb-72"],
                [80, "pb-80"],
                [96, "pb-96"],
              ]),
            ],
            [
              "left",
              new Map<FlexSpacing, string>([
                [0, "pl-0"],
                ["px", "pl-px"],
                [0.5, "pl-0.5"],
                [1, "pl-1"],
                [1.5, "pl-1.5"],
                [2, "pl-2"],
                [2.5, "pl-2.5"],
                [3, "pl-3"],
                [3.5, "pl-3.5"],
                [4, "pl-4"],
                [5, "pl-5"],
                [6, "pl-6"],
                [7, "pl-7"],
                [8, "pl-8"],
                [9, "pl-9"],
                [10, "pl-10"],
                [11, "pl-11"],
                [12, "pl-12"],
                [14, "pl-14"],
                [16, "pl-16"],
                [20, "pl-20"],
                [24, "pl-24"],
                [28, "pl-28"],
                [32, "pl-32"],
                [36, "pl-36"],
                [40, "pl-40"],
                [44, "pl-44"],
                [48, "pl-48"],
                [52, "pl-52"],
                [56, "pl-56"],
                [60, "pl-60"],
                [64, "pl-64"],
                [72, "pl-72"],
                [80, "pl-80"],
                [96, "pl-96"],
              ]),
            ],
            [
              "right",
              new Map<FlexSpacing, string>([
                [0, "pr-0"],
                ["px", "pr-px"],
                [0.5, "pr-0.5"],
                [1, "pr-1"],
                [1.5, "pr-1.5"],
                [2, "pr-2"],
                [2.5, "pr-2.5"],
                [3, "pr-3"],
                [3.5, "pr-3.5"],
                [4, "pr-4"],
                [5, "pr-5"],
                [6, "pr-6"],
                [7, "pr-7"],
                [8, "pr-8"],
                [9, "pr-9"],
                [10, "pr-10"],
                [11, "pr-11"],
                [12, "pr-12"],
                [14, "pr-14"],
                [16, "pr-16"],
                [20, "pr-20"],
                [24, "pr-24"],
                [28, "pr-28"],
                [32, "pr-32"],
                [36, "pr-36"],
                [40, "pr-40"],
                [44, "pr-44"],
                [48, "pr-48"],
                [52, "pr-52"],
                [56, "pr-56"],
                [60, "pr-60"],
                [64, "pr-64"],
                [72, "pr-72"],
                [80, "pr-80"],
                [96, "pr-96"],
              ]),
            ],
            [
              "top",
              new Map<FlexSpacing, string>([
                [0, "pt-0"],
                ["px", "pt-px"],
                [0.5, "pt-0.5"],
                [1, "pt-1"],
                [1.5, "pt-1.5"],
                [2, "pt-2"],
                [2.5, "pt-2.5"],
                [3, "pt-3"],
                [3.5, "pt-3.5"],
                [4, "pt-4"],
                [5, "pt-5"],
                [6, "pt-6"],
                [7, "pt-7"],
                [8, "pt-8"],
                [9, "pt-9"],
                [10, "pt-10"],
                [11, "pt-11"],
                [12, "pt-12"],
                [14, "pt-14"],
                [16, "pt-16"],
                [20, "pt-20"],
                [24, "pt-24"],
                [28, "pt-28"],
                [32, "pt-32"],
                [36, "pt-36"],
                [40, "pt-40"],
                [44, "pt-44"],
                [48, "pt-48"],
                [52, "pt-52"],
                [56, "pt-56"],
                [60, "pt-60"],
                [64, "pt-64"],
                [72, "pt-72"],
                [80, "pt-80"],
                [96, "pt-96"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<SideMapping, Map<FlexSpacing, string>>([
            [
              "bottom",
              new Map<FlexSpacing, string>([
                [0, "open:pb-0"],
                ["px", "open:pb-px"],
                [0.5, "open:pb-0.5"],
                [1, "open:pb-1"],
                [1.5, "open:pb-1.5"],
                [2, "open:pb-2"],
                [2.5, "open:pb-2.5"],
                [3, "open:pb-3"],
                [3.5, "open:pb-3.5"],
                [4, "open:pb-4"],
                [5, "open:pb-5"],
                [6, "open:pb-6"],
                [7, "open:pb-7"],
                [8, "open:pb-8"],
                [9, "open:pb-9"],
                [10, "open:pb-10"],
                [11, "open:pb-11"],
                [12, "open:pb-12"],
                [14, "open:pb-14"],
                [16, "open:pb-16"],
                [20, "open:pb-20"],
                [24, "open:pb-24"],
                [28, "open:pb-28"],
                [32, "open:pb-32"],
                [36, "open:pb-36"],
                [40, "open:pb-40"],
                [44, "open:pb-44"],
                [48, "open:pb-48"],
                [52, "open:pb-52"],
                [56, "open:pb-56"],
                [60, "open:pb-60"],
                [64, "open:pb-64"],
                [72, "open:pb-72"],
                [80, "open:pb-80"],
                [96, "open:pb-96"],
              ]),
            ],
            [
              "left",
              new Map<FlexSpacing, string>([
                [0, "open:pl-0"],
                ["px", "open:pl-px"],
                [0.5, "open:pl-0.5"],
                [1, "open:pl-1"],
                [1.5, "open:pl-1.5"],
                [2, "open:pl-2"],
                [2.5, "open:pl-2.5"],
                [3, "open:pl-3"],
                [3.5, "open:pl-3.5"],
                [4, "open:pl-4"],
                [5, "open:pl-5"],
                [6, "open:pl-6"],
                [7, "open:pl-7"],
                [8, "open:pl-8"],
                [9, "open:pl-9"],
                [10, "open:pl-10"],
                [11, "open:pl-11"],
                [12, "open:pl-12"],
                [14, "open:pl-14"],
                [16, "open:pl-16"],
                [20, "open:pl-20"],
                [24, "open:pl-24"],
                [28, "open:pl-28"],
                [32, "open:pl-32"],
                [36, "open:pl-36"],
                [40, "open:pl-40"],
                [44, "open:pl-44"],
                [48, "open:pl-48"],
                [52, "open:pl-52"],
                [56, "open:pl-56"],
                [60, "open:pl-60"],
                [64, "open:pl-64"],
                [72, "open:pl-72"],
                [80, "open:pl-80"],
                [96, "open:pl-96"],
              ]),
            ],
            [
              "right",
              new Map<FlexSpacing, string>([
                [0, "open:pr-0"],
                ["px", "open:pr-px"],
                [0.5, "open:pr-0.5"],
                [1, "open:pr-1"],
                [1.5, "open:pr-1.5"],
                [2, "open:pr-2"],
                [2.5, "open:pr-2.5"],
                [3, "open:pr-3"],
                [3.5, "open:pr-3.5"],
                [4, "open:pr-4"],
                [5, "open:pr-5"],
                [6, "open:pr-6"],
                [7, "open:pr-7"],
                [8, "open:pr-8"],
                [9, "open:pr-9"],
                [10, "open:pr-10"],
                [11, "open:pr-11"],
                [12, "open:pr-12"],
                [14, "open:pr-14"],
                [16, "open:pr-16"],
                [20, "open:pr-20"],
                [24, "open:pr-24"],
                [28, "open:pr-28"],
                [32, "open:pr-32"],
                [36, "open:pr-36"],
                [40, "open:pr-40"],
                [44, "open:pr-44"],
                [48, "open:pr-48"],
                [52, "open:pr-52"],
                [56, "open:pr-56"],
                [60, "open:pr-60"],
                [64, "open:pr-64"],
                [72, "open:pr-72"],
                [80, "open:pr-80"],
                [96, "open:pr-96"],
              ]),
            ],
            [
              "top",
              new Map<FlexSpacing, string>([
                [0, "open:pt-0"],
                ["px", "open:pt-px"],
                [0.5, "open:pt-0.5"],
                [1, "open:pt-1"],
                [1.5, "open:pt-1.5"],
                [2, "open:pt-2"],
                [2.5, "open:pt-2.5"],
                [3, "open:pt-3"],
                [3.5, "open:pt-3.5"],
                [4, "open:pt-4"],
                [5, "open:pt-5"],
                [6, "open:pt-6"],
                [7, "open:pt-7"],
                [8, "open:pt-8"],
                [9, "open:pt-9"],
                [10, "open:pt-10"],
                [11, "open:pt-11"],
                [12, "open:pt-12"],
                [14, "open:pt-14"],
                [16, "open:pt-16"],
                [20, "open:pt-20"],
                [24, "open:pt-24"],
                [28, "open:pt-28"],
                [32, "open:pt-32"],
                [36, "open:pt-36"],
                [40, "open:pt-40"],
                [44, "open:pt-44"],
                [48, "open:pt-48"],
                [52, "open:pt-52"],
                [56, "open:pt-56"],
                [60, "open:pt-60"],
                [64, "open:pt-64"],
                [72, "open:pt-72"],
                [80, "open:pt-80"],
                [96, "open:pt-96"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
