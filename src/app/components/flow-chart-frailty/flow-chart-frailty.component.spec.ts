import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowChartFrailtyComponent } from './flow-chart-frailty.component';

describe('FlowChartFrailtyComponent', () => {
  let component: FlowChartFrailtyComponent;
  let fixture: ComponentFixture<FlowChartFrailtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowChartFrailtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowChartFrailtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
