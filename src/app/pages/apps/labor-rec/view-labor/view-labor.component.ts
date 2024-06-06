import { Component } from '@angular/core';
import { LaborList } from '../labor';
import { ActivatedRoute } from '@angular/router';
import { ServicelaborService } from '../servicelabor.service';

@Component({
  selector: 'app-view-labor',
  templateUrl: './view-labor.component.html',
  styleUrl: './view-labor.component.scss'
})
export class ViewLaborComponent {
  id: any;
  laborDetails: LaborList;
  displayedColumns: string[] = ['itemName', 'unitPrice', 'unit', 'total'];

  constructor(activatedRouter: ActivatedRoute, private laborService: ServicelaborService) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    console.log("id", this.id)
    this.laborDetails = this.laborService.getlaborList().filter((x) => x?.id === +this.id)[0];
    console.log("Ticket", this.laborDetails)
  }
}
