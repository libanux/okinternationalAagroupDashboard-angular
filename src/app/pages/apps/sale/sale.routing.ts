import { Routes } from '@angular/router';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { SaleInvoiceComponent } from './sale-invoice/sale-invoice.component';



export const SaleRoutes: Routes = [
  {
  path: '',
  children: [
      {path: 'create', component: CreateSaleComponent,},
      {path: 'invoices', component: SaleInvoiceComponent,}
],
},
];
