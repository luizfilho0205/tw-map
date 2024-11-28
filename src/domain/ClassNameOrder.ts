import {
  ColorsMapping,
  FlexBasis,
  FlexBorder,
  FlexHeight,
  FlexMaxHeight,
  FlexMaxWidth,
  FlexMinHeight,
  FlexMinWidth,
  FlexOpacity,
  FlexOverflow,
  FlexScale,
  FlexSize,
  FlexSpacing,
  FlexWidth,
  FlexFontSize,
  FlexFontWeight,
  MarginSpacing,
  TransitionTiming,
  GridTemplate,
  GridSpan,
  GridStartEnd,
  FlexBoxShadow,
} from "./types";

/**
 * Classes precedence order
 *  Visibility
 *  Position
 *  Margin [emphasis, x, y, bottom, left, right, top]
 *  Display
 *  Size
 *  Height
 *  Max Height
 *  Min Height
 *  Width
 *  Min Width
 *  Max Width
 *  Basis
 *  Scale
 *  Animate
 *  Cursor
 *  Flex direction
 *  Grid columns [span, start, end]
 *  Grid rows [span, start, end]
 *  Align items
 *  Justify Contents
 *  Gap
 *  Overflow
 *  Rounded
 *  Border [emphasis, bottom, left, right, top, style, color, color bottom, color, left, color right, color top, opacity]
 *  Background [color, opacity]
 *  Padding [emphasis, x, y, bottom, left, right, top]
 *  Font [size, weight]
 *  Text [case, color]
 *  Shadow [emphasis, color]
 *  Outline
 *  Transition [properties, delay, duration, function]
 */

export class ClassNameOrder {
  private static instance: ClassNameOrder;
  private classesOrder: Map<string, number>;
  private lastIndex: number;
  private modifiersOrder: Map<string, number>;

  private constructor() {
    this.lastIndex = 0;
    this.classesOrder = new Map<string, number>();
    this.modifiersOrder = new Map<string, number>();
    this.build();
  }

  static create() {
    if (!this.instance) {
      this.instance = new ClassNameOrder();
    }
    return this.instance;
  }

  public get(className: string) {
    const regexModifierSeparator = /(?<!:)(:)(?=[^:]*$)/;
    const regexCheckHasModifier = /[:]/gm;

    if (regexCheckHasModifier.test(className)) {
      const [modifier, __ignore, classNameTarget] = className.split(
        regexModifierSeparator
      );
      const modifierOrder =
        this.modifiersOrder.get(modifier) ??
        this.lastIndex * (this.modifiersOrder.size + 1);
      const classOrder = this.classesOrder.get(classNameTarget);

      if (!classOrder && classOrder !== 0) {
        return -1;
      }

      return modifierOrder + classOrder;
    }

    return this.classesOrder.get(className) ?? -1;
  }

  private build() {
    const classes = this.createClasses();
    this.initializeClassesOrder(classes);
    this.initializeModifiersOrder();
    return this;
  }

  private initializeClassesOrder(classes: Set<string[]>) {
    let index = 0;
    classes.forEach((data: string[]) => {
      data.forEach((className) => {
        if (!this.classesOrder.has(className)) {
          this.classesOrder.set(className, index);
          index++;
        }
      });
    });

    this.lastIndex = index;
  }

