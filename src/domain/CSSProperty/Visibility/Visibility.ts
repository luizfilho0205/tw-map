import { Breakpoints, CSSSelector, FlexVisibility } from "../../types";
import { VisibilityBreakpoints } from "./VisibilityBreakpoints";
import { CSSProperty } from "../../Entities/CSSProperty";
import { Breakable } from "../../Entities/Brekable";
import { ClassesMapping } from "../../Entities/ClassMap";
import { DefaultValue } from "../DefaultValue";

export class Visibility extends CSSProperty<Map<FlexVisibility, string>> 
implements Breakable<Map<Breakpoints, Map<FlexVisibility, string>>> {
    private constructor(
        classesMapping: ClassesMapping<Map<FlexVisibility, string>>,
        cssSelector: CSSSelector
      ) {
        super(classesMapping, cssSelector);
      }
    
      static create(selector: CSSSelector) {
        const classesMapping = new VisibilityClassesMapping();
        return new Visibility(classesMapping, selector);
      }

      public breakpoints(){
        return VisibilityBreakpoints.create(this.cssSelector);
      }
    
      public write(visibility: FlexVisibility) {
        return this.getClassName(visibility);
      }
}

class VisibilityClassesMapping implements ClassesMapping<Map<FlexVisibility, string>>{
  private defaultValue: DefaultValue<FlexVisibility, string>;

  constructor(){
    this.defaultValue = new DefaultValue<FlexVisibility, string>('visible', 'visible');
  }

    get(selector: CSSSelector){
        return new Map<CSSSelector, Map<FlexVisibility, string>>([
            ['active', new Map<FlexVisibility, string>([
                ['collapse', 'active:collapse'],
                ['invisible', 'active:invisible'],
                ['visible', 'active:visible'],
            ])],
            ['disabled', new Map<FlexVisibility, string>([
                ['collapse', 'disabled:collapse'],
                ['invisible', 'disabled:invisible'],
                ['visible', 'disabled:visible'],
            ])],
            ['hover', new Map<FlexVisibility, string>([
                ['collapse', 'hover:collapse'],
                ['invisible', 'hover:invisible'],
                ['visible', 'hover:visible'],
            ])],
            ['none', new Map<FlexVisibility, string>([
                ['collapse', 'collapse'],
                ['invisible', 'invisible'],
                ['visible', 'visible'],
            ])],
            ['open', new Map<FlexVisibility, string>([
                ['collapse', 'open:collapse'],
                ['invisible', 'open:invisible'],
                ['visible', 'open:visible'],
            ])],
        ]).get(selector) ?? this.defaultValue.getValue();
    }
}