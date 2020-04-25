import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResourcesIllnessComponent } from './training-resources-illness.component';

describe('TrainingResourcesIllnessComponent', () => {
  let component: TrainingResourcesIllnessComponent;
  let fixture: ComponentFixture<TrainingResourcesIllnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingResourcesIllnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingResourcesIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