  private initializeModifiersOrder() {
    const lastIndex = this.lastIndex + 1;
    const modifiers: { key: string; weight: number }[] = [
      { key: "open", weight: 1 },
      { key: "hover", weight: 2 },
      { key: "active", weight: 3 },
      { key: "disabled", weight: 4 },
      { key: "xs", weight: 5 },
      { key: "xs:open", weight: 6 },
      { key: "xs:hover", weight: 7 },
      { key: "xs:active", weight: 8 },
      { key: "xs:disabled", weight: 9 },
      { key: "sm", weight: 10 },
      { key: "sm:open", weight: 11 },
      { key: "sm:hover", weight: 12 },
      { key: "sm:active", weight: 13 },
      { key: "sm:disabled", weight: 14 },
      { key: "md", weight: 15 },
      { key: "md:open", weight: 16 },
      { key: "md:hover", weight: 17 },
      { key: "md:active", weight: 18 },
      { key: "md:disabled", weight: 19 },
      { key: "lg", weight: 20 },
      { key: "lg:open", weight: 21 },
      { key: "lg:hover", weight: 22 },
      { key: "lg:active", weight: 23 },
      { key: "lg:disabled", weight: 24 },
      { key: "xl", weight: 25 },
      { key: "xl:open", weight: 26 },
      { key: "xl:hover", weight: 27 },
      { key: "xl:active", weight: 28 },
      { key: "xl:disabled", weight: 29 },
    ];

    modifiers.forEach((modifier) => {
      const index = modifier.weight * lastIndex;
      this.modifiersOrder.set(modifier.key, index);
    });
  }

  private createClasses() {
    return new Set<string[]>([
      ["visible", "invisible", "collapse"],
      ["static", "fixed", "absolute", "relative", "sticky"],
      this.generateMargins("m"),
      this.generateMargins("mx"),
      this.generateMargins("my"),
      this.generateMargins("mb"),
      this.generateMargins("ml"),
      this.generateMargins("mr"),
      this.generateMargins("mt"),
      [
        "block",
        "contents",
        "flex",
        "flow-root",
        "grid",
        "hidden",
        "inline",
        "inline-block",
        "inline-flex",
        "inline-grid",
        "inline-table",
        "list-item",
        "table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row",
        "table-row-group",
      ],
      this.generateSizes(),
      this.generateFlexHeight(),
      this.generateMaxHeight(),
      this.generateMinHeight(),
      this.generateFlexWidth(),
      this.generateMinWidth(),
      this.generateMaxWidth(),
      this.generateBasis(),
      this.generateScales("scale"),
      this.generateScales("scale-x"),
      this.generateScales("scale-y"),
      [
        "animate-bounce",
        "animate-none",
        "animate-ping",
        "animate-pulse",
        "animate-spin",
      ],
      [
        "cursor-auto",
        "cursor-default",
        "cursor-pointer",
        "cursor-wait",
        "cursor-text",
        "cursor-move",
        "cursor-help",
        "cursor-not-allowed",
        "cursor-none",
        "cursor-context-menu",
        "cursor-progress",
        "cursor-cell",
        "cursor-crosshair",
        "cursor-vertical-text",
        "cursor-alias",
        "cursor-copy",
        "cursor-no-drop",
        "cursor-grab",
        "cursor-grabbing",
        "cursor-all-scroll",
        "cursor-col-resize",
        "cursor-row-resize",
        "cursor-n-resize",
        "cursor-e-resize",
        "cursor-s-resize",
        "cursor-w-resize",
        "cursor-ne-resize",
        "cursor-nw-resize",
        "cursor-se-resize",
        "cursor-sw-resize",
        "cursor-ew-resize",
        "cursor-ns-resize",
        "cursor-nesw-resize",
        "cursor-nwse-resize",
        "cursor-zoom-in",
        "cursor-zoom-out",
      ],
      ["flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse"],
      this.generateGridTemplate("grid-cols"),
      this.generateGridSpan("col"),
      this.generateGridStart("col"),
      this.generateGridEnd("col"),
      this.generateGridTemplate("grid-rows"),
      this.generateGridSpan("row"),
      this.generateGridStart("row"),
      this.generateGridEnd("row"),
      [
        "items-center",
        "items-start",
        "items-end",
        "items-stretch",
        "items-baseline",
      ],
      [
        "justify-normal",
        "justify-start",
        "justify-end",
        "justify-center",
        "justify-between",
        "justify-around",
        "justify-evenly",
        "justify-stretch",
      ],
      this.generateSpacings("gap"),
      this.generateSpacings("gap-x"),
      this.generateSpacings("gap-y"),
      this.generateOverflow("overflow"),
      this.generateOverflow("overflow-x"),
      this.generateOverflow("overflow-y"),
      [
        "rounded-xs",
        "rounded-sm",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-3xl",
        "rounded-none",
        "rounded-full",
      ],
      this.generateBorder("border"),
      this.generateBorder("border-x"),
      this.generateBorder("border-y"),
      this.generateBorder("border-b"),
      this.generateBorder("border-l"),
      this.generateBorder("border-r"),
      this.generateBorder("border-t"),
      [
        "border-dashed",
        "border-dotted",
        "border-double",
        "border-hidden",
        "border-none",
        "border-solid",
      ],
      this.generateColoreds("border"),
      this.generateColoreds("border-b"),
      this.generateColoreds("border-l"),
      this.generateColoreds("border-r"),
      this.generateColoreds("border-t"),
      this.generateOpacities("border-opacity"),
      this.generateColoreds("bg"),
      this.generateOpacities("bg-opacity"),
      this.generatePaddings("p"),
      this.generatePaddings("px"),
      this.generatePaddings("py"),
      this.generatePaddings("pb"),
      this.generatePaddings("pl"),
      this.generatePaddings("pr"),
      this.generatePaddings("pt"),
      [
        "text-center",
        "text-end",
        "text-justify",
        "text-left",
        "text-right",
        "text-start",
      ],
      this.generateFontSizes("text"),
      this.generateFontWeight("font"),
      ["capitalize", "lowercase", "normal-case", "uppercase"],
      this.generateColoreds("text"),
      this.generateBoxShadow(),
      this.generateColoreds("shadow"),
      [
        "outline-none",
        "outline",
        "outline-dashed",
        "outline-dotted",
        "outline-double",
        "outline-0",
        "outline-1",
        "outline-2",
        "outline-4",
      ],
      [
        "transition-none",
        "transition-all",
        "transition-colors",
        "transition-opacity",
        "transition-shadow",
        "transition-transform",
      ],
      this.generateTimings("delay"),
      this.generateTimings("duration"),
      ["ease-in", "ease-in-out", "ease-linear", "ease-out"],
    ]);
  }

