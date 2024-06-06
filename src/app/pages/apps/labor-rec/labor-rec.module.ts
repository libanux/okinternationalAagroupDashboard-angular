import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaborMainComponent } from './labor-main/labor-main.component';
import { LaborTableComponent } from './labor-table/labor-table.component';
import { laborRoutes } from './labor-rec-routing.module'

@NgModule({
  imports: [
    RouterModule.forChild(laborRoutes),
    LaborMainComponent,
    LaborTableComponent
  ]
})
export class LaborRecModule { }
