import { Injectable } from '@angular/core';
import { LaborList } from './labor';
import { from } from 'rxjs';
import { laborLists } from './labor-data';

@Injectable({
  providedIn: 'root'
})
export class ServicelaborService {

  private laborList: LaborList[] = [];

  private getLabor(): any {
    return from(laborLists);
  }

  constructor() {
    this.getLabor().subscribe((data: any) => this.laborList.push(data));
  }

  public getInvoiceList(): LaborList[] {
    return this.laborList;
  }
  public deleteInvoice(id: number): void {
    this.laborList = this.laborList.filter((CId) => CId.id !== id);
  }
  public addInvoice(invoice: LaborList): void {
    this.laborList.splice(0, 0, invoice);
  }
  public updateInvoice(id: number, invoice: LaborList): void {
    const element = this.laborList.filter((x) => x.id === id);
    const index: number = this.laborList.indexOf(element[0]);
    this.laborList[index] = invoice;
  }
}