  private generateBasis() {
    const flexBasis: Record<FlexBasis, string> = {
      0: "basis-0",
      1: "basis-1",
      2: "basis-2",
      3: "basis-3",
      4: "basis-4",
      5: "basis-5",
      6: "basis-6",
      7: "basis-7",
      8: "basis-8",
      9: "basis-9",
      10: "basis-10",
      11: "basis-11",
      12: "basis-12",
      14: "basis-14",
      16: "basis-16",
      20: "basis-20",
      24: "basis-24",
      28: "basis-28",
      32: "basis-32",
      36: "basis-36",
      40: "basis-40",
      44: "basis-44",
      48: "basis-48",
      52: "basis-52",
      56: "basis-56",
      60: "basis-60",
      64: "basis-64",
      72: "basis-72",
      80: "basis-80",
      96: "basis-96",
      auto: "basis-auto",
      px: "basis-px",
      0.5: "basis-0.5",
      1.5: "basis-1.5",
      2.5: "basis-2.5",
      3.5: "basis-3.5",
      "1/2": "basis-1/2",
      "1/3": "basis-1/3",
      "2/3": "basis-2/3",
      "1/4": "basis-1/4",
      "2/4": "basis-2/4",
      "3/4": "basis-3/4",
      "1/5": "basis-1/5",
      "2/5": "basis-2/5",
      "3/5": "basis-3/5",
      "4/5": "basis-4/5",
      "1/6": "basis-1/6",
      "2/6": "basis-2/6",
      "3/6": "basis-3/6",
      "4/6": "basis-4/6",
      "5/6": "basis-5/6",
      "1/12": "basis-1/12",
      "2/12": "basis-2/12",
      "3/12": "basis-3/12",
      "4/12": "basis-4/12",
      "5/12": "basis-5/12",
      "6/12": "basis-6/12",
      "7/12": "basis-7/12",
      "8/12": "basis-8/12",
      "9/12": "basis-9/12",
      "10/12": "basis-10/12",
      "11/12": "basis-11/12",
      full: "basis-full",
    };
    return Object.values(flexBasis);
  }

