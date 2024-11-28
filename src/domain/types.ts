type Absolute = "absolute";
type Active = "active";
type All = "all";
type Auto = "auto";
type AxisX = "x";
type AxisY = "y";
type Baseline = "baseline";
type Bottom = "bottom";
type Bounce = "bounce";
type Capitalize = "capitalize";
type Center = "center";
type Clip = "clip";
type Collapse = "collapse";
type Colors = "colors";
type Column = "column";
type ColReverse = "col-reverse";
type Dashed = "dashed";
type Disabled = "disabled";
type Dotted = "dotted";
type Double = "double";
type End = "end";
type Error = "error";
type Fixed = "fixed";
type Full = "full";
type Hidden = "hidden";
type Hover = "hover";
type Inherit = "inherit";
type In = "in";
type Info = "info";
type Inner = "inner";
type InOut = "in-out";
type Invisible = "invisible";
type Justify = "justify";
type Left = "left";
type LG = "lg";
type Linear = "linear";
type Lowercase = "lowercase";
type MD = "md";
type None = "none";
type Normal = "normal";
type Opacity = "opacity";
type Open = "open";
type Out = "out";
type Ping = "ping";
type Primary = "primary";
type Pulse = "pulse";
type PX = "px";
type Relative = "relative";
type Right = "right";
type Row = "row";
type RowReverse = "row-reverse";
type Scroll = "scroll";
type Secondary = "secondary";
type Shadow = "shadow";
type SM = "sm";
type Solid = "solid";
type Spin = "spin";
type Start = "start";
type Static = "static";
type Sticky = "sticky";
type Stretch = "stretch";
type Subgrid = "subgrid";
type Success = "success";
type Top = "top";
type Transform = "transform";
type Transparent = "transparent";
type Uppercase = "uppercase";
type Visible = "visible";
type XL = "xl";
type XXL = "2xl";
type XXXL = "3xl";
type XS = "xs";
type Warning = "warning";
type White = "white";

export type AlignMapping = Overridable<
  FlexAlign,
  KeyValuePair<Breakpoints, FlexAlign>
>;

export type AnimateMapping = Bounce | None | Ping | Pulse | Spin;

export type AxisMapping = AxisX | AxisY;

export type BasisMapping = Overridable<
  FlexBasis,
  KeyValuePair<Breakpoints, FlexBasis>
>;

export type BorderAxisMapping = Overridable<
  KeyValuePair<AxisMapping, FlexBorder>,
  KeyValuePair<Breakpoints, KeyValuePair<AxisMapping, FlexBorder>>
>;

export type BorderMapping = Overridable<
  BorderAxisMapping,
  BorderPlainMapping,
  BorderSideMapping
>;

export type BorderPlainMapping = Overridable<
  FlexBorder,
  KeyValuePair<Breakpoints, FlexBorder>
>;

export type BorderSideMapping = Overridable<
  KeyValuePair<SideMapping, FlexBorder>,
  KeyValuePair<Breakpoints, KeyValuePair<SideMapping, FlexBorder>>
>;

export type BorderStyleMapping =
  | Dashed
  | Dotted
  | Double
  | Hidden
  | None
  | Solid;

export type Breakpoints = XS | SM | MD | LG | XL;

export type ColorsMapping =
  | Error
  | Inherit
  | Info
  | Primary
  | Secondary
  | Success
  | Transparent
  | Warning
  | White;

export type CornerRadius = None | XS | SM | MD | LG | XL | XXL | XXXL | Full;

export type CSSSelector = Active | Disabled | Hover | None | Open;

export type CSSValue = string | number;

export type CursorMapping =
  | "auto"
  | "default"
  | "pointer"
  | "wait"
  | "text"
  | "move"
  | "help"
  | "not-allowed"
  | "none"
  | "context-menu"
  | "progress"
  | "cell"
  | "crosshair"
  | "vertical-text"
  | "alias"
  | "copy"
  | "no-drop"
  | "grab"
  | "grabbing"
  | "all-scroll"
  | "col-resize"
  | "row-resize"
  | "n-resize"
  | "e-resize"
  | "s-resize"
  | "w-resize"
  | "ne-resize"
  | "nw-resize"
  | "se-resize"
  | "sw-resize"
  | "ew-resize"
  | "ns-resize"
  | "nesw-resize"
  | "nwse-resize"
  | "zoom-in"
  | "zoom-out";

export type DirectionsMapping = Overridable<
  FlexDirections,
  KeyValuePair<Breakpoints, FlexDirections>
>;

export type DisplayMapping = Overridable<
  FlexDisplay,
  KeyValuePair<Breakpoints, FlexDisplay>
>;

export type EmphasisGrade = None | XS | SM | MD | LG | XL | XXL;

