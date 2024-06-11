import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CalendarDialogComponent } from './calendar-card/calendar-dialog.component';
import { ProductsService } from 'src/app/services/products.service';
import { Product, products } from 'src/app/classes/products.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
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

export class ProductsComponent implements OnInit {

  ShowAddButoon = true;
  selectedMonth: string = '';

  //TABLE COLUMNS
  displayedColumns: string[] = [
    'barcode',
    'itemName',
    'description',
    'category',
    'cost',
    'sale',
    'action'
  ];

  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: Product | null = null;

  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  // 
  searchText: any;
  totalCount = 0;
  Cancelled = 0;
  Inprogress = 0;
  Completed = 0;

  //MONTHS FOR FILTER DROPDOWN
  months: month[] = [
    { value: 'today', viewValue: 'Today' },
    { value: 'yesterday', viewValue: 'Yesterday' },
    { value: 'last Week', viewValue: 'Last Week' },
    { value: 'Last Month', viewValue: 'Last Month' },
    { value: 'Last Year', viewValue: 'Last Year' },
    { value: 'Calendar', viewValue: 'Custom' },
  ];

 //MAIN PRODUCT ARRAY
 productsArray: any[] = []
 showCalendar: boolean = false;
 selectedDate: Date | null = null; // Adjusted the type to accept null
//PRODUCTS ARRAY
dataSource = new MatTableDataSource(this.productsArray);

  //PRODUCT ON EDIT
  viewPRODUCT: Product
  PRODUCTExample = new Product('', '', '', '', 0, 0);
  editedPRODUCT = new Product('', '', '', '', 0, 0);

constructor(public dialog: MatDialog, private productsService: ProductsService) {
  this.viewPRODUCT = new Product('', '', '', '', 0, 0);
}

ngOnInit(): void {
  this.FETCH_PRODUCTS();
}

onDateSelect(date: Date) {
  console.log('Selected Date:', date);
}

// cancelSelection() {
//     this.showCalendar = false;
//     this.selectedMonth = '';
//     this.selectedDate = null;
// }

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

//FETCH productsArray FROM API
FETCH_PRODUCTS(): void {
    this.productsArray = products;
    this.totalCount = products.length;
    // this.productsService.GET_productsArray().subscribe({
    //   next: (response: any) => {
    //     this.productsArray = response;
    //     this.dataSource = new MatTableDataSource(this.productsArray);
    //     this.totalCount = this.dataSource.data.length;
    //     this.Inprogress = this.btnCategoryClick('pending');
    //     // this.Completed = this.btnCategoryClick('complete');
    //     // this.Cancelled = this.btnCategoryClick('cancelled');
    //   },
    //   error: (error: any) => {
    //     console.log("Error:", error)
    //   },
    //   complete: () => {
    //   }
    // });
}

//ADD PRODUCT
ADD_PRODUCT() {
    this.productsService.ADD_PRODUCT(this.PRODUCTExample).subscribe({
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

//TRIGGER THE DROP DOWN FILTER VALUES
ON_CHANGE_DROPDOWN(value: string) {
    if (value === 'Calendar') {
      this.OPEN_CALENDAR_DIALOG();
    }
    else{
      this.productsService.FILTER_PRODUCT(value).subscribe({
        next: (response: any) => {
          console.log("Response:", response)
          this.productsArray = response;
          this.dataSource = new MatTableDataSource(this.productsArray);
          this.totalCount = this.dataSource.data.length;
          this.Inprogress = this.btnCategoryClick('pending');
        },
        error: (error: any) => {
          console.log("Error:", error)
        },
        complete: () => {
        }
      });
    }
}

//OPEN THE CALENDAR DIALOG
OPEN_CALENDAR_DIALOG(): void {
    const dialogRef = this.dialog.open(CalendarDialogComponent, {
      width: '350px',
      data: { selectedDate: this.selectedDate }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        if (result.startDate && result.endDate) {
          this.selectedMonth = `${result.startDate.toLocaleString('default', { month: 'long' })} - ${result.endDate.toLocaleString('default', { month: 'long' })}`;
          this.productsService.FILTER_PRODUCT("custom").subscribe({
            next: (response: any) => {
              console.log("Response:", response)
              this.productsArray = response;
              this.dataSource = new MatTableDataSource(this.productsArray);
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
      }
    });
}

//UPDATE ROW VALUES
EDIT_PRODUCT(obj: any): void {
  this.ShowAddButoon = false
  this.viewPRODUCT = obj;
  this.editedPRODUCT = obj;
}

CANCEL(){
  this.ShowAddButoon = true;
  this.editedPRODUCT = new Product('', '', '', '', 0, 0);
}

// OPEN UPDATE & DELETE DIALOGS
OPEN_DIALOG(action: string, delPRODUCT: Product): void {
    const dialogRef = this.dialog.open(productsDialogComponent, {
      data: { action, delPRODUCT }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event === 'Delete') {

this.productsService.DELETE_PRODUCT(delPRODUCT).subscribe({
    next: (response: any) => {
        console.log('Response:', response);
         this.FETCH_PRODUCTS()
    },
    error: (error: any) => {console.error('Error:', error);},
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
if (text && text.length > limit) { return text.substring(0, limit) + '...';  }
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
  selector: 'products-dialog-content',
  templateUrl: 'products-dialog-content.html',
})
// tslint:disable-next-line - Disables all
export class productsDialogComponent {
  action: string;
  // tslint:disable-next-line - Disables all
  local_data: any;
  PRODUCT: Product

  constructor(
    public dialogRef: MatDialogRef<productsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Product
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


