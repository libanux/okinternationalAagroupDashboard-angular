export class TicketList {
    constructor(
      public id: number = 0,
      public name: string = '',
      public destination: string = '',
      public duration: string = '',
      public hotels: string = '',
      public date: string = '',
      public nbOfSeats: number = 0,
      public note: string = '',
      public status: string = '',
    ) {}
  }
  