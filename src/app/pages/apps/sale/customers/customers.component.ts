import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Admin } from 'src/app/classes/admin.class';
import { AdminService } from 'src/app/services/Admins.service';
import { UserDialogComponent } from '../../users/users.component';

import { Customer, customersArray } from 'src/app/classes/customers.class';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  showUpdate: boolean = false;
  customers : Customer [] = [];
selectedCustomer: Customer
  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'phone',
    'companyname',
    'balance',
    'actions'
  ];
    
  dataSource = new MatTableDataSource(this.customers);
  columnsToDisplayWithExpand = [...this.displayedColumns];
  
  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  
  constructor(public dialog: MatDialog, public datePipe: DatePipe, private adminService : AdminService) {
    this.selectedCustomer = new Customer('','','','','','', '');
   }
  
  ngOnInit(): void {
    this.FETCH_ADMINS()
    this.dataSource = new MatTableDataSource(this.customers);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  cancelSelection() {
    this.showUpdate = false;
 }
  
  FETCH_ADMINS(){
    this.customers = customersArray
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

  UPDATE_CUSTOMER(customer: any){
    this.showUpdate = true;
    this.selectedCustomer = customer
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


  
  
