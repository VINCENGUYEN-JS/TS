import { User } from "./User";
import { Company } from "./Company";

//Instructions to every other class
//on how they can be arguments to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent():string;
  color:string
}

export class CustomMap {
  //googleMap is going to be an instance of Map class
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  /**
   * Third approach and the best approach so far is to use interface
   */
  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click',()=>{
      const infoWindow=new google.maps.InfoWindow({
        content:mappable.markerContent()
      })
      infoWindow.open(this.googleMap,marker);
    });

  /**
   *
   * Second approach using | to make the fn more general
   * this will fastly run into the props when there's more than 2 class (class is also a type)
   * User | Company | CarLot | Park
   */

  // addMarker(mappable: User | Company) {
  //   mappable.location; // because of | this can only refer to location prop
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  /**
   * Bad approach ( on first attempt)
   */

  //use class to refer to the type
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng,
  //       }
  //     }
  //   )
}
