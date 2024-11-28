export class Collection<T extends string | number | object> {
  protected numberOfItems: number;
  protected items: CollectionValues<T>;

  constructor(iterable: Array<T> = []) {
    this.numberOfItems = iterable.length;
    this.items = new CollectionValues<T>();
    for (const item of iterable) {
      this.items.push(item);
    }
  }

  add(value: T): this {
    this.items.push(value);
    this.numberOfItems++;
    return this;
  }

  clear(): void {
    this.numberOfItems = 0;
    this.items = new CollectionValues<T>();
  }

  delete(value: T): boolean {
    const item = this.items.find(value);

    if (item) {
      const hasDeleted = this.items.delete(item);
      if (hasDeleted) {
        this.numberOfItems--;
      }
      return hasDeleted;
    }

    return false;
  }

  get size() {
    return this.numberOfItems;
  }

  has(value: T): boolean {
    const item = this.items.find(value);
    return Boolean(item);
  }

  values() {
    return new CollectionIterator<T>(this.items.getValues());
  }

  [Symbol.iterator](): Iterator<T> {
    return this.values();
  }
}

class CollectionValues<T extends string | number | object> {
  protected values: CollectionItem<T>[];

  constructor(...values: CollectionItem<T>[]) {
    this.values = [];
    this.values.push(...values);
  }

  delete(value: CollectionItem<T>) {
    if (!this.values) {
      return false;
    }

    const index = this.values.findIndex(
      (item) => item.getIndex() === value.getIndex()
    );
    if (index !== -1) {
      this.values.splice(index, 1);
      this.values.map((item, index) => {
        item.setIndex(index);
        return item;
      });
      return true;
    }
    return false;
  }

  find(predicate: number | CollectionItem<T> | T) {
    if (typeof predicate === "number") {
      return this.findByIndex(predicate);
    }

    if (predicate instanceof CollectionItem) {
      return this.findByItem(predicate);
    }

    return this.findByValue(predicate);
  }

  getValues() {
    return this.values;
  }

  push(value: T) {
    const index = this.values.length;
    const newValue = new CollectionItem<T>(value, index, false);

    return this.values.push(newValue);
  }

  protected findByIndex(predicate: number) {
    return this.values.find((value) => value.getIndex() === predicate);
  }

  protected findByItem(predicate: CollectionItem<T>) {
    return this.values.find((value) => value.equals(predicate));
  }

  protected findByValue(predicate: T) {
    const type = typeof predicate;
    return this.values.find((value) => {
      if (type !== "object" && type !== "function") {
        return value.getValue() === predicate;
      }

      if (type === "object") {
        let isEquals = false;
        Object.keys(predicate).forEach((predicateKey) => {
          const key = predicateKey as keyof T;
          isEquals =
            key in value && value.getValueByKey(key) === predicate[key];
        });

        return isEquals;
      }

      return false;
    });
  }
}

class CollectionItem<T> {
  constructor(
    protected value: T,
    protected index: number,
    protected done: boolean
  ) {}

  getDone() {
    return this.done;
  }

  getIndex() {
    return this.index;
  }

  setDone(done: boolean) {
    this.done = done;
  }

  setIndex(index: number) {
    this.index = index;
  }

  getValue() {
    return this.value;
  }

  getValueByKey(key: keyof T) {
    return this.value[key];
  }

  equals(other: CollectionItem<T>) {
    return this.value === other.getValue() && this.index === other.getIndex();
  }
}

class CollectionIterator<T> implements Iterator<T> {
  private index = 0;

  constructor(private items: CollectionItem<T>[]) {}

  next(): IteratorResult<T, undefined> {
    if (this.index < this.items.length) {
      const currentValue = this.items[this.index].getValue();
      this.index++;
      return { value: currentValue, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}
