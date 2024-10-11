import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { InputDateTimeComponent } from './components/input-date-time/input-date-time.component';
import { InputCalendarComponent } from './components/input-calendar/input-calendar.component';
import { InputCalendarRangeComponent } from './components/input-calendar-range/input-calendar-range.component';
import { TableComponent } from './components/table/table.component';
import { TableFormComponent } from './components/table-form/table-form.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTimeComponent,
    InputDateTimeComponent,
    InputCalendarComponent,
    InputCalendarRangeComponent,
    TableComponent,
    TableFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
