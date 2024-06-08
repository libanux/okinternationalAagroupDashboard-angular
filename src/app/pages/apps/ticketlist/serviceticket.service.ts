import { Injectable } from '@angular/core';
import {  TicketList } from './ticket';
import { from } from 'rxjs';
import { tickets } from './ticket-data';


@Injectable({
  providedIn: 'root'
})
export class ServiceticketService {
  private ticketlist: TicketList[] = [];

  private getTicket(): any {
    return from(tickets);
  }
  constructor() {
    this.getTicket().subscribe((data: any) => this.ticketlist.push(data));
    console.log("Ticket list:",this.ticketlist)
  }


  public getTicketList(): TicketList[] {
    return this.ticketlist;
  }
}
