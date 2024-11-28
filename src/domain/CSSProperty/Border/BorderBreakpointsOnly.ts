import {
  AxisMapping,
  Breakpoints,
  CSSSelector,
  FlexBorder,
  SideMapping,
} from "../../types";
import { BorderAxisInsideBreakpoints } from "./BorderAxisInsideBreakpoints";
import { BorderSidesInsideBreakpoints } from "./BorderSidesInsideBreakpoints";
import { Axleable } from "../../Entities/Axleable";
import { Sideable } from "../../Entities/Sideable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class BorderBreakpointsOnly
  extends Axleable<
    Map<Breakpoints, Map<FlexBorder, string>>,
    Map<Breakpoints, Map<AxisMapping, Map<FlexBorder, string>>>
  >
  implements
    Sideable<Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<FlexBorder, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderBreakpointsOnlyMapping();
    return new BorderBreakpointsOnly(classesMapping, selector);
  }

  public axis() {
    return BorderAxisInsideBreakpoints.create(this.cssSelector);
  }

  public sides() {
    return BorderSidesInsideBreakpoints.create(this.cssSelector);
  }

  public write(breakpoint: Breakpoints, emphasis: FlexBorder) {
    return this.getClassName(breakpoint, emphasis);
  }
}
class BorderBreakpointsOnlyMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexBorder, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexBorder, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<Breakpoints, Map<FlexBorder, string>>(
      "xs",
      new Map<FlexBorder, string>([
        [0, "xs:border-0"],
        [2, "xs:border-2"],
        [4, "xs:border-4"],
        [8, "xs:border-8"],
        ["px", "xs:border"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexBorder, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexBorder, string>>([
            [
              "xs",
              new Map<FlexBorder, string>([
                [0, "xs:active:border-0"],
                [2, "xs:active:border-2"],
                [4, "xs:active:border-4"],
                [8, "xs:active:border-8"],
                ["px", "xs:active:border"],
              ]),
            ],
            [
              "sm",
              new Map<FlexBorder, string>([
                [0, "sm:active:border-0"],
                [2, "sm:active:border-2"],
                [4, "sm:active:border-4"],
                [8, "sm:active:border-8"],
                ["px", "sm:active:border"],
              ]),
            ],
            [
              "md",
              new Map<FlexBorder, string>([
                [0, "md:active:border-0"],
                [2, "md:active:border-2"],
                [4, "md:active:border-4"],
                [8, "md:active:border-8"],
                ["px", "md:active:border"],
              ]),
            ],
            [
              "lg",
              new Map<FlexBorder, string>([
                [0, "lg:active:border-0"],
                [2, "lg:active:border-2"],
                [4, "lg:active:border-4"],
                [8, "lg:active:border-8"],
                ["px", "lg:active:border"],
              ]),
            ],
            [
              "xl",
              new Map<FlexBorder, string>([
                [0, "xl:active:border-0"],
                [2, "xl:active:border-2"],
                [4, "xl:active:border-4"],
                [8, "xl:active:border-8"],
                ["px", "xl:active:border"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<FlexBorder, string>>([
            [
              "xs",
              new Map<FlexBorder, string>([
                [0, "xs:disabled:border-0"],
                [2, "xs:disabled:border-2"],
                [4, "xs:disabled:border-4"],
                [8, "xs:disabled:border-8"],
                ["px", "xs:disabled:border"],
              ]),
            ],
            [
              "sm",
              new Map<FlexBorder, string>([
                [0, "sm:disabled:border-0"],
                [2, "sm:disabled:border-2"],
                [4, "sm:disabled:border-4"],
                [8, "sm:disabled:border-8"],
                ["px", "sm:disabled:border"],
              ]),
            ],
            [
              "md",
              new Map<FlexBorder, string>([
                [0, "md:disabled:border-0"],
                [2, "md:disabled:border-2"],
                [4, "md:disabled:border-4"],
                [8, "md:disabled:border-8"],
                ["px", "md:disabled:border"],
              ]),
            ],
            [
              "lg",
              new Map<FlexBorder, string>([
                [0, "lg:disabled:border-0"],
                [2, "lg:disabled:border-2"],
                [4, "lg:disabled:border-4"],
                [8, "lg:disabled:border-8"],
                ["px", "lg:disabled:border"],
              ]),
            ],
            [
              "xl",
              new Map<FlexBorder, string>([
                [0, "xl:disabled:border-0"],
                [2, "xl:disabled:border-2"],
                [4, "xl:disabled:border-4"],
                [8, "xl:disabled:border-8"],
                ["px", "xl:disabled:border"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexBorder, string>>([
            [
              "xs",
              new Map<FlexBorder, string>([
                [0, "xs:hover:border-0"],
                [2, "xs:hover:border-2"],
                [4, "xs:hover:border-4"],
                [8, "xs:hover:border-8"],
                ["px", "xs:hover:border"],
              ]),
            ],
            [
              "sm",
              new Map<FlexBorder, string>([
                [0, "sm:hover:border-0"],
                [2, "sm:hover:border-2"],
                [4, "sm:hover:border-4"],
                [8, "sm:hover:border-8"],
                ["px", "sm:hover:border"],
              ]),
            ],
            [
              "md",
              new Map<FlexBorder, string>([
                [0, "md:hover:border-0"],
                [2, "md:hover:border-2"],
                [4, "md:hover:border-4"],
                [8, "md:hover:border-8"],
                ["px", "md:hover:border"],
              ]),
            ],
            [
              "lg",
              new Map<FlexBorder, string>([
                [0, "lg:hover:border-0"],
                [2, "lg:hover:border-2"],
                [4, "lg:hover:border-4"],
                [8, "lg:hover:border-8"],
                ["px", "lg:hover:border"],
              ]),
            ],
            [
              "xl",
              new Map<FlexBorder, string>([
                [0, "xl:hover:border-0"],
                [2, "xl:hover:border-2"],
                [4, "xl:hover:border-4"],
                [8, "xl:hover:border-8"],
                ["px", "xl:hover:border"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexBorder, string>>([
            [
              "xs",
              new Map<FlexBorder, string>([
                [0, "xs:border-0"],
                [2, "xs:border-2"],
                [4, "xs:border-4"],
                [8, "xs:border-8"],
                ["px", "xs:border"],
              ]),
            ],
            [
              "sm",
              new Map<FlexBorder, string>([
                [0, "sm:border-0"],
                [2, "sm:border-2"],
                [4, "sm:border-4"],
                [8, "sm:border-8"],
                ["px", "sm:border"],
              ]),
            ],
            [
              "md",
              new Map<FlexBorder, string>([
                [0, "md:border-0"],
                [2, "md:border-2"],
                [4, "md:border-4"],
                [8, "md:border-8"],
                ["px", "md:border"],
              ]),
            ],
            [
              "lg",
              new Map<FlexBorder, string>([
                [0, "lg:border-0"],
                [2, "lg:border-2"],
                [4, "lg:border-4"],
                [8, "lg:border-8"],
                ["px", "lg:border"],
              ]),
            ],
            [
              "xl",
              new Map<FlexBorder, string>([
                [0, "xl:border-0"],
                [2, "xl:border-2"],
                [4, "xl:border-4"],
                [8, "xl:border-8"],
                ["px", "xl:border"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexBorder, string>>([
            [
              "xs",
              new Map<FlexBorder, string>([
                [0, "xs:open:border-0"],
                [2, "xs:open:border-2"],
                [4, "xs:open:border-4"],
                [8, "xs:open:border-8"],
                ["px", "xs:open:border"],
              ]),
            ],
            [
              "sm",
              new Map<FlexBorder, string>([
                [0, "sm:open:border-0"],
                [2, "sm:open:border-2"],
                [4, "sm:open:border-4"],
                [8, "sm:open:border-8"],
                ["px", "sm:open:border"],
              ]),
            ],
            [
              "md",
              new Map<FlexBorder, string>([
                [0, "md:open:border-0"],
                [2, "md:open:border-2"],
                [4, "md:open:border-4"],
                [8, "md:open:border-8"],
                ["px", "md:open:border"],
              ]),
            ],
            [
              "lg",
              new Map<FlexBorder, string>([
                [0, "lg:open:border-0"],
                [2, "lg:open:border-2"],
                [4, "lg:open:border-4"],
                [8, "lg:open:border-8"],
                ["px", "lg:open:border"],
              ]),
            ],
            [
              "xl",
              new Map<FlexBorder, string>([
                [0, "xl:open:border-0"],
                [2, "xl:open:border-2"],
                [4, "xl:open:border-4"],
                [8, "xl:open:border-8"],
                ["px", "xl:open:border"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