  private generateBorder(prefix: string) {
    const spacings: FlexBorder[] = [0, "px", 2, 4, 8];

    return spacings.reduce((accumulated, currentValue) => {
      if (currentValue === "px") {
        accumulated.push(prefix);
      }

      if (currentValue !== "px") {
        accumulated.push(`${prefix}-${currentValue}`);
      }

      return accumulated;
    }, [] as string[]);
  }

  private generateBoxShadow() {
    const boxShadow: FlexBoxShadow[] = [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "inner",
      "none",
    ];
    return boxShadow.reduce((accumulated, currentValue) => {
      accumulated.push(`shadow-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateColoreds(prefix: string) {
    const colors: ColorsMapping[] = [
      "error",
      "inherit",
      "info",
      "primary",
      "secondary",
      "success",
      "transparent",
      "warning",
      "white",
    ];
    return colors.reduce((accumulated, color) => {
      accumulated.push(`${prefix}-${color}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateFlexHeight = () => {
    const flexHeight: FlexHeight[] = [
      0,
      "px",
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
      "auto",
      "1/2",
      "1/3",
      "2/3",
      "1/4",
      "2/4",
      "3/4",
      "1/5",
      "2/5",
      "3/5",
      "4/5",
      "1/6",
      "2/6",
      "3/6",
      "4/6",
      "5/6",
      "full",
      "screen",
      "svh",
      "lvh",
      "dvh",
      "min",
      "max",
      "fit",
    ];
    return flexHeight.reduce((accumulated, currentValue) => {
      accumulated.push(`h-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  };

  private generateFlexWidth = () => {
    const flexWidth: FlexWidth[] = [
      0,
      "px",
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
      "auto",
      "1/2",
      "1/3",
      "2/3",
      "1/4",
      "2/4",
      "3/4",
      "1/5",
      "2/5",
      "3/5",
      "4/5",
      "1/6",
      "2/6",
      "3/6",
      "4/6",
      "5/6",
      "1/12",
      "2/12",
      "3/12",
      "4/12",
      "5/12",
      "6/12",
      "7/12",
      "8/12",
      "9/12",
      "10/12",
      "11/12",
      "full",
      "screen",
      "svw",
      "lvw",
      "dvw",
      "min",
      "max",
      "fit",
    ];
    return flexWidth.reduce((accumulated, currentValue) => {
      accumulated.push(`w-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  };

  private generateFontSizes(prefix: string) {
    const sizes: FlexFontSize[] = [
      "xs",
      "sm",
      "base",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "8xl",
      "9xl",
    ];
    return sizes.reduce((accumulated, size) => {
      accumulated.push(`${prefix}-${size}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateFontWeight(prefix: string) {
    const weights: FlexFontWeight[] = [
      "thin",
      "extralight",
      "light",
      "normal",
      "medium",
      "semibold",
      "bold",
      "extrabold",
      "black",
    ];
    return weights.reduce((accumulated, weight) => {
      accumulated.push(`${prefix}-${weight}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateGridTemplate(prefix: string) {
    const growings: GridTemplate[] = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      "none",
      "subgrid",
    ];

    return growings.reduce((accumulated, grow) => {
      accumulated.push(`${prefix}-${grow}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateGridSpan(prefix: "col" | "row") {
    const gridSpan: GridSpan[] = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      "auto",
      "full",
    ];

    return gridSpan.reduce((accumulated, currentValue) => {
      accumulated.push(`${prefix}-span-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateGridStart(prefix: "col" | "row") {
    const gridStart: GridStartEnd[] = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      "auto",
    ];

    return gridStart.reduce((accumulated, currentValue) => {
      accumulated.push(`${prefix}-start-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateGridEnd(prefix: "col" | "row") {
    const gridEnd: GridStartEnd[] = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      "auto",
    ];

    return gridEnd.reduce((accumulated, currentValue) => {
      accumulated.push(`${prefix}-end-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateMargins(prefix: string) {
    const spacings: MarginSpacing[] = [
      0,
      "px",
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
      "auto",
    ];
    return spacings.reduce((accumulated, currentValue) => {
      accumulated.push(`${prefix}-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateMaxHeight = () => {
    const flexMaxHeight: FlexMaxHeight[] = [
      0,
      "px",
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
      "none",
      "full",
      "screen",
      "svh",
      "lvh",
      "dvh",
      "min",
      "max",
      "fit",
    ];
    return flexMaxHeight.reduce((accumulated, currentValue) => {
      accumulated.push(`max-h-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  };

  private generateMaxWidth = () => {
    const flexMaxWidth: FlexMaxWidth[] = [
      0,
      "px",
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
      "none",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "full",
      "min",
      "max",
      "fit",
      "prose",
      "screen-xs",
      "screen-sm",
      "screen-md",
      "screen-lg",
      "screen-xl",
      "screen-2xl",
    ];
    return flexMaxWidth.reduce((accumulated, currentValue) => {
      accumulated.push(`max-w-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  };

  private generateMinHeight = () => {
    const flexMinHeight: FlexMinHeight[] = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
      "px",
      0.5,
      1.5,
      2.5,
      3.5,
      "full",
      "screen",
      "svh",
      "lvh",
      "dvh",
      "min",
      "max",
      "fit",
    ];
    return flexMinHeight.reduce((accumulated, currentValue) => {
      accumulated.push(`min-h-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  };

  private generateMinWidth = () => {
    const flexMinWidth: FlexMinWidth[] = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
      "px",
      0.5,
      1.5,
      2.5,
      3.5,
      "full",
      "min",
      "max",
      "fit",
    ];
    return flexMinWidth.reduce((accumulated, currentValue) => {
      accumulated.push(`min-w-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  };

  private generateOpacities(prefix: string) {
    const opacities: FlexOpacity[] = [
      0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
      95, 100,
    ];
    return opacities.reduce((accumulated, opacity) => {
      accumulated.push(`${prefix}-${opacity}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateOverflow(prefix: string) {
    const overflows: FlexOverflow[] = [
      "auto",
      "clip",
      "hidden",
      "scroll",
      "visible",
    ];
    return overflows.reduce((accumulated, overflow) => {
      accumulated.push(`${prefix}-${overflow}`);
      return accumulated;
    }, [] as string[]);
  }

  private generatePaddings(prefix: string) {
    const spacings: FlexSpacing[] = [
      0,
      "px",
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
    ];
    return spacings.reduce((accumulated, currentValue) => {
      accumulated.push(`${prefix}-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateScales(prefix: string) {
    const spacings: FlexScale[] = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150];
    return spacings.reduce((accumulated, currentValue) => {
      accumulated.push(`${prefix}-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  }

  private generateSizes = () => {
    const spacings: FlexSize[] = [
      0,
      "px",
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
      "auto",
      "1/2",
      "1/3",
      "2/3",
      "1/4",
      "2/4",
      "3/4",
      "1/5",
      "2/5",
      "3/5",
      "4/5",
      "1/6",
      "2/6",
      "3/6",
      "4/6",
      "5/6",
      "1/12",
      "2/12",
      "3/12",
      "4/12",
      "5/12",
      "6/12",
      "7/12",
      "8/12",
      "9/12",
      "10/12",
      "11/12",
      "full",
      "min",
      "max",
      "fit",
    ];
    return spacings.reduce((accumulated, currentValue) => {
      accumulated.push(`size-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  };

  private generateSpacings = (prefix: string) => {
    const spacings: FlexSpacing[] = [
      0,
      "px",
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
    ];
    return spacings.reduce((accumulated, currentValue) => {
      accumulated.push(`${prefix}-${currentValue}`);
      return accumulated;
    }, [] as string[]);
  };

  private generateTimings(prefix: string) {
    const timings: TransitionTiming[] = [
      0, 75, 100, 150, 200, 300, 500, 700, 1000,
    ];
    return timings.reduce((accumulated, delay) => {
      accumulated.push(`${prefix}-${delay}`);
      return accumulated;
    }, [] as string[]);
  }
}
