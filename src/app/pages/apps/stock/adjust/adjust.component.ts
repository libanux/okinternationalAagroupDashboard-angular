import { Component } from '@angular/core';
import { Product, products } from 'src/app/classes/products.class';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrl: './adjust.component.scss'
})
export class AdjustComponent {

  ADJUST_ARRAY: Product [] = [];
  PRODUCTS_ARRAY = products;
  filteredProducts: any[]

    constructor() {
      // this.filteredProducts = this.PRODUCTS_ARRAY
}

    hide = true;
    hide2 = true;
    conhide = true;
    alignhide = true;
  

    // 3 accordian
    step = 0;
  
    // setStep(index: number) { this.step = index; }
  
    // nextStep() { this.step++; }
  
    // prevStep() { this.step--; }
  
    panelOpenState = false;

    displayedColumns: string[] = [  
    'barcode',
    'itemName',
    'category',
    'previousQuantity',
    'onHandQuantity',
    'action'
      ];
    
      searchQuery: string;
    editRowIndex: number = -1;

    onEdit(element: Element, field: string, event: any, rowIndex: number) {
      this.editRowIndex = rowIndex; // Set the rowIndex to highlight the editing cell
      // Handle your edit logic here
    }



    filterProducts() {
      // this.filteredProducts = this.dataSource
      const query = this.searchQuery.toLowerCase();
      // this.filteredProducts = this.dataSource.filter(product => product.itemName.toLowerCase().includes(query));
    }
  
    addNewProduct() {
      // Logic to add a new product
      console.log('Add new product clicked');
    }
  
    displayFn(product: { id: number, name: string }): string {
      return product ? product.name : '';
    }
  }
  

