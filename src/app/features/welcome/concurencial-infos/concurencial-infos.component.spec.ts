import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurencialInfosComponent } from './concurencial-infos.component';

describe('ConcurencialInfosComponent', () => {
  let component: ConcurencialInfosComponent;
  let fixture: ComponentFixture<ConcurencialInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcurencialInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcurencialInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
