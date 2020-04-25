import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  constructor(private http:HttpClient) { }

  name = new FormControl('', [
    Validators.required
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  phone = new FormControl('', [
    Validators.required
  ]);

  password = new FormControl('', [
    Validators.required
  ]);

  onNameChange() {
    // console.log(this.name.value);
  }

  onEmailChange() {
    // console.log(this.email.value);
  }

  onPhoneChange() {
    // console.log(this.phone.value);
  }

  onPasswordChange() {
    // console.log(this.phone.value);
  }

  availabilityDropdownList = [
    { item_id: 1, item_text: 'Mon Morn' },
    { item_id: 2, item_text: 'Tue Morn' },
    { item_id: 3, item_text: 'Wed Morn' },
    { item_id: 4, item_text: 'Thu Morn' },
    { item_id: 5, item_text: 'Fri Morn' },
    { item_id: 6, item_text: 'Sat Morn' },
    { item_id: 7, item_text: 'Sun Morn' },
    { item_id: 8, item_text: 'Mon Avo' },
    { item_id: 9, item_text: 'Tue Avo' },
   { item_id: 10, item_text: 'Wed Avo' },
   { item_id: 11, item_text: 'Thu Avo' },
   { item_id: 12, item_text: 'Fri Avo' },
   { item_id: 13, item_text: 'Sat Avo' },
   { item_id: 14, item_text: 'Sun Avo' },
   { item_id: 15, item_text: 'Mon Eve' },
   { item_id: 16, item_text: 'Tue Eve' },
   { item_id: 17, item_text: 'Wed Eve' },
   { item_id: 18, item_text: 'Thu Eve' },
   { item_id: 19, item_text: 'Fri Eve' },
   { item_id: 20, item_text: 'Sat Eve' },
   { item_id: 21, item_text: 'Sun Eve' }
  ];
  
  selectedAvailaibility = this.availabilityDropdownList;
  
  availabilitySettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: false
  };

  onAvailabilityItemSelect(item: any) {
    // console.log(item);
  }

  //Location Picker
  
  public formattedAddress = "";
  public latitude: number;
  public longitude: number;

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAddressSelected: ', result);
    this.formattedAddress = result.formatted_address;
    console.log(this.formattedAddress);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  //Care picker

  careDropdownList = [
    { item_id: 1, item_text: 'Illness' },
    { item_id: 2, item_text: 'Frailty' },
    { item_id: 3, item_text: 'Disability' },
    { item_id: 4, item_text: 'Mental health' },
    { item_id: 5, item_text: 'Addiction' }
  ];

  selectedCare = this.careDropdownList;
  
  careSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: false
  };

  onCareItemSelect(item: any) {
    // console.log(item);
  }

  onRegisterClick() {
    let registerDetails = {
      "name": this.name.value,
      "address": this.formattedAddress,
      "phoneNumber": this.phone.value,
      "email": this.email.value,
      "availabilityFrom": Array.prototype.map.call(this.selectedAvailaibility, function(item) { return item.item_text; }).join(","),
      "willingToDo": Array.prototype.map.call(this.selectedCare, function(item) { return item.item_text; }).join(","),
      "latitude": this.latitude,
      "longitude": this.longitude,
      "password": this.password.value
    };

    let body = JSON.stringify(registerDetails);
    console.log(body);
    this.http.post('https://helptocare-api.azurewebsites.net/api/CareVolunteerActions/registerCareVolunteer', body, httpOptions).subscribe(
        (data: any) => { console.log(data);
        },
        error => {
          console.error("Error saving person!", error);
        }
     );
  }

  ngOnInit() {
  }
}
