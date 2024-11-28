import { CSSValue } from "../types";

export interface Stringable {
  getClasses(): Map<any, any>;
  write(...param: CSSValue[]): string;
}
