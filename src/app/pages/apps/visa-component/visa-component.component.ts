import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { VisaArray } from './visa-data';
import { VisaClass } from './visaClass';

@Component({
  selector: 'app-visa-component',
  templateUrl: './visa-component.component.html',
    styleUrl: './visa-component.component.scss'
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

  dataSource = new MatTableDataSource(VisaArray);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.totalCount = this.dataSource.data.length;
    this.Completed = this.btnCategoryClick('Completed');
    this.Cancelled = this.btnCategoryClick('Cancelled');
    this.Inprogress = this.btnCategoryClick('InProgress');
    this.dataSource = new MatTableDataSource(VisaArray);
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
  deleteRowData(row_obj: VisaClass): boolean | any {
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
