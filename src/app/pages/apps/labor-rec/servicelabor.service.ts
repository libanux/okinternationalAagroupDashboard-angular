import { Injectable } from '@angular/core';
import { LaborList } from './labor';
import { from } from 'rxjs';
import { labors } from './labor-data';

@Injectable({
  providedIn: 'root'
})
export class ServicelaborService {

  private laborList: LaborList[] = [];

  private getLabor(): any {
    return from(labors);
  }
  constructor() {
    this.getLabor().subscribe((data: any) => this.laborList.push(data));
    console.log("Labors list:",this.laborList)
  }


  public getlaborList(): LaborList[] {
    return this.laborList;
  }
}
