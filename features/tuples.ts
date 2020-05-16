const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//tuples (this arr is always going to have a very consistent ordering of elements inside)
const pepsi: [string, boolean, number] = ["brown", true, 40];
pepsi[0] = 40;

//we can use type-alias (rather than repeating out the definitions everytime we create a drink)
//easy to re-use this tuples DS
type Drink = [string, boolean, number];
const coca: Drink = ["dark", true, 60];

//you might not use it on regular life