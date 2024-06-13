import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseInvoice } from 'src/app/classes/purchase-invoices.class';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrl: './purchase-add.component.scss'
})
export class PurchaseAddComponent {

    constructor() {}
    hide = true;
    hide2 = true;
    conhide = true;
    alignhide = true;
  
    // 3 accordian
    step = 0;
  
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
  
    panelOpenState = false;

    displayedColumns: string[] = ['id', 'supplier', 'total', 'paid', 'balance', 'date'];
    dataSource = new MatTableDataSource<any>([
      { id: '1', supplier: 'Supplier 1', total: 1000, paid: 500, balance: 500, date: '2024-06-13' },
      { id: '2', supplier: 'Supplier 2', total: 2000, paid: 1500, balance: 500, date: '2024-06-13' },
      { id: '3', supplier: 'Supplier 3', total: 3000, paid: 1000, balance: 2000, date: '2024-06-13' },
      { id: '4', supplier: 'Supplier 4', total: 4000, paid: 4000, balance: 0, date: '2024-06-13' },
      { id: '5', supplier: 'Supplier 5', total: 5000, paid: 2500, balance: 2500, date: '2024-06-13' }
    ]);
  
    onEdit(element: any, column: keyof PurchaseInvoice, value: any) {
      element[column] = value;
    }
  }
  

