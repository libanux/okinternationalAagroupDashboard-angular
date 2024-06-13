import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SaleRoutes } from './sale.routing';



@NgModule({
  imports: [
    RouterModule.forChild(SaleRoutes),
    FormsModule,
  ],

})
export class SaleModule {}
