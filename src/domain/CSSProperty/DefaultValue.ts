import { CSSValue } from "../types";

export class DefaultValue<T, P> {
  private defaultKey: T;
  private defaultValue: P;
  constructor(key: T, value: P) {
    this.defaultKey = key;
    this.defaultValue = value;
  }
  public static create<T, P>(key: T, value: P) {
    return new DefaultValue<T, P>(key, value);
  }

  public getValue() {
    return new Map<T, P>([[this.defaultKey, this.defaultValue]]);
  }
}
