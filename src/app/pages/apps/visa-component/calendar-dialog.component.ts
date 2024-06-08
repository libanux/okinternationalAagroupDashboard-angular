import { Component, Inject } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { DateRange } from './date-range';
import { CalendarWithDateRangeComponent } from './calendar-with-date-range.component';

@Component({
  standalone: true,
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  imports: [MatDialogContent, MatCalendar, MatDialogActions, CalendarWithDateRangeComponent]
})
export class CalendarDialogComponent {

    selectedDate: Date;
    dateRange: DateRange;
  
    constructor(
      public dialogRef: MatDialogRef<CalendarDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { selectedDate: Date | null }
    ) {}
  
    onDateChange(selectedDate: Date) {
      this.selectedDate = selectedDate;
    }
  
    onDateRangeChange(dateRange: DateRange) {
      this.dateRange = dateRange;
    }
  
    onSave(): void {
      console.log(this.dateRange)
      this.dialogRef.close(this.dateRange);
    }
  
    onCancel(): void {
      this.dialogRef.close(null);
    }

}