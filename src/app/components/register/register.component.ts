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
  selected = 'Volunteer';
  
  name = new FormControl('', [
    Validators.required,
    Validators.min(1)
  ]);

  onNameChange() {
    console.log(this.name.value);
    console.log(this.name.valid);
  }

  constructor() { }

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

  ngOnInit() {
  }
}