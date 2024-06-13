import { Category, categories } from "./category.class";

export class Product {
    barcode: string;
    itemName: string;
    description: string;
    category: Category = new Category(-1, '');
    cost: number;
    sale: number;
  
    constructor(barcode: string, itemName: string, description: string, category: Category, cost: number, sale: number) {
      this.barcode = barcode;
      this.itemName = itemName;
      this.description = description;
      this.category = category;
      this.cost = cost;
      this.sale = sale;
    }

    
  }
  
  export const products: Product[] = [
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0),
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0),
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0),
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0),
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0),
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0),
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0),
    new Product('1234567890123', 'Apple', 'A fresh red apple', categories[0], 0.5, 1.0),
    new Product('1234567890124', 'Banana', 'A ripe banana', categories[0], 0.3, 0.8),
    new Product('1234567890125', 'Milk', 'A liter of milk', categories[1], 1.0, 1.5),
    new Product('1234567890126', 'Bread', 'A loaf of bread', categories[2], 1.2, 2.0),
    new Product('1234567890127', 'Eggs', 'A dozen eggs', categories[1], 2.0, 3.0),
];