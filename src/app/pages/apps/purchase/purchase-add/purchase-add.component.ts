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
  filteredProducts: any[]
    constructor() {
      this.filteredProducts = this.dataSource

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
      'action'
      ];
    
      searchQuery: string;
    editRowIndex: number = -1;

    onEdit(element: Element, field: string, event: any, rowIndex: number) {
      this.editRowIndex = rowIndex; // Set the rowIndex to highlight the editing cell
      // Handle your edit logic here
    }



    filterProducts() {
      this.filteredProducts = this.dataSource
      const query = this.searchQuery.toLowerCase();
      this.filteredProducts = this.dataSource.filter(product => product.itemName.toLowerCase().includes(query));
    }
  
    addNewProduct() {
      // Logic to add a new product
      console.log('Add new product clicked');
    }
  
    displayFn(product: { id: number, name: string }): string {
      return product ? product.name : '';
    }
  }
  

