import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResourcesMentalHealthComponent } from './training-resources-mental-health.component';

describe('TrainingResourcesMentalHealthComponent', () => {
  let component: TrainingResourcesMentalHealthComponent;
  let fixture: ComponentFixture<TrainingResourcesMentalHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingResourcesMentalHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingResourcesMentalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
