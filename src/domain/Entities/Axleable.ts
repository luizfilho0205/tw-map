import { ClassMap } from "./ClassMap";
import { CSSProperty } from "./CSSProperty";

export abstract class Axleable<
  T extends Map<any, any> | undefined = undefined,
  K extends Map<any, any> | undefined = undefined
> extends CSSProperty<T> {
  abstract axis(): CSSProperty<K extends undefined ? ClassMap : K>;
}
