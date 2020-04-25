import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowChartAddictionComponent } from './flow-chart-addiction.component';

describe('FlowChartAddictionComponent', () => {
  let component: FlowChartAddictionComponent;
  let fixture: ComponentFixture<FlowChartAddictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowChartAddictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowChartAddictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
