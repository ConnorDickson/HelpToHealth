import { Component, OnInit } from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;
import { Location } from '@angular-material-extensions/google-maps-autocomplete';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-logged-in-professional',
  templateUrl: './logged-in-professional.component.html',
  styleUrls: ['./logged-in-professional.component.css']
})
export class LoggedInProfessionalComponent implements OnInit {
  
  apiresponse = "";
  headers = ["id", "name", "email", "phoneNumber", "address", "organisationEntityID", "availability", "typesOfCare"];

  rows = [
  ]

  public latitude: number;
  public longitude: number;

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAddressSelected: ', result);
  }

  onLocationSelected(location: Location) {
    this.apiresponse = "called";

    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;

   this.http.get("https://helptocare-api.azurewebsites.net/api/CareGiverActions").subscribe(
      (data:any) => { this.rows = data; this.apiresponse = JSON.stringify(data);},
      err => console.error(err),
      () => console.log('Done searching users')
    );
  }

  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
  }

}
