import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateRange } from './date-range';

@Directive({
  selector: '[appDateRangePicker]'
})
export class DateRangePickerDirective {
  @Input() dateRange: DateRange;
  @Output() dateRangeChange: EventEmitter<DateRange> = new EventEmitter<DateRange>();

  constructor(private datePicker: MatDatepicker<any>) {}

  @HostListener('dateChange', ['$event'])
  onDateChange(selectedDate: any) {
    if (!this.dateRange) {
      this.dateRange = new DateRange();
    }

    if (!this.dateRange.startDate) {
      this.dateRange.startDate = selectedDate.value;
    } else if (!this.dateRange.endDate) {
      this.dateRange.endDate = selectedDate.value;
      this.dateRangeChange.emit(this.dateRange);
      this.datePicker.close();
    } else {
      this.dateRange = new DateRange();
      this.dateRange.startDate = selectedDate.value;
    }
  }
}
