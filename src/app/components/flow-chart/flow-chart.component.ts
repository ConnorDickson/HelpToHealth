import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.css']
})
export class FlowChartComponent implements OnInit {
  typeofcare = "Illness";


  constructor(fb: FormBuilder) {
  }

  ngOnInit() {
  }

}
