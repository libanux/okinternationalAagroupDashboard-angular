
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  productName: string;
  budget: number;
  priority: string;
}

const ELEMENT_DATA: productsData[] = [
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

interface month {
  value: string;
  viewValue: string;
}


import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { VisaArray } from './visa-data';
import { VisaClass } from './visaClass';
import { animate, state, style, transition, trigger } from '@angular/animations';


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
    { value: 'mar', viewValue: 'March 2023' },
    { value: 'apr', viewValue: 'April 2023' },
    { value: 'june', viewValue: 'June 2023' },
  ];

  ShowAddButoon = true;

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

  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: VisaClass | null = null;
  
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

  Delete(obj: any): void {
  
  }

  Update(obj: any): void {
    this.ShowAddButoon = false

  this.Name = obj.name
  this.Destination = obj.destination
  this.Duration = obj.duration
  this.Hotels = obj.hotels
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
    this.Destination = 'Destination';
    this.Duration = 'Duration';
    this.Hotels = 'Hotels';
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
