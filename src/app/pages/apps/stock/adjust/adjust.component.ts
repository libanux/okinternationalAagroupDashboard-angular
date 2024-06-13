import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product, products } from 'src/app/classes/products.class';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrl: './adjust.component.scss'
})
export class AdjustComponent {

  PRODUCTS_ARRAY = products;
  filteredProducts: any[]
  quantity_adjusted = 0;

  New_adjust_Array: Product [] = []
  ADJUST_ARRAY = new MatTableDataSource<Product>([]);

    hide = true;
    hide2 = true;
    conhide = true;
    alignhide = true;
    step = 0;
    panelOpenState = false;

    displayedColumns: string[] = [  
    'barcode',
    'itemName',
    'category',
    'new_quantity_on_hand',
    'quantity_available',
    'quantity_adjusted',
    'action'
      ];
    
      searchQuery: string;
    editRowIndex: number = -1;

onEdit(element: Element, field: string, event: any, rowIndex: number) {
    this.editRowIndex = rowIndex;
     // Set the rowIndex to highlight the editing cell
      // Handle your edit logic here
}

new_quantity_on_hand = 0
ON_CHANGE_ADJUST_QUANTITY (element: any, field: string, event: any, rowIndex: number){
  console.log('element ', element)
  console.log('field ', field)
  console.log('event ', event)
  console.log('rowIndex ', rowIndex)

this.new_quantity_on_hand = element.onHandQuantity + event
    // return element.onHandQuantity*quantity_adjusted
}
    
//FETCH productsArray FROM API
FETCH_ADJUSTS(): void {
  this.ADJUST_ARRAY = new MatTableDataSource(this.New_adjust_Array);
}

ADD_ADUST(object : Product){
  this.New_adjust_Array.push(object);
  this.FETCH_ADJUSTS()
}

ADD_PRODUCT(){

}

REMOVE_ADJUST(){
  this.New_adjust_Array.pop()
  this.FETCH_ADJUSTS()
}

CREATE_ADJUSTEMENT(){

}

filterProducts() {
  // this.filteredProducts = this.dataSource
 const query = this.searchQuery.toLowerCase();
  // this.filteredProducts = this.dataSource.filter(product => product.itemName.toLowerCase().includes(query));
}
  
displayFn(product: { id: number, name: string }): string {
  return product ? product.name : '';
}
  }
  

