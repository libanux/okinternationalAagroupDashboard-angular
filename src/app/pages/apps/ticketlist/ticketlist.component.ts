
import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
// import { tickets } from './ticket-data'
import { Package } from './ticket';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PackageService } from 'src/app/services/package.service';
import { CalendarDialogComponent } from './calendar-card/calendar-dialog.component';
import { DateSelectedSignal } from 'src/app/signals/DateSelectedSignal.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticketlist.component.html',
  styleUrl: './ticketlist.component.scss',
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
export class AppTicketlistComponent implements OnInit {

  ShowAddButoon = true;
  selectedMonth: string = '';
  //MAIN PACKAGE ARRAY
  packages: any[] = []
  showCalendar: boolean = false;
  selectedDate: Date | null = null; // Adjusted the type to accept null


  //PACKAGE ON EDIT
  viewPackage: Package

  //TABLE COLUMNS
  displayedColumns: string[] = [
    'name',
    'destination',
    'numberOfPeople',
    'duration',
    'price',
    'hotels',
    'note',
    'status',
    'action'
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: Package | null = null;

  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  searchText: any;
  totalCount = -1;
  Cancelled = -1;
  Inprogress = -1;
  Completed = -1;


  //MONTHS FOR FILTER DROPDOWN
  months: month[] = [
    { value: 'Today', viewValue: 'Today' },
    { value: 'Yesterday', viewValue: 'Yesterday' },
    { value: 'Last Week', viewValue: 'Last Week' },
    { value: 'Last Month', viewValue: 'Last Month' },
    { value: 'Last Year', viewValue: 'Last Year' },
    { value: 'Calendar', viewValue: 'Custom' },
  ];

  //PACKAGES
  dataSource = new MatTableDataSource(this.packages);


  packageExample = new Package(

  );


  constructor(public dialog: MatDialog, private packagesService: PackageService) {
    this.viewPackage = new Package()
  }

  ngOnInit(): void {
    this.FETCH_PACKAGES();
  }
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



  onChange(value: string) {
    if (value === 'Calendar') {
      this.openCalendarDialog();



    }
    else {
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
          this.packagesService.FILTER_PACKAGE("custom").subscribe({
            next: (response: any) => {
              console.log("Response:", response)
              this.packages = response;
              this.dataSource = new MatTableDataSource(this.packages);
              this.totalCount = this.dataSource.data.length;
              this.Inprogress = this.btnCategoryClick('pending');
            },
            error: (error: any) => {
              console.log("Error:", error)
            },
            complete: () => {
            }
          });

        } else {
          this.selectedMonth = 'Custom';
        }
        this.selectedDate = result;
        // Do something with the selected date
      }
    });
  }


  //FETCH PACKAGES FROM API
  FETCH_PACKAGES(): void {
    this.packagesService.GET_PACKAGES().subscribe({
      next: (response: any) => {
        this.packages = response;
        this.dataSource = new MatTableDataSource(this.packages);
        this.totalCount = this.dataSource.data.length;
        this.Inprogress = this.btnCategoryClick('pending');
        // this.Completed = this.btnCategoryClick('complete');
        // this.Cancelled = this.btnCategoryClick('cancelled');
      },
      error: (error: any) => {
        console.log("Error:", error)
      },
      complete: () => {
      }
    });
  }


  //ADD USER
  ADD_PACKAGE() {
    this.packagesService.ADD_PACKAGE(this.packageExample).subscribe({
      next: (response: any) => {
        console.log("Response:", response);
      },
      error: (error: any) => {
        console.error(error);
        console.log("Error::", error);
      },
      complete: () => { }
    });
  }

  //UPDATE ROW VALUES
  Update(obj: any): void {
    this.ShowAddButoon = false
    this.viewPackage = obj;
  }


  // OPEN UPDATE & DELETE DIALOGS
  openDialog(action: string, delPackage: Package): void {
    const dialogRef = this.dialog.open(AppTicketDialogContentComponent, {
      data: { action, delPackage }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event === 'Delete') {
        this.packagesService.DELETE_PACKAGE(delPackage).subscribe({
          next: (response: any) => {
            console.log('Response:', response);
            this.FETCH_PACKAGES()
          },
          error: (error: any) => {
            console.error('Error:', error);
          },
          complete: () => { }
        });
      }
    });
  }

  //GET THE CATEGORY LENGTH
  btnCategoryClick(val: string): number {
    this.dataSource.filter = val.trim().toLowerCase();
    return this.dataSource.filteredData.length;
  }

  //TRUNCATE THE TEXT INTO 20 CHARS
  truncateText(text: string, limit: number): string {
    if (text && text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }

  //GET THE STATUS CLASS
  getStatusClass(status: string): string {
    switch (status) {
      case 'pending':
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

//MONTHS INTERFACE
interface month {
  value: string;
  viewValue: string;
}

@Component({
  // tslint:disable-next-line - Disables all
  selector: 'app-dialog-content',
  templateUrl: 'ticket-dialog-content.html',
})
// tslint:disable-next-line - Disables all
export class AppTicketDialogContentComponent {
  action: string;
  // tslint:disable-next-line - Disables all
  local_data: any;
  package: Package

  constructor(
    public dialogRef: MatDialogRef<AppTicketDialogContentComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Package
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}

