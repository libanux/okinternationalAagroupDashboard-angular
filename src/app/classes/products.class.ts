export class Product {
    barcode: string;
    itemName: string;
    description: string;
    category: string;
    cost: number;
    sale: number;
  
    constructor(barcode: string, itemName: string, description: string, category: string, cost: number, sale: number) {
      this.barcode = barcode;
      this.itemName = itemName;
      this.description = description;
      this.category = category;
      this.cost = cost;
      this.sale = sale;
    }

    
  }
  
 export const products: Product[] = [
    new Product('1234567890123', 'Apple', 'A fresh red apple', 'Fruits', 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', 'Fruits', 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', 'Dairy', 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', 'Bakery', 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', 'Dairy', 2.0, 3.0),
  ];
  