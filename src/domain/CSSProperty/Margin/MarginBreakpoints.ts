import {
  AxisMapping,
  Breakpoints,
  CSSSelector,
  MarginSpacing,
  SideMapping,
} from "../../types";
import { MarginAxisInsideBreakpoints } from "./MarginAxisInsideBreakpoints";
import { MarginSidesInsideBreakpoints } from "./MarginSidesInsideBreakpoints";
import { Axleable } from "../../Entities/Axleable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";
import { Sideable } from "../../Entities/Sideable";

export class MarginBreakpoints
  extends Axleable<
    Map<Breakpoints, Map<MarginSpacing, string>>,
    Map<Breakpoints, Map<AxisMapping, Map<MarginSpacing, string>>>
  >
  implements
    Sideable<Map<Breakpoints, Map<SideMapping, Map<MarginSpacing, string>>>>
{
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<MarginSpacing, string>>
    >,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new MarginClassesMapping();
    return new MarginBreakpoints(classesMapping, selector);
  }

  public axis() {
    return MarginAxisInsideBreakpoints.create(this.cssSelector);
  }

  public sides() {
    return MarginSidesInsideBreakpoints.create(this.cssSelector);
  }

  public write(breakpoint: Breakpoints, spacing: MarginSpacing) {
    return this.getClassName(breakpoint, spacing);
  }
}

class MarginClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<MarginSpacing, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<MarginSpacing, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<MarginSpacing, string>
    >("xs", new Map<MarginSpacing, string>([[0, "xs:m-0"]]));
  }
  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<MarginSpacing, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<MarginSpacing, string>>([
            [
              "xs",
              new Map<MarginSpacing, string>([
                [0, "xs:active:m-0"],
                ["px", "xs:active:m-px"],
                [0.5, "xs:active:m-0.5"],
                [1, "xs:active:m-1"],
                [1.5, "xs:active:m-1.5"],
                [2, "xs:active:m-2"],
                [2.5, "xs:active:m-2.5"],
                [3, "xs:active:m-3"],
                [3.5, "xs:active:m-3.5"],
                [4, "xs:active:m-4"],
                [5, "xs:active:m-5"],
                [6, "xs:active:m-6"],
                [7, "xs:active:m-7"],
                [8, "xs:active:m-8"],
                [9, "xs:active:m-9"],
                [10, "xs:active:m-10"],
                [11, "xs:active:m-11"],
                [12, "xs:active:m-12"],
                [14, "xs:active:m-14"],
                [16, "xs:active:m-16"],
                [20, "xs:active:m-20"],
                [24, "xs:active:m-24"],
                [28, "xs:active:m-28"],
                [32, "xs:active:m-32"],
                [36, "xs:active:m-36"],
                [40, "xs:active:m-40"],
                [44, "xs:active:m-44"],
                [48, "xs:active:m-48"],
                [52, "xs:active:m-52"],
                [56, "xs:active:m-56"],
                [60, "xs:active:m-60"],
                [64, "xs:active:m-64"],
                [72, "xs:active:m-72"],
                [80, "xs:active:m-80"],
                [96, "xs:active:m-96"],
                ["auto", "xs:active:m-auto"],
              ]),
            ],
            [
              "sm",
              new Map<MarginSpacing, string>([
                [0, "sm:active:m-0"],
                ["px", "sm:active:m-px"],
                [0.5, "sm:active:m-0.5"],
                [1, "sm:active:m-1"],
                [1.5, "sm:active:m-1.5"],
                [2, "sm:active:m-2"],
                [2.5, "sm:active:m-2.5"],
                [3, "sm:active:m-3"],
                [3.5, "sm:active:m-3.5"],
                [4, "sm:active:m-4"],
                [5, "sm:active:m-5"],
                [6, "sm:active:m-6"],
                [7, "sm:active:m-7"],
                [8, "sm:active:m-8"],
                [9, "sm:active:m-9"],
                [10, "sm:active:m-10"],
                [11, "sm:active:m-11"],
                [12, "sm:active:m-12"],
                [14, "sm:active:m-14"],
                [16, "sm:active:m-16"],
                [20, "sm:active:m-20"],
                [24, "sm:active:m-24"],
                [28, "sm:active:m-28"],
                [32, "sm:active:m-32"],
                [36, "sm:active:m-36"],
                [40, "sm:active:m-40"],
                [44, "sm:active:m-44"],
                [48, "sm:active:m-48"],
                [52, "sm:active:m-52"],
                [56, "sm:active:m-56"],
                [60, "sm:active:m-60"],
                [64, "sm:active:m-64"],
                [72, "sm:active:m-72"],
                [80, "sm:active:m-80"],
                [96, "sm:active:m-96"],
                ["auto", "sm:active:m-auto"],
              ]),
            ],
            [
              "md",
              new Map<MarginSpacing, string>([
                [0, "md:active:m-0"],
                ["px", "md:active:m-px"],
                [0.5, "md:active:m-0.5"],
                [1, "md:active:m-1"],
                [1.5, "md:active:m-1.5"],
                [2, "md:active:m-2"],
                [2.5, "md:active:m-2.5"],
                [3, "md:active:m-3"],
                [3.5, "md:active:m-3.5"],
                [4, "md:active:m-4"],
                [5, "md:active:m-5"],
                [6, "md:active:m-6"],
                [7, "md:active:m-7"],
                [8, "md:active:m-8"],
                [9, "md:active:m-9"],
                [10, "md:active:m-10"],
                [11, "md:active:m-11"],
                [12, "md:active:m-12"],
                [14, "md:active:m-14"],
                [16, "md:active:m-16"],
                [20, "md:active:m-20"],
                [24, "md:active:m-24"],
                [28, "md:active:m-28"],
                [32, "md:active:m-32"],
                [36, "md:active:m-36"],
                [40, "md:active:m-40"],
                [44, "md:active:m-44"],
                [48, "md:active:m-48"],
                [52, "md:active:m-52"],
                [56, "md:active:m-56"],
                [60, "md:active:m-60"],
                [64, "md:active:m-64"],
                [72, "md:active:m-72"],
                [80, "md:active:m-80"],
                [96, "md:active:m-96"],
                ["auto", "md:active:m-auto"],
              ]),
            ],
            [
              "lg",
              new Map<MarginSpacing, string>([
                [0, "lg:active:m-0"],
                ["px", "lg:active:m-px"],
                [0.5, "lg:active:m-0.5"],
                [1, "lg:active:m-1"],
                [1.5, "lg:active:m-1.5"],
                [2, "lg:active:m-2"],
                [2.5, "lg:active:m-2.5"],
                [3, "lg:active:m-3"],
                [3.5, "lg:active:m-3.5"],
                [4, "lg:active:m-4"],
                [5, "lg:active:m-5"],
                [6, "lg:active:m-6"],
                [7, "lg:active:m-7"],
                [8, "lg:active:m-8"],
                [9, "lg:active:m-9"],
                [10, "lg:active:m-10"],
                [11, "lg:active:m-11"],
                [12, "lg:active:m-12"],
                [14, "lg:active:m-14"],
                [16, "lg:active:m-16"],
                [20, "lg:active:m-20"],
                [24, "lg:active:m-24"],
                [28, "lg:active:m-28"],
                [32, "lg:active:m-32"],
                [36, "lg:active:m-36"],
                [40, "lg:active:m-40"],
                [44, "lg:active:m-44"],
                [48, "lg:active:m-48"],
                [52, "lg:active:m-52"],
                [56, "lg:active:m-56"],
                [60, "lg:active:m-60"],
                [64, "lg:active:m-64"],
                [72, "lg:active:m-72"],
                [80, "lg:active:m-80"],
                [96, "lg:active:m-96"],
                ["auto", "lg:active:m-auto"],
              ]),
            ],
            [
              "xl",
              new Map<MarginSpacing, string>([
                [0, "xl:active:m-0"],
                ["px", "xl:active:m-px"],
                [0.5, "xl:active:m-0.5"],
                [1, "xl:active:m-1"],
                [1.5, "xl:active:m-1.5"],
                [2, "xl:active:m-2"],
                [2.5, "xl:active:m-2.5"],
                [3, "xl:active:m-3"],
                [3.5, "xl:active:m-3.5"],
                [4, "xl:active:m-4"],
                [5, "xl:active:m-5"],
                [6, "xl:active:m-6"],
                [7, "xl:active:m-7"],
                [8, "xl:active:m-8"],
                [9, "xl:active:m-9"],
                [10, "xl:active:m-10"],
                [11, "xl:active:m-11"],
                [12, "xl:active:m-12"],
                [14, "xl:active:m-14"],
                [16, "xl:active:m-16"],
                [20, "xl:active:m-20"],
                [24, "xl:active:m-24"],
                [28, "xl:active:m-28"],
                [32, "xl:active:m-32"],
                [36, "xl:active:m-36"],
                [40, "xl:active:m-40"],
                [44, "xl:active:m-44"],
                [48, "xl:active:m-48"],
                [52, "xl:active:m-52"],
                [56, "xl:active:m-56"],
                [60, "xl:active:m-60"],
                [64, "xl:active:m-64"],
                [72, "xl:active:m-72"],
                [80, "xl:active:m-80"],
                [96, "xl:active:m-96"],
                ["auto", "xl:active:m-auto"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<MarginSpacing, string>>([
            [
              "xs",
              new Map<MarginSpacing, string>([
                [0, "xs:disabled:m-0"],
                ["px", "xs:disabled:m-px"],
                [0.5, "xs:disabled:m-0.5"],
                [1, "xs:disabled:m-1"],
                [1.5, "xs:disabled:m-1.5"],
                [2, "xs:disabled:m-2"],
                [2.5, "xs:disabled:m-2.5"],
                [3, "xs:disabled:m-3"],
                [3.5, "xs:disabled:m-3.5"],
                [4, "xs:disabled:m-4"],
                [5, "xs:disabled:m-5"],
                [6, "xs:disabled:m-6"],
                [7, "xs:disabled:m-7"],
                [8, "xs:disabled:m-8"],
                [9, "xs:disabled:m-9"],
                [10, "xs:disabled:m-10"],
                [11, "xs:disabled:m-11"],
                [12, "xs:disabled:m-12"],
                [14, "xs:disabled:m-14"],
                [16, "xs:disabled:m-16"],
                [20, "xs:disabled:m-20"],
                [24, "xs:disabled:m-24"],
                [28, "xs:disabled:m-28"],
                [32, "xs:disabled:m-32"],
                [36, "xs:disabled:m-36"],
                [40, "xs:disabled:m-40"],
                [44, "xs:disabled:m-44"],
                [48, "xs:disabled:m-48"],
                [52, "xs:disabled:m-52"],
                [56, "xs:disabled:m-56"],
                [60, "xs:disabled:m-60"],
                [64, "xs:disabled:m-64"],
                [72, "xs:disabled:m-72"],
                [80, "xs:disabled:m-80"],
                [96, "xs:disabled:m-96"],
                ["auto", "xs:disabled:m-auto"],
              ]),
            ],
            [
              "sm",
              new Map<MarginSpacing, string>([
                [0, "sm:disabled:m-0"],
                ["px", "sm:disabled:m-px"],
                [0.5, "sm:disabled:m-0.5"],
                [1, "sm:disabled:m-1"],
                [1.5, "sm:disabled:m-1.5"],
                [2, "sm:disabled:m-2"],
                [2.5, "sm:disabled:m-2.5"],
                [3, "sm:disabled:m-3"],
                [3.5, "sm:disabled:m-3.5"],
                [4, "sm:disabled:m-4"],
                [5, "sm:disabled:m-5"],
                [6, "sm:disabled:m-6"],
                [7, "sm:disabled:m-7"],
                [8, "sm:disabled:m-8"],
                [9, "sm:disabled:m-9"],
                [10, "sm:disabled:m-10"],
                [11, "sm:disabled:m-11"],
                [12, "sm:disabled:m-12"],
                [14, "sm:disabled:m-14"],
                [16, "sm:disabled:m-16"],
                [20, "sm:disabled:m-20"],
                [24, "sm:disabled:m-24"],
                [28, "sm:disabled:m-28"],
                [32, "sm:disabled:m-32"],
                [36, "sm:disabled:m-36"],
                [40, "sm:disabled:m-40"],
                [44, "sm:disabled:m-44"],
                [48, "sm:disabled:m-48"],
                [52, "sm:disabled:m-52"],
                [56, "sm:disabled:m-56"],
                [60, "sm:disabled:m-60"],
                [64, "sm:disabled:m-64"],
                [72, "sm:disabled:m-72"],
                [80, "sm:disabled:m-80"],
                [96, "sm:disabled:m-96"],
                ["auto", "sm:disabled:m-auto"],
              ]),
            ],
            [
              "md",
              new Map<MarginSpacing, string>([
                [0, "md:disabled:m-0"],
                ["px", "md:disabled:m-px"],
                [0.5, "md:disabled:m-0.5"],
                [1, "md:disabled:m-1"],
                [1.5, "md:disabled:m-1.5"],
                [2, "md:disabled:m-2"],
                [2.5, "md:disabled:m-2.5"],
                [3, "md:disabled:m-3"],
                [3.5, "md:disabled:m-3.5"],
                [4, "md:disabled:m-4"],
                [5, "md:disabled:m-5"],
                [6, "md:disabled:m-6"],
                [7, "md:disabled:m-7"],
                [8, "md:disabled:m-8"],
                [9, "md:disabled:m-9"],
                [10, "md:disabled:m-10"],
                [11, "md:disabled:m-11"],
                [12, "md:disabled:m-12"],
                [14, "md:disabled:m-14"],
                [16, "md:disabled:m-16"],
                [20, "md:disabled:m-20"],
                [24, "md:disabled:m-24"],
                [28, "md:disabled:m-28"],
                [32, "md:disabled:m-32"],
                [36, "md:disabled:m-36"],
                [40, "md:disabled:m-40"],
                [44, "md:disabled:m-44"],
                [48, "md:disabled:m-48"],
                [52, "md:disabled:m-52"],
                [56, "md:disabled:m-56"],
                [60, "md:disabled:m-60"],
                [64, "md:disabled:m-64"],
                [72, "md:disabled:m-72"],
                [80, "md:disabled:m-80"],
                [96, "md:disabled:m-96"],
                ["auto", "md:disabled:m-auto"],
              ]),
            ],
            [
              "lg",
              new Map<MarginSpacing, string>([
                [0, "lg:disabled:m-0"],
                ["px", "lg:disabled:m-px"],
                [0.5, "lg:disabled:m-0.5"],
                [1, "lg:disabled:m-1"],
                [1.5, "lg:disabled:m-1.5"],
                [2, "lg:disabled:m-2"],
                [2.5, "lg:disabled:m-2.5"],
                [3, "lg:disabled:m-3"],
                [3.5, "lg:disabled:m-3.5"],
                [4, "lg:disabled:m-4"],
                [5, "lg:disabled:m-5"],
                [6, "lg:disabled:m-6"],
                [7, "lg:disabled:m-7"],
                [8, "lg:disabled:m-8"],
                [9, "lg:disabled:m-9"],
                [10, "lg:disabled:m-10"],
                [11, "lg:disabled:m-11"],
                [12, "lg:disabled:m-12"],
                [14, "lg:disabled:m-14"],
                [16, "lg:disabled:m-16"],
                [20, "lg:disabled:m-20"],
                [24, "lg:disabled:m-24"],
                [28, "lg:disabled:m-28"],
                [32, "lg:disabled:m-32"],
                [36, "lg:disabled:m-36"],
                [40, "lg:disabled:m-40"],
                [44, "lg:disabled:m-44"],
                [48, "lg:disabled:m-48"],
                [52, "lg:disabled:m-52"],
                [56, "lg:disabled:m-56"],
                [60, "lg:disabled:m-60"],
                [64, "lg:disabled:m-64"],
                [72, "lg:disabled:m-72"],
                [80, "lg:disabled:m-80"],
                [96, "lg:disabled:m-96"],
                ["auto", "lg:disabled:m-auto"],
              ]),
            ],
            [
              "xl",
              new Map<MarginSpacing, string>([
                [0, "xl:disabled:m-0"],
                ["px", "xl:disabled:m-px"],
                [0.5, "xl:disabled:m-0.5"],
                [1, "xl:disabled:m-1"],
                [1.5, "xl:disabled:m-1.5"],
                [2, "xl:disabled:m-2"],
                [2.5, "xl:disabled:m-2.5"],
                [3, "xl:disabled:m-3"],
                [3.5, "xl:disabled:m-3.5"],
                [4, "xl:disabled:m-4"],
                [5, "xl:disabled:m-5"],
                [6, "xl:disabled:m-6"],
                [7, "xl:disabled:m-7"],
                [8, "xl:disabled:m-8"],
                [9, "xl:disabled:m-9"],
                [10, "xl:disabled:m-10"],
                [11, "xl:disabled:m-11"],
                [12, "xl:disabled:m-12"],
                [14, "xl:disabled:m-14"],
                [16, "xl:disabled:m-16"],
                [20, "xl:disabled:m-20"],
                [24, "xl:disabled:m-24"],
                [28, "xl:disabled:m-28"],
                [32, "xl:disabled:m-32"],
                [36, "xl:disabled:m-36"],
                [40, "xl:disabled:m-40"],
                [44, "xl:disabled:m-44"],
                [48, "xl:disabled:m-48"],
                [52, "xl:disabled:m-52"],
                [56, "xl:disabled:m-56"],
                [60, "xl:disabled:m-60"],
                [64, "xl:disabled:m-64"],
                [72, "xl:disabled:m-72"],
                [80, "xl:disabled:m-80"],
                [96, "xl:disabled:m-96"],
                ["auto", "xl:disabled:m-auto"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<MarginSpacing, string>>([
            [
              "xs",
              new Map<MarginSpacing, string>([
                [0, "xs:hover:m-0"],
                ["px", "xs:hover:m-px"],
                [0.5, "xs:hover:m-0.5"],
                [1, "xs:hover:m-1"],
                [1.5, "xs:hover:m-1.5"],
                [2, "xs:hover:m-2"],
                [2.5, "xs:hover:m-2.5"],
                [3, "xs:hover:m-3"],
                [3.5, "xs:hover:m-3.5"],
                [4, "xs:hover:m-4"],
                [5, "xs:hover:m-5"],
                [6, "xs:hover:m-6"],
                [7, "xs:hover:m-7"],
                [8, "xs:hover:m-8"],
                [9, "xs:hover:m-9"],
                [10, "xs:hover:m-10"],
                [11, "xs:hover:m-11"],
                [12, "xs:hover:m-12"],
                [14, "xs:hover:m-14"],
                [16, "xs:hover:m-16"],
                [20, "xs:hover:m-20"],
                [24, "xs:hover:m-24"],
                [28, "xs:hover:m-28"],
                [32, "xs:hover:m-32"],
                [36, "xs:hover:m-36"],
                [40, "xs:hover:m-40"],
                [44, "xs:hover:m-44"],
                [48, "xs:hover:m-48"],
                [52, "xs:hover:m-52"],
                [56, "xs:hover:m-56"],
                [60, "xs:hover:m-60"],
                [64, "xs:hover:m-64"],
                [72, "xs:hover:m-72"],
                [80, "xs:hover:m-80"],
                [96, "xs:hover:m-96"],
                ["auto", "xs:hover:m-auto"],
              ]),
            ],
            [
              "sm",
              new Map<MarginSpacing, string>([
                [0, "sm:hover:m-0"],
                ["px", "sm:hover:m-px"],
                [0.5, "sm:hover:m-0.5"],
                [1, "sm:hover:m-1"],
                [1.5, "sm:hover:m-1.5"],
                [2, "sm:hover:m-2"],
                [2.5, "sm:hover:m-2.5"],
                [3, "sm:hover:m-3"],
                [3.5, "sm:hover:m-3.5"],
                [4, "sm:hover:m-4"],
                [5, "sm:hover:m-5"],
                [6, "sm:hover:m-6"],
                [7, "sm:hover:m-7"],
                [8, "sm:hover:m-8"],
                [9, "sm:hover:m-9"],
                [10, "sm:hover:m-10"],
                [11, "sm:hover:m-11"],
                [12, "sm:hover:m-12"],
                [14, "sm:hover:m-14"],
                [16, "sm:hover:m-16"],
                [20, "sm:hover:m-20"],
                [24, "sm:hover:m-24"],
                [28, "sm:hover:m-28"],
                [32, "sm:hover:m-32"],
                [36, "sm:hover:m-36"],
                [40, "sm:hover:m-40"],
                [44, "sm:hover:m-44"],
                [48, "sm:hover:m-48"],
                [52, "sm:hover:m-52"],
                [56, "sm:hover:m-56"],
                [60, "sm:hover:m-60"],
                [64, "sm:hover:m-64"],
                [72, "sm:hover:m-72"],
                [80, "sm:hover:m-80"],
                [96, "sm:hover:m-96"],
                ["auto", "sm:hover:m-auto"],
              ]),
            ],
            [
              "md",
              new Map<MarginSpacing, string>([
                [0, "md:hover:m-0"],
                ["px", "md:hover:m-px"],
                [0.5, "md:hover:m-0.5"],
                [1, "md:hover:m-1"],
                [1.5, "md:hover:m-1.5"],
                [2, "md:hover:m-2"],
                [2.5, "md:hover:m-2.5"],
                [3, "md:hover:m-3"],
                [3.5, "md:hover:m-3.5"],
                [4, "md:hover:m-4"],
                [5, "md:hover:m-5"],
                [6, "md:hover:m-6"],
                [7, "md:hover:m-7"],
                [8, "md:hover:m-8"],
                [9, "md:hover:m-9"],
                [10, "md:hover:m-10"],
                [11, "md:hover:m-11"],
                [12, "md:hover:m-12"],
                [14, "md:hover:m-14"],
                [16, "md:hover:m-16"],
                [20, "md:hover:m-20"],
                [24, "md:hover:m-24"],
                [28, "md:hover:m-28"],
                [32, "md:hover:m-32"],
                [36, "md:hover:m-36"],
                [40, "md:hover:m-40"],
                [44, "md:hover:m-44"],
                [48, "md:hover:m-48"],
                [52, "md:hover:m-52"],
                [56, "md:hover:m-56"],
                [60, "md:hover:m-60"],
                [64, "md:hover:m-64"],
                [72, "md:hover:m-72"],
                [80, "md:hover:m-80"],
                [96, "md:hover:m-96"],
                ["auto", "md:hover:m-auto"],
              ]),
            ],
            [
              "lg",
              new Map<MarginSpacing, string>([
                [0, "lg:hover:m-0"],
                ["px", "lg:hover:m-px"],
                [0.5, "lg:hover:m-0.5"],
                [1, "lg:hover:m-1"],
                [1.5, "lg:hover:m-1.5"],
                [2, "lg:hover:m-2"],
                [2.5, "lg:hover:m-2.5"],
                [3, "lg:hover:m-3"],
                [3.5, "lg:hover:m-3.5"],
                [4, "lg:hover:m-4"],
                [5, "lg:hover:m-5"],
                [6, "lg:hover:m-6"],
                [7, "lg:hover:m-7"],
                [8, "lg:hover:m-8"],
                [9, "lg:hover:m-9"],
                [10, "lg:hover:m-10"],
                [11, "lg:hover:m-11"],
                [12, "lg:hover:m-12"],
                [14, "lg:hover:m-14"],
                [16, "lg:hover:m-16"],
                [20, "lg:hover:m-20"],
                [24, "lg:hover:m-24"],
                [28, "lg:hover:m-28"],
                [32, "lg:hover:m-32"],
                [36, "lg:hover:m-36"],
                [40, "lg:hover:m-40"],
                [44, "lg:hover:m-44"],
                [48, "lg:hover:m-48"],
                [52, "lg:hover:m-52"],
                [56, "lg:hover:m-56"],
                [60, "lg:hover:m-60"],
                [64, "lg:hover:m-64"],
                [72, "lg:hover:m-72"],
                [80, "lg:hover:m-80"],
                [96, "lg:hover:m-96"],
                ["auto", "lg:hover:m-auto"],
              ]),
            ],
            [
              "xl",
              new Map<MarginSpacing, string>([
                [0, "xl:hover:m-0"],
                ["px", "xl:hover:m-px"],
                [0.5, "xl:hover:m-0.5"],
                [1, "xl:hover:m-1"],
                [1.5, "xl:hover:m-1.5"],
                [2, "xl:hover:m-2"],
                [2.5, "xl:hover:m-2.5"],
                [3, "xl:hover:m-3"],
                [3.5, "xl:hover:m-3.5"],
                [4, "xl:hover:m-4"],
                [5, "xl:hover:m-5"],
                [6, "xl:hover:m-6"],
                [7, "xl:hover:m-7"],
                [8, "xl:hover:m-8"],
                [9, "xl:hover:m-9"],
                [10, "xl:hover:m-10"],
                [11, "xl:hover:m-11"],
                [12, "xl:hover:m-12"],
                [14, "xl:hover:m-14"],
                [16, "xl:hover:m-16"],
                [20, "xl:hover:m-20"],
                [24, "xl:hover:m-24"],
                [28, "xl:hover:m-28"],
                [32, "xl:hover:m-32"],
                [36, "xl:hover:m-36"],
                [40, "xl:hover:m-40"],
                [44, "xl:hover:m-44"],
                [48, "xl:hover:m-48"],
                [52, "xl:hover:m-52"],
                [56, "xl:hover:m-56"],
                [60, "xl:hover:m-60"],
                [64, "xl:hover:m-64"],
                [72, "xl:hover:m-72"],
                [80, "xl:hover:m-80"],
                [96, "xl:hover:m-96"],
                ["auto", "xl:hover:m-auto"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<MarginSpacing, string>>([
            [
              "xs",
              new Map<MarginSpacing, string>([
                [0, "xs:m-0"],
                ["px", "xs:m-px"],
                [0.5, "xs:m-0.5"],
                [1, "xs:m-1"],
                [1.5, "xs:m-1.5"],
                [2, "xs:m-2"],
                [2.5, "xs:m-2.5"],
                [3, "xs:m-3"],
                [3.5, "xs:m-3.5"],
                [4, "xs:m-4"],
                [5, "xs:m-5"],
                [6, "xs:m-6"],
                [7, "xs:m-7"],
                [8, "xs:m-8"],
                [9, "xs:m-9"],
                [10, "xs:m-10"],
                [11, "xs:m-11"],
                [12, "xs:m-12"],
                [14, "xs:m-14"],
                [16, "xs:m-16"],
                [20, "xs:m-20"],
                [24, "xs:m-24"],
                [28, "xs:m-28"],
                [32, "xs:m-32"],
                [36, "xs:m-36"],
                [40, "xs:m-40"],
                [44, "xs:m-44"],
                [48, "xs:m-48"],
                [52, "xs:m-52"],
                [56, "xs:m-56"],
                [60, "xs:m-60"],
                [64, "xs:m-64"],
                [72, "xs:m-72"],
                [80, "xs:m-80"],
                [96, "xs:m-96"],
                ["auto", "xs:m-auto"],
              ]),
            ],
            [
              "sm",
              new Map<MarginSpacing, string>([
                [0, "sm:m-0"],
                ["px", "sm:m-px"],
                [0.5, "sm:m-0.5"],
                [1, "sm:m-1"],
                [1.5, "sm:m-1.5"],
                [2, "sm:m-2"],
                [2.5, "sm:m-2.5"],
                [3, "sm:m-3"],
                [3.5, "sm:m-3.5"],
                [4, "sm:m-4"],
                [5, "sm:m-5"],
                [6, "sm:m-6"],
                [7, "sm:m-7"],
                [8, "sm:m-8"],
                [9, "sm:m-9"],
                [10, "sm:m-10"],
                [11, "sm:m-11"],
                [12, "sm:m-12"],
                [14, "sm:m-14"],
                [16, "sm:m-16"],
                [20, "sm:m-20"],
                [24, "sm:m-24"],
                [28, "sm:m-28"],
                [32, "sm:m-32"],
                [36, "sm:m-36"],
                [40, "sm:m-40"],
                [44, "sm:m-44"],
                [48, "sm:m-48"],
                [52, "sm:m-52"],
                [56, "sm:m-56"],
                [60, "sm:m-60"],
                [64, "sm:m-64"],
                [72, "sm:m-72"],
                [80, "sm:m-80"],
                [96, "sm:m-96"],
                ["auto", "sm:m-auto"],
              ]),
            ],
            [
              "md",
              new Map<MarginSpacing, string>([
                [0, "md:m-0"],
                ["px", "md:m-px"],
                [0.5, "md:m-0.5"],
                [1, "md:m-1"],
                [1.5, "md:m-1.5"],
                [2, "md:m-2"],
                [2.5, "md:m-2.5"],
                [3, "md:m-3"],
                [3.5, "md:m-3.5"],
                [4, "md:m-4"],
                [5, "md:m-5"],
                [6, "md:m-6"],
                [7, "md:m-7"],
                [8, "md:m-8"],
                [9, "md:m-9"],
                [10, "md:m-10"],
                [11, "md:m-11"],
                [12, "md:m-12"],
                [14, "md:m-14"],
                [16, "md:m-16"],
                [20, "md:m-20"],
                [24, "md:m-24"],
                [28, "md:m-28"],
                [32, "md:m-32"],
                [36, "md:m-36"],
                [40, "md:m-40"],
                [44, "md:m-44"],
                [48, "md:m-48"],
                [52, "md:m-52"],
                [56, "md:m-56"],
                [60, "md:m-60"],
                [64, "md:m-64"],
                [72, "md:m-72"],
                [80, "md:m-80"],
                [96, "md:m-96"],
                ["auto", "md:m-auto"],
              ]),
            ],
            [
              "lg",
              new Map<MarginSpacing, string>([
                [0, "lg:m-0"],
                ["px", "lg:m-px"],
                [0.5, "lg:m-0.5"],
                [1, "lg:m-1"],
                [1.5, "lg:m-1.5"],
                [2, "lg:m-2"],
                [2.5, "lg:m-2.5"],
                [3, "lg:m-3"],
                [3.5, "lg:m-3.5"],
                [4, "lg:m-4"],
                [5, "lg:m-5"],
                [6, "lg:m-6"],
                [7, "lg:m-7"],
                [8, "lg:m-8"],
                [9, "lg:m-9"],
                [10, "lg:m-10"],
                [11, "lg:m-11"],
                [12, "lg:m-12"],
                [14, "lg:m-14"],
                [16, "lg:m-16"],
                [20, "lg:m-20"],
                [24, "lg:m-24"],
                [28, "lg:m-28"],
                [32, "lg:m-32"],
                [36, "lg:m-36"],
                [40, "lg:m-40"],
                [44, "lg:m-44"],
                [48, "lg:m-48"],
                [52, "lg:m-52"],
                [56, "lg:m-56"],
                [60, "lg:m-60"],
                [64, "lg:m-64"],
                [72, "lg:m-72"],
                [80, "lg:m-80"],
                [96, "lg:m-96"],
                ["auto", "lg:m-auto"],
              ]),
            ],
            [
              "xl",
              new Map<MarginSpacing, string>([
                [0, "xl:m-0"],
                ["px", "xl:m-px"],
                [0.5, "xl:m-0.5"],
                [1, "xl:m-1"],
                [1.5, "xl:m-1.5"],
                [2, "xl:m-2"],
                [2.5, "xl:m-2.5"],
                [3, "xl:m-3"],
                [3.5, "xl:m-3.5"],
                [4, "xl:m-4"],
                [5, "xl:m-5"],
                [6, "xl:m-6"],
                [7, "xl:m-7"],
                [8, "xl:m-8"],
                [9, "xl:m-9"],
                [10, "xl:m-10"],
                [11, "xl:m-11"],
                [12, "xl:m-12"],
                [14, "xl:m-14"],
                [16, "xl:m-16"],
                [20, "xl:m-20"],
                [24, "xl:m-24"],
                [28, "xl:m-28"],
                [32, "xl:m-32"],
                [36, "xl:m-36"],
                [40, "xl:m-40"],
                [44, "xl:m-44"],
                [48, "xl:m-48"],
                [52, "xl:m-52"],
                [56, "xl:m-56"],
                [60, "xl:m-60"],
                [64, "xl:m-64"],
                [72, "xl:m-72"],
                [80, "xl:m-80"],
                [96, "xl:m-96"],
                ["auto", "xl:m-auto"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<MarginSpacing, string>>([
            [
              "xs",
              new Map<MarginSpacing, string>([
                [0, "xs:open:m-0"],
                ["px", "xs:open:m-px"],
                [0.5, "xs:open:m-0.5"],
                [1, "xs:open:m-1"],
                [1.5, "xs:open:m-1.5"],
                [2, "xs:open:m-2"],
                [2.5, "xs:open:m-2.5"],
                [3, "xs:open:m-3"],
                [3.5, "xs:open:m-3.5"],
                [4, "xs:open:m-4"],
                [5, "xs:open:m-5"],
                [6, "xs:open:m-6"],
                [7, "xs:open:m-7"],
                [8, "xs:open:m-8"],
                [9, "xs:open:m-9"],
                [10, "xs:open:m-10"],
                [11, "xs:open:m-11"],
                [12, "xs:open:m-12"],
                [14, "xs:open:m-14"],
                [16, "xs:open:m-16"],
                [20, "xs:open:m-20"],
                [24, "xs:open:m-24"],
                [28, "xs:open:m-28"],
                [32, "xs:open:m-32"],
                [36, "xs:open:m-36"],
                [40, "xs:open:m-40"],
                [44, "xs:open:m-44"],
                [48, "xs:open:m-48"],
                [52, "xs:open:m-52"],
                [56, "xs:open:m-56"],
                [60, "xs:open:m-60"],
                [64, "xs:open:m-64"],
                [72, "xs:open:m-72"],
                [80, "xs:open:m-80"],
                [96, "xs:open:m-96"],
                ["auto", "xs:open:m-auto"],
              ]),
            ],
            [
              "sm",
              new Map<MarginSpacing, string>([
                [0, "sm:open:m-0"],
                ["px", "sm:open:m-px"],
                [0.5, "sm:open:m-0.5"],
                [1, "sm:open:m-1"],
                [1.5, "sm:open:m-1.5"],
                [2, "sm:open:m-2"],
                [2.5, "sm:open:m-2.5"],
                [3, "sm:open:m-3"],
                [3.5, "sm:open:m-3.5"],
                [4, "sm:open:m-4"],
                [5, "sm:open:m-5"],
                [6, "sm:open:m-6"],
                [7, "sm:open:m-7"],
                [8, "sm:open:m-8"],
                [9, "sm:open:m-9"],
                [10, "sm:open:m-10"],
                [11, "sm:open:m-11"],
                [12, "sm:open:m-12"],
                [14, "sm:open:m-14"],
                [16, "sm:open:m-16"],
                [20, "sm:open:m-20"],
                [24, "sm:open:m-24"],
                [28, "sm:open:m-28"],
                [32, "sm:open:m-32"],
                [36, "sm:open:m-36"],
                [40, "sm:open:m-40"],
                [44, "sm:open:m-44"],
                [48, "sm:open:m-48"],
                [52, "sm:open:m-52"],
                [56, "sm:open:m-56"],
                [60, "sm:open:m-60"],
                [64, "sm:open:m-64"],
                [72, "sm:open:m-72"],
                [80, "sm:open:m-80"],
                [96, "sm:open:m-96"],
                ["auto", "sm:open:m-auto"],
              ]),
            ],
            [
              "md",
              new Map<MarginSpacing, string>([
                [0, "md:open:m-0"],
                ["px", "md:open:m-px"],
                [0.5, "md:open:m-0.5"],
                [1, "md:open:m-1"],
                [1.5, "md:open:m-1.5"],
                [2, "md:open:m-2"],
                [2.5, "md:open:m-2.5"],
                [3, "md:open:m-3"],
                [3.5, "md:open:m-3.5"],
                [4, "md:open:m-4"],
                [5, "md:open:m-5"],
                [6, "md:open:m-6"],
                [7, "md:open:m-7"],
                [8, "md:open:m-8"],
                [9, "md:open:m-9"],
                [10, "md:open:m-10"],
                [11, "md:open:m-11"],
                [12, "md:open:m-12"],
                [14, "md:open:m-14"],
                [16, "md:open:m-16"],
                [20, "md:open:m-20"],
                [24, "md:open:m-24"],
                [28, "md:open:m-28"],
                [32, "md:open:m-32"],
                [36, "md:open:m-36"],
                [40, "md:open:m-40"],
                [44, "md:open:m-44"],
                [48, "md:open:m-48"],
                [52, "md:open:m-52"],
                [56, "md:open:m-56"],
                [60, "md:open:m-60"],
                [64, "md:open:m-64"],
                [72, "md:open:m-72"],
                [80, "md:open:m-80"],
                [96, "md:open:m-96"],
                ["auto", "md:open:m-auto"],
              ]),
            ],
            [
              "lg",
              new Map<MarginSpacing, string>([
                [0, "lg:open:m-0"],
                ["px", "lg:open:m-px"],
                [0.5, "lg:open:m-0.5"],
                [1, "lg:open:m-1"],
                [1.5, "lg:open:m-1.5"],
                [2, "lg:open:m-2"],
                [2.5, "lg:open:m-2.5"],
                [3, "lg:open:m-3"],
                [3.5, "lg:open:m-3.5"],
                [4, "lg:open:m-4"],
                [5, "lg:open:m-5"],
                [6, "lg:open:m-6"],
                [7, "lg:open:m-7"],
                [8, "lg:open:m-8"],
                [9, "lg:open:m-9"],
                [10, "lg:open:m-10"],
                [11, "lg:open:m-11"],
                [12, "lg:open:m-12"],
                [14, "lg:open:m-14"],
                [16, "lg:open:m-16"],
                [20, "lg:open:m-20"],
                [24, "lg:open:m-24"],
                [28, "lg:open:m-28"],
                [32, "lg:open:m-32"],
                [36, "lg:open:m-36"],
                [40, "lg:open:m-40"],
                [44, "lg:open:m-44"],
                [48, "lg:open:m-48"],
                [52, "lg:open:m-52"],
                [56, "lg:open:m-56"],
                [60, "lg:open:m-60"],
                [64, "lg:open:m-64"],
                [72, "lg:open:m-72"],
                [80, "lg:open:m-80"],
                [96, "lg:open:m-96"],
                ["auto", "lg:open:m-auto"],
              ]),
            ],
            [
              "xl",
              new Map<MarginSpacing, string>([
                [0, "xl:open:m-0"],
                ["px", "xl:open:m-px"],
                [0.5, "xl:open:m-0.5"],
                [1, "xl:open:m-1"],
                [1.5, "xl:open:m-1.5"],
                [2, "xl:open:m-2"],
                [2.5, "xl:open:m-2.5"],
                [3, "xl:open:m-3"],
                [3.5, "xl:open:m-3.5"],
                [4, "xl:open:m-4"],
                [5, "xl:open:m-5"],
                [6, "xl:open:m-6"],
                [7, "xl:open:m-7"],
                [8, "xl:open:m-8"],
                [9, "xl:open:m-9"],
                [10, "xl:open:m-10"],
                [11, "xl:open:m-11"],
                [12, "xl:open:m-12"],
                [14, "xl:open:m-14"],
                [16, "xl:open:m-16"],
                [20, "xl:open:m-20"],
                [24, "xl:open:m-24"],
                [28, "xl:open:m-28"],
                [32, "xl:open:m-32"],
                [36, "xl:open:m-36"],
                [40, "xl:open:m-40"],
                [44, "xl:open:m-44"],
                [48, "xl:open:m-48"],
                [52, "xl:open:m-52"],
                [56, "xl:open:m-56"],
                [60, "xl:open:m-60"],
                [64, "xl:open:m-64"],
                [72, "xl:open:m-72"],
                [80, "xl:open:m-80"],
                [96, "xl:open:m-96"],
                ["auto", "xl:open:m-auto"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}