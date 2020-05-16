import faker from "faker";

export class User {
  
  //we only tell TS that our user object that's going to have
  //the props location contains lat & lng numbers
  //this one is not initialized yet
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location={
        lat:+faker.address.latitude();
        lng:+faker.address.longitude();
    }
  }
  
  markerContent():string {
    return `User name is ${this.name}`;
  }
}
