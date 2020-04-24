import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor() { }

  name = new FormControl('', [
    Validators.required
  ]);

  email = new FormControl('', [
    Validators.required
  ]);

  phone = new FormControl('', [
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

  availabilityDropdownList = [
    { item_id: 1, item_text: 'Mon' },
    { item_id: 2, item_text: 'Tues' },
    { item_id: 3, item_text: 'Wed' },
    { item_id: 4, item_text: 'Thurs' },
    { item_id: 5, item_text: 'Fri' },
    { item_id: 6, item_text: 'Sat' },
    { item_id: 7, item_text: 'Sun' }
  ];
  
  selectedAvailaibility = [
    { item_id: 1, item_text: 'Mon' },
    { item_id: 2, item_text: 'Tues' },
    { item_id: 3, item_text: 'Wed' },
    { item_id: 4, item_text: 'Thurs' },
    { item_id: 5, item_text: 'Fri' },
    { item_id: 6, item_text: 'Sat' },
    { item_id: 7, item_text: 'Sun' }
  ];
  
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

  //Care picker

  careDropdownList = [
    { item_id: 1, item_text: 'Elderly' },
    { item_id: 2, item_text: 'Children' },
    { item_id: 3, item_text: 'Disabled' }
  ];
  
  selectedCare = [
    { item_id: 1, item_text: 'Elderly' },
    { item_id: 2, item_text: 'Children' },
    { item_id: 3, item_text: 'Disabled' }
  ];
  
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
    console.log("Name: ", this.name.value);
    console.log("Email: ", this.email.value);
    console.log("Phone: ", this.phone.value);
    console.log("Availability: ", this.selectedAvailaibility);
    console.log("Address (long, lat): ", this.longitude, this.latitude);
    console.log("Care: ", this.selectedCare);
  }

  ngOnInit() {
  }
}
