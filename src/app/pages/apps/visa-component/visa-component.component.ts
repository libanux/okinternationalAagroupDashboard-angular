import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';


export interface TicketElement {
  id: number
  name: string
  destination: string
  duration: string
  hotels: string
  date: string
  nbOfSeats: number
  note: string
  status: string
}

const tickets: TicketElement[] = [
  {
    id: 1,
    name: 'Package',
    destination: 'Paris',
    duration: '7 days',
    hotels: 'Hotel Paris',
    date: '2023-05-01',
    nbOfSeats: 10,
    note: 'Note',
    status: 'inprogress'
  },
  {
    id: 2,
    name: 'Package',
    destination: 'London',
    duration: '5 days',
    hotels: 'Hotel London',
    date: '2023-06-15',
    nbOfSeats: 8,
    note: 'Note',
    status: 'completed'
  },
  {
    id: 3,
    name: 'Package',
    destination: 'New York',
    duration: '10 days',
    hotels: 'Hotel New York',
    date: '2023-07-22',
    nbOfSeats: 12,
    note: 'Note',
    status: 'completed'
  },
  {
    id: 4,
    name: 'Package',
    destination: 'Tokyo',
    duration: '6 days',
    hotels: 'Hotel Tokyo',
    date: '2023-08-10',
    nbOfSeats: 15,
    note: 'Note',
    status: 'inprogress'
  },
  {
    id: 5,
    name: 'Package',
    destination: 'Sydney',
    duration: '8 days',
    hotels: 'Hotel Sydney',
    date: '2023-09-01',
    nbOfSeats: 20,
    note: 'Note',
    status: 'cancelled'
  },
  {
    id: 6,
    name: 'Package',
    destination: 'Rome',
    duration: '4 days',
    hotels: 'Hotel Rome',
    date: '2023-10-15',
    nbOfSeats: 5,
    note: 'Note',
    status: 'completed'
  },
  {
    id: 7,
    name: 'Package',
    destination: 'Berlin',
    duration: '9 days',
    hotels: 'Hotel Berlin',
    date: '2023-11-05',
    nbOfSeats: 7,
    note: 'Note',
    status: 'completed'
  },
  {
    id: 8,
    name: 'Package',
    destination: 'Moscow',
    duration: '12 days',
    hotels: 'Hotel Moscow',
    date: '2023-12-20',
    nbOfSeats: 10,
    note: 'Note',
    status: 'completed'
  },
  {
    id: 9,
    name: 'Package',
    destination: 'Dubai',
    duration: '7 days',
    hotels: 'Hotel Dubai',
    date: '2024-01-14',
    nbOfSeats: 18,
    note: 'Note',
    status: 'inprogress'
  },
  {
    id: 10,
    name: 'Package',
    destination: 'Barcelona',
    duration: '5 days',
    hotels: 'Hotel Barcelona',
    date: '2024-02-18',
    nbOfSeats: 12,
    note: 'Note',
    status: 'cancelled'
  }
];

@Component({
  selector: 'app-visa-component',
  templateUrl: './visa-component.component.html',
})

export class VisaComponentComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  searchText: any;
  totalCount = -1;
  Cancelled = -1;
  Inprogress = -1;
  Completed = -1;

  displayedColumns: string[] = [
    'id',
    'name',
    'destination',
    'duration',
    'hotels',
    'date',
    'nbOfSeats',
    'note',
    'status',
    'action',  // If you still need an action column
  ];

  dataSource = new MatTableDataSource(tickets);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.totalCount = this.dataSource.data.length;
    this.Completed = this.btnCategoryClick('Completed');
    this.Cancelled = this.btnCategoryClick('Cancelled');
    this.Inprogress = this.btnCategoryClick('InProgress');
    this.dataSource = new MatTableDataSource(tickets);
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

  openDialog(action: string, obj: any): void {
    // obj.action = action;
    // const dialogRef = this.dialog.open(AppTicketDialogContentComponent, {
    //   data: obj,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result.event === 'Add') {
    //     this.addRowData(result.data);
    //   } else if (result.event === 'Update') {
    //     this.updateRowData(result.data);
    //   } else if (result.event === 'Delete') {
    //     this.deleteRowData(result.data);
    //   }
    // });
  }
  // tslint:disable-next-line - Disables all
  // addRowData(row_obj: TicketElement): void {
  //   const d = new Date();
  //   this.dataSource.data.unshift({
  //     id: d.getTime(),
  //     title: row_obj.title,
  //     subtext: row_obj.subtext,
  //     assignee: row_obj.assignee,
  //     status: row_obj.status,
  //     date: row_obj.date,
  //   });
  //   this.table.renderRows();
  // }

  // tslint:disable-next-line - Disables all
  // updateRowData(row_obj: TicketElement): boolean | any {
  //   this.dataSource.data = this.dataSource.data.filter((value, key) => {
  //     if (value.id === row_obj.id) {
  //       value.title = row_obj.title;
  //       value.subtext = row_obj.subtext;
  //       value.assignee = row_obj.assignee;
  //       value.status = row_obj.status;
  //       value.date = row_obj.date;
  //     }
  //     return true;
  //   });
  // }

  // tslint:disable-next-line - Disables all
  deleteRowData(row_obj: TicketElement): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id !== row_obj.id;
    });
  }
}

// @Component({
//   // tslint:disable-next-line - Disables all
//   selector: 'app-dialog-content',
//   templateUrl: '.././ticket-dialog-content.html',
// })
// // tslint:disable-next-line - Disables all
// export class AppTicketDialogContentComponent {
//   action: string;
//   // tslint:disable-next-line - Disables all
//   local_data: any;

//   constructor(
//     public dialogRef: MatDialogRef<AppTicketDialogContentComponent>,
//     @Optional() @Inject(MAT_DIALOG_DATA) public data: TicketElement
//   ) {
//     this.local_data = { ...data };
//     this.action = this.local_data.action;
//   }

//   doAction(): void {
//     this.dialogRef.close({ event: this.action, data: this.local_data });
//   }

//   closeDialog(): void {
//     this.dialogRef.close({ event: 'Cancel' });
//   }
// }
