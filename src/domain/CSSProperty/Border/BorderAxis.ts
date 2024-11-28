import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { AxisMapping, Breakpoints, CSSSelector, FlexBorder } from "../../types";
import { BorderAxisInsideBreakpoints } from "./BorderAxisInsideBreakpoints";
import { DefaultValue } from "../DefaultValue";

export class BorderAxis
  extends CSSProperty<Map<AxisMapping, Map<FlexBorder, string>>>
  implements
    Breakable<Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<AxisMapping, Map<FlexBorder, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderAxisMapping();
    return new BorderAxis(classesMapping, selector);
  }

  public breakpoints() {
    return BorderAxisInsideBreakpoints.create(this.cssSelector);
  }

  public write(axis: AxisMapping, emphasis: FlexBorder) {
    return this.getClassName(axis, emphasis);
  }
}

class BorderAxisMapping
  implements ClassesMapping<Map<AxisMapping, Map<FlexBorder, string>>>
{
  private defaultValue: DefaultValue<AxisMapping, Map<FlexBorder, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<AxisMapping, Map<FlexBorder, string>>(
      "x",
      new Map<FlexBorder, string>([[0, "border-x-0"]])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<AxisMapping, Map<FlexBorder, string>>>([
        [
          "active",
          new Map<AxisMapping, Map<FlexBorder, string>>([
            [
              "x",
              new Map<FlexBorder, string>([
                [0, "active:border-x-0"],
                [2, "active:border-x-2"],
                [4, "active:border-x-4"],
                [8, "active:border-x-8"],
                ["px", "active:border-x"],
              ]),
            ],
            [
              "y",
              new Map<FlexBorder, string>([
                [0, "active:border-y-0"],
                [2, "active:border-y-2"],
                [4, "active:border-y-4"],
                [8, "active:border-y-8"],
                ["px", "active:border-y"],
              ]),
            ],
          ]),
        ],

        [
          "disabled",
          new Map<AxisMapping, Map<FlexBorder, string>>([
            [
              "x",
              new Map<FlexBorder, string>([
                [0, "disabled:border-x-0"],
                [2, "disabled:border-x-2"],
                [4, "disabled:border-x-4"],
                [8, "disabled:border-x-8"],
                ["px", "disabled:border-x"],
              ]),
            ],
            [
              "y",
              new Map<FlexBorder, string>([
                [0, "disabled:border-y-0"],
                [2, "disabled:border-y-2"],
                [4, "disabled:border-y-4"],
                [8, "disabled:border-y-8"],
                ["px", "disabled:border-y"],
              ]),
            ],
          ]),
        ],

        [
          "hover",
          new Map<AxisMapping, Map<FlexBorder, string>>([
            [
              "x",
              new Map<FlexBorder, string>([
                [0, "hover:border-x-0"],
                [2, "hover:border-x-2"],
                [4, "hover:border-x-4"],
                [8, "hover:border-x-8"],
                ["px", "hover:border-x"],
              ]),
            ],
            [
              "y",
              new Map<FlexBorder, string>([
                [0, "hover:border-y-0"],
                [2, "hover:border-y-2"],
                [4, "hover:border-y-4"],
                [8, "hover:border-y-8"],
                ["px", "hover:border-y"],
              ]),
            ],
          ]),
        ],

        [
          "none",
          new Map<AxisMapping, Map<FlexBorder, string>>([
            [
              "x",
              new Map<FlexBorder, string>([
                [0, "border-x-0"],
                [2, "border-x-2"],
                [4, "border-x-4"],
                [8, "border-x-8"],
                ["px", "border-x"],
              ]),
            ],
            [
              "y",
              new Map<FlexBorder, string>([
                [0, "border-y-0"],
                [2, "border-y-2"],
                [4, "border-y-4"],
                [8, "border-y-8"],
                ["px", "border-y"],
              ]),
            ],
          ]),
        ],

        [
          "open",
          new Map<AxisMapping, Map<FlexBorder, string>>([
            [
              "x",
              new Map<FlexBorder, string>([
                [0, "open:border-x-0"],
                [2, "open:border-x-2"],
                [4, "open:border-x-4"],
                [8, "open:border-x-8"],
                ["px", "open:border-x"],
              ]),
            ],
            [
              "y",
              new Map<FlexBorder, string>([
                [0, "open:border-y-0"],
                [2, "open:border-y-2"],
                [4, "open:border-y-4"],
                [8, "open:border-y-8"],
                ["px", "open:border-y"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
