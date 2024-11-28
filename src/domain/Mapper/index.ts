import {
  AlignMapping,
  Breakpoints,
  ColorsMapping,
  DirectionsMapping,
  FlexAlign,
  FlexSpacing,
  FlexFontWeight,
  FlexOpacity,
  DisplayMapping,
  CursorMapping,
  BorderStyleMapping,
  TransitionTiming,
  MarginMapping,
  MarginSpacing,
  AxisMapping,
  SideMapping,
  SizeMapping,
  KeyValuePair,
  BorderMapping,
  CSSSelector,
  FlexSize,
  HeightMapping,
  WidthMapping,
  CSSValue,
  MaxWidthMapping,
  FlexScale,
  FlexOverflow,
  FlexHeight,
  MinHeightMapping,
  MaxHeightMapping,
  MinWidthMapping,
  AnimateMapping,
  BasisMapping,
  FlexBorder,
  FontsizeMapping,
  FlexFontSize,
  GapMapping,
  GridTemplateColumns,
  GridTemplate,
  GridTemplateRows,
  GridTemplateSpan,
  GridSpan,
  GridTemplateStartEnd,
  GridStartEnd,
  JustifyContentMapping,
  FlexJustifyContent,
  OverflowMapping,
  PaddingMapping,
  PositionMapping,
  FlexPosition,
  CornerRadius,
  ScaleMapping,
  FlexBoxShadow,
  TextAlignMapping,
  FlexTextAlign,
  FlexTextCase,
  TransitionProperty,
  TransitionFunction,
  VisibilityMapping,
  FlexVisibility,
} from "../types";
import {
  AlignItems,
  Animate,
  BackgroundColor,
  BackgroundOpacity,
  Basis,
  Border,
  BorderColor,
  BorderOpacity,
  BorderStyle,
  Cursor,
  Direction,
  Display,
  FontSize,
  FontWeight,
  Gap,
  GridColumnEnd,
  GridColumns,
  GridColumnSpan,
  GridColumnStart,
  GridRowEnd,
  GridRows,
  GridRowSpan,
  GridRowStart,
  Height,
  JustifyContent,
  Margin,
  MaxHeight,
  MaxWidth,
  MinHeight,
  MinWidth,
  Overflow,
  Padding,
  Position,
  Rounded,
  Scale,
  Shadow,
  ShadowColor,
  Size,
  TextAlign,
  TextCase,
  TextColor,
  Transition,
  TransitionDelay,
  TransitionDuration,
  TransitionEase,
  Visibility,
  Width,
} from "../CSSProperty";
import { Axleable } from "../Entities/Axleable";
import { Breakable } from "../Entities/Brekable";
import { Stringable } from "../Entities/Stringable";
import { Sideable } from "../Entities/Sideable";
import { ContainsMatch } from "../Entities/ContainsMatch";
import { ClassNameOrder } from "../ClassNameOrder";

export class Mapper {
  private readonly contains: ContainsMatch;
  private readonly classNameOrder: ClassNameOrder;
  private styles: Set<string>;

  constructor(...styles: string[]) {
    this.styles = new Set<string>(styles);
    this.contains = new ContainsMatch();
    this.classNameOrder = ClassNameOrder.create();
  }

  static create(...styles: string[]) {
    return new Mapper(...styles);
  }

  private execute(params: DynamicExecution, selector: CSSSelector) {
    if ("alignItems" in params) {
      this.alignItems(params.alignItems, selector);
    }
    if ("backgroundColor" in params) {
      this.backgroundColor(params.backgroundColor, selector);
    }
    if ("backgroundOpacity" in params) {
      this.backgroundOpacity(params.backgroundOpacity, selector);
    }
    if ("basis" in params) {
      this.basis(params.basis, selector);
    }
    if ("border" in params) {
      this.border(params.border, selector);
    }
    if ("borderColor" in params) {
      this.borderColor(params.borderColor, selector);
    }
    if ("borderOpacity" in params) {
      this.borderOpacity(params.borderOpacity, selector);
    }
    if ("borderStyle" in params) {
      this.borderStyle(params.borderStyle, selector);
    }
    if ("cursor" in params) {
      this.cursor(params.cursor, selector);
    }
    if ("direction" in params) {
      this.direction(params.direction, selector);
    }
    if ("display" in params) {
      this.display(params.display, selector);
    }
    if ("fontSize" in params) {
      this.fontSize(params.fontSize, selector);
    }
    if ("fontWeight" in params) {
      this.fontWeight(params.fontWeight, selector);
    }
    if ("gap" in params) {
      this.gap(params.gap, selector);
    }
    if ("gridColumns" in params) {
      this.gridColumns(params.gridColumns, selector);
    }
    if ("gridColumnEnd" in params) {
      this.gridColumnEnd(params.gridColumnEnd, selector);
    }
    if ("gridColumnSpan" in params) {
      this.gridColumnSpan(params.gridColumnSpan, selector);
    }
    if ("gridColumnStart" in params) {
      this.gridColumnStart(params.gridColumnStart, selector);
    }
    if ("gridRows" in params) {
      this.gridRows(params.gridRows, selector);
    }
    if ("gridRowEnd" in params) {
      this.gridRowEnd(params.gridRowEnd, selector);
    }
    if ("gridRowSpan" in params) {
      this.gridRowSpan(params.gridRowSpan, selector);
    }
    if ("gridRowStart" in params) {
      this.gridRowStart(params.gridRowStart, selector);
    }
    if ("height" in params) {
      this.height(params.height, selector);
    }
    if ("justifyContent" in params) {
      this.justifyContent(params.justifyContent, selector);
    }
    if ("margin" in params) {
      this.margin(params.margin, selector);
    }
    if ("maxHeight" in params) {
      this.maxHeight(params.maxHeight, selector);
    }
    if ("maxWidth" in params) {
      this.maxWidth(params.maxWidth, selector);
    }
    if ("minHeight" in params) {
      this.minHeight(params.minHeight, selector);
    }
    if ("minWidth" in params) {
      this.minWidth(params.minWidth, selector);
    }
    if ("overflow" in params) {
      this.overflow(params.overflow, selector);
    }
    if ("padding" in params) {
      this.padding(params.padding, selector);
    }
    if ("position" in params) {
      this.position(params.position, selector);
    }
    if ("rounded" in params) {
      this.rounded(params.rounded, selector);
    }
    if ("scale" in params) {
      this.scale(params.scale, selector);
    }
    if ("shadow" in params) {
      this.shadow(params.shadow, selector);
    }
    if ("shadowColor" in params) {
      this.shadowColor(params.shadowColor, selector);
    }
    if ("size" in params) {
      this.size(params.size, selector);
    }
    if ("textAlign" in params) {
      this.textAlign(params.textAlign, selector);
    }
    if ("textColor" in params) {
      this.textColor(params.textColor, selector);
    }
    if ("textCase" in params) {
      this.textCase(params.textCase, selector);
    }
    if ("transition" in params) {
      this.transition(params.transition, selector);
    }
    if ("transitionDelay" in params) {
      this.transitionDelay(params.transitionDelay, selector);
    }
    if ("transitionDuration" in params) {
      this.transitionDuration(params.transitionDuration, selector);
    }
    if ("transitionEase" in params) {
      this.transitionEase(params.transitionEase, selector);
    }
    if ("visibility" in params) {
      this.visibility(params.visibility, selector);
    }
    if ("width" in params) {
      this.width(params.width, selector);
    }
  }

