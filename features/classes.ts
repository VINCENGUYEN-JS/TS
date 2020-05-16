class Vehicle {
  //we're going to take whatever comes in as a first-argument , and will be assign
  //as an instance variable of our vehicle(create a new field)
  constructor(public color: string) {
    this.color = color;
  }

  /**
   * equivalent to
   */

  //color:string
  //constructor(color:string){ this.color = color}

  protected honk(): void {
    console.log("Hokkk");
  }
}

const vehicle = new Vehicle("orange");
vehicle.color;
vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Druuuu");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

//missing an constructor
const car = new Car();
car.startDrivingProcess();

//--- because of inheritance we have to put ---- //
const car1 = new Car(4, "Pink");
car.startDrivingProcess();
// car1.hook();
