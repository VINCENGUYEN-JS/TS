export abstract class Sorter {
  //mark is as it will exists in the future by some child-class
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const length = this.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

/**
 * Bad approach
 */

//Union operator +type-guard
class Sort {
  collection: number[] | string;
  constructor(collection: number[] | string) {
    this.collection = collection;
  }

  //if we're adding more sort type => we would have to come back to this sort fn every-single-funcking-time
  sort(): void {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
        }
        if (typeof this.collection === "string") {
        }
        // if(this.collection instanceof LinkList) {

        // }
      }
    }
  }
}

//Second attempt

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

class SortIn {
  constructor(public collection: Sortable) {}
  sort(): void {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
