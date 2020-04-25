import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowChartDisabilityComponent } from './flow-chart-disability.component';

describe('FlowChartDisabilityComponent', () => {
  let component: FlowChartDisabilityComponent;
  let fixture: ComponentFixture<FlowChartDisabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowChartDisabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowChartDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
