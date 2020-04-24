import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksVolunteerComponent } from './how-it-works-volunteer.component';

describe('HowItWorksVolunteerComponent', () => {
  let component: HowItWorksVolunteerComponent;
  let fixture: ComponentFixture<HowItWorksVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
