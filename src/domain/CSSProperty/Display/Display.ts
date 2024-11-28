import { Breakpoints, CSSSelector, FlexDisplay } from "../../types";
import { DisplayBreakpoints } from "./DisplayBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class Display
  extends CSSProperty<Map<FlexDisplay, string>>
  implements Breakable<Map<Breakpoints, Map<FlexDisplay, string>>>
{
  private constructor(
    classesMapping: ClassesMapping<Map<FlexDisplay, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector = "none") {
    const classesMapping = new DisplayMapping();
    return new Display(classesMapping, selector);
  }

  public breakpoints() {
    return DisplayBreakpoints.create(this.cssSelector);
  }

  public write(display: FlexDisplay) {
    return this.getClassName(display);
  }
}

class DisplayMapping implements ClassesMapping<Map<FlexDisplay, string>> {
  private defaultValue: DefaultValue<FlexDisplay, string>;

  constructor() {
    this.defaultValue = new DefaultValue<FlexDisplay, string>("block", "block");
  }

  get(selector: CSSSelector) {
    return (
      new Map<CSSSelector, Map<FlexDisplay, string>>([
        [
          "active",
          new Map<FlexDisplay, string>([
            ["block", "active:block"],
            ["contents", "active:contents"],
            ["flex", "active:flex"],
            ["flow-root", "active:flow-root"],
            ["grid", "active:grid"],
            ["hidden", "active:hidden"],
            ["inline", "active:inline"],
            ["inline-block", "active:inline-block"],
            ["inline-flex", "active:inline-flex"],
            ["inline-grid", "active:inline-grid"],
            ["inline-table", "active:inline-table"],
            ["list-item", "active:list-item"],
            ["table", "active:table"],
            ["table-caption", "active:table-caption"],
            ["table-cell", "active:table-cell"],
            ["table-column", "active:table-column"],
            ["table-column-group", "active:table-column-group"],
            ["table-footer-group", "active:table-footer-group"],
            ["table-header-group", "active:table-header-group"],
            ["table-row", "active:table-row"],
            ["table-row-group", "active:table-row-group"],
          ]),
        ],
        [
          "disabled",
          new Map<FlexDisplay, string>([
            ["block", "disabled:block"],
            ["contents", "disabled:contents"],
            ["flex", "disabled:flex"],
            ["flow-root", "disabled:flow-root"],
            ["grid", "disabled:grid"],
            ["hidden", "disabled:hidden"],
            ["inline", "disabled:inline"],
            ["inline-block", "disabled:inline-block"],
            ["inline-flex", "disabled:inline-flex"],
            ["inline-grid", "disabled:inline-grid"],
            ["inline-table", "disabled:inline-table"],
            ["list-item", "disabled:list-item"],
            ["table", "disabled:table"],
            ["table-caption", "disabled:table-caption"],
            ["table-cell", "disabled:table-cell"],
            ["table-column", "disabled:table-column"],
            ["table-column-group", "disabled:table-column-group"],
            ["table-footer-group", "disabled:table-footer-group"],
            ["table-header-group", "disabled:table-header-group"],
            ["table-row", "disabled:table-row"],
            ["table-row-group", "disabled:table-row-group"],
          ]),
        ],
        [
          "hover",
          new Map<FlexDisplay, string>([
            ["block", "hover:block"],
            ["contents", "hover:contents"],
            ["flex", "hover:flex"],
            ["flow-root", "hover:flow-root"],
            ["grid", "hover:grid"],
            ["hidden", "hover:hidden"],
            ["inline", "hover:inline"],
            ["inline-block", "hover:inline-block"],
            ["inline-flex", "hover:inline-flex"],
            ["inline-grid", "hover:inline-grid"],
            ["inline-table", "hover:inline-table"],
            ["list-item", "hover:list-item"],
            ["table", "hover:table"],
            ["table-caption", "hover:table-caption"],
            ["table-cell", "hover:table-cell"],
            ["table-column", "hover:table-column"],
            ["table-column-group", "hover:table-column-group"],
            ["table-footer-group", "hover:table-footer-group"],
            ["table-header-group", "hover:table-header-group"],
            ["table-row", "hover:table-row"],
            ["table-row-group", "hover:table-row-group"],
          ]),
        ],
        [
          "none",
          new Map<FlexDisplay, string>([
            ["block", "block"],
            ["contents", "contents"],
            ["flex", "flex"],
            ["flow-root", "flow-root"],
            ["grid", "grid"],
            ["hidden", "hidden"],
            ["inline", "inline"],
            ["inline-block", "inline-block"],
            ["inline-flex", "inline-flex"],
            ["inline-grid", "inline-grid"],
            ["inline-table", "inline-table"],
            ["list-item", "list-item"],
            ["table", "table"],
            ["table-caption", "table-caption"],
            ["table-cell", "table-cell"],
            ["table-column", "table-column"],
            ["table-column-group", "table-column-group"],
            ["table-footer-group", "table-footer-group"],
            ["table-header-group", "table-header-group"],
            ["table-row", "table-row"],
            ["table-row-group", "table-row-group"],
          ]),
        ],
        [
          "open",
          new Map<FlexDisplay, string>([
            ["block", "open:block"],
            ["contents", "open:contents"],
            ["flex", "open:flex"],
            ["flow-root", "open:flow-root"],
            ["grid", "open:grid"],
            ["hidden", "open:hidden"],
            ["inline", "open:inline"],
            ["inline-block", "open:inline-block"],
            ["inline-flex", "open:inline-flex"],
            ["inline-grid", "open:inline-grid"],
            ["inline-table", "open:inline-table"],
            ["list-item", "open:list-item"],
            ["table", "open:table"],
            ["table-caption", "open:table-caption"],
            ["table-cell", "open:table-cell"],
            ["table-column", "open:table-column"],
            ["table-column-group", "open:table-column-group"],
            ["table-footer-group", "open:table-footer-group"],
            ["table-header-group", "open:table-header-group"],
            ["table-row", "open:table-row"],
            ["table-row-group", "open:table-row-group"],
          ]),
        ],
      ]).get(selector) ?? this.defaultValue.getValue()
    );
  }
}
