import { ClassMap } from "./ClassMap";
import { CSSProperty } from "./CSSProperty";

export interface Sideable<T extends Map<any, any> | undefined = undefined> {
  sides(): CSSProperty<T extends undefined ? ClassMap : T>;
}
