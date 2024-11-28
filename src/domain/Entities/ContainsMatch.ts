export class ContainsMatch {
  constructor() {}

  public inSet(regex: RegExp, set: Set<string>) {
    let has = false;
    const items: string[] = [];
    for (const item of set) {
      if (regex.test(item)) {
        has = true;
        items.push(item);
      }
    }

    return {
      has,
      items
    };
  }
}
