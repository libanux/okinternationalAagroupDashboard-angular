import { AfterViewInit, Component, Inject, Optional, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LaborList } from '../labor';
import { ServicelaborService } from '../servicelabor.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


const labors: LaborList[] = [
  {
    id: 1,
    name: 'John Doe',
    nationality: 'American',
    gender: 'Male',
    type: 'Skilled',
    cost: '$200/day',
    note: 'Experienced carpenter',
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    nationality: 'British',
    gender: 'Female',
    type: 'Unskilled',
    cost: '$150/day',
    note: 'General laborer',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Ahmed Khan',
    nationality: 'Pakistani',
    gender: 'Male',
    type: 'Skilled',
    cost: '$220/day',
    note: 'Electrician',
    status: 'active'
  },
  {
    id: 4,
    name: 'Maria Garcia',
    nationality: 'Mexican',
    gender: 'Female',
    type: 'Skilled',
    cost: '$250/day',
    note: 'Plumber',
    status: 'active'
  },
  {
    id: 5,
    name: 'Wang Wei',
    nationality: 'Chinese',
    gender: 'Male',
    type: 'Unskilled',
    cost: '$180/day',
    note: 'General laborer',
    status: 'inactive'
  },
  {
    id: 6,
    name: 'Olga Petrova',
    nationality: 'Russian',
    gender: 'Female',
    type: 'Skilled',
    cost: '$230/day',
    note: 'Welder',
    status: 'active'
  },
  {
    id: 7,
    name: 'Carlos Santos',
    nationality: 'Brazilian',
    gender: 'Male',
    type: 'Unskilled',
    cost: '$170/day',
    note: 'General laborer',
    status: 'inactive'
  },
  {
    id: 8,
    name: 'Yuki Tanaka',
    nationality: 'Japanese',
    gender: 'Female',
    type: 'Skilled',
    cost: '$240/day',
    note: 'Painter',
    status: 'active'
  },
  {
    id: 9,
    name: 'Mohammed Ali',
    nationality: 'Egyptian',
    gender: 'Male',
    type: 'Unskilled',
    cost: '$160/day',
    note: 'General laborer',
    status: 'active'
  },
  {
    id: 10,
    name: 'Sofia Rossi',
    nationality: 'Italian',
    gender: 'Female',
    type: 'Skilled',
    cost: '$260/day',
    note: 'Mason',
    status: 'inactive'
  }
];
@Component({
  selector: 'app-labor-main',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './labor-main.component.html',
  styleUrl: './labor-main.component.scss'
})


export class LaborMainComponent  implements AfterViewInit {
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
  'nationality',
  'gender',
  'type',
  'cost',
  'note',
  'status'
];

dataSource = new MatTableDataSource(labors);

constructor(public dialog: MatDialog) { }

ngOnInit(): void {
  this.totalCount = this.dataSource.data.length;
  this.Completed = this.btnCategoryClick('active');
  this.Cancelled = this.btnCategoryClick('inactive');
  this.Inprogress = this.btnCategoryClick('InProgress');
  this.dataSource = new MatTableDataSource(labors);
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
deleteRowData(row_obj: LaborList): boolean | any {
  this.dataSource.data = this.dataSource.data.filter((value, key) => {
    return value.id !== row_obj.id;
  });
}
}

// @Component({
// // tslint:disable-next-line - Disables all
// selector: 'app-dialog-content',
// templateUrl: 'ticket-dialog-content.html',
// })
// // tslint:disable-next-line - Disables all
// export class AppTicketDialogContentComponent {
// action: string;
// // tslint:disable-next-line - Disables all
// local_data: any;

// constructor(
//   public dialogRef: MatDialogRef<AppTicketDialogContentComponent>,
//   @Optional() @Inject(MAT_DIALOG_DATA) public data: LaborList
// ) {
//   this.local_data = { ...data };
//   this.action = this.local_data.action;
// }

// doAction(): void {
//   this.dialogRef.close({ event: this.action, data: this.local_data });
// }

// closeDialog(): void {
//   this.dialogRef.close({ event: 'Cancel' });
// }
// }
