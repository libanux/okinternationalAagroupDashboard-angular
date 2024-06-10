
import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
// import { tickets } from './ticket-data'
import { TicketList } from './ticket';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PackageService } from 'src/app/services/package.service';

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


  Name = 'Name';
  Destination = 'Destination';
  Source='Source'
  Duration = 'Duration';
  Hotels = 'Hotels';
  Date = 'Date';
  Seats = 'Seats';
  Cost='Cost';
  Sell='Sell';
  Netprofit='Netprofit'
  Note= 'Note';
  Status = 'Status';


  tickets: any[] =[]


  //TABLE COLUMNS
  displayedColumns: string[] = [
    // '_id',
    'name',
    'destination',
    'numberOfPeople',
    'duration',
    'price',
    'hotels',
    'note',
    'status',

    // 'createdAt',
    // 'updatedAt'
  ];
  
  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: TicketList | null = null;
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  searchText: any;
  totalCount = -1;
  Cancelled = -1;
  Inprogress = -1;
  Completed = -1;

  //TICKETS
  dataSource = new MatTableDataSource(this.tickets);


  constructor(public dialog: MatDialog, private packagesService: PackageService) { }

  ngOnInit(): void {
    this.FETCH_PACKAGES();
    this.dataSource = new MatTableDataSource(this.tickets);
    this.totalCount = this.dataSource.data.length;
    this.Completed = this.btnCategoryClick('Completed');
    this.Cancelled = this.btnCategoryClick('Cancelled');
    this.Inprogress = this.btnCategoryClick('pending');
  
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

    FETCH_PACKAGES(): void {
      this.packagesService.GET_PACKAGES().subscribe({
        next: (response: any) => {
          console.log("Response", response)
          this.tickets = response;
          console.log("Tickets", this.tickets)
          
          // Initialize MatTableDataSource with fetched data
          this.dataSource = new MatTableDataSource(this.tickets);
          console.log("DataSource:", this.dataSource);
        },
        error: (error: any) => { 
          console.log("Error:", error)
        },
        complete: () => { 
          
        }
      });
    }
    

    //GET THE CATEGORY LENGTH
    btnCategoryClick(val: string): number {
      this.dataSource.filter = val.trim().toLowerCase();
      return this.dataSource.filteredData.length;
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

  constructor(
    public dialogRef: MatDialogRef<AppTicketDialogContentComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TicketList
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

