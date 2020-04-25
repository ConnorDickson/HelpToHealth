import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResourcesFrailtyComponent } from './training-resources-frailty.component';

describe('TrainingResourcesFrailtyComponent', () => {
  let component: TrainingResourcesFrailtyComponent;
  let fixture: ComponentFixture<TrainingResourcesFrailtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingResourcesFrailtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingResourcesFrailtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
