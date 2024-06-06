import { Injectable } from '@angular/core';
import {  TicketList } from './visa';
import { from } from 'rxjs';
import { ticketLists } from './visa-data';

@Injectable({
  providedIn: 'root'
})
export class VisaserviceService {

  private ticketlist: TicketList[] = [];

  private getTicket(): any {
    return from(ticketLists);
  }
  constructor() {
    this.getTicket().subscribe((data: any) => this.ticketlist.push(data));
    console.log("Ticket list:",this.ticketlist)
  }


  public getTicketList(): TicketList[] {
    return this.ticketlist;
  }
}
