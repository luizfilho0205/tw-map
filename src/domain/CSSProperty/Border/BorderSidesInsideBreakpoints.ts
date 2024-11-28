import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakpoints, CSSSelector, FlexBorder, SideMapping } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class BorderSidesInsideBreakpoints extends CSSProperty<
  Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>
> {
  private constructor(
    classesMapping: ClassesMapping<
      Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>
    >,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new BorderSidesInsideBreakpointsMapping();
    return new BorderSidesInsideBreakpoints(classesMapping, selector);
  }

  public write(
    breakpoint: Breakpoints,
    side: SideMapping,
    emphasis: FlexBorder
  ) {
    return this.getClassName(breakpoint, side, emphasis);
  }
}

class BorderSidesInsideBreakpointsMapping
  implements
    ClassesMapping<Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>>
{
  private defaultValue: DefaultValue<
    Breakpoints,
    Map<SideMapping, Map<FlexBorder, string>>
  >;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<SideMapping, Map<FlexBorder, string>>
    >(
      "xs",
      new Map<SideMapping, Map<FlexBorder, string>>([
        ["bottom", new Map<FlexBorder, string>([[0, "xs:border-b-0"]])],
        ["left", new Map<FlexBorder, string>([[0, "xs:border-l-0"]])],
        ["right", new Map<FlexBorder, string>([[0, "xs:border-r-0"]])],
        ["top", new Map<FlexBorder, string>([[0, "xs:border-t-0"]])],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<
        CSSSelector,
        Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>
      >([
        [
          "active",
          new Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xs:active:border-b-0"],
                    [2, "xs:active:border-b-2"],
                    [4, "xs:active:border-b-4"],
                    [8, "xs:active:border-b-8"],
                    ["px", "xs:active:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xs:active:border-l-0"],
                    [2, "xs:active:border-l-2"],
                    [4, "xs:active:border-l-4"],
                    [8, "xs:active:border-l-8"],
                    ["px", "xs:active:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xs:active:border-r-0"],
                    [2, "xs:active:border-r-2"],
                    [4, "xs:active:border-r-4"],
                    [8, "xs:active:border-r-8"],
                    ["px", "xs:active:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xs:active:border-t-0"],
                    [2, "xs:active:border-t-2"],
                    [4, "xs:active:border-t-4"],
                    [8, "xs:active:border-t-8"],
                    ["px", "xs:active:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "sm:active:border-b-0"],
                    [2, "sm:active:border-b-2"],
                    [4, "sm:active:border-b-4"],
                    [8, "sm:active:border-b-8"],
                    ["px", "sm:active:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "sm:active:border-l-0"],
                    [2, "sm:active:border-l-2"],
                    [4, "sm:active:border-l-4"],
                    [8, "sm:active:border-l-8"],
                    ["px", "sm:active:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "sm:active:border-r-0"],
                    [2, "sm:active:border-r-2"],
                    [4, "sm:active:border-r-4"],
                    [8, "sm:active:border-r-8"],
                    ["px", "sm:active:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "sm:active:border-t-0"],
                    [2, "sm:active:border-t-2"],
                    [4, "sm:active:border-t-4"],
                    [8, "sm:active:border-t-8"],
                    ["px", "sm:active:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "md:active:border-b-0"],
                    [2, "md:active:border-b-2"],
                    [4, "md:active:border-b-4"],
                    [8, "md:active:border-b-8"],
                    ["px", "md:active:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "md:active:border-l-0"],
                    [2, "md:active:border-l-2"],
                    [4, "md:active:border-l-4"],
                    [8, "md:active:border-l-8"],
                    ["px", "md:active:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "md:active:border-r-0"],
                    [2, "md:active:border-r-2"],
                    [4, "md:active:border-r-4"],
                    [8, "md:active:border-r-8"],
                    ["px", "md:active:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "md:active:border-t-0"],
                    [2, "md:active:border-t-2"],
                    [4, "md:active:border-t-4"],
                    [8, "md:active:border-t-8"],
                    ["px", "md:active:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "lg:active:border-b-0"],
                    [2, "lg:active:border-b-2"],
                    [4, "lg:active:border-b-4"],
                    [8, "lg:active:border-b-8"],
                    ["px", "lg:active:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "lg:active:border-l-0"],
                    [2, "lg:active:border-l-2"],
                    [4, "lg:active:border-l-4"],
                    [8, "lg:active:border-l-8"],
                    ["px", "lg:active:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "lg:active:border-r-0"],
                    [2, "lg:active:border-r-2"],
                    [4, "lg:active:border-r-4"],
                    [8, "lg:active:border-r-8"],
                    ["px", "lg:active:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "lg:active:border-t-0"],
                    [2, "lg:active:border-t-2"],
                    [4, "lg:active:border-t-4"],
                    [8, "lg:active:border-t-8"],
                    ["px", "lg:active:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xl:active:border-b-0"],
                    [2, "xl:active:border-b-2"],
                    [4, "xl:active:border-b-4"],
                    [8, "xl:active:border-b-8"],
                    ["px", "xl:active:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xl:active:border-l-0"],
                    [2, "xl:active:border-l-2"],
                    [4, "xl:active:border-l-4"],
                    [8, "xl:active:border-l-8"],
                    ["px", "xl:active:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xl:active:border-r-0"],
                    [2, "xl:active:border-r-2"],
                    [4, "xl:active:border-r-4"],
                    [8, "xl:active:border-r-8"],
                    ["px", "xl:active:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xl:active:border-t-0"],
                    [2, "xl:active:border-t-2"],
                    [4, "xl:active:border-t-4"],
                    [8, "xl:active:border-t-8"],
                    ["px", "xl:active:border-t"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xs:disabled:border-b-0"],
                    [2, "xs:disabled:border-b-2"],
                    [4, "xs:disabled:border-b-4"],
                    [8, "xs:disabled:border-b-8"],
                    ["px", "xs:disabled:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xs:disabled:border-l-0"],
                    [2, "xs:disabled:border-l-2"],
                    [4, "xs:disabled:border-l-4"],
                    [8, "xs:disabled:border-l-8"],
                    ["px", "xs:disabled:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xs:disabled:border-r-0"],
                    [2, "xs:disabled:border-r-2"],
                    [4, "xs:disabled:border-r-4"],
                    [8, "xs:disabled:border-r-8"],
                    ["px", "xs:disabled:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xs:disabled:border-t-0"],
                    [2, "xs:disabled:border-t-2"],
                    [4, "xs:disabled:border-t-4"],
                    [8, "xs:disabled:border-t-8"],
                    ["px", "xs:disabled:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "sm:disabled:border-b-0"],
                    [2, "sm:disabled:border-b-2"],
                    [4, "sm:disabled:border-b-4"],
                    [8, "sm:disabled:border-b-8"],
                    ["px", "sm:disabled:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "sm:disabled:border-l-0"],
                    [2, "sm:disabled:border-l-2"],
                    [4, "sm:disabled:border-l-4"],
                    [8, "sm:disabled:border-l-8"],
                    ["px", "sm:disabled:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "sm:disabled:border-r-0"],
                    [2, "sm:disabled:border-r-2"],
                    [4, "sm:disabled:border-r-4"],
                    [8, "sm:disabled:border-r-8"],
                    ["px", "sm:disabled:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "sm:disabled:border-t-0"],
                    [2, "sm:disabled:border-t-2"],
                    [4, "sm:disabled:border-t-4"],
                    [8, "sm:disabled:border-t-8"],
                    ["px", "sm:disabled:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "md:disabled:border-b-0"],
                    [2, "md:disabled:border-b-2"],
                    [4, "md:disabled:border-b-4"],
                    [8, "md:disabled:border-b-8"],
                    ["px", "md:disabled:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "md:disabled:border-l-0"],
                    [2, "md:disabled:border-l-2"],
                    [4, "md:disabled:border-l-4"],
                    [8, "md:disabled:border-l-8"],
                    ["px", "md:disabled:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "md:disabled:border-r-0"],
                    [2, "md:disabled:border-r-2"],
                    [4, "md:disabled:border-r-4"],
                    [8, "md:disabled:border-r-8"],
                    ["px", "md:disabled:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "md:disabled:border-t-0"],
                    [2, "md:disabled:border-t-2"],
                    [4, "md:disabled:border-t-4"],
                    [8, "md:disabled:border-t-8"],
                    ["px", "md:disabled:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "lg:disabled:border-b-0"],
                    [2, "lg:disabled:border-b-2"],
                    [4, "lg:disabled:border-b-4"],
                    [8, "lg:disabled:border-b-8"],
                    ["px", "lg:disabled:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "lg:disabled:border-l-0"],
                    [2, "lg:disabled:border-l-2"],
                    [4, "lg:disabled:border-l-4"],
                    [8, "lg:disabled:border-l-8"],
                    ["px", "lg:disabled:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "lg:disabled:border-r-0"],
                    [2, "lg:disabled:border-r-2"],
                    [4, "lg:disabled:border-r-4"],
                    [8, "lg:disabled:border-r-8"],
                    ["px", "lg:disabled:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "lg:disabled:border-t-0"],
                    [2, "lg:disabled:border-t-2"],
                    [4, "lg:disabled:border-t-4"],
                    [8, "lg:disabled:border-t-8"],
                    ["px", "lg:disabled:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xl:disabled:border-b-0"],
                    [2, "xl:disabled:border-b-2"],
                    [4, "xl:disabled:border-b-4"],
                    [8, "xl:disabled:border-b-8"],
                    ["px", "xl:disabled:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xl:disabled:border-l-0"],
                    [2, "xl:disabled:border-l-2"],
                    [4, "xl:disabled:border-l-4"],
                    [8, "xl:disabled:border-l-8"],
                    ["px", "xl:disabled:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xl:disabled:border-r-0"],
                    [2, "xl:disabled:border-r-2"],
                    [4, "xl:disabled:border-r-4"],
                    [8, "xl:disabled:border-r-8"],
                    ["px", "xl:disabled:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xl:disabled:border-t-0"],
                    [2, "xl:disabled:border-t-2"],
                    [4, "xl:disabled:border-t-4"],
                    [8, "xl:disabled:border-t-8"],
                    ["px", "xl:disabled:border-t"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xs:hover:border-b-0"],
                    [2, "xs:hover:border-b-2"],
                    [4, "xs:hover:border-b-4"],
                    [8, "xs:hover:border-b-8"],
                    ["px", "xs:hover:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xs:hover:border-l-0"],
                    [2, "xs:hover:border-l-2"],
                    [4, "xs:hover:border-l-4"],
                    [8, "xs:hover:border-l-8"],
                    ["px", "xs:hover:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xs:hover:border-r-0"],
                    [2, "xs:hover:border-r-2"],
                    [4, "xs:hover:border-r-4"],
                    [8, "xs:hover:border-r-8"],
                    ["px", "xs:hover:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xs:hover:border-t-0"],
                    [2, "xs:hover:border-t-2"],
                    [4, "xs:hover:border-t-4"],
                    [8, "xs:hover:border-t-8"],
                    ["px", "xs:hover:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "sm:hover:border-b-0"],
                    [2, "sm:hover:border-b-2"],
                    [4, "sm:hover:border-b-4"],
                    [8, "sm:hover:border-b-8"],
                    ["px", "sm:hover:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "sm:hover:border-l-0"],
                    [2, "sm:hover:border-l-2"],
                    [4, "sm:hover:border-l-4"],
                    [8, "sm:hover:border-l-8"],
                    ["px", "sm:hover:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "sm:hover:border-r-0"],
                    [2, "sm:hover:border-r-2"],
                    [4, "sm:hover:border-r-4"],
                    [8, "sm:hover:border-r-8"],
                    ["px", "sm:hover:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "sm:hover:border-t-0"],
                    [2, "sm:hover:border-t-2"],
                    [4, "sm:hover:border-t-4"],
                    [8, "sm:hover:border-t-8"],
                    ["px", "sm:hover:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "md:hover:border-b-0"],
                    [2, "md:hover:border-b-2"],
                    [4, "md:hover:border-b-4"],
                    [8, "md:hover:border-b-8"],
                    ["px", "md:hover:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "md:hover:border-l-0"],
                    [2, "md:hover:border-l-2"],
                    [4, "md:hover:border-l-4"],
                    [8, "md:hover:border-l-8"],
                    ["px", "md:hover:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "md:hover:border-r-0"],
                    [2, "md:hover:border-r-2"],
                    [4, "md:hover:border-r-4"],
                    [8, "md:hover:border-r-8"],
                    ["px", "md:hover:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "md:hover:border-t-0"],
                    [2, "md:hover:border-t-2"],
                    [4, "md:hover:border-t-4"],
                    [8, "md:hover:border-t-8"],
                    ["px", "md:hover:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "lg:hover:border-b-0"],
                    [2, "lg:hover:border-b-2"],
                    [4, "lg:hover:border-b-4"],
                    [8, "lg:hover:border-b-8"],
                    ["px", "lg:hover:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "lg:hover:border-l-0"],
                    [2, "lg:hover:border-l-2"],
                    [4, "lg:hover:border-l-4"],
                    [8, "lg:hover:border-l-8"],
                    ["px", "lg:hover:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "lg:hover:border-r-0"],
                    [2, "lg:hover:border-r-2"],
                    [4, "lg:hover:border-r-4"],
                    [8, "lg:hover:border-r-8"],
                    ["px", "lg:hover:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "lg:hover:border-t-0"],
                    [2, "lg:hover:border-t-2"],
                    [4, "lg:hover:border-t-4"],
                    [8, "lg:hover:border-t-8"],
                    ["px", "lg:hover:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xl:hover:border-b-0"],
                    [2, "xl:hover:border-b-2"],
                    [4, "xl:hover:border-b-4"],
                    [8, "xl:hover:border-b-8"],
                    ["px", "xl:hover:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xl:hover:border-l-0"],
                    [2, "xl:hover:border-l-2"],
                    [4, "xl:hover:border-l-4"],
                    [8, "xl:hover:border-l-8"],
                    ["px", "xl:hover:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xl:hover:border-r-0"],
                    [2, "xl:hover:border-r-2"],
                    [4, "xl:hover:border-r-4"],
                    [8, "xl:hover:border-r-8"],
                    ["px", "xl:hover:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xl:hover:border-t-0"],
                    [2, "xl:hover:border-t-2"],
                    [4, "xl:hover:border-t-4"],
                    [8, "xl:hover:border-t-8"],
                    ["px", "xl:hover:border-t"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xs:border-b-0"],
                    [2, "xs:border-b-2"],
                    [4, "xs:border-b-4"],
                    [8, "xs:border-b-8"],
                    ["px", "xs:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xs:border-l-0"],
                    [2, "xs:border-l-2"],
                    [4, "xs:border-l-4"],
                    [8, "xs:border-l-8"],
                    ["px", "xs:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xs:border-r-0"],
                    [2, "xs:border-r-2"],
                    [4, "xs:border-r-4"],
                    [8, "xs:border-r-8"],
                    ["px", "xs:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xs:border-t-0"],
                    [2, "xs:border-t-2"],
                    [4, "xs:border-t-4"],
                    [8, "xs:border-t-8"],
                    ["px", "xs:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "sm:border-b-0"],
                    [2, "sm:border-b-2"],
                    [4, "sm:border-b-4"],
                    [8, "sm:border-b-8"],
                    ["px", "sm:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "sm:border-l-0"],
                    [2, "sm:border-l-2"],
                    [4, "sm:border-l-4"],
                    [8, "sm:border-l-8"],
                    ["px", "sm:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "sm:border-r-0"],
                    [2, "sm:border-r-2"],
                    [4, "sm:border-r-4"],
                    [8, "sm:border-r-8"],
                    ["px", "sm:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "sm:border-t-0"],
                    [2, "sm:border-t-2"],
                    [4, "sm:border-t-4"],
                    [8, "sm:border-t-8"],
                    ["px", "sm:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "md:border-b-0"],
                    [2, "md:border-b-2"],
                    [4, "md:border-b-4"],
                    [8, "md:border-b-8"],
                    ["px", "md:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "md:border-l-0"],
                    [2, "md:border-l-2"],
                    [4, "md:border-l-4"],
                    [8, "md:border-l-8"],
                    ["px", "md:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "md:border-r-0"],
                    [2, "md:border-r-2"],
                    [4, "md:border-r-4"],
                    [8, "md:border-r-8"],
                    ["px", "md:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "md:border-t-0"],
                    [2, "md:border-t-2"],
                    [4, "md:border-t-4"],
                    [8, "md:border-t-8"],
                    ["px", "md:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "lg:border-b-0"],
                    [2, "lg:border-b-2"],
                    [4, "lg:border-b-4"],
                    [8, "lg:border-b-8"],
                    ["px", "lg:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "lg:border-l-0"],
                    [2, "lg:border-l-2"],
                    [4, "lg:border-l-4"],
                    [8, "lg:border-l-8"],
                    ["px", "lg:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "lg:border-r-0"],
                    [2, "lg:border-r-2"],
                    [4, "lg:border-r-4"],
                    [8, "lg:border-r-8"],
                    ["px", "lg:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "lg:border-t-0"],
                    [2, "lg:border-t-2"],
                    [4, "lg:border-t-4"],
                    [8, "lg:border-t-8"],
                    ["px", "lg:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xl:border-b-0"],
                    [2, "xl:border-b-2"],
                    [4, "xl:border-b-4"],
                    [8, "xl:border-b-8"],
                    ["px", "xl:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xl:border-l-0"],
                    [2, "xl:border-l-2"],
                    [4, "xl:border-l-4"],
                    [8, "xl:border-l-8"],
                    ["px", "xl:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xl:border-r-0"],
                    [2, "xl:border-r-2"],
                    [4, "xl:border-r-4"],
                    [8, "xl:border-r-8"],
                    ["px", "xl:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xl:border-t-0"],
                    [2, "xl:border-t-2"],
                    [4, "xl:border-t-4"],
                    [8, "xl:border-t-8"],
                    ["px", "xl:border-t"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<SideMapping, Map<FlexBorder, string>>>([
            [
              "xs",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xs:open:border-b-0"],
                    [2, "xs:open:border-b-2"],
                    [4, "xs:open:border-b-4"],
                    [8, "xs:open:border-b-8"],
                    ["px", "xs:open:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xs:open:border-l-0"],
                    [2, "xs:open:border-l-2"],
                    [4, "xs:open:border-l-4"],
                    [8, "xs:open:border-l-8"],
                    ["px", "xs:open:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xs:open:border-r-0"],
                    [2, "xs:open:border-r-2"],
                    [4, "xs:open:border-r-4"],
                    [8, "xs:open:border-r-8"],
                    ["px", "xs:open:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xs:open:border-t-0"],
                    [2, "xs:open:border-t-2"],
                    [4, "xs:open:border-t-4"],
                    [8, "xs:open:border-t-8"],
                    ["px", "xs:open:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "sm",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "sm:open:border-b-0"],
                    [2, "sm:open:border-b-2"],
                    [4, "sm:open:border-b-4"],
                    [8, "sm:open:border-b-8"],
                    ["px", "sm:open:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "sm:open:border-l-0"],
                    [2, "sm:open:border-l-2"],
                    [4, "sm:open:border-l-4"],
                    [8, "sm:open:border-l-8"],
                    ["px", "sm:open:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "sm:open:border-r-0"],
                    [2, "sm:open:border-r-2"],
                    [4, "sm:open:border-r-4"],
                    [8, "sm:open:border-r-8"],
                    ["px", "sm:open:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "sm:open:border-t-0"],
                    [2, "sm:open:border-t-2"],
                    [4, "sm:open:border-t-4"],
                    [8, "sm:open:border-t-8"],
                    ["px", "sm:open:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "md",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "md:open:border-b-0"],
                    [2, "md:open:border-b-2"],
                    [4, "md:open:border-b-4"],
                    [8, "md:open:border-b-8"],
                    ["px", "md:open:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "md:open:border-l-0"],
                    [2, "md:open:border-l-2"],
                    [4, "md:open:border-l-4"],
                    [8, "md:open:border-l-8"],
                    ["px", "md:open:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "md:open:border-r-0"],
                    [2, "md:open:border-r-2"],
                    [4, "md:open:border-r-4"],
                    [8, "md:open:border-r-8"],
                    ["px", "md:open:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "md:open:border-t-0"],
                    [2, "md:open:border-t-2"],
                    [4, "md:open:border-t-4"],
                    [8, "md:open:border-t-8"],
                    ["px", "md:open:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "lg",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "lg:open:border-b-0"],
                    [2, "lg:open:border-b-2"],
                    [4, "lg:open:border-b-4"],
                    [8, "lg:open:border-b-8"],
                    ["px", "lg:open:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "lg:open:border-l-0"],
                    [2, "lg:open:border-l-2"],
                    [4, "lg:open:border-l-4"],
                    [8, "lg:open:border-l-8"],
                    ["px", "lg:open:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "lg:open:border-r-0"],
                    [2, "lg:open:border-r-2"],
                    [4, "lg:open:border-r-4"],
                    [8, "lg:open:border-r-8"],
                    ["px", "lg:open:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "lg:open:border-t-0"],
                    [2, "lg:open:border-t-2"],
                    [4, "lg:open:border-t-4"],
                    [8, "lg:open:border-t-8"],
                    ["px", "lg:open:border-t"],
                  ]),
                ],
              ]),
            ],
            [
              "xl",
              new Map<SideMapping, Map<FlexBorder, string>>([
                [
                  "bottom",
                  new Map<FlexBorder, string>([
                    [0, "xl:open:border-b-0"],
                    [2, "xl:open:border-b-2"],
                    [4, "xl:open:border-b-4"],
                    [8, "xl:open:border-b-8"],
                    ["px", "xl:open:border-b"],
                  ]),
                ],
                [
                  "left",
                  new Map<FlexBorder, string>([
                    [0, "xl:open:border-l-0"],
                    [2, "xl:open:border-l-2"],
                    [4, "xl:open:border-l-4"],
                    [8, "xl:open:border-l-8"],
                    ["px", "xl:open:border-l"],
                  ]),
                ],
                [
                  "right",
                  new Map<FlexBorder, string>([
                    [0, "xl:open:border-r-0"],
                    [2, "xl:open:border-r-2"],
                    [4, "xl:open:border-r-4"],
                    [8, "xl:open:border-r-8"],
                    ["px", "xl:open:border-r"],
                  ]),
                ],
                [
                  "top",
                  new Map<FlexBorder, string>([
                    [0, "xl:open:border-t-0"],
                    [2, "xl:open:border-t-2"],
                    [4, "xl:open:border-t-4"],
                    [8, "xl:open:border-t-8"],
                    ["px", "xl:open:border-t"],
                  ]),
                ],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
