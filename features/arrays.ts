//type inference
const carMakers = ["ford", "toyota", "chevy"];

//any type => but we want to avoid any-type as much as possible
const carMakers1 = [];

//add-on our annotation
const carMakers2: string[] = [];

const dates = [new Date(), new Date()];

//two dimensions arr ( arr cointains arr of strings)
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

//Help with inference when extracting values
const car = carMakers[0];

//prevent incompatible values
carMakers.push(100);

//help with map (we get helped with auto-complete on the variable being passed into the fn )
carMakers.map((car: string): string => {
  return car.toLocaleLowerCase();
});

//flexible types (or operator)
const importantDates = [new Date(), "2030-10-10"];

// or

const importantDates1: (string | Date)[] = [new Date()];
importantDates1.push("2040-20-3");
