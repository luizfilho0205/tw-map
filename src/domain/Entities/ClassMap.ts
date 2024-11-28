import { CSSSelector, CSSValue } from "../types";

export interface ClassMap extends Map<CSSValue, string | ClassMap> {}

export interface ClassesMapping<
  T extends Map<any, any> | undefined = undefined
> {
  get(selector: CSSSelector): T extends undefined ? ClassMap : T;
}
