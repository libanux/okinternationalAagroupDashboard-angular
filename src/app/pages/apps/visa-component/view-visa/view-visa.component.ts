import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceinvoiceService } from '../../invoice/serviceinvoice.service';
// import { TicketElement } from '../ticketlist.component';

import { TicketList } from '../visa';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { VisaserviceService } from '../visaservice.service';

@Component({
  selector: 'app-view-visa',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './view-visa.component.html',
  styleUrl: './view-visa.component.scss'
})
export class ViewVisaComponent {
  id: any;
  ticketDetail: TicketList;
  displayedColumns: string[] = ['itemName', 'unitPrice', 'unit', 'total'];

  constructor(activatedRouter: ActivatedRoute, private visaservice: VisaserviceService) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    console.log("id",this.id)
    this.ticketDetail = this.visaservice.getTicketList().filter((x) => x?.id === +this.id)[0];
    console.log("Ticket",this.ticketDetail)
  }
}
