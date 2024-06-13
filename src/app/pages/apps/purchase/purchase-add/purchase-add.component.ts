import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { products } from 'src/app/classes/products.class';
import { PurchaseInvoice } from 'src/app/classes/purchase-invoices.class';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrl: './purchase-add.component.scss'
})
export class PurchaseAddComponent {
  dataSource = products;
    constructor() {
console.log("Data",this.dataSource)

    }
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

    displayedColumns: string[] = [  
      'barcode',
      'itemName',
      'description',
      'category',
      'cost',
      'sale',
      ];
    
  
    editRowIndex: number = -1;

    onEdit(element: Element, field: string, event: any, rowIndex: number) {
      this.editRowIndex = rowIndex; // Set the rowIndex to highlight the editing cell
      // Handle your edit logic here
    }
  }
  

