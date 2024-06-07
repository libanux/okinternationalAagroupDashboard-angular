import { AfterViewInit, Component, Inject, Optional, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LaborList } from '../labor';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { labors } from '../labor-data';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-labor-main',
  templateUrl: './labor-main.component.html',
  styleUrl: './labor-main.component.scss',
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

export class LaborMainComponent implements AfterViewInit {

  ShowAddButoon = true;


  Name = 'Name';
  Nationality = 'Nationality';
  Gender = 'Gender';
  Type = 'Type';
  Age = 'Age';
  Cost = 'Cost';
  Note = 'Note';
  Status = 'Status';



  //TABLE COLUMNS
  displayedColumns: string[] = [
    'id',
    'name',
    'nationality',
    'gender',
    'type',
    'age',
    'cost',
    'note',
    'status',
    'action',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: LaborList | null = null;
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  searchText: any;
  totalCount = -1;
  Cancelled = -1;
  Inprogress = -1;
  Completed = -1;

  //TICKETS
  dataSource = new MatTableDataSource(labors);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.totalCount = this.dataSource.data.length;
    this.Completed = this.btnCategoryClick('complete');
    this.Cancelled = this.btnCategoryClick('inactive');
    this.Inprogress = this.btnCategoryClick('InProgress');
    this.dataSource = new MatTableDataSource(labors);
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

    this.Name = 'Name';
    this.Nationality = 'Nationality';
    this.Type = 'Type';
    this.Gender = 'Gender';
    this.Age = 'Age';
    this.Cost = 'Cost'
    this.Note = 'Note';
    this.Status = 'Status';
  }


  //GET THE CATEGORY LENGTH
  btnCategoryClick(val: string): number {
    this.dataSource.filter = val.trim().toLowerCase();
    return this.dataSource.filteredData.length;
  }

  //GET THE STATUS CLASS
  getStatusClass(status: string): string {
    switch (status) {
      case 'inprogress':
        return 'bg-light-warning mat-body-2 f-w-500 p-x-8 p-y-4 f-s-12 rounded-pill';
      case 'complete':
        return 'bg-light-success mat-body-2 f-w-500 p-x-8 p-y-4 f-s-12 rounded-pill';
      case 'inactive':
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
  addRowData(row_obj: LaborList): void {
    const d = new Date();
    this.dataSource.data.unshift({
      id: d.getTime(),
      name: row_obj.name,
      nationality: row_obj.nationality,
      gender: row_obj.gender,
      type: row_obj.type,
      cost: row_obj.cost,
      age: row_obj.age,
      note: row_obj.note,
      status: row_obj.status,
    });
    this.table.renderRows();
  }


  //UPDATE ROW VALUES
  Update(obj: any): void {
    this.ShowAddButoon = false;
    console.log("Hereee")
    this.Name = obj.name
    this.Nationality = obj.nationality
    this.Gender = obj.gender
    this.Type = obj.type
    this.Age = obj.age
    this.Cost = obj.cost
    this.Note = obj.note
    this.Status = obj.status

  }

  //DELETE ROW VALUES
  deleteRowData(row_obj: LaborList): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id !== row_obj.id;
    });
  }
}







