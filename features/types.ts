//primitive values
let a: number = 5;
let b: string = "Vince";

//build in object
const now: Date = new Date();

//array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/**
 * Type inference
 */

//We can remove all of the type annotation
let num = 5;
let myName = "Vince";

//any
let apples;

//when to use annotations
//1)function that returns any type
const json = '{"x":10,"y":20}';

const coordinates = JSON.parse(json);
console.log(coordinates); //{x:10,y:20}

//2)when we declare a variable on one line
//and initialize it later
let words = ["hi", "vince"];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    //initialize later
    foundWord = true;
  }
}

//3)A variable whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let number of numbers) {
  numberAboveZero = number;
}
