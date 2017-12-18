import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsInfosComponent } from './calendars-infos.component';

describe('CalendarsInfosComponent', () => {
  let component: CalendarsInfosComponent;
  let fixture: ComponentFixture<CalendarsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
