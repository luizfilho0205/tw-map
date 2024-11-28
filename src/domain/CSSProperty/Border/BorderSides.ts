import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexBorder, SideMapping } from "../../types";
import { BorderSidesInsideBreakpoints } from "./BorderSidesInsideBreakpoints";
import { DefaultValue } from "../DefaultValue";

export class BorderSides
  extends CSSProperty<Map<SideMapping, Map<FlexBorder, string>>>
  implements
    Breakable<Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<SideMapping, Map<FlexBorder, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderSidesMapping();
    return new BorderSides(classesMapping, selector);
  }

  public breakpoints() {
    return BorderSidesInsideBreakpoints.create(this.cssSelector);
  }

  public write(side: SideMapping, emphasis: FlexBorder) {
    return this.getClassName(side, emphasis);
  }
}

class BorderSidesMapping
  implements ClassesMapping<Map<SideMapping, Map<FlexBorder, string>>>
{
  private defaultValue: DefaultValue<SideMapping, Map<FlexBorder, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<SideMapping, Map<FlexBorder, string>>(
      "bottom",
      new Map<FlexBorder, string>([[0, "border-b-0"]])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<SideMapping, Map<FlexBorder, string>>>([
        [
          "active",
          new Map<SideMapping, Map<FlexBorder, string>>([
            [
              "bottom",
              new Map<FlexBorder, string>([
                [0, "active:border-b-0"],
                [2, "active:border-b-2"],
                [4, "active:border-b-4"],
                [8, "active:border-b-8"],
                ["px", "active:border-b"],
              ]),
            ],
            [
              "left",
              new Map<FlexBorder, string>([
                [0, "active:border-l-0"],
                [2, "active:border-l-2"],
                [4, "active:border-l-4"],
                [8, "active:border-l-8"],
                ["px", "active:border-l"],
              ]),
            ],
            [
              "right",
              new Map<FlexBorder, string>([
                [0, "active:border-r-0"],
                [2, "active:border-r-2"],
                [4, "active:border-r-4"],
                [8, "active:border-r-8"],
                ["px", "active:border-r"],
              ]),
            ],
            [
              "top",
              new Map<FlexBorder, string>([
                [0, "active:border-t-0"],
                [2, "active:border-t-2"],
                [4, "active:border-t-4"],
                [8, "active:border-t-8"],
                ["px", "active:border-t"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<SideMapping, Map<FlexBorder, string>>([
            [
              "bottom",
              new Map<FlexBorder, string>([
                [0, "disabled:border-b-0"],
                [2, "disabled:border-b-2"],
                [4, "disabled:border-b-4"],
                [8, "disabled:border-b-8"],
                ["px", "disabled:border-b"],
              ]),
            ],
            [
              "left",
              new Map<FlexBorder, string>([
                [0, "disabled:border-l-0"],
                [2, "disabled:border-l-2"],
                [4, "disabled:border-l-4"],
                [8, "disabled:border-l-8"],
                ["px", "disabled:border-l"],
              ]),
            ],
            [
              "right",
              new Map<FlexBorder, string>([
                [0, "disabled:border-r-0"],
                [2, "disabled:border-r-2"],
                [4, "disabled:border-r-4"],
                [8, "disabled:border-r-8"],
                ["px", "disabled:border-r"],
              ]),
            ],
            [
              "top",
              new Map<FlexBorder, string>([
                [0, "disabled:border-t-0"],
                [2, "disabled:border-t-2"],
                [4, "disabled:border-t-4"],
                [8, "disabled:border-t-8"],
                ["px", "disabled:border-t"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<SideMapping, Map<FlexBorder, string>>([
            [
              "bottom",
              new Map<FlexBorder, string>([
                [0, "hover:border-b-0"],
                [2, "hover:border-b-2"],
                [4, "hover:border-b-4"],
                [8, "hover:border-b-8"],
                ["px", "hover:border-b"],
              ]),
            ],
            [
              "left",
              new Map<FlexBorder, string>([
                [0, "hover:border-l-0"],
                [2, "hover:border-l-2"],
                [4, "hover:border-l-4"],
                [8, "hover:border-l-8"],
                ["px", "hover:border-l"],
              ]),
            ],
            [
              "right",
              new Map<FlexBorder, string>([
                [0, "hover:border-r-0"],
                [2, "hover:border-r-2"],
                [4, "hover:border-r-4"],
                [8, "hover:border-r-8"],
                ["px", "hover:border-r"],
              ]),
            ],
            [
              "top",
              new Map<FlexBorder, string>([
                [0, "hover:border-t-0"],
                [2, "hover:border-t-2"],
                [4, "hover:border-t-4"],
                [8, "hover:border-t-8"],
                ["px", "hover:border-t"],
              ]),
            ],
          ]),
        ],

        [
          "none",
          new Map<SideMapping, Map<FlexBorder, string>>([
            [
              "bottom",
              new Map<FlexBorder, string>([
                [0, "border-b-0"],
                [2, "border-b-2"],
                [4, "border-b-4"],
                [8, "border-b-8"],
                ["px", "border-b"],
              ]),
            ],
            [
              "left",
              new Map<FlexBorder, string>([
                [0, "border-l-0"],
                [2, "border-l-2"],
                [4, "border-l-4"],
                [8, "border-l-8"],
                ["px", "border-l"],
              ]),
            ],
            [
              "right",
              new Map<FlexBorder, string>([
                [0, "border-r-0"],
                [2, "border-r-2"],
                [4, "border-r-4"],
                [8, "border-r-8"],
                ["px", "border-r"],
              ]),
            ],
            [
              "top",
              new Map<FlexBorder, string>([
                [0, "border-t-0"],
                [2, "border-t-2"],
                [4, "border-t-4"],
                [8, "border-t-8"],
                ["px", "border-t"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<SideMapping, Map<FlexBorder, string>>([
            [
              "bottom",
              new Map<FlexBorder, string>([
                [0, "open:border-b-0"],
                [2, "open:border-b-2"],
                [4, "open:border-b-4"],
                [8, "open:border-b-8"],
                ["px", "open:border-b"],
              ]),
            ],
            [
              "left",
              new Map<FlexBorder, string>([
                [0, "open:border-l-0"],
                [2, "open:border-l-2"],
                [4, "open:border-l-4"],
                [8, "open:border-l-8"],
                ["px", "open:border-l"],
              ]),
            ],
            [
              "right",
              new Map<FlexBorder, string>([
                [0, "open:border-r-0"],
                [2, "open:border-r-2"],
                [4, "open:border-r-4"],
                [8, "open:border-r-8"],
                ["px", "open:border-r"],
              ]),
            ],
            [
              "top",
              new Map<FlexBorder, string>([
                [0, "open:border-t-0"],
                [2, "open:border-t-2"],
                [4, "open:border-t-4"],
                [8, "open:border-t-8"],
                ["px", "open:border-t"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
