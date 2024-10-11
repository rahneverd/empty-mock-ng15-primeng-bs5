import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalendarRangeComponent } from './input-calendar-range.component';

describe('InputCalendarRangeComponent', () => {
  let component: InputCalendarRangeComponent;
  let fixture: ComponentFixture<InputCalendarRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCalendarRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCalendarRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
