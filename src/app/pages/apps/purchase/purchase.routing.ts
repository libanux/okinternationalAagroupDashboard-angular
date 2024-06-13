import { Routes } from '@angular/router';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { PurchaseInvoicesComponent } from './purchase-invoices/purchase-invoices.component';


export const PurchaseRoutes: Routes = [
  {
  path: '',
  children: [
      {path: 'add', component: PurchaseAddComponent,},
      {path: 'invoices', component: PurchaseInvoicesComponent,}
],
},
];
