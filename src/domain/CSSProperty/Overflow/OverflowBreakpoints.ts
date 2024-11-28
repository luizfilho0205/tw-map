import { AxisMapping, Breakpoints, CSSSelector, FlexOverflow } from "../../types";
import { OverflowAxisInsideBreakpoints } from "./OverflowAxisInsideBreakpoints";
import { Axleable } from "../../Entities/Axleable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class OverflowBreakpoints extends Axleable<
  Map<Breakpoints, Map<FlexOverflow, string>>,
  Map<Breakpoints, Map<AxisMapping, Map<FlexOverflow, string>>>
> {
  private constructor(
    classesMapping: ClassesMapping<Map<Breakpoints, Map<FlexOverflow, string>>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new OverflowClassesMapping();
    return new OverflowBreakpoints(classesMapping, selector);
  }

  public axis() {
    return OverflowAxisInsideBreakpoints.create(this.cssSelector);
  }

  public write(breakpoint: Breakpoints, overflow: FlexOverflow) {
    return this.getClassName(breakpoint, overflow);
  }
}

class OverflowClassesMapping
  implements ClassesMapping<Map<Breakpoints, Map<FlexOverflow, string>>>
{
  private defaultValue: DefaultValue<Breakpoints, Map<FlexOverflow, string>>;

  constructor() {
    this.defaultValue = new DefaultValue<
      Breakpoints,
      Map<FlexOverflow, string>
    >(
      "xs",
      new Map<FlexOverflow, string>([
        ["auto", "xs:overflow-auto"],
        ["clip", "xs:overflow-clip"],
        ["hidden", "xs:overflow-hidden"],
        ["scroll", "xs:overflow-scroll"],
        ["visible", "xs:overflow-visible"],
      ])
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<Breakpoints, Map<FlexOverflow, string>>>([
        [
          "active",
          new Map<Breakpoints, Map<FlexOverflow, string>>([
            [
              "xs",
              new Map<FlexOverflow, string>([
                ["auto", "xs:active:overflow-auto"],
                ["clip", "xs:active:overflow-clip"],
                ["hidden", "xs:active:overflow-hidden"],
                ["scroll", "xs:active:overflow-scroll"],
                ["visible", "xs:active:overflow-visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexOverflow, string>([
                ["auto", "sm:active:overflow-auto"],
                ["clip", "sm:active:overflow-clip"],
                ["hidden", "sm:active:overflow-hidden"],
                ["scroll", "sm:active:overflow-scroll"],
                ["visible", "sm:active:overflow-visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexOverflow, string>([
                ["auto", "md:active:overflow-auto"],
                ["clip", "md:active:overflow-clip"],
                ["hidden", "md:active:overflow-hidden"],
                ["scroll", "md:active:overflow-scroll"],
                ["visible", "md:active:overflow-visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexOverflow, string>([
                ["auto", "lg:active:overflow-auto"],
                ["clip", "lg:active:overflow-clip"],
                ["hidden", "lg:active:overflow-hidden"],
                ["scroll", "lg:active:overflow-scroll"],
                ["visible", "lg:active:overflow-visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexOverflow, string>([
                ["auto", "xl:active:overflow-auto"],
                ["clip", "xl:active:overflow-clip"],
                ["hidden", "xl:active:overflow-hidden"],
                ["scroll", "xl:active:overflow-scroll"],
                ["visible", "xl:active:overflow-visible"],
              ]),
            ],
          ]),
        ],
        [
          "disabled",
          new Map<Breakpoints, Map<FlexOverflow, string>>([
            [
              "xs",
              new Map<FlexOverflow, string>([
                ["auto", "xs:disabled:overflow-auto"],
                ["clip", "xs:disabled:overflow-clip"],
                ["hidden", "xs:disabled:overflow-hidden"],
                ["scroll", "xs:disabled:overflow-scroll"],
                ["visible", "xs:disabled:overflow-visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexOverflow, string>([
                ["auto", "sm:disabled:overflow-auto"],
                ["clip", "sm:disabled:overflow-clip"],
                ["hidden", "sm:disabled:overflow-hidden"],
                ["scroll", "sm:disabled:overflow-scroll"],
                ["visible", "sm:disabled:overflow-visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexOverflow, string>([
                ["auto", "md:disabled:overflow-auto"],
                ["clip", "md:disabled:overflow-clip"],
                ["hidden", "md:disabled:overflow-hidden"],
                ["scroll", "md:disabled:overflow-scroll"],
                ["visible", "md:disabled:overflow-visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexOverflow, string>([
                ["auto", "lg:disabled:overflow-auto"],
                ["clip", "lg:disabled:overflow-clip"],
                ["hidden", "lg:disabled:overflow-hidden"],
                ["scroll", "lg:disabled:overflow-scroll"],
                ["visible", "lg:disabled:overflow-visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexOverflow, string>([
                ["auto", "xl:disabled:overflow-auto"],
                ["clip", "xl:disabled:overflow-clip"],
                ["hidden", "xl:disabled:overflow-hidden"],
                ["scroll", "xl:disabled:overflow-scroll"],
                ["visible", "xl:disabled:overflow-visible"],
              ]),
            ],
          ]),
        ],
        [
          "hover",
          new Map<Breakpoints, Map<FlexOverflow, string>>([
            [
              "xs",
              new Map<FlexOverflow, string>([
                ["auto", "xs:hover:overflow-auto"],
                ["clip", "xs:hover:overflow-clip"],
                ["hidden", "xs:hover:overflow-hidden"],
                ["scroll", "xs:hover:overflow-scroll"],
                ["visible", "xs:hover:overflow-visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexOverflow, string>([
                ["auto", "sm:hover:overflow-auto"],
                ["clip", "sm:hover:overflow-clip"],
                ["hidden", "sm:hover:overflow-hidden"],
                ["scroll", "sm:hover:overflow-scroll"],
                ["visible", "sm:hover:overflow-visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexOverflow, string>([
                ["auto", "md:hover:overflow-auto"],
                ["clip", "md:hover:overflow-clip"],
                ["hidden", "md:hover:overflow-hidden"],
                ["scroll", "md:hover:overflow-scroll"],
                ["visible", "md:hover:overflow-visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexOverflow, string>([
                ["auto", "lg:hover:overflow-auto"],
                ["clip", "lg:hover:overflow-clip"],
                ["hidden", "lg:hover:overflow-hidden"],
                ["scroll", "lg:hover:overflow-scroll"],
                ["visible", "lg:hover:overflow-visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexOverflow, string>([
                ["auto", "xl:hover:overflow-auto"],
                ["clip", "xl:hover:overflow-clip"],
                ["hidden", "xl:hover:overflow-hidden"],
                ["scroll", "xl:hover:overflow-scroll"],
                ["visible", "xl:hover:overflow-visible"],
              ]),
            ],
          ]),
        ],
        [
          "none",
          new Map<Breakpoints, Map<FlexOverflow, string>>([
            [
              "xs",
              new Map<FlexOverflow, string>([
                ["auto", "xs:overflow-auto"],
                ["clip", "xs:overflow-clip"],
                ["hidden", "xs:overflow-hidden"],
                ["scroll", "xs:overflow-scroll"],
                ["visible", "xs:overflow-visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexOverflow, string>([
                ["auto", "sm:overflow-auto"],
                ["clip", "sm:overflow-clip"],
                ["hidden", "sm:overflow-hidden"],
                ["scroll", "sm:overflow-scroll"],
                ["visible", "sm:overflow-visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexOverflow, string>([
                ["auto", "md:overflow-auto"],
                ["clip", "md:overflow-clip"],
                ["hidden", "md:overflow-hidden"],
                ["scroll", "md:overflow-scroll"],
                ["visible", "md:overflow-visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexOverflow, string>([
                ["auto", "lg:overflow-auto"],
                ["clip", "lg:overflow-clip"],
                ["hidden", "lg:overflow-hidden"],
                ["scroll", "lg:overflow-scroll"],
                ["visible", "lg:overflow-visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexOverflow, string>([
                ["auto", "xl:overflow-auto"],
                ["clip", "xl:overflow-clip"],
                ["hidden", "xl:overflow-hidden"],
                ["scroll", "xl:overflow-scroll"],
                ["visible", "xl:overflow-visible"],
              ]),
            ],
          ]),
        ],
        [
          "open",
          new Map<Breakpoints, Map<FlexOverflow, string>>([
            [
              "xs",
              new Map<FlexOverflow, string>([
                ["auto", "xs:open:overflow-auto"],
                ["clip", "xs:open:overflow-clip"],
                ["hidden", "xs:open:overflow-hidden"],
                ["scroll", "xs:open:overflow-scroll"],
                ["visible", "xs:open:overflow-visible"],
              ]),
            ],
            [
              "sm",
              new Map<FlexOverflow, string>([
                ["auto", "sm:open:overflow-auto"],
                ["clip", "sm:open:overflow-clip"],
                ["hidden", "sm:open:overflow-hidden"],
                ["scroll", "sm:open:overflow-scroll"],
                ["visible", "sm:open:overflow-visible"],
              ]),
            ],
            [
              "md",
              new Map<FlexOverflow, string>([
                ["auto", "md:open:overflow-auto"],
                ["clip", "md:open:overflow-clip"],
                ["hidden", "md:open:overflow-hidden"],
                ["scroll", "md:open:overflow-scroll"],
                ["visible", "md:open:overflow-visible"],
              ]),
            ],
            [
              "lg",
              new Map<FlexOverflow, string>([
                ["auto", "lg:open:overflow-auto"],
                ["clip", "lg:open:overflow-clip"],
                ["hidden", "lg:open:overflow-hidden"],
                ["scroll", "lg:open:overflow-scroll"],
                ["visible", "lg:open:overflow-visible"],
              ]),
            ],
            [
              "xl",
              new Map<FlexOverflow, string>([
                ["auto", "xl:open:overflow-auto"],
                ["clip", "xl:open:overflow-clip"],
                ["hidden", "xl:open:overflow-hidden"],
                ["scroll", "xl:open:overflow-scroll"],
                ["visible", "xl:open:overflow-visible"],
              ]),
            ],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
