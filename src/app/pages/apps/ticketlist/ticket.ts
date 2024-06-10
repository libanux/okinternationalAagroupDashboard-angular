export class TicketList {
  constructor(
    public id: number = 0,
    public name: string = '',
    public source: string ='',
    public destination: string = '',
    public duration: string = '',
    public hotels: string = '',
    public date: string = '',
    public nbOfSeats: number = 0,
    public cost: string = '',
    public sell: string = '',
    public netprofit: string = '',
    public note: string = '',
    public status: string = '',
  ) {}
}