  private getClasseIndex(className: string) {
    return this.classNameOrder.get(className);
  }

  private hasAxisInsideBreakpoints(modifier: object) {
    if (typeof modifier !== "object") {
      return false;
    }

    return (
      ("xs" in modifier && this.hasAxisOnly(modifier.xs as object)) ||
      ("sm" in modifier && this.hasAxisOnly(modifier.sm as object)) ||
      ("md" in modifier && this.hasAxisOnly(modifier.md as object)) ||
      ("lg" in modifier && this.hasAxisOnly(modifier.lg as object)) ||
      ("xl" in modifier && this.hasAxisOnly(modifier.xl as object))
    );
  }

  private hasAxisOnly(modifier: object): boolean {
    if (typeof modifier !== "object") {
      return false;
    }

    return (
      ("x" in modifier &&
        this.isDefined(modifier?.x) &&
        (typeof modifier.x === "number" || typeof modifier.x === "string")) ||
      ("y" in modifier &&
        this.isDefined(modifier?.y) &&
        (typeof modifier.y === "number" || typeof modifier.y === "string"))
    );
  }

  private hasBreakpointsOnly(modifier: object): boolean {
    if (typeof modifier !== "object") {
      return false;
    }

    return (
      ("xs" in modifier &&
        this.isDefined(modifier?.xs) &&
        (typeof modifier.xs === "number" || typeof modifier.xs === "string")) ||
      ("sm" in modifier &&
        this.isDefined(modifier?.sm) &&
        (typeof modifier.sm === "number" || typeof modifier.sm === "string")) ||
      ("md" in modifier &&
        this.isDefined(modifier?.md) &&
        (typeof modifier.md === "number" || typeof modifier.md === "string")) ||
      ("lg" in modifier &&
        this.isDefined(modifier?.lg) &&
        (typeof modifier.lg === "number" || typeof modifier.lg === "string")) ||
      ("xl" in modifier &&
        this.isDefined(modifier?.xl) &&
        (typeof modifier.xl === "number" || typeof modifier.xl === "string"))
    );
  }

  private hasSideInsideBreakpoints(modifier: object): boolean {
    if (typeof modifier !== "object") {
      return false;
    }

    return (
      ("xs" in modifier &&
        this.isDefined(modifier?.xs) &&
        this.hasSideOnly(modifier.xs as object)) ||
      ("sm" in modifier &&
        this.isDefined(modifier?.sm) &&
        this.hasSideOnly(modifier.sm as object)) ||
      ("md" in modifier &&
        this.isDefined(modifier?.md) &&
        this.hasSideOnly(modifier.md as object)) ||
      ("lg" in modifier &&
        this.isDefined(modifier?.lg) &&
        this.hasSideOnly(modifier.lg as object)) ||
      ("xl" in modifier &&
        this.isDefined(modifier?.xl) &&
        this.hasSideOnly(modifier.xl as object))
    );
  }

  private hasSideOnly(modifier: object): boolean {
    if (typeof modifier !== "object") {
      return false;
    }

    return (
      ("bottom" in modifier &&
        this.isDefined(modifier?.bottom) &&
        (typeof modifier.bottom === "number" ||
          typeof modifier.bottom === "string")) ||
      ("left" in modifier &&
        this.isDefined(modifier?.left) &&
        (typeof modifier.left === "number" ||
          typeof modifier.left === "string")) ||
      ("right" in modifier &&
        this.isDefined(modifier?.right) &&
        (typeof modifier.right === "number" ||
          typeof modifier.right === "string")) ||
      ("top" in modifier &&
        this.isDefined(modifier?.top) &&
        (typeof modifier.top === "number" || typeof modifier.top === "string"))
    );
  }

  private isAxleable(
    className: string | null = null,
    separator: string | RegExp = "(?<=-)(?=[^-]+$)"
  ) {
    if (!className) {
      return false;
    }

    const axle = className.split(separator).shift();

    if (!axle) return false;

    return axle.endsWith("x-") || axle.endsWith("y-");
  }

  private isColoredeable(
    className: string | null = null,
    separator: string | RegExp = "-"
  ) {
    if (!className) {
      return false;
    }
    const colors = new Set<string>([
      "error",
      "inherit",
      "info",
      "primary",
      "secondary",
      "success",
      "transparent",
      "warning",
      "white",
    ]);
    const color = className.split(separator).pop();
    if (!color) return false;

    return colors.has(color);
  }

  private isDefined(value: unknown): boolean {
    if (value === null || value === undefined) {
      return false;
    }

    if (typeof value !== "object") {
      return true;
    }

    if (typeof value === "object" && value !== null) {
      return Object.values(value).some(
        (val) => val !== null && val !== undefined
      );
    }

    return false;
  }

  private isEmphaseable(
    className: string | null = null,
    separator: string | RegExp = "-"
  ) {
    if (!className) {
      return false;
    }
    const emphasisGrades = new Set<string>([
      "base",
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
      "8xl",
      "9xl",
    ]);

    const emphasis = className.split(separator).pop();

    if (!emphasis) return false;

    return emphasisGrades.has(emphasis);
  }

  private isSideable(
    className: string | null = null,
    separator: string | RegExp = /(?<=-)(?=[^-]+$)/
  ) {
    if (!className) {
      return false;
    }

    const side = className.split(separator).shift();

    if (!side) return false;

    return (
      side.endsWith("l-") ||
      side.endsWith("b-") ||
      side.endsWith("r-") ||
      side.endsWith("t-")
    );
  }

  private makeRegExpSeparator(
    term: string,
    selector: CSSSelector,
    breakpoint?: Breakpoints
  ): RegExp {
    const breakpointPrefix = breakpoint ? `${breakpoint}:` : "";

    if (selector === "none") {
      const pattern = String(`${breakpointPrefix}${term}`).trim();
      return new RegExp(`\\b${pattern}\\b`);
    }

    const pattern = String(`${breakpointPrefix}${selector}:${term}`).trim();
    return new RegExp(`\\b${pattern}\\b`);
  }

  private processAxis<
    ResourceType extends KeyValuePair<AxisMapping, CSSValue>,
    MapperType extends Map<unknown, unknown>
  >(
    resource: ResourceType,
    cssProperty: Axleable<MapperType>,
    callbackChecker: CallableFunction,
    callbackSeparator: string | RegExp = "-"
  ) {
    const remove = (value: string) => {
      return callbackChecker(value) && this.isAxleable(value);
    };
    Object.entries(resource).forEach(([key, value]) => {
      if (value || value === 0) {
        const axis = key as AxisMapping;
        const className = cssProperty.axis().write(axis, value);
        this.removeIfContains(className, remove, callbackSeparator);
        this.styles.add(className);
      }
    });
  }

