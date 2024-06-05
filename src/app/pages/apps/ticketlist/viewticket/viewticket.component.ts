import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceinvoiceService } from '../../invoice/serviceinvoice.service';
import { TicketElement } from '../ticketlist.component';

import { ServiceticketService } from '../serviceticket.service';
import { TicketList } from '../ticket';

@Component({
  selector: 'app-viewticket',
  standalone: true,
  imports: [],
  templateUrl: './viewticket.component.html',
  styleUrl: './viewticket.component.scss'
})
export class ViewticketComponent {
  id: any;
  ticketDetail: TicketList;
  displayedColumns: string[] = ['itemName', 'unitPrice', 'unit', 'total'];

  constructor(activatedRouter: ActivatedRoute, private ticketService: ServiceticketService) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    console.log("id",this.id)
    this.ticketDetail = this.ticketService.getTicketList().filter((x) => x?.id === +this.id)[0];
    console.log("Ticket",this.ticketDetail)
  }
}
