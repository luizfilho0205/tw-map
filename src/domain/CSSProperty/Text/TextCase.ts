import { ClassesMapping } from '../../Entities/ClassMap';
import { CSSProperty } from '../../Entities/CSSProperty';
import { CSSSelector, FlexTextCase } from '../../types';
import { DefaultValue } from '../DefaultValue';

export class TextCase extends CSSProperty<Map<FlexTextCase, string>> {
  private constructor(
    classesMapping: ClassesMapping<Map<FlexTextCase, string>>,
    cssSelector: CSSSelector
  ) {
    super(classesMapping, cssSelector);
  }

  static create(selector: CSSSelector) {
    const classesMapping = new TextCaseClassesMapping();
    return new TextCase(classesMapping, selector);
  }

  public write(textCase: FlexTextCase) {
    return this.getClassName(textCase);
  }
}

class TextCaseClassesMapping implements ClassesMapping<Map<FlexTextCase, string>> {
  private defaultValue: DefaultValue<FlexTextCase, string>;

  constructor(){
    this.defaultValue = new DefaultValue<FlexTextCase, string>('normal', 'normal-case');
  }

  get(selector: CSSSelector) {
    return new Map<CSSSelector, Map<FlexTextCase, string>>([
      [
        'active',
        new Map<FlexTextCase, string>([
          ['capitalize', 'active:capitalize'],
          ['lowercase', 'active:lowercase'],
          ['normal', 'active:normal-case'],
          ['uppercase', 'active:uppercase']
        ])
      ],
      [
        'disabled',
        new Map<FlexTextCase, string>([
          ['capitalize', 'disabled:capitalize'],
          ['lowercase', 'disabled:lowercase'],
          ['normal', 'disabled:normal-case'],
          ['uppercase', 'disabled:uppercase']
        ])
      ],
      [
        'hover',
        new Map<FlexTextCase, string>([
          ['capitalize', 'hover:capitalize'],
          ['lowercase', 'hover:lowercase'],
          ['normal', 'hover:normal-case'],
          ['uppercase', 'hover:uppercase']
        ])
      ],
      [
        'none',
        new Map<FlexTextCase, string>([
          ['capitalize', 'capitalize'],
          ['lowercase', 'lowercase'],
          ['normal', 'normal-case'],
          ['uppercase', 'uppercase']
        ])
      ],
      [
        'open',
        new Map<FlexTextCase, string>([
          ['capitalize', 'open:capitalize'],
          ['lowercase', 'open:lowercase'],
          ['normal', 'open:normal-case'],
          ['uppercase', 'open:uppercase']
        ])
      ]
    ]).get(selector) ?? this.defaultValue.getValue();
  }
}
