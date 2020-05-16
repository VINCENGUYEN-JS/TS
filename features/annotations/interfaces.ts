const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

//this type annotation is really , if we have more than props its harder to read
//if we have several functions that inside this file that expects to call oldCivic , we have to repeat
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name:${vehicle.name}`);
  console.log(`year:${vehicle.year}`);
  console.log(`broken:${vehicle.broken}`);
};

//-------------------------------------------------------------------------//

//any time we create the interface , we create a new type
//capital letter , and use generic name to descript
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

//in-order-to call this fn you need to pass the obj that satisfy the specific type(interface)
const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(`Name:${vehicle.name}`);
  console.log(`year:${vehicle.year}`);
  console.log(`broken:${vehicle.broken}`);
};

printVehicle1(oldCivic);

//------------------------We can express not only primitive values but also (fn,obj,interface,etc)--------------------------------//
interface Vehicle1 {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const printVehicle2 = (vehicle: Vehicle1): void => {
  console.log(vehicle.summary());
};

const oldCivic1 = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

printVehicle2(oldCivic1);

//------------------Functions in interface ----------------------------//
interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic1);
