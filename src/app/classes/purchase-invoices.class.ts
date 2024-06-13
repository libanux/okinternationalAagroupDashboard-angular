export class PurchaseInvoice {
    id: string;
    supplier: string;
    total: number;
    paid: number;
    balance: number;
    date: String;
  
    constructor(id: string, supplier: string, total: number, paid: number, balance: number, date: string) {
      this.id = id;
      this.supplier = supplier;
      this.total = total;
      this.paid = paid;
      this.balance = balance;
      this.date = date;
    }

    
  }
  
 export const purchaseInvoices: PurchaseInvoice[] = [
    new PurchaseInvoice('INV001', 'Supplier A', 1000, 800, 200, '2024-01-15'),
    new PurchaseInvoice('INV002', 'Supplier B', 2000, 2000, 0, '2024-02-20'),
    new PurchaseInvoice('INV003', 'Supplier C', 1500, 1200, 300, '2024-03-05'),
    new PurchaseInvoice('INV004', 'Supplier D', 2500, 2500, 0, '2024-04-10'),
    new PurchaseInvoice('INV005', 'Supplier E', 3000, 1000, 2000, '2024-05-25')
  ];
  