export type FlexAlign = Start | End | Center | Baseline | Stretch;

export type FlexBasis =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | Auto
  | PX
  | 0.5
  | 1.5
  | 2.5
  | 3.5
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "1/12"
  | "2/12"
  | "3/12"
  | "4/12"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/12"
  | Full;

export type FlexBorder = 0 | 2 | 4 | 8 | PX;

export type FlexDirections = Column | ColReverse | Row | RowReverse;

export type FlexDisplay =
  | "block"
  | "contents"
  | "flex"
  | "flow-root"
  | "grid"
  | "hidden"
  | "inline"
  | "inline-block"
  | "inline-flex"
  | "inline-grid"
  | "inline-table"
  | "list-item"
  | "table"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row"
  | "table-row-group";

export type FlexFontSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type FlexFontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type FlexJustifyContent =
  | "around"
  | "between"
  | "center"
  | "end"
  | "evenly"
  | "normal"
  | "start"
  | "stretch";

export type FlexMinWidth =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "px"
  | 0.5
  | 1.5
  | 2.5
  | 3.5
  | "full"
  | "min"
  | "max"
  | "fit";

export type FlexMaxWidth =
  | 0
  | "px"
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "full"
  | "min"
  | "max"
  | "fit"
  | "prose"
  | "screen-xs"
  | "screen-sm"
  | "screen-md"
  | "screen-lg"
  | "screen-xl"
  | "screen-2xl";

export type FlexHeight =
  | 0
  | "px"
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "auto"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "full"
  | "screen"
  | "svh"
  | "lvh"
  | "dvh"
  | "min"
  | "max"
  | "fit";

export type FlexMinHeight =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "px"
  | 0.5
  | 1.5
  | 2.5
  | 3.5
  | "full"
  | "screen"
  | "svh"
  | "lvh"
  | "dvh"
  | "min"
  | "max"
  | "fit";

export type FlexMaxHeight =
  | 0
  | "px"
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "none"
  | "full"
  | "screen"
  | "svh"
  | "lvh"
  | "dvh"
  | "min"
  | "max"
  | "fit";

export type FlexOpacity =
  | 0
  | 5
  | 10
  | 15
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 80
  | 85
  | 90
  | 95
  | 100;

export type FlexOverflow = Auto | Clip | Hidden | Scroll | Visible;

export type FlexPosition = Absolute | Fixed | Relative | Static | Sticky;

export type FlexProportion =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "auto"
  | "dynamic"
  | "fit"
  | "max"
  | "min"
  | "px"
  | "screen";

export type FlexScale = 0 | 50 | 75 | 90 | 95 | 100 | 105 | 110 | 125 | 150;

export type FlexBoxShadow = XS | SM | MD | LG | XL | XXL | Inner | None;

export type FlexSize =
  | 0
  | "px"
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "auto"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "1/12"
  | "2/12"
  | "3/12"
  | "4/12"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/12"
  | "full"
  | "min"
  | "max"
  | "fit";

export type FlexSpacing =
  | 0
  | PX
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

export type FlexTextAlign = Center | End | Justify | Left | Right | Start;

export type FlexTextCase = Uppercase | Lowercase | Capitalize | Normal;

export type FlexVisibility = Visible | Invisible | Collapse;

export type FlexWidth =
  | 0
  | "px"
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "auto"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "1/12"
  | "2/12"
  | "3/12"
  | "4/12"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/12"
  | "full"
  | "screen"
  | "svw"
  | "lvw"
  | "dvw"
  | "min"
  | "max"
  | "fit";

export type FontsizeMapping = Overridable<
  FlexFontSize,
  KeyValuePair<Breakpoints, FlexFontSize>
>;

export type GapAxisSpacing = Overridable<
  KeyValuePair<AxisMapping, FlexSpacing>,
  KeyValuePair<Breakpoints, KeyValuePair<AxisMapping, FlexSpacing>>
>;

export type GapMapping = Overridable<GapAxisSpacing, GapPlainSpacing>;

export type GapPlainSpacing = Overridable<
  FlexSpacing,
  KeyValuePair<Breakpoints, FlexSpacing>
>;

export type GridSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | Auto
  | Full;

export type GridStartEnd =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | Auto;

export type GridTemplate =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | None
  | Subgrid;

export type GridTemplateSpan = Overridable<
  GridSpan,
  KeyValuePair<Breakpoints, GridSpan>
>;

export type GridTemplateStartEnd = Overridable<
  GridStartEnd,
  KeyValuePair<Breakpoints, GridStartEnd>
>;

export type GridTemplateColumns = Overridable<
  GridTemplate,
  KeyValuePair<Breakpoints, GridTemplate>
>;

