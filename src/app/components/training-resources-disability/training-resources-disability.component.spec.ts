import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResourcesDisabilityComponent } from './training-resources-disability.component';

describe('TrainingResourcesDisabilityComponent', () => {
  let component: TrainingResourcesDisabilityComponent;
  let fixture: ComponentFixture<TrainingResourcesDisabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingResourcesDisabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingResourcesDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
