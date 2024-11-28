import { ClassMap } from "./ClassMap";
import { CSSProperty } from "./CSSProperty";

export interface Breakable<T extends Map<any, any> | undefined = undefined> {
  breakpoints(): CSSProperty<T extends undefined ? ClassMap : T>;
}
