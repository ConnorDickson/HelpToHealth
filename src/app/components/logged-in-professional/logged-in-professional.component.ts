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
  
  headers = ["ID", "Name", "Address", "Distance", "Phone", "E-Mail", "Availability", "Types of Care"];

  rows = [
  ]

  public latitude: number;
  public longitude: number;
  public formattedAddress: string;

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAddressSelected: ', result);
    this.formattedAddress = result.formatted_address;
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;

    let address = "https://helptocare-api.azurewebsites.net/api/CareGiverActions/nearLocation?clientLocation=" + this.formattedAddress;
    console.log(address);
    this.http.get(address).subscribe(
        (data:any[]) => {this.rows = [];
          data.forEach(element => {
          this.rows.push({
            "ID" : element.careVolunteer.id,
            "Name": element.careVolunteer.name,
            "Address": element.careVolunteer.address, 
            "Distance": element.distance.text, 
            "Phone": element.careVolunteer.phoneNumber, 
            "E-Mail": element.careVolunteer.email, 
            "Availability": element.careVolunteer.availabilityFrom, 
            "Types of Care": element.careVolunteer.willingToDo
          });
        }); },
        err => console.error(err),
        () => console.log('Done searching users')
      );
  }

  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
  }

}
