import { Injectable } from '@angular/core';
import { VisaClass } from './visaClass';
import { from } from 'rxjs';
import { VisaArray } from './visa-data';

@Injectable({
  providedIn: 'root'
})
export class VisaserviceService {

  private visaArray: VisaClass[] = [];

  constructor() {
    this.getVisa().subscribe((data: any) => this.visaArray.push(data));
    console.log("Visa array :",this.visaArray)
  }

  private getVisa(): any {
    return from(VisaArray);
  }

  public getVisaArray(): VisaClass[] {
    return this.visaArray;
  }
}
