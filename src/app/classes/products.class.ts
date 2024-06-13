import { Category, categories } from "./category.class";

export class Product {
    barcode: string;
    itemName: string;
    description: string;
    category: Category = new Category(-1, '');
    cost: number;
    sale: number;
    onHandQuantity: number; // New field for current quantity
    previousQuantity: number; // New field for previous quantity
  
    constructor(barcode: string, itemName: string, description: string, category: Category, cost: number, sale: number, onHandQuantity: number, previousQuantity: number) {
      this.barcode = barcode;
      this.itemName = itemName;
      this.description = description;
      this.category = category;
      this.cost = cost;
      this.sale = sale;
      this.onHandQuantity = onHandQuantity;
      this.previousQuantity = previousQuantity;
    }
}

export const products: Product[] = [
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0, 100, 90), // Example values for onHandQuantity and previousQuantity
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8, 50, 55),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5, 30, 40),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0, 20, 25),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0, 60, 70)
];
