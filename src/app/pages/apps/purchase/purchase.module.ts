import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PurchaseRoutes } from './purchase.routing';



@NgModule({
  imports: [
    RouterModule.forChild(PurchaseRoutes),
    FormsModule,
  ],

})
export class PurchaseModule {}
