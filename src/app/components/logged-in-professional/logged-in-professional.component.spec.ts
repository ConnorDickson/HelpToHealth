import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInProfessionalComponent } from './logged-in-professional.component';

describe('LoggedInProfessionalComponent', () => {
  let component: LoggedInProfessionalComponent;
  let fixture: ComponentFixture<LoggedInProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
