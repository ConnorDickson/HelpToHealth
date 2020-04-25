import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResourcesAddictionComponent } from './training-resources-addiction.component';

describe('TrainingResourcesAddictionComponent', () => {
  let component: TrainingResourcesAddictionComponent;
  let fixture: ComponentFixture<TrainingResourcesAddictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingResourcesAddictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingResourcesAddictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
