import { CSSSelector, CSSValue } from '../types';
import { Stringable } from './Stringable';
import { Collection } from './Collection';
import { ClassesMapping, ClassMap } from './ClassMap';

export class CSSProperty<T extends Map<any, any> | undefined = undefined>
  implements Stringable
{
  protected classes: T extends undefined ? ClassMap : T;
  protected classesMapping: ClassesMapping<T>;
  protected cssSelector: CSSSelector;

  constructor(classesMapping: ClassesMapping<T>, cssSelector: CSSSelector) {
    this.classesMapping = classesMapping;
    this.cssSelector = cssSelector;
    this.classes = this.build(cssSelector);
  }

  protected getClassName(...params: CSSValue[]) {
    const parameters = new Collection<CSSValue>(params).values();
    const maxIteration = 4;
    let currentGetter: typeof this.classes = this.classes;
    let currentParameter = parameters.next();
    let iteration = 1;
    let result: string | null = null;

    while (!currentParameter.done && iteration <= maxIteration) {
      let value = currentGetter.get(currentParameter.value);
      if (typeof value === 'string') {
        result = value;
      }
      if (typeof value !== 'string') {
        currentGetter = value;
      }

      currentParameter = parameters.next();
      iteration++;
    }

    return result ?? '';
  }

  protected build(selector: CSSSelector) {
    return this.classesMapping.get(selector);
  }

  public getClasses(): typeof this.classes {
    return this.classes;
  }

  public write(...params: CSSValue[]) {
    return this.getClassName(...params);
  }
}