  private processAxisBreakpoints<
    ResourceType extends KeyValuePair<
      Breakpoints,
      KeyValuePair<AxisMapping, CSSValue>
    >,
    MapperType extends Map<unknown, unknown>
  >(
    resource: ResourceType,
    cssProperty: Breakable<MapperType>,
    callbackChecker: CallableFunction,
    callbackSeparator: string | RegExp = "-"
  ) {
    const mapper = cssProperty.breakpoints();
    const remove = (value: string) => {
      return callbackChecker(value) && this.isAxleable(value);
    };
    if (mapper instanceof Axleable) {
      Object.entries(resource).forEach(([key, axisMapping]) => {
        Object.entries(axisMapping).forEach(([subKey, value]) => {
          if (value || value === 0) {
            const breakpoint = key as Breakpoints;
            const axis = subKey as AxisMapping;
            const className = mapper.axis().write(breakpoint, axis, value);
            this.removeIfContains(className, remove, callbackSeparator);
            this.styles.add(className);
          }
        });
      });
    }
  }

  private processBreakpoints<
    ResourceType extends KeyValuePair<Breakpoints, CSSValue>,
    MapperType extends Map<unknown, unknown>
  >(
    resource: ResourceType,
    cssProperty: Breakable<MapperType>,
    callbackChecker: CallableFunction,
    callbackSeparator: string | RegExp = "-"
  ) {
    Object.entries(resource).forEach(([key, value]) => {
      if (value || value === 0) {
        const breakpoint = key as Breakpoints;
        const className = cssProperty.breakpoints().write(breakpoint, value);
        this.removeIfContains(className, callbackChecker, callbackSeparator);
        this.styles.add(className);
      }
    });
  }

  private processFlatProperty<ResourceType extends CSSValue>(
    resource: ResourceType,
    cssProperty: Stringable,
    callbackChecker: CallableFunction,
    callbackSeparator: string | RegExp = "-"
  ) {
    if (resource || resource === 0) {
      const className = cssProperty.write(resource);
      this.removeIfContains(className, callbackChecker, callbackSeparator);
      this.styles.add(className);
    }
  }

  private processSides<
    ResourceType extends KeyValuePair<SideMapping, CSSValue>,
    MapperType extends Map<unknown, unknown>
  >(
    resource: ResourceType,
    cssProperty: Sideable<MapperType>,
    callbackChecker: CallableFunction,
    callbackSeparator: string | RegExp = "-"
  ) {
    Object.entries(resource).forEach(([key, value]) => {
      const side = key as SideMapping;
      const className = cssProperty.sides().write(side, value);
      this.removeIfContains(className, callbackChecker, callbackSeparator);
      this.styles.add(className);
    });
  }

  private processSidesBreakpoints<
    ResourceType extends KeyValuePair<
      Breakpoints,
      KeyValuePair<SideMapping, CSSValue>
    >,
    MapperType extends Map<unknown, unknown>
  >(
    resource: ResourceType,
    cssProperty: {
      breakpoints: () => Sideable<MapperType>;
    },
    callbackChecker: CallableFunction,
    callbackSeparator: string | RegExp = "-"
  ) {
    const mapper = cssProperty.breakpoints();

    Object.entries(resource).forEach(([key, sideMapping]) => {
      Object.entries(sideMapping).forEach(([subKey, value]) => {
        if (value || value === 0) {
          const breakpoint = key as Breakpoints;
          const side = subKey as SideMapping;
          const className = mapper.sides().write(breakpoint, side, value);
          this.removeIfContains(className, callbackChecker, callbackSeparator);
          this.styles.add(className);
        }
      });
    });
  }

  private removeIfContains(
    className: string,
    callback: CallableFunction,
    separator: string | RegExp = "-"
  ) {
    const [classNamePrefix] = className.split(separator);
    const regex = new RegExp(`\\b${classNamePrefix}\\b`);
    const contains = this.contains.inSet(regex, this.styles);
    if (contains.has) {
      contains.items.forEach((item) => {
        if (callback(item)) {
          this.styles.delete(item);
        }
      });
    }
  }

  active(params: DynamicExecution) {
    this.execute(params, "active");

    return this;
  }

  /**
   * @default
   * selector = 'none'
   */
  alignItems(
    align: AlignMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(align) || align === null) {
      return this;
    }

    const cssAlignItems = AlignItems.create(selector);

    const isAlignItems = (value: string) => {
      const alignTokens = new Set<string>([
        "center",
        "start",
        "end",
        "stretch",
        "baseline",
      ]);
      const [prefix, suffix] = value.split("-");

      return String(prefix).includes("items") && alignTokens.has(suffix);
    };

    if (typeof align !== "object") {
      this.processFlatProperty(align, cssAlignItems, isAlignItems);
      return this;
    }

    if (this.hasBreakpointsOnly(align)) {
      align = align as KeyValuePair<Breakpoints, FlexAlign>;
      this.processBreakpoints(align, cssAlignItems, isAlignItems);
    }

