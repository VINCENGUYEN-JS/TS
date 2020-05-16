const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// annonymous fn
const multiply = function (a: number, b: number): number {
  return a * b;
};

//void means not returning anything (include null,undefined)
const logger = function (message: string): void {
  console.log(message);
};

//we never gonna execute the fn completely (exists )
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

let logWeather = (forecast: { date: Date; weather: string }): void => {};

//destructure
logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log({ date, weather });
};

