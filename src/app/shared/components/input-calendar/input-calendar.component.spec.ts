import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalendarComponent } from './input-calendar.component';

describe('InputCalendarComponent', () => {
  let component: InputCalendarComponent;
  let fixture: ComponentFixture<InputCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
