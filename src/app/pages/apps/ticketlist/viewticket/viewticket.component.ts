import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceticketService } from '../serviceticket.service';
import { Package } from '../ticket';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrl: './viewticket.component.scss'
})
export class ViewticketComponent {
  id: any;
  ticketDetail: Package;
  displayedColumns: string[] = ['itemName', 'unitPrice', 'unit', 'total'];

  constructor(activatedRouter: ActivatedRoute, private ticketService: ServiceticketService) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    console.log("id",this.id)
    // this.ticketDetail = this.ticketService.getTicketList().filter((x) => x?._id === +this._id)[0];
    console.log("Ticket",this.ticketDetail)
  }
}
