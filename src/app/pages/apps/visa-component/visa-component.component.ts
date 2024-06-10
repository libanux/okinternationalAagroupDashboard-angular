const ELEMENT_DATA: DateData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low'
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium'
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high'
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical'
  },
  {
    id: 5,
    imagePath: 'assets/images/profile/user-5.jpg',
    uname: 'Micheal Doe',
    
    productName: 'Helping Hands',
    budget: 9.3,
    priority: 'moderate'
  },
];

import { Component, OnInit, ViewChild, effect, signal } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { VisaArray } from './visa-data';
import { VisaClass } from './visaClass';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DateData, month } from 'src/app/classes/DateDropdownClass';
import { DateSelectedSignal } from 'src/app/signals/DateSelectedSignal.service';
import { CalendarDialogComponent } from './calendar-card/calendar-dialog.component';


@Component({
  selector: 'app-visa-component',
  templateUrl: './visa-component.component.html',
  styleUrl: './visa-component.component.scss',
  animations: [
      trigger('detailExpand', [
        state('collapsed', style({ height: '0px', minHeight: '0' })),
        state('expanded', style({ height: '*' })),
        transition(
          'expanded <=> collapsed',
          animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
        ),
      ]),
    ],
})

export class VisaComponentComponent implements OnInit {


  months: month[] = [
    { value: 'Today', viewValue: 'Today' },
    { value: 'Yesterday', viewValue: 'Yesterday' },
    { value: 'Last Week', viewValue: 'Last Week' },
    { value: 'Last Month', viewValue: 'Last Month' },
    { value: 'Last Year', viewValue: 'Last Year' },
    { value: 'Calendar', viewValue: 'Custom' },
  ];

  rangeStart = signal('');
  rangeEnd = signal('');


  ShowAddButoon = true;

  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  Name = 'Name';
  country = 'country';
  Duration = 'Duration';
  sell = 'sell';
  Date = 'Date';
  Seats = 'Seats';
  Note= 'Note';
  Status = 'Status';

  searchText: any;
  totalCount = -1;
  Cancelled = -1;
  Inprogress = -1;
  Completed = -1;

  displayedColumns: string[] = [
    'id',
    'name',
    'country',
    'duration',
    'sell',
    'date',
    'nbOfSeats',
    'note',
    'status',
    'action',  // If you still need an action column
  ];

  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: VisaClass | null = null;
  dataSource = new MatTableDataSource(VisaArray);
  valueDisplayed = ''

  constructor(public dialog: MatDialog, private dateSignal : DateSelectedSignal) {
    effect(()=>(
      this.valueDisplayed = this.rangeStart() + '' + this.rangeEnd()
    )
    )
   }

  onChange(value: string) {
    if (value === 'Calendar') {
      this.openCalendarDialog();
    }

    else{

    }
  }

  openCalendarDialog(): void {
    const dialogRef = this.dialog.open(CalendarDialogComponent, {
      width: '350px',
      data: { selectedDate: this.selectedDate }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        if (result.startDate && result.endDate) {
          this.selectedMonth = `${result.startDate.toLocaleString('default', { month: 'long' })} - ${result.endDate.toLocaleString('default', { month: 'long' })}`;
        } else {
          this.selectedMonth = 'Custom';
        }
        this.selectedDate = result;
        // Do something with the selected date
      }
    });
  }
  
  ngOnInit(): void {
    this.rangeEnd = this.dateSignal.endDate;
    this.rangeStart = this.dateSignal.startDate;
  
    this.totalCount = this.dataSource.data.length;
    this.Completed = this.btnCategoryClick('Completed');
    this.Cancelled = this.btnCategoryClick('Cancelled');
    this.Inprogress = this.btnCategoryClick('InProgress');
    this.dataSource = new MatTableDataSource(VisaArray);
  }

  showCalendar: boolean = false;
  selectedMonth: string = '';
  selectedDate: Date | null = null; // Adjusted the type to accept null

  onDateSelect(date: Date) {
    console.log('Selected Date:', date);
    // Do something with the selected date
  }

  cancelSelection() {
    this.showCalendar = false;
    this.selectedMonth = '';
    this.selectedDate = null;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  btnCategoryClick(val: string): number {
    this.dataSource.filter = val.trim().toLowerCase();
    return this.dataSource.filteredData.length;
  }

  Delete(obj: any): void {
  
  }

  Update(obj: any): void {
    this.ShowAddButoon = false

  this.Name = obj.name
  this.country = obj.country
  this.Duration = obj.duration
  this.sell = obj.sell
  this.Date = obj.date
  this.Seats = obj.nbOfSeats
  this.Note = obj.note
  this.Status = obj.status

  }
 
  
  //EXPAND THE ROW AND CHECK IF THE COLUMN IS ACTION THEN DO NOT EXPAND
  expandRow(event: Event, element: any, column: string): void {
    if (column === 'action') {
      this.expandedElement = element;
    }
    else {
      this.expandedElement = this.expandedElement === element ? null : element;
      event.stopPropagation();
    }
  }

  CancelUpdate(): void {
    this.ShowAddButoon = true

    this.Name = 'Name';
    this.country = 'country';
    this.Duration = 'Duration';
    this.sell = 'sell';
    this.Date = 'Date';
    this.Seats = 'Seats';
    this.Note= 'Note';
    this.Status = 'Status';
  }

  // tslint:disable-next-line - Disables all
  deleteRowData(row_obj: VisaClass): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id !== row_obj.id;
    });
  }

    //GET THE STATUS CLASS
    getStatusClass(status: string): string {
      switch (status) {
        case 'inprogress':
          return 'bg-light-warning mat-body-2 f-w-500 p-x-8 p-y-4 f-s-12 rounded-pill';
        case 'completed':
          return 'bg-light-success mat-body-2 f-w-500 p-x-8 p-y-4 f-s-12 rounded-pill';
        case 'cancelled':
          return 'bg-light-error mat-body-2 f-w-500 p-x-8 p-y-4 f-s-12 rounded-pill';
        default:
          return '';
      }
    }

}
