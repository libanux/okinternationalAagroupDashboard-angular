import { Injectable } from '@angular/core';
import {  Package } from './ticket';
import { from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceticketService {
  private ticketlist: Package[] = [];

  // private getTicket(): any {
  //   return from(tickets);
  // }
  constructor() {
    // this.getTicket().subscribe((data: any) => this.ticketlist.push(data));
    console.log("Ticket list:",this.ticketlist)
  }


  public getTicketList(): Package[] {
    return this.ticketlist;
  }
}