    return this;
  }

  animate(animate: AnimateMapping | null = null) {
    if (!this.isDefined(animate) || animate === null) {
      return this;
    }

    const cssAnimate = Animate.create();
    const regex = new RegExp("\\banimate\\b");
    const isAnimate = (value: string) => {
      return regex.test(value);
    };
    this.processFlatProperty(animate, cssAnimate, isAnimate, regex);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  backgroundColor(
    color: ColorsMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(color) || color === null) {
      return this;
    }

    const cssBgColor = BackgroundColor.create(selector);
    this.processFlatProperty(color, cssBgColor, this.isColoredeable);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  backgroundOpacity(
    opacity: FlexOpacity | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(opacity) || opacity === null) {
      return this;
    }

    const cssBgOpacity = BackgroundOpacity.create(selector);
    const regexSeparator = /([-]\d*)(?<!\D)$/;
    const isBgOpacity = (value: string) => {
      const regex = this.makeRegExpSeparator("bg-opacity", selector);
      return regex.test(value);
    };
    this.processFlatProperty(
      opacity,
      cssBgOpacity,
      isBgOpacity,
      regexSeparator
    );

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  basis(flexBasis: BasisMapping | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(flexBasis) || flexBasis === null) {
      return this;
    }

    const cssBasis = Basis.create(selector);
    const isBasis = (value: string) => {
      return String(value).includes("basis");
    };

    if (typeof flexBasis !== "object") {
      this.processFlatProperty(flexBasis, cssBasis, isBasis);
      return this;
    }

    if (this.hasBreakpointsOnly(flexBasis)) {
      this.processBreakpoints(flexBasis, cssBasis, isBasis);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  border(
    emphasis: BorderMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(emphasis) || emphasis === null) {
      return this;
    }

    const cssBorder = Border.create(selector);
    const axisSeparatorRegex = new RegExp("[-][x|y]");
    const sideSeparatorRegex = /([-]\d*)(?<!\D)$/;

    const isBorder = (className: string) => {
      const borderTokens = new Set<string>([
        "0",
        "2",
        "4",
        "8",
        "x",
        "y",
        "b",
        "l",
        "r",
        "t",
      ]);
      const classNameSplited = className.split("-");

      if (classNameSplited.length === 1) {
        return String(classNameSplited[0]).includes("border");
      }

      if (classNameSplited.length === 2) {
        return (
          String(classNameSplited[0]).includes("border") &&
          borderTokens.has(classNameSplited[1])
        );
      }

      if (classNameSplited.length === 3) {
        return (
          String(classNameSplited[0]).includes("border") &&
          borderTokens.has(classNameSplited[1]) &&
          borderTokens.has(classNameSplited[2])
        );
      }

      return false;
    };

    if (typeof emphasis !== "object") {
      this.processFlatProperty(emphasis, cssBorder, isBorder);
      return this;
    }

    if (this.hasBreakpointsOnly(emphasis)) {
      emphasis = emphasis as KeyValuePair<Breakpoints, FlexBorder>;
      this.processBreakpoints(emphasis, cssBorder, isBorder);
      return this;
    }

    if (this.hasAxisInsideBreakpoints(emphasis)) {
      emphasis = emphasis as KeyValuePair<
        Breakpoints,
        KeyValuePair<AxisMapping, FlexBorder>
      >;

      this.processAxisBreakpoints(
        emphasis,
        cssBorder,
        isBorder,
        axisSeparatorRegex
      );
      return this;
    }

    if (this.hasAxisOnly(emphasis)) {
      emphasis = emphasis as KeyValuePair<AxisMapping, FlexBorder>;

      this.processAxis(emphasis, cssBorder, isBorder, axisSeparatorRegex);
      return this;
    }

    if (this.hasSideInsideBreakpoints(emphasis)) {
      emphasis = emphasis as KeyValuePair<
        Breakpoints,
        KeyValuePair<SideMapping, FlexBorder>
      >;

      this.processSidesBreakpoints(
        emphasis,
        cssBorder,
        isBorder,
        sideSeparatorRegex
      );
      return this;
    }

    if (this.hasSideOnly(emphasis)) {
      emphasis = emphasis as KeyValuePair<SideMapping, FlexBorder>;

      this.processSides(emphasis, cssBorder, isBorder, sideSeparatorRegex);
    }

    return this;
  }

  /**
   * @default
   * selector = 'none'
   */
  borderColor(
    color: ColorsMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(color) || color === null) {
      return this;
    }

    const cssBorderColor = BorderColor.create(selector);
    this.processFlatProperty(color, cssBorderColor, this.isColoredeable);
    return this;
  }

  /**
   * @default
   * selector = 'none'
   */
  borderOpacity(
    opacity: FlexOpacity | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(opacity) || opacity === null) {
      return this;
    }

    const cssBorderOpacity = BorderOpacity.create(selector);
    const separatorRegex = new RegExp("[-]\\w{1,}$");
    const isBorderOpacity = (value: string) => {
      const [prefix] = value.split(separatorRegex);
      return prefix.endsWith("border-opacity");
    };
    this.processFlatProperty(
      opacity,
      cssBorderOpacity,
      isBorderOpacity,
      separatorRegex
    );
    return this;
  }

  /**
   * @default
   * selector = 'none'
   */
  borderStyle(
    style: BorderStyleMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(style) || style === null) {
      return this;
    }

    const cssBorderStyle = BorderStyle.create(selector);
    const isBorderStyle = (value: string) => {
      const stylesTokens = new Set<string>([
        "dashed",
        "dotted",
        "double",
        "hidden",
        "none",
        "solid",
      ]);
      const [prefix, suffix] = value.split("-");

      if (!suffix) return false;

      return String(prefix).includes("border") && stylesTokens.has(suffix);
    };

    this.processFlatProperty(style, cssBorderStyle, isBorderStyle);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  cursor(cursor: CursorMapping | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(cursor) || cursor === null) {
      return this;
    }

    const cssCursor = Cursor.create(selector);
    const isCursor = (value: string) => {
      return String(value).includes("cursor");
    };

    this.processFlatProperty(cursor, cssCursor, isCursor);
    return this;
  }

  /**
   *  Flex direction
   *
   * @default
   *  selector = 'none'
   */
  direction(
    direction: DirectionsMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(direction) || direction === null) {
      return this;
    }

    const cssDirection = Direction.create(selector);
    const isDirection = (value: string) => {
      const regex = /^([^-]+)-/;
      const directionsTokens = new Set<string>([
        "col",
        "col-reverse",
        "row",
        "row-reverse",
      ]);
      const token = value.split(regex).pop();

      if (!token) return false;

      return String(value).includes("flex") && directionsTokens.has(token);
    };

    if (typeof direction !== "object") {
      this.processFlatProperty(direction, cssDirection, isDirection);
      return this;
    }

    if (this.hasBreakpointsOnly(direction)) {
      this.processBreakpoints(direction, cssDirection, isDirection);
    }

    return this;
  }

  disabled(params: DynamicExecution) {
    this.execute(params, "disabled");

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  display(
    display: DisplayMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(display) || display === null) {
      return this;
    }

    const cssDisplay = Display.create(selector);
    const displayTokens = new Set<string>([
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
    ]);

    const isDisplay = (value: string) => {
      const regex = /[:]/;
      const items = value.split(regex);
      const token = items[items.length - 1];
      return displayTokens.has(token);
    };

    const hasTokens = (prefix: string, resources: Set<string>) => {
      let has = false;
      const items: string[] = [];

      displayTokens.forEach((value) => {
        if (resources.has(`${prefix}${value}`)) {
          has = true;
          items.push(`${prefix}${value}`);
        }
      });

      return {
        has,
        items,
      };
    };

    if (typeof display !== "object") {
      const prefix = selector === "none" ? "" : `${selector}:`;
      const containsDisplay = hasTokens(prefix, this.styles);
      if (containsDisplay.has) {
        containsDisplay.items.forEach((item) => this.styles.delete(item));
      }

      this.processFlatProperty(display, cssDisplay, isDisplay);
      return this;
    }

    if (this.hasBreakpointsOnly(display)) {
      Object.entries(display).forEach(([breakpoint]) => {
        const prefix =
          selector === "none" ? `${breakpoint}:` : `${breakpoint}:${selector}:`;
        const containsDisplay = hasTokens(prefix, this.styles);

        if (containsDisplay.has) {
          containsDisplay.items.forEach((item) => this.styles.delete(item));
        }
      });

      this.processBreakpoints(display, cssDisplay, isDisplay);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  fontSize(
    size: FontsizeMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(size) || size === null) {
      return this;
    }

    const cssFontSize = FontSize.create(selector);
    if (typeof size !== "object") {
      this.processFlatProperty(size, cssFontSize, this.isEmphaseable);
      return this;
    }

    if (this.hasBreakpointsOnly(size)) {
      size = size as KeyValuePair<Breakpoints, FlexFontSize>;
      this.processBreakpoints(size, cssFontSize, this.isEmphaseable);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  fontWeight(
    weight: FlexFontWeight | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(weight) || weight === null) {
      return this;
    }

    const cssFontWeight = FontWeight.create(selector);
    const isFontWeight = (name: string) => {
      const weightTokens = new Set<string>([
        "thin",
        "extralight",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
        "black",
      ]);
      const token = name.split("-").pop();

      if (!token) return false;

      return String(name).includes("font") && weightTokens.has(token);
    };
    this.processFlatProperty(weight, cssFontWeight, isFontWeight);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gap(spacing: GapMapping | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(spacing) || spacing === null) {
      return this;
    }

    const cssGap = Gap.create(selector);
    const axisSeparatorRegex = new RegExp("[-][x|y]");
    const isGap = (name: string) => {
      if (axisSeparatorRegex.test(name)) {
        return String(name).includes("gap");
      }

      return String(name).includes("gap");
    };

    if (typeof spacing !== "object") {
      this.processFlatProperty(spacing, cssGap, isGap);
      return this;
    }

    if (this.hasBreakpointsOnly(spacing)) {
      spacing = spacing as KeyValuePair<Breakpoints, FlexSpacing>;
      this.processBreakpoints(spacing, cssGap, isGap);
      return this;
    }

    if (this.hasAxisInsideBreakpoints(spacing)) {
      spacing = spacing as KeyValuePair<
        Breakpoints,
        KeyValuePair<AxisMapping, FlexSpacing>
      >;

      this.processAxisBreakpoints(spacing, cssGap, isGap, axisSeparatorRegex);
      return this;
    }

    if (this.hasAxisOnly(spacing)) {
      spacing = spacing as KeyValuePair<AxisMapping, FlexSpacing>;

      this.processAxis(spacing, cssGap, isGap, axisSeparatorRegex);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gridColumns(
    template: GridTemplateColumns | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(template) || template === null) {
      return this;
    }

    const cssGridColumns = GridColumns.create(selector);
    const isTemplateColumns = (name: string) => {
      const gridTokens = new Set<string>([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "none",
        "subgrid",
      ]);
      const token = name.split("-").pop();
      if (!token) return false;

      return String(name).includes("grid-cols") && gridTokens.has(token);
    };

    if (typeof template !== "object") {
      this.processFlatProperty(template, cssGridColumns, isTemplateColumns);
      return this;
    }

    if (this.hasBreakpointsOnly(template)) {
      template = template as KeyValuePair<Breakpoints, GridTemplate>;
      this.processBreakpoints(template, cssGridColumns, isTemplateColumns);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gridColumnEnd(
    template: GridTemplateStartEnd | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(template) || template === null) {
      return this;
    }

    const cssColumnEnd = GridColumnEnd.create(selector);
    const isColumnEnd = (className: string) => {
      const templateTokens = new Set<string>([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "auto",
      ]);
      const token = className.split("-").pop();

      if (!token) return false;

      return String(className).includes("col-end") && templateTokens.has(token);
    };

    if (typeof template !== "object") {
      this.processFlatProperty(template, cssColumnEnd, isColumnEnd);
      return this;
    }

    if (this.hasBreakpointsOnly(template)) {
      template = template as KeyValuePair<Breakpoints, GridStartEnd>;
      this.processBreakpoints(template, cssColumnEnd, isColumnEnd);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gridColumnSpan(
    template: GridTemplateSpan | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(template) || template === null) {
      return this;
    }

    const cssColumnSpan = GridColumnSpan.create(selector);
    const isColumnSpan = (className: string) => {
      const templateTokens = new Set<string>([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "auto",
        "full",
      ]);
      const token = className.split("-").pop();

      if (!token) return false;

      return (
        String(className).includes("col-span") && templateTokens.has(token)
      );
    };

    if (typeof template !== "object") {
      this.processFlatProperty(template, cssColumnSpan, isColumnSpan);
      return this;
    }

    if (this.hasBreakpointsOnly(template)) {
      template = template as KeyValuePair<Breakpoints, GridSpan>;
      this.processBreakpoints(template, cssColumnSpan, isColumnSpan);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gridColumnStart(
    template: GridTemplateStartEnd | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(template) || template === null) {
      return this;
    }

    const cssColumnStart = GridColumnStart.create(selector);
    const isColumnStart = (className: string) => {
      const templateTokens = new Set<string>([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "auto",
      ]);
      const token = className.split("-").pop();

      if (!token) return false;

      return (
        String(className).includes("col-start") && templateTokens.has(token)
      );
    };

    if (typeof template !== "object") {
      this.processFlatProperty(template, cssColumnStart, isColumnStart);
      return this;
    }

    if (this.hasBreakpointsOnly(template)) {
      template = template as KeyValuePair<Breakpoints, GridStartEnd>;
      this.processBreakpoints(template, cssColumnStart, isColumnStart);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gridRows(
    template: GridTemplateRows | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(template) || template === null) {
      return this;
    }

    const cssGridRows = GridRows.create(selector);
    const isGridRows = (name: string) => {
      const gridTokens = new Set<string>([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "none",
        "subgrid",
      ]);
      const token = name.split("-").pop();
      if (!token) return false;

      return String(name).includes("grid-rows") && gridTokens.has(token);
    };

    if (typeof template !== "object") {
      this.processFlatProperty(template, cssGridRows, isGridRows);
      return this;
    }

    if (this.hasBreakpointsOnly(template)) {
      template = template as KeyValuePair<Breakpoints, GridTemplate>;
      this.processBreakpoints(template, cssGridRows, isGridRows);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gridRowEnd(
    template: GridTemplateStartEnd | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(template) || template === null) {
      return this;
    }

    const cssRowEnd = GridRowEnd.create(selector);
    const isRowEnd = (className: string) => {
      const templateTokens = new Set<string>([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "auto",
      ]);
      const token = className.split("-").pop();

      if (!token) return false;

      return String(className).includes("row-end") && templateTokens.has(token);
    };

    if (typeof template !== "object") {
      this.processFlatProperty(template, cssRowEnd, isRowEnd);
      return this;
    }

    if (this.hasBreakpointsOnly(template)) {
      template = template as KeyValuePair<Breakpoints, GridStartEnd>;
      this.processBreakpoints(template, cssRowEnd, isRowEnd);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gridRowSpan(
    template: GridTemplateSpan | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(template) || template === null) {
      return this;
    }

    const cssRowSpan = GridRowSpan.create(selector);
    const isRowSpan = (className: string) => {
      const templateTokens = new Set<string>([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "auto",
        "full",
      ]);
      const token = className.split("-").pop();

      if (!token) return false;

      return (
        String(className).includes("row-span") && templateTokens.has(token)
      );
    };

    if (typeof template !== "object") {
      this.processFlatProperty(template, cssRowSpan, isRowSpan);
      return this;
    }

    if (this.hasBreakpointsOnly(template)) {
      template = template as KeyValuePair<Breakpoints, GridSpan>;
      this.processBreakpoints(template, cssRowSpan, isRowSpan);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  gridRowStart(
    template: GridTemplateStartEnd | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(template) || template === null) {
      return this;
    }

    const cssRowStart = GridRowStart.create(selector);
    const isRowStart = (className: string) => {
      const templateTokens = new Set<string>([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "auto",
      ]);
      const token = className.split("-").pop();

      if (!token) return false;

      return (
        String(className).includes("row-start") && templateTokens.has(token)
      );
    };

    if (typeof template !== "object") {
      this.processFlatProperty(template, cssRowStart, isRowStart);
      return this;
    }

    if (this.hasBreakpointsOnly(template)) {
      template = template as KeyValuePair<Breakpoints, GridStartEnd>;
      this.processBreakpoints(template, cssRowStart, isRowStart);
    }

    return this;
  }

  /**
   * @default
   *  selecto = 'none'
   */
  height(height: HeightMapping | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(height) || height === null) {
      return this;
    }

    const cssHeight = Height.create(selector);
    const isHeight = (value: string) => {
      const [height] = value.split("-");
      return height.endsWith("h");
    };

    if (typeof height !== "object") {
      this.processFlatProperty(height, cssHeight, isHeight);
      return this;
    }

    if (this.hasBreakpointsOnly(height)) {
      height = height as KeyValuePair<Breakpoints, FlexHeight>;
      this.processBreakpoints(height, cssHeight, isHeight);
    }

    return this;
  }

  hover(params: DynamicExecution) {
    this.execute(params, "hover");

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  justifyContent(
    justify: JustifyContentMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(justify) || justify === null) {
      return this;
    }

    const cssJustifyContent = JustifyContent.create(selector);
    const isJustifyContent = (className: string) => {
      const justifyTokens = new Set<string>([
        "normal",
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ]);
      const token = className.split("-").pop();

      if (!token) return false;

      return String(className).includes("justify") && justifyTokens.has(token);
    };

    if (typeof justify !== "object") {
      this.processFlatProperty(justify, cssJustifyContent, isJustifyContent);
      return this;
    }

    if (this.hasBreakpointsOnly(justify)) {
      justify = justify as KeyValuePair<Breakpoints, FlexJustifyContent>;
      this.processBreakpoints(justify, cssJustifyContent, isJustifyContent);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  margin(spacing: MarginMapping | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(spacing) || spacing === null) {
      return this;
    }

    const cssMargin = Margin.create(selector);
    const isPlainMargin = (value: string) => {
      const [margin] = value.split("-");
      return margin.endsWith("m");
    };

    if (typeof spacing !== "object") {
      this.processFlatProperty(spacing, cssMargin, isPlainMargin);
      return this;
    }

    if (this.hasBreakpointsOnly(spacing)) {
      spacing = spacing as KeyValuePair<Breakpoints, MarginSpacing>;
      this.processBreakpoints(spacing, cssMargin, isPlainMargin);
      return this;
    }

    if (this.hasAxisInsideBreakpoints(spacing)) {
      spacing = spacing as KeyValuePair<
        Breakpoints,
        KeyValuePair<AxisMapping, MarginSpacing>
      >;

      this.processAxisBreakpoints(spacing, cssMargin, this.isAxleable);

      return this;
    }

    if (this.hasAxisOnly(spacing)) {
      spacing = spacing as KeyValuePair<AxisMapping, MarginSpacing>;

      this.processAxis(spacing, cssMargin, this.isAxleable);

      return this;
    }

    if (this.hasSideInsideBreakpoints(spacing)) {
      spacing = spacing as KeyValuePair<
        Breakpoints,
        KeyValuePair<SideMapping, MarginSpacing>
      >;

      this.processSidesBreakpoints(spacing, cssMargin, this.isSideable);

      return this;
    }

    if (this.hasSideOnly(spacing)) {
      spacing = spacing as KeyValuePair<SideMapping, MarginSpacing>;

      this.processSides(spacing, cssMargin, this.isSideable);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  maxHeight(
    size: MaxHeightMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(size) || size === null) {
      return this;
    }

    const cssProperty = MaxHeight.create(selector);
    const separatorRegex = new RegExp("(?<=-)(?=[^-]+$)");
    const isMaxHeight = (value: string) => {
      const [token] = value.split(separatorRegex);
      return token.endsWith("max-h-");
    };

    if (typeof size !== "object") {
      this.processFlatProperty(size, cssProperty, isMaxHeight, separatorRegex);
      return this;
    }

    if (this.hasBreakpointsOnly(size)) {
      this.processBreakpoints(size, cssProperty, isMaxHeight, separatorRegex);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  maxWidth(
    size: MaxWidthMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(size) || size === null) {
      return this;
    }

    const cssMaxWidth = MaxWidth.create(selector);
    const separatorRegex = /(?<=-)(?=[^-]+$)/;
    const isMaxWidth = (className: string) => {
      return String(className).includes("max-w");
    };

    if (typeof size !== "object") {
      this.processFlatProperty(size, cssMaxWidth, isMaxWidth, separatorRegex);
      return this;
    }

    if (this.hasBreakpointsOnly(size)) {
      this.processBreakpoints(size, cssMaxWidth, isMaxWidth, separatorRegex);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  minHeight(
    size: MinHeightMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(size) || size === null) {
      return this;
    }

    const cssMinHeight = MinHeight.create(selector);
    const separatorRegex = new RegExp("(?<=-)(?=[^-]+$)");
    const isMinHeight = (value: string) => {
      const [token] = value.split(separatorRegex);
      return token.endsWith("min-h-");
    };

    if (typeof size !== "object") {
      this.processFlatProperty(size, cssMinHeight, isMinHeight, separatorRegex);
      return this;
    }

    if (this.hasBreakpointsOnly(size)) {
      this.processBreakpoints(size, cssMinHeight, isMinHeight, separatorRegex);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  minWidth(
    size: MinWidthMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(size) || size === null) {
      return this;
    }

    const cssMinWidth = MinWidth.create(selector);
    const separatorRegex = new RegExp("(?<=-)(?=[^-]+$)");
    const isMinWidth = (value: string) => {
      const [token] = value.split(separatorRegex);
      return token.endsWith("min-w-");
    };

    if (typeof size !== "object") {
      this.processFlatProperty(size, cssMinWidth, isMinWidth, separatorRegex);
      return this;
    }

    if (this.hasBreakpointsOnly(size)) {
      this.processBreakpoints(size, cssMinWidth, isMinWidth, separatorRegex);
    }

    return this;
  }

  open(params: DynamicExecution) {
    this.execute(params, "open");

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  overflow(
    scroller: OverflowMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(scroller) || scroller === null) {
      return this;
    }

    const cssOverflow = Overflow.create(selector);
    const separatorRegex = new RegExp("(?<=-)(?=[^-]+$)");
    const isOverflow = (value: string) => {
      const overflowTokens = new Set<string>([
        "auto",
        "hidden",
        "clip",
        "visible",
        "scroll",
      ]);
      const [prefix, token] = value.split(separatorRegex);

      return String(prefix).includes("overflow") && overflowTokens.has(token);
    };

    if (typeof scroller !== "object") {
      this.processFlatProperty(
        scroller,
        cssOverflow,
        isOverflow,
        separatorRegex
      );
      return this;
    }

    if (this.hasBreakpointsOnly(scroller)) {
      scroller = scroller as KeyValuePair<Breakpoints, FlexOverflow>;
      this.processBreakpoints(
        scroller,
        cssOverflow,
        isOverflow,
        separatorRegex
      );
      return this;
    }

    if (this.hasAxisInsideBreakpoints(scroller)) {
      scroller = scroller as KeyValuePair<
        Breakpoints,
        KeyValuePair<AxisMapping, FlexOverflow>
      >;
      this.processAxisBreakpoints(
        scroller,
        cssOverflow,
        isOverflow,
        separatorRegex
      );
      return this;
    }

    if (this.hasAxisOnly(scroller)) {
      scroller = scroller as KeyValuePair<AxisMapping, FlexOverflow>;
      this.processAxis(scroller, cssOverflow, isOverflow, separatorRegex);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  padding(
    padding: PaddingMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(padding) || padding === null) {
      return this;
    }
    const cssPadding = Padding.create(selector);
    const isPadding = (className: string) => {
      const paddingTokens = new Set<string>([
        "0",
        "px",
        "0.5",
        "1",
        "1.5",
        "2",
        "2.5",
        "3",
        "3.5",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "14",
        "16",
        "20",
        "24",
        "28",
        "32",
        "36",
        "40",
        "44",
        "48",
        "52",
        "56",
        "60",
        "64",
        "72",
        "80",
        "96",
      ]);
      const [prefix, token] = className.split("-");
      return (
        (String(prefix).endsWith("p") ||
          String(prefix).endsWith("px") ||
          String(prefix).endsWith("py") ||
          String(prefix).endsWith("pt") ||
          String(prefix).endsWith("pr") ||
          String(prefix).endsWith("pb") ||
          String(prefix).endsWith("pl")) &&
        paddingTokens.has(token)
      );
    };

    if (typeof padding !== "object") {
      this.processFlatProperty(padding, cssPadding, isPadding);
      return this;
    }

    if (this.hasBreakpointsOnly(padding)) {
      padding = padding as Partial<Record<Breakpoints, FlexSpacing>>;
      this.processBreakpoints(padding, cssPadding, isPadding);
      return this;
    }

    if (this.hasAxisInsideBreakpoints(padding)) {
      padding = padding as Partial<
        Record<Breakpoints, Record<AxisMapping, FlexSpacing>>
      >;

      this.processAxisBreakpoints(padding, cssPadding, isPadding);
      return this;
    }

    if (this.hasAxisOnly(padding)) {
      padding = padding as Partial<Record<AxisMapping, FlexSpacing>>;
      this.processAxis(padding, cssPadding, isPadding);
      return this;
    }

    if (this.hasSideInsideBreakpoints(padding)) {
      padding = padding as Partial<
        Record<Breakpoints, Record<SideMapping, FlexSpacing>>
      >;

      this.processSidesBreakpoints(padding, cssPadding, isPadding);
      return this;
    }

    if (this.hasSideOnly(padding)) {
      padding = padding as Partial<Record<SideMapping, FlexSpacing>>;
      this.processSides(padding, cssPadding, isPadding);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  position(
    position: PositionMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(position) || position === null) {
      return this;
    }

    const cssPosition = Position.create(selector);
    const separatorRegex = /[:]/;
    const positionTokens = new Set<string>([
      "absolute",
      "fixed",
      "relative",
      "static",
      "sticky",
    ]);

    const isPosition = (value: string) => {
      const token = value.split(separatorRegex).pop();

      if (!token) return false;

      return positionTokens.has(token);
    };

    const hasTokens = (prefix: string, resources: Set<string>) => {
      let has = false;
      let items: string[] = [];

      for (const item of positionTokens) {
        const candidate = `${prefix}${item}`;
        if (resources.has(candidate) && isPosition(candidate)) {
          has = true;
          items.push(candidate);
        }
      }

      return {
        has,
        items,
      };
    };

    if (typeof position !== "object") {
      const prefix = selector === "none" ? "" : `${selector}:`;
      const containsPosition = hasTokens(prefix, this.styles);
      if (containsPosition.has) {
        containsPosition.items.forEach((item) => this.styles.delete(item));
      }

      this.processFlatProperty(
        position,
        cssPosition,
        isPosition,
        separatorRegex
      );
      return this;
    }

    if (this.hasBreakpointsOnly(position)) {
      position = position as KeyValuePair<Breakpoints, FlexPosition>;

      Object.entries(position).forEach(([breakpoint]) => {
        const prefix =
          selector === "none" ? `${breakpoint}:` : `${breakpoint}:${selector}:`;
        const containsPosition = hasTokens(prefix, this.styles);

        if (containsPosition.has) {
          containsPosition.items.forEach((item) => this.styles.delete(item));
        }
      });

      this.processBreakpoints(
        position,
        cssPosition,
        isPosition,
        separatorRegex
      );
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  rounded(corner: CornerRadius | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(corner) || corner === null) {
      return this;
    }

    const cssRounded = Rounded.create(selector);
    const isRounded = (value: string) => {
      const [rounded] = value.split("-");
      return rounded.endsWith("rounded");
    };

    this.processFlatProperty(corner, cssRounded, isRounded);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  scale(scale: ScaleMapping | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(scale) || scale === null) {
      return this;
    }

    const cssScale = Scale.create(selector);
    const isScale = (className: string) => {
      const scalesTokens = new Set<string>([
        "0",
        "50",
        "75",
        "90",
        "95",
        "100",
        "105",
        "110",
        "125",
        "150",
      ]);
      const [prefix, token] = className.split("-");
      return String(prefix).includes("scale") && scalesTokens.has(token);
    };

    if (typeof scale !== "object") {
      this.processFlatProperty(scale, cssScale, isScale);
      return this;
    }

    if (this.hasBreakpointsOnly(scale)) {
      scale = scale as KeyValuePair<Breakpoints, FlexScale>;
      this.processBreakpoints(scale, cssScale, isScale);
      return this;
    }

    if (this.hasAxisInsideBreakpoints(scale)) {
      scale = scale as KeyValuePair<
        Breakpoints,
        KeyValuePair<AxisMapping, FlexScale>
      >;
      this.processAxisBreakpoints(scale, cssScale, isScale);
      return this;
    }

    if (this.hasAxisOnly(scale)) {
      scale = scale as KeyValuePair<AxisMapping, FlexScale>;
      this.processAxis(scale, cssScale, isScale);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  shadow(
    emphasis: FlexBoxShadow | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(emphasis) || emphasis === null) {
      return this;
    }

    const cssShadow = Shadow.create(selector);
    const isShadow = (className: string) => {
      const shadowTokens = new Set<string>([
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "none",
        "2xl",
        "inner",
      ]);
      const [prefix, token] = className.split("-");
      return String(prefix).includes("shadow") && shadowTokens.has(token);
    };

    this.processFlatProperty(emphasis, cssShadow, isShadow);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  shadowColor(
    color: ColorsMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(color) || color === null) {
      return this;
    }

    const cssShadow = ShadowColor.create(selector);
    const isShadow = (className: string) => {
      return (
        String(className).includes("shadow") && this.isColoredeable(className)
      );
    };

    this.processFlatProperty(color, cssShadow, isShadow);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  size(spacing: SizeMapping | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(spacing) || spacing === null) {
      return this;
    }

    const cssSize = Size.create(selector);

    const isSize = (value: string) => {
      return String(value).includes("size");
    };

    if (typeof spacing !== "object") {
      this.processFlatProperty(spacing, cssSize, isSize);
      return this;
    }

    if (this.hasBreakpointsOnly(spacing)) {
      spacing = spacing as KeyValuePair<Breakpoints, FlexSize>;
      this.processBreakpoints(spacing, cssSize, isSize);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  textAlign(
    align: TextAlignMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(align) || align === null) {
      return this;
    }

    const cssTextAlign = TextAlign.create(selector);
    const isTextAlign = (value: string) => {
      const alignTokens = new Set<string>([
        "center",
        "end",
        "justify",
        "left",
        "right",
        "start",
      ]);
      const [prefix, token] = value.split("-");
      return prefix.endsWith("text") && alignTokens.has(token);
    };

    if (typeof align !== "object") {
      this.processFlatProperty(align, cssTextAlign, isTextAlign);
      return this;
    }

    if (this.hasBreakpointsOnly(align)) {
      align = align as KeyValuePair<Breakpoints, FlexTextAlign>;
      this.processBreakpoints(align, cssTextAlign, isTextAlign);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  textColor(
    color: ColorsMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(color) || color === null) {
      return this;
    }

    const cssTextColor = TextColor.create(selector);
    const isTextColor = (className: string) => {
      return (
        String(className).includes("text") && this.isColoredeable(className)
      );
    };

    this.processFlatProperty(color, cssTextColor, isTextColor);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  textCase(
    textCase: FlexTextCase | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(textCase) || textCase === null) {
      return this;
    }

    const cssTextCase = TextCase.create(selector);
    const isTextCase = (value: string) => {
      return (
        value.endsWith("capitalize") ||
        value.endsWith("lowercase") ||
        value.endsWith("normal-case") ||
        value.endsWith("uppercase")
      );
    };
    const prefix = selector === "none" ? "" : `${selector}:`;
    const textCaseTokens = new Set<string>([
      "capitalize",
      "lowercase",
      "normal-case",
      "uppercase",
    ]);
    for (const token of textCaseTokens) {
      const className = `${prefix}${token}`;
      if (this.styles.has(className)) {
        this.styles.delete(className);
      }
    }

    this.processFlatProperty(textCase, cssTextCase, isTextCase);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  transition(
    property: TransitionProperty | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(property) || property === null) {
      return this;
    }

    const cssTransition = Transition.create(selector);
    const isTransition = (value: string) => {
      const [token] = value.split("-");
      return token.endsWith("transition");
    };
    this.processFlatProperty(property, cssTransition, isTransition);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  transitionDelay(
    delay: TransitionTiming | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(delay) || delay === null) {
      return this;
    }

    const cssTransitionDelay = TransitionDelay.create(selector);
    const isTransitionDelay = (value: string) => {
      const [token] = value.split("-");
      return token.endsWith("delay");
    };
    this.processFlatProperty(delay, cssTransitionDelay, isTransitionDelay);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  transitionDuration(
    duration: TransitionTiming | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(duration) || duration === null) {
      return this;
    }

    const cssTransitionDuration = TransitionDuration.create(selector);
    const isTransitionDuration = (value: string) => {
      const [token] = value.split("-");
      return token.endsWith("duration");
    };
    this.processFlatProperty(
      duration,
      cssTransitionDuration,
      isTransitionDuration
    );
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  transitionEase(
    ease: TransitionFunction | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(ease) || ease === null) {
      return this;
    }

    const cssTransitionEase = TransitionEase.create(selector);
    const isTransitionEase = (value: string) => {
      const [token] = value.split("-");
      return token.endsWith("ease");
    };
    this.processFlatProperty(ease, cssTransitionEase, isTransitionEase);
    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  visibility(
    visibility: VisibilityMapping | null = null,
    selector: CSSSelector = "none"
  ) {
    if (!this.isDefined(visibility) || visibility === null) {
      return this;
    }

    const cssVisibility = Visibility.create(selector);
    const isVisibility = (value: string) => {
      return (
        value.endsWith("collapse") ||
        value.endsWith("invisible") ||
        value.endsWith("visible")
      );
    };

    const hasToken = (prefix: string, resource: Set<string>) => {
      let has = false;
      let items: string[] = [];
      const visibilityTokens = new Set<string>([
        "collapse",
        "invisible",
        "visible",
      ]);

      for (const token of visibilityTokens) {
        const className = `${prefix}${token}`;
        if (resource.has(className) && isVisibility(className)) {
          has = true;
          items.push(className);
        }
      }

      return { has, items };
    };

    if (typeof visibility !== "object") {
      const prefix = selector === "none" ? "" : `${selector}:`;
      const containsVisibility = hasToken(prefix, this.styles);

      if (containsVisibility.has) {
        containsVisibility.items.forEach((item) => this.styles.delete(item));
      }

      this.processFlatProperty(visibility, cssVisibility, isVisibility);
      return this;
    }

    if (this.hasBreakpointsOnly(visibility)) {
      visibility = visibility as KeyValuePair<Breakpoints, FlexVisibility>;

      Object.entries(visibility).forEach(([breakpoint]) => {
        const prefix =
          selector === "none" ? `${breakpoint}:` : `${selector}:${breakpoint}:`;
        const containsVisibility = hasToken(prefix, this.styles);

        if (containsVisibility.has) {
          containsVisibility.items.forEach((item) => this.styles.delete(item));
        }
      });

      this.processBreakpoints(visibility, cssVisibility, isVisibility);
    }

    return this;
  }

  /**
   * @default
   *  selector = 'none'
   */
  width(width: WidthMapping | null = null, selector: CSSSelector = "none") {
    if (!this.isDefined(width) || width === null) {
      return this;
    }

    const cssWidth = Width.create(selector);
    const isWidth = (value: string) => {
      const [token] = value.split("-");
      return token.endsWith("w");
    };

    if (typeof width !== "object") {
      this.processFlatProperty(width, cssWidth, isWidth);
      return this;
    }

    if (this.hasBreakpointsOnly(width)) {
      this.processBreakpoints(width, cssWidth, isWidth);
    }

    return this;
  }

  write() {
    return Array.from(this.styles)
      .sort((a: string, b: string) => {
        const indexA = this.getClasseIndex(a);
        const indexB = this.getClasseIndex(b);

        if (indexA > indexB) return 1;
        if (indexA < indexB) return -1;
        return 0;
      })
      .join(" ");
  }
}

type CSSSelectorsNotAvailable =
  | "active"
  | "animate"
  | "create"
  | "disabled"
  | "execute"
  | "getClasseIndex"
  | "hasAxisInsideBreakpoints"
  | "hasAxisOnly"
  | "hasDimensionOnly"
  | "hasDimensionInsideBreakpoints"
  | "hasBreakpointsOnly"
  | "hasSideInsideBreakpoints"
  | "hasSideOnly"
  | "hover"
  | "isAxeable"
  | "isColoredeable"
  | "isDefined"
  | "isEmphaseable"
  | "isSideable"
  | "open"
  | "processAxis"
  | "processAxisBreakpoints"
  | "processBreakpoints"
  | "processPlainProperty"
  | "removeIfContains"
  | "value"
  | "write";

type Method = Exclude<keyof Mapper, CSSSelectorsNotAvailable>;
type DynamicExecution = {
  [Key in Method]?: Parameters<Mapper[Key]>[0];
};
