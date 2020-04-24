import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksOrganisationComponent } from './how-it-works-organisation.component';

describe('HowItWorksOrganisationComponent', () => {
  let component: HowItWorksOrganisationComponent;
  let fixture: ComponentFixture<HowItWorksOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
