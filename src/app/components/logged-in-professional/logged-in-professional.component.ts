import { Component, OnInit } from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';

@Component({
  selector: 'app-logged-in-professional',
  templateUrl: './logged-in-professional.component.html',
  styleUrls: ['./logged-in-professional.component.css']
})
export class LoggedInProfessionalComponent implements OnInit {

  headers = ["ID", "Name", "Email", "Availability", "Address", "Types of Care"];

  rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Email" : "21",
      "Availability" : "Fri,Sat,Sun",
      "Address" : "33 Belfast Drive",
      "Types of Care": "Mental Health,Addiction,Frailty"
    },
    {
      "ID" : "2",
      "Name" : "Connor",
      "Email" : "jklj@gmail.com",
      "Availability" : "Mon,Tues,Wed",
      "Address" : "192 Amazing Street",
      "Types of Care": "Frailty"
    },
    {
      "ID" : "3",
      "Name" : "Sean",
      "Email" : "sean@cool.com",
      "Availability" : "Wed,Sat,Sun",
      "Address" : "60 Heh Court",
      "Types of Care": "Frailty,Addiction"
    },
    {
      "ID" : "4",
      "Name" : "Scott",
      "Email" : "scott@okay.com",
      "Availability" : "Mon,Tues,Wed,Thurs,Fri,Sat,Sun",
      "Address" : "<missing>",
      "Types of Care": "Illness,Frailty,Disability,Mental Health,Addiction"
    }
  ]

  public latitude: number;
  public longitude: number;

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAddressSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  constructor() { }

  ngOnInit() {
  }

}
