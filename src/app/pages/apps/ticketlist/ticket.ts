export class TicketList {
  constructor(
    public id: number = 0,
    public title: string = '',
    public subtext: string = '',
    public assignee: string = '',
    public imgSrc: string = '',
    public status: string = '',
    public date: string = ''
  ) {}
}
