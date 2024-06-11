export class stock {
    barcode: string;
    itemName: string;
    quantity: number;
    previousQuantity: number;
    currentQuantity: number;

    constructor(barcode: string, itemName: string, quantity: number, previousQuantity: number, currentQuantity: number) {
        this.barcode = barcode;
        this.itemName = itemName;
        this.quantity = quantity;
        this.previousQuantity = previousQuantity;
        this.currentQuantity = currentQuantity;
    }
}

export const stockArray: stock[] = [
    new stock('123456789012', 'Item A', 100, 90, 110),
    new stock('234567890123', 'Item B', 50, 60, 45),
    new stock('345678901234', 'Item C', 200, 210, 195),
    new stock('456789012345', 'Item D', 30, 25, 35),
];
