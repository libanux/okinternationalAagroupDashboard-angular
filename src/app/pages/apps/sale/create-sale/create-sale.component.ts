import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { products } from 'src/app/classes/products.class';
interface Supplier {
  id: number;
  name: string;
}
@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrl: './create-sale.component.scss',
 
})
export class CreateSaleComponent {
  dataSource = products;
  filteredProducts: any[]
  filteredSuppliers: any[]
  paymentOption: string = 'full';
  suppliers: Supplier[] = [
    { id: 1, name: 'Supplier A' },
    { id: 2, name: 'Supplier B' },
    { id: 3, name: 'Supplier C' },
    { id: 4, name: 'Supplier D' },
    // Add more suppliers as needed
  ];
    constructor() {
      this.filteredProducts = this.dataSource
      this.filteredSuppliers = this.suppliers
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

    filterSuppliers() {
      this.filteredSuppliers = this.suppliers
      const query = this.searchQuery.toLowerCase();
      this.filteredSuppliers = this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(query));
    }
  
  
    addNewProduct() {
      // Logic to add a new product
      console.log('Add new product clicked');
    }
  
    displayFn(product: { id: number, name: string }): string {
      return product ? product.name : '';
    }
}
