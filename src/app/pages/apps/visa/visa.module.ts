import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { VisaMainComponent } from './visa-main/visa-main.component';
import { VisaTableComponent } from './visa-table/visa-table.component';
import { Visaroutes } from './visa-routing.module'

@NgModule({
  imports: [
    RouterModule.forChild(Visaroutes),
    VisaMainComponent,
    VisaTableComponent
  ]
})
export class VisaModule { }
