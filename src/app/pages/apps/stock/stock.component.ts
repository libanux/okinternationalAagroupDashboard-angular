import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { stock, stockArray } from 'src/app/classes/stock.class';
import { stocksService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss',
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

export class StockComponent implements OnInit {

  ShowAddButoon = true;
  selectedMonth: string = '';

  //TABLE COLUMNS
  displayedColumns: string[] = [
    'barcode',
    'itemName',
    'quantity',
    'previousQuantity',
    'currentQuantity',
    'action'
  ];

  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: stock | null = null;

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

 //MAIN stock ARRAY
 stocksArray: any[] = []
 showCalendar: boolean = false;
 selectedDate: Date | null = null; // Adjusted the type to accept null
//stockS ARRAY
dataSource = new MatTableDataSource(this.stocksArray);

  //stock ON EDIT
  viewstock: stock
  stockExample = new stock('', '', 0, 0, 0);
  editedstock = new stock( '', '', 0, 0, 0);

constructor(public dialog: MatDialog, private stocksService: stocksService) {
  this.viewstock = new stock( '', '', 0, 0, 0);
}

ngOnInit(): void {
  this.FETCH_STOCKS();
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

//FETCH stocksArray FROM API
FETCH_STOCKS(): void {
    this.stocksArray = stockArray;
    this.totalCount = stockArray.length;
    // this.stocksService.GET_stocksArray().subscribe({
    //   next: (response: any) => {
    //     this.stocksArray = response;
    //     this.dataSource = new MatTableDataSource(this.stocksArray);
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

//ADD stock
ADD_STOCK() {
    this.stocksService.ADD_stock(this.stockExample).subscribe({
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
      this.stocksService.FILTER_stock(value).subscribe({
        next: (response: any) => {
          console.log("Response:", response)
          this.stocksArray = response;
          this.dataSource = new MatTableDataSource(this.stocksArray);
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
    // const dialogRef = this.dialog.open(CalendarDialogComponent, {
    //   width: '350px',
    //   data: { selectedDate: this.selectedDate }
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed', result);
    //   if (result) {
    //     if (result.startDate && result.endDate) {
    //       this.selectedMonth = `${result.startDate.toLocaleString('default', { month: 'long' })} - ${result.endDate.toLocaleString('default', { month: 'long' })}`;
    //       this.stocksService.FILTER_stock("custom").subscribe({
    //         next: (response: any) => {
    //           console.log("Response:", response)
    //           this.stocksArray = response;
    //           this.dataSource = new MatTableDataSource(this.stocksArray);
    //           this.totalCount = this.dataSource.data.length;
    //           this.Inprogress = this.btnCategoryClick('pending');
    //         },
    //         error: (error: any) => {
    //           console.log("Error:", error)
    //         },
    //         complete: () => {
    //         }
    //       });
    //     } else {
    //       this.selectedMonth = 'Custom';
    //     }
    //     this.selectedDate = result;
    //   }
    // });
}

//UPDATE ROW VALUES
EDIT_STOCK(obj: any): void {
  this.ShowAddButoon = false
  this.viewstock = obj;
  this.editedstock = obj;
}

CANCEL(){
  this.ShowAddButoon = true;
  this.editedstock = new stock('', '', 0, 0, 0);
}

// OPEN UPDATE & DELETE DIALOGS
OPEN_DIALOG(action: string, delstock: stock): void {
//     const dialogRef = this.dialog.open(stocksDialogComponent, {
//       data: { action, delstock }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result && result.event === 'Delete') {

// this.stocksService.DELETE_stock(delstock).subscribe({
//     next: (response: any) => {
//         console.log('Response:', response);
//          this.FETCH_stockS()
//     },
//     error: (error: any) => {console.error('Error:', error);},
//     complete: () => { }
//       });
//     }
//   });
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
