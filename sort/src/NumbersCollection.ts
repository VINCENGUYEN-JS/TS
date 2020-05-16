import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  data: number[];
  constructor(data: number[]) {
    super();
    this.data = data;
  }
  //the keyword get makes us don't have to involke a fn , but still get a value
  //its natural design of get
  get length() {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftIndex;
  }
}
