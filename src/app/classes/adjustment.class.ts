export class Adjustment {
  id: string;
  dateCreation: string;
  LastModifiedTime: string;
  LastModifiedUser: string;
  adjustedItems: string;
  user: string;
  description: string;

  constructor(id: string, dateCreation: string, LastModifiedTime: string, LastModifiedUser: string, adjustedItems: string, user: string, description: string) {
      this.id = id;
      this.dateCreation = dateCreation;
      this.LastModifiedTime = LastModifiedTime;
      this.LastModifiedUser = LastModifiedUser;
      this.adjustedItems = adjustedItems;
      this.user = user;
      this.description = description;
  }
}

// Example array of Adjustment objects
export const adjustments: Adjustment[] = [
  new Adjustment("1", "2024-06-14", "12:00 PM", "John Doe", "Item1, Item2", "Admin", "Adjusted item quantities"),
  new Adjustment("2", "2024-06-15", "10:30 AM", "Jane Smith", "Item3, Item4", "Manager", "Corrected inventory discrepancies"),
  new Adjustment("1", "2024-06-14", "12:00 PM", "John Doe", "Item1, Item2", "Admin", "Adjusted item quantities"),
  new Adjustment("2", "2024-06-15", "10:30 AM", "Jane Smith", "Item3, Item4", "Manager", "Corrected inventory discrepancies"),
];
