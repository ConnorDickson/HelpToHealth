import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowChartIllnessComponent } from './flow-chart-illness.component';

describe('FlowChartIllnessComponent', () => {
  let component: FlowChartIllnessComponent;
  let fixture: ComponentFixture<FlowChartIllnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowChartIllnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowChartIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
