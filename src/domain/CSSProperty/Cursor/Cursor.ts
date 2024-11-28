import { ClassesMapping } from "../../Entities/ClassMap";
import { CSSProperty } from "../../Entities/CSSProperty";
import { CSSSelector, CursorMapping } from "../../types";
import { DefaultValue } from "../DefaultValue";

export class Cursor extends CSSProperty<Map<CursorMapping, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<CursorMapping, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new CursorClassesMapping();
    return new Cursor(classesMapping, selector);
  }

  public write(cursor: CursorMapping) {
    return this.getClassName(cursor);
  }
}

class CursorClassesMapping
  implements ClassesMapping<Map<CursorMapping, string>>
{
  private defaultValue: DefaultValue<CursorMapping, string>;

  constructor() {
    this.defaultValue = new DefaultValue<CursorMapping, string>(
      "auto",
      "cursor-auto"
    );
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<CursorMapping, string>>([
        [
          "active",
          new Map<CursorMapping, string>([
            ["auto", "active:cursor-auto"],
            ["default", "active:cursor-default"],
            ["pointer", "active:cursor-pointer"],
            ["wait", "active:cursor-wait"],
            ["text", "active:cursor-text"],
            ["move", "active:cursor-move"],
            ["help", "active:cursor-help"],
            ["not-allowed", "active:cursor-not-allowed"],
            ["none", "active:cursor-none"],
            ["context-menu", "active:cursor-context-menu"],
            ["progress", "active:cursor-progress"],
            ["cell", "active:cursor-cell"],
            ["crosshair", "active:cursor-crosshair"],
            ["vertical-text", "active:cursor-vertical-text"],
            ["alias", "active:cursor-alias"],
            ["copy", "active:cursor-copy"],
            ["no-drop", "active:cursor-no-drop"],
            ["grab", "active:cursor-grab"],
            ["grabbing", "active:cursor-grabbing"],
            ["all-scroll", "active:cursor-all-scroll"],
            ["col-resize", "active:cursor-col-resize"],
            ["row-resize", "active:cursor-row-resize"],
            ["n-resize", "active:cursor-n-resize"],
            ["e-resize", "active:cursor-e-resize"],
            ["s-resize", "active:cursor-s-resize"],
            ["w-resize", "active:cursor-w-resize"],
            ["ne-resize", "active:cursor-ne-resize"],
            ["nw-resize", "active:cursor-nw-resize"],
            ["se-resize", "active:cursor-se-resize"],
            ["sw-resize", "active:cursor-sw-resize"],
            ["ew-resize", "active:cursor-ew-resize"],
            ["ns-resize", "active:cursor-ns-resize"],
            ["nesw-resize", "active:cursor-nesw-resize"],
            ["nwse-resize", "active:cursor-nwse-resize"],
            ["zoom-in", "active:cursor-zoom-in"],
            ["zoom-out", "active:cursor-zoom-out"],
          ]),
        ],
        [
          "disabled",
          new Map<CursorMapping, string>([
            ["auto", "disabled:cursor-auto"],
            ["default", "disabled:cursor-default"],
            ["pointer", "disabled:cursor-pointer"],
            ["wait", "disabled:cursor-wait"],
            ["text", "disabled:cursor-text"],
            ["move", "disabled:cursor-move"],
            ["help", "disabled:cursor-help"],
            ["not-allowed", "disabled:cursor-not-allowed"],
            ["none", "disabled:cursor-none"],
            ["context-menu", "disabled:cursor-context-menu"],
            ["progress", "disabled:cursor-progress"],
            ["cell", "disabled:cursor-cell"],
            ["crosshair", "disabled:cursor-crosshair"],
            ["vertical-text", "disabled:cursor-vertical-text"],
            ["alias", "disabled:cursor-alias"],
            ["copy", "disabled:cursor-copy"],
            ["no-drop", "disabled:cursor-no-drop"],
            ["grab", "disabled:cursor-grab"],
            ["grabbing", "disabled:cursor-grabbing"],
            ["all-scroll", "disabled:cursor-all-scroll"],
            ["col-resize", "disabled:cursor-col-resize"],
            ["row-resize", "disabled:cursor-row-resize"],
            ["n-resize", "disabled:cursor-n-resize"],
            ["e-resize", "disabled:cursor-e-resize"],
            ["s-resize", "disabled:cursor-s-resize"],
            ["w-resize", "disabled:cursor-w-resize"],
            ["ne-resize", "disabled:cursor-ne-resize"],
            ["nw-resize", "disabled:cursor-nw-resize"],
            ["se-resize", "disabled:cursor-se-resize"],
            ["sw-resize", "disabled:cursor-sw-resize"],
            ["ew-resize", "disabled:cursor-ew-resize"],
            ["ns-resize", "disabled:cursor-ns-resize"],
            ["nesw-resize", "disabled:cursor-nesw-resize"],
            ["nwse-resize", "disabled:cursor-nwse-resize"],
            ["zoom-in", "disabled:cursor-zoom-in"],
            ["zoom-out", "disabled:cursor-zoom-out"],
          ]),
        ],
        [
          "hover",
          new Map<CursorMapping, string>([
            ["auto", "hover:cursor-auto"],
            ["default", "hover:cursor-default"],
            ["pointer", "hover:cursor-pointer"],
            ["wait", "hover:cursor-wait"],
            ["text", "hover:cursor-text"],
            ["move", "hover:cursor-move"],
            ["help", "hover:cursor-help"],
            ["not-allowed", "hover:cursor-not-allowed"],
            ["none", "hover:cursor-none"],
            ["context-menu", "hover:cursor-context-menu"],
            ["progress", "hover:cursor-progress"],
            ["cell", "hover:cursor-cell"],
            ["crosshair", "hover:cursor-crosshair"],
            ["vertical-text", "hover:cursor-vertical-text"],
            ["alias", "hover:cursor-alias"],
            ["copy", "hover:cursor-copy"],
            ["no-drop", "hover:cursor-no-drop"],
            ["grab", "hover:cursor-grab"],
            ["grabbing", "hover:cursor-grabbing"],
            ["all-scroll", "hover:cursor-all-scroll"],
            ["col-resize", "hover:cursor-col-resize"],
            ["row-resize", "hover:cursor-row-resize"],
            ["n-resize", "hover:cursor-n-resize"],
            ["e-resize", "hover:cursor-e-resize"],
            ["s-resize", "hover:cursor-s-resize"],
            ["w-resize", "hover:cursor-w-resize"],
            ["ne-resize", "hover:cursor-ne-resize"],
            ["nw-resize", "hover:cursor-nw-resize"],
            ["se-resize", "hover:cursor-se-resize"],
            ["sw-resize", "hover:cursor-sw-resize"],
            ["ew-resize", "hover:cursor-ew-resize"],
            ["ns-resize", "hover:cursor-ns-resize"],
            ["nesw-resize", "hover:cursor-nesw-resize"],
            ["nwse-resize", "hover:cursor-nwse-resize"],
            ["zoom-in", "hover:cursor-zoom-in"],
            ["zoom-out", "hover:cursor-zoom-out"],
          ]),
        ],
        [
          "none",
          new Map<CursorMapping, string>([
            ["auto", "cursor-auto"],
            ["default", "cursor-default"],
            ["pointer", "cursor-pointer"],
            ["wait", "cursor-wait"],
            ["text", "cursor-text"],
            ["move", "cursor-move"],
            ["help", "cursor-help"],
            ["not-allowed", "cursor-not-allowed"],
            ["none", "cursor-none"],
            ["context-menu", "cursor-context-menu"],
            ["progress", "cursor-progress"],
            ["cell", "cursor-cell"],
            ["crosshair", "cursor-crosshair"],
            ["vertical-text", "cursor-vertical-text"],
            ["alias", "cursor-alias"],
            ["copy", "cursor-copy"],
            ["no-drop", "cursor-no-drop"],
            ["grab", "cursor-grab"],
            ["grabbing", "cursor-grabbing"],
            ["all-scroll", "cursor-all-scroll"],
            ["col-resize", "cursor-col-resize"],
            ["row-resize", "cursor-row-resize"],
            ["n-resize", "cursor-n-resize"],
            ["e-resize", "cursor-e-resize"],
            ["s-resize", "cursor-s-resize"],
            ["w-resize", "cursor-w-resize"],
            ["ne-resize", "cursor-ne-resize"],
            ["nw-resize", "cursor-nw-resize"],
            ["se-resize", "cursor-se-resize"],
            ["sw-resize", "cursor-sw-resize"],
            ["ew-resize", "cursor-ew-resize"],
            ["ns-resize", "cursor-ns-resize"],
            ["nesw-resize", "cursor-nesw-resize"],
            ["nwse-resize", "cursor-nwse-resize"],
            ["zoom-in", "cursor-zoom-in"],
            ["zoom-out", "cursor-zoom-out"],
          ]),
        ],
        [
          "open",
          new Map<CursorMapping, string>([
            ["auto", "open:cursor-auto"],
            ["default", "open:cursor-default"],
            ["pointer", "open:cursor-pointer"],
            ["wait", "open:cursor-wait"],
            ["text", "open:cursor-text"],
            ["move", "open:cursor-move"],
            ["help", "open:cursor-help"],
            ["not-allowed", "open:cursor-not-allowed"],
            ["none", "open:cursor-none"],
            ["context-menu", "open:cursor-context-menu"],
            ["progress", "open:cursor-progress"],
            ["cell", "open:cursor-cell"],
            ["crosshair", "open:cursor-crosshair"],
            ["vertical-text", "open:cursor-vertical-text"],
            ["alias", "open:cursor-alias"],
            ["copy", "open:cursor-copy"],
            ["no-drop", "open:cursor-no-drop"],
            ["grab", "open:cursor-grab"],
            ["grabbing", "open:cursor-grabbing"],
            ["all-scroll", "open:cursor-all-scroll"],
            ["col-resize", "open:cursor-col-resize"],
            ["row-resize", "open:cursor-row-resize"],
            ["n-resize", "open:cursor-n-resize"],
            ["e-resize", "open:cursor-e-resize"],
            ["s-resize", "open:cursor-s-resize"],
            ["w-resize", "open:cursor-w-resize"],
            ["ne-resize", "open:cursor-ne-resize"],
            ["nw-resize", "open:cursor-nw-resize"],
            ["se-resize", "open:cursor-se-resize"],
            ["sw-resize", "open:cursor-sw-resize"],
            ["ew-resize", "open:cursor-ew-resize"],
            ["ns-resize", "open:cursor-ns-resize"],
            ["nesw-resize", "open:cursor-nesw-resize"],
            ["nwse-resize", "open:cursor-nwse-resize"],
            ["zoom-in", "open:cursor-zoom-in"],
            ["zoom-out", "open:cursor-zoom-out"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
