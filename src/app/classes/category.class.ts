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
    new Category(2, 'Tefeha'),
    new Category(3, 'Khebbez'),
    new Category(4, 'Rez'),
    new Category(5, 'Apple')
  ];
  