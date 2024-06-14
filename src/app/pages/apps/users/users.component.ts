import { DatePipe } from '@angular/common';
import { Component, Inject, Optional, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Admin, adminsArray } from 'src/app/classes/admin.class';
import { AdminService } from 'src/app/services/Admins.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  admins : Admin [] = [];

  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'type',
    'action'
  ];
    
  searchText: any;
  dataSource = new MatTableDataSource(this.admins);
  columnsToDisplayWithExpand = [...this.displayedColumns];
  
  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  
  constructor(public dialog: MatDialog, public datePipe: DatePipe, private adminService : AdminService) { }
  
  ngOnInit(): void {
    this.FETCH_ADMINS()
    this.dataSource = new MatTableDataSource(this.admins);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
  FETCH_ADMINS(){
    this.admins = adminsArray
      // this.adminService.GET_ALL_ADMINS().subscribe({
      //   next: (response: any) => {
      //     console.log(response)
      //     this.admins = response
      //     console.log(this.dataSource)
      //   },
      //   error: (error) => {},
      //   complete: () => {}
      // });
  }
  
  APPLY_FILTER(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OPEN_DIALOG(action: string, obj: any): void {
      obj.action = action;
      const dialogRef = this.dialog.open(UserDialogComponent, {
        data: obj,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result.event === 'Add') {
          this.ADD_ADMIN(result.data);
        } else if (result.event === 'Update') {
          this.UPDATE_ADMIN(result.data);
        } else if (result.event === 'Delete') {
          this.DELETE_ADMIN(result.data);
      }
    });
  }
  
  // tslint:disable-next-line - Disables all
  ADD_ADMIN(row_obj: Admin): void {
      // this.dataSource.data.unshift({
      //   id: this.admins.length + 1,
      //   Name: row_obj.Name,
      //   Position: row_obj.Position,
      //   Email: row_obj.Email,
      //   Mobile: row_obj.Mobile,
  
      //   DateOfJoining: new Date(),
      //   Salary: row_obj.Salary,
      //   Projects: row_obj.Projects,
      //   imagePath: row_obj.imagePath,
      // });
      // this.dialog.open(AppAddEmployeeComponent);
    this.table.renderRows();
  }
  
  // tslint:disable-next-line - Disables all
  UPDATE_ADMIN(row_obj: Admin): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
        // if (value.id === row_obj.id) {
          // value.Name = row_obj.Name;
          // value.Position = row_obj.Position;
          // value.Email = row_obj.Email;
          // value.Mobile = row_obj.Mobile;
          // value.DateOfJoining = row_obj.DateOfJoining;
          // value.Salary = row_obj.Salary;
          // value.Projects = row_obj.Projects;
          // value.imagePath = row_obj.imagePath;
        // }
    return true;
  });
  }
  
  expandedElement: Admin | null = null;
  //EXPAND THE ROW AND CHECK IF THE COLUMN IS ACTION THEN DO NOT EXPAND
  EXPAND_RAW(event: Event, element: any, column: string): void {
      if (column === 'action') 
        { this.expandedElement = element; }
  
      else {
        this.expandedElement = this.expandedElement === element ? null : element;
        event.stopPropagation();
          }
  }
  
  // tslint:disable-next-line - Disables all
  DELETE_ADMIN(row_obj: Admin): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      // return value.id !== row_obj.id;
    });
  }
  
  }

  @Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-dialog-content',
    templateUrl: './users-dialog.component.html',
    styleUrl: './users-dialog.component.scss'
  })
  // tslint:disable-next-line: component-class-suffix
  export class UserDialogComponent {
    action: string;
    // tslint:disable-next-line - Disables all
    local_data: any;
    selectedImage: any = '';
    joiningDate: any = '';
  
    constructor(
      public datePipe: DatePipe,
      public dialogRef: MatDialogRef<UserDialogComponent>,
      // @Optional() is used to prevent error if no data is passed
      @Optional() @Inject(MAT_DIALOG_DATA) public data: Admin,
    ) {
      this.local_data = { ...data };
      this.action = this.local_data.action;
      if (this.local_data.DateOfJoining !== undefined) {
        this.joiningDate = this.datePipe.transform(
          new Date(this.local_data.DateOfJoining),
          'yyyy-MM-dd',
        );
      }
      if (this.local_data.imagePath === undefined) {
        this.local_data.imagePath = 'assets/images/profile/user-1.jpg';
      }
    }
  
    
    typeOptions = [
      { value: 'office', viewValue: 'Office' },
      { value: 'admin', viewValue: 'Admin' },

    ];
    doAction(): void {
      this.dialogRef.close({ event: this.action, data: this.local_data });
    }
  
    closeDialog(): void {
      this.dialogRef.close({ event: 'Cancel' });
    }
  
    selectFile(event: any): void {
      if (!event.target.files[0] || event.target.files[0].length === 0) {
        // this.msg = 'You must select an image';
        return;
      }
      const mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        // this.msg = "Only images are supported";
        return;
      }
      // tslint:disable-next-line - Disables all
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line - Disables all
      reader.onload = (_event) => {
        // tslint:disable-next-line - Disables all
        this.local_data.imagePath = reader.result;
      };
    }
  
    selectedPermission: string = ''; // Track the selected permission
  
    toggleSubPermissions(permission: string) {
      if (this.selectedPermission === permission) {
        this.selectedPermission = ''; // If the same permission is clicked again, close it
      } else {
        this.selectedPermission = permission; // Otherwise, set the selected permission
      }
    }
  }
  
  