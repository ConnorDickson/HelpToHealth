import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInVolunteerComponent } from './logged-in-volunteer.component';

describe('LoggedInVolunteerComponent', () => {
  let component: LoggedInVolunteerComponent;
  let fixture: ComponentFixture<LoggedInVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
