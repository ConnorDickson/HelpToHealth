import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatRadioButton, MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.css']
})
export class FlowChartComponent implements OnInit {
  typeofcare = "Illness";
  section1value = "";
  section2avalue = "";
  section2bvalue = "";

  constructor(fb: FormBuilder) {
  }

  onRadio1Change(mrChange: MatRadioChange) {
    this.section1value = mrChange.value
  }

  onRadio2aChange(mrChange: MatRadioChange) {
    this.section2avalue = mrChange.value
  }

  onRadio2bChange(mrChange: MatRadioChange) {
    this.section2bvalue = mrChange.value
  }

  ngOnInit() {
  }

}
