export class Category {
    id: number;
    CategoryName: string;
  
    constructor(id: number, CategoryName: string) {
      this.id = id;
      this.CategoryName = CategoryName;
    }
  }
  
 export const categories: Category[] = [
    new Category(1, 'Category1'),
    new Category(2, 'Category2'),
    new Category(3, 'Category3'),
    new Category(4, 'Category4'),
    new Category(5, 'Category5')
  ];
  