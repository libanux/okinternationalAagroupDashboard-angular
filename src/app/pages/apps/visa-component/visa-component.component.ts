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

  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  Name = 'Name';
  Destination = 'Destination';
  Duration = 'Duration';
  Hotels = 'Hotels';
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

  Delete(action: string, obj: any): void {
  
  }

  Update(action: string, obj: any): void {
  this.Name = obj.name
  this.Destination = obj.destination
  this.Duration = obj.duration
  this.Hotels = obj.hotels
  this.Date = obj.date
  this.Seats = obj.nbOfSeats
  this.Note = obj.note
  this.Status = obj.status

  }
 
  // tslint:disable-next-line - Disables all
  deleteRowData(row_obj: VisaClass): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id !== row_obj.id;
    });
  }

}
