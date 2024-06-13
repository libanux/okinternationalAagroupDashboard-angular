export class Category {
    id: number;
    CategoryName: string;
  
    constructor(id: number, CategoryName: string) {
      this.id = id;
      this.CategoryName = CategoryName;
    }
  }
  
 export const categories: Category[] = [
    new Category(1, 'Banana'),
    new Category(2, 'Apple'),
    new Category(3, 'Bread'),
    new Category(4, 'Milk'),
    new Category(5, 'Eggs')
  ];
  