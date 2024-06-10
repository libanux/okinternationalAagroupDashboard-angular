import { Component, ViewChild } from '@angular/core';
import { Tickets } from './tickets';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ticketsArray } from './tickets-data';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
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
export class TicketsComponent {
  ShowAddButoon = true;


  Customer = 'Customer';
  IssueDate = 'IssueDate';
  Description = 'Description';
  Cost = 'Cost';
  Credit  = 'Credit';
  Balance = 'Balance';
  Note= 'Note';
  Status = 'Status';



  //TABLE COLUMNS
  displayedColumns: string[] = [
    'id',
    'customer',
    'issueDate',
    'description',
    'cost',
    'credit',
    'balance',
    'note',
    'status',
    'action',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: Tickets | null = null;
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  searchText: any;
  totalCount = -1;
  Cancelled = -1;
  Inprogress = -1;
  Completed = -1;

  //TICKETS
  dataSource = new MatTableDataSource(ticketsArray);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.totalCount = this.dataSource.data.length;
    this.Completed = this.btnCategoryClick('Completed');
    this.Cancelled = this.btnCategoryClick('Cancelled');
    this.Inprogress = this.btnCategoryClick('InProgress');
    this.dataSource = new MatTableDataSource(ticketsArray);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  //FILTER DATA
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

    this.Customer = 'Customer';
    this.IssueDate = 'IssueDate';
    this.Description = 'Description';
    this.Cost = 'Cost';
    this.Credit = 'Credit';
    this.Balance = 'Balance';
    this.Note= 'Note';
    this.Status = 'Status';
  }


  //GET THE CATEGORY LENGTH
  btnCategoryClick(val: string): number {
    // Define a custom filter predicate for the status field
    this.dataSource.filterPredicate = (data: Tickets, filter: string): boolean => {
      return data.status.toLowerCase().includes(filter);
    };
  
    // Set the filter value to the trimmed and lowercased input string
    this.dataSource.filter = val.trim().toLowerCase();
  
    // Return the length of the filtered data
    return this.dataSource.filteredData.length;
  }
  

  //GET THE STATUS CLASS
  getStatusClass(status: string): string {
    switch (status) {
      case 'InProgress':
        return 'bg-light-warning mat-body-2 f-w-500 p-x-8 p-y-4 f-s-12 rounded-pill';
      case 'Completed':
        return 'bg-light-success mat-body-2 f-w-500 p-x-8 p-y-4 f-s-12 rounded-pill';
      case 'Cancelled':
        return 'bg-light-error mat-body-2 f-w-500 p-x-8 p-y-4 f-s-12 rounded-pill';
      default:
        return '';
    }
  }


  //OPEN UPDATE & DELETE DIALOGS
  openDialog(action: string, obj: any): void {
    // obj.action = action;
    // const dialogRef = this.dialog.open(AppTicketDialogContentComponent, {
    //   data: obj,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result.event === 'Add') {
    //     this.addRowData(result.data);
    //   } 
    //   else if (result.event === 'Delete') {
    //     this.deleteRowData(result.data);
    //   }
    // });
  }


  //ADD ROW VALUES
  addRowData(row_obj: Tickets): void {
    const d = new Date();
    this.dataSource.data.unshift({
      id: d.getTime(),
      customer: row_obj.customer,
      issueDate: row_obj.issueDate,
      description : row_obj.description,
      cost: row_obj.cost,
      credit: row_obj.credit,
      balance: row_obj.balance,
      note: row_obj.note,
      status: row_obj.status,
    });
    this.table.renderRows();
  }


  //UPDATE ROW VALUES
  Update(obj: any): void {
    this.ShowAddButoon = false

  this.Customer = obj.customer
  this.Description = obj.description
  this.IssueDate = obj.issueDate
  this.Cost = obj.cost
  this.Credit = obj.credit
  this.Balance = obj.balance
  this.Note = obj.note
  this.Status = obj.status

  }

  //DELETE ROW VALUES
  deleteRowData(row_obj: Tickets): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: { id: number; }, key: any) => {
      return value.id !== row_obj.id;
    });
  }
  months: month[] = [
    { value: 'mar', viewValue: 'March 2023' },
    { value: 'apr', viewValue: 'April 2023' },
    { value: 'june', viewValue: 'June 2023' },
  ];
}


interface month {
  value: string;
  viewValue: string;
}