export type GridTemplateRows = GridTemplateColumns;

export type GrowGrade =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "auto";

export type Growth =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "px"
  | "full"
  | "min"
  | "max"
  | "fit";

export type HeightMapping = Overridable<
  KeyValuePair<Breakpoints, FlexHeight>,
  FlexHeight
>;

export type JustifyContentMapping = Overridable<
  FlexJustifyContent,
  KeyValuePair<Breakpoints, FlexJustifyContent>
>;

export type KeyValuePair<K extends string | number | symbol, V> = Partial<
  Record<K, V>
>;

export type MarginMapping = Overridable<
  MarginAxisSpacing,
  MarginPlainSpacing,
  MarginSideSpacing
>;

export type MarginAxisSpacing = Overridable<
  KeyValuePair<AxisMapping, MarginSpacing>,
  KeyValuePair<Breakpoints, KeyValuePair<AxisMapping, MarginSpacing>>
>;

export type MarginPlainSpacing = Overridable<
  KeyValuePair<Breakpoints, MarginSpacing>,
  MarginSpacing
>;

export type MarginSideSpacing = Overridable<
  KeyValuePair<SideMapping, MarginSpacing>,
  KeyValuePair<Breakpoints, KeyValuePair<SideMapping, MarginSpacing>>
>;

export type MarginSpacing =
  | 0
  | "px"
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | "auto";

export type MaxHeightMapping = Overridable<
  FlexMaxHeight,
  KeyValuePair<Breakpoints, FlexMaxHeight>
>;

export type MaxWidthMapping = Overridable<
  FlexMaxWidth,
  KeyValuePair<Breakpoints, FlexMaxWidth>
>;

export type MinHeightMapping = Overridable<
  FlexMinHeight,
  KeyValuePair<Breakpoints, FlexMinHeight>
>;

export type MinWidthMapping = Overridable<
  FlexMinWidth,
  KeyValuePair<Breakpoints, FlexMinWidth>
>;

export type OverflowMapping = Overridable<
  OverflowAxisMapping,
  OverflowPlainMapping
>;

export type OverflowAxisMapping = Overridable<
  KeyValuePair<Breakpoints, KeyValuePair<AxisMapping, FlexOverflow>>,
  KeyValuePair<AxisMapping, FlexOverflow>
>;

export type OverflowPlainMapping = Overridable<
  KeyValuePair<Breakpoints, FlexOverflow>,
  FlexOverflow
>;

export type Overridable<T, P, O = never> = T | P | O;

export type PaddingAxisSpacing = Overridable<
  KeyValuePair<AxisMapping, FlexSpacing>,
  KeyValuePair<Breakpoints, KeyValuePair<AxisMapping, FlexSpacing>>
>;

export type PaddingMapping = Overridable<
  PaddingAxisSpacing,
  PaddingPlainSpacing,
  PaddingSideSpacing
>;

export type PaddingPlainSpacing = Overridable<
  FlexSpacing,
  KeyValuePair<Breakpoints, FlexSpacing>
>;

export type PaddingSideSpacing = Overridable<
  KeyValuePair<SideMapping, FlexSpacing>,
  KeyValuePair<Breakpoints, KeyValuePair<SideMapping, FlexSpacing>>
>;

export type PositionMapping = Overridable<
  FlexPosition,
  KeyValuePair<Breakpoints, FlexPosition>
>;

export type ScaleMapping = Overridable<ScaleAxisMapping, ScalePlainMapping>;

export type ScaleAxisMapping = Overridable<
  KeyValuePair<AxisMapping, FlexScale>,
  KeyValuePair<Breakpoints, KeyValuePair<AxisMapping, FlexScale>>
>;

export type ScalePlainMapping = Overridable<
  FlexScale,
  KeyValuePair<Breakpoints, FlexScale>
>;

export type SideMapping = Bottom | Left | Right | Top;

export type SizeMapping = Overridable<
  KeyValuePair<Breakpoints, FlexSize>,
  FlexSize
>;

export type TextAlignMapping = Overridable<
  FlexTextAlign,
  KeyValuePair<Breakpoints, FlexTextAlign>
>;

export type TransitionFunction = In | InOut | Linear | Out;

export type TransitionProperty =
  | All
  | Colors
  | None
  | Opacity
  | Shadow
  | Transform;

export type TransitionTiming =
  | 0
  | 75
  | 100
  | 150
  | 200
  | 300
  | 500
  | 700
  | 1000;

export type VisibilityMapping = Overridable<
  FlexVisibility,
  KeyValuePair<Breakpoints, FlexVisibility>
>;

export type WidthMapping = Overridable<
  FlexWidth,
  KeyValuePair<Breakpoints, FlexWidth>
>;
