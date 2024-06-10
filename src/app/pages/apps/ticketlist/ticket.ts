export class TicketList {
  constructor(
    public _id: number = 0,
    public name: string = '',
    public source: string ='',
    public destination: string = '',
    public duration: string = '',
    public hotels: string = '',
    public numberOfPeople: number = 0,
    public price: number = 0, //this is cost
    public sell: string = '',
    public netprofit: string = '',
    public note: string = '',
    public status: string = '',
  ) {}
}
