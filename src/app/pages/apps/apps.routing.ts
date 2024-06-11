import { Routes } from '@angular/router';

import { AppNotesComponent } from './notes/notes.component';
import { AppPermissionComponent } from './permission/permission.component';
import { AppContactComponent } from './contact/contact.component';
import { AppInvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { AppAddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { AppInvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AppEditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { AdminsComponent } from './admins/admins.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { StockComponent } from './stock/stock.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SaleComponent } from './sale/sale.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';


export const AppsRoutes: Routes = [
  {
  path: '',
  children: [
      {path: 'stock', component: StockComponent,},
      {path: 'purchase',  component: PurchaseComponent,},
      {path: 'sale',  component: SaleComponent,},     
      {path: 'reports',  component: ReportsComponent,},
      {path: 'settings',  component: SettingsComponent,},     
      {path: 'users',  component: UsersComponent,},
      {path: 'notes', component: AppNotesComponent,},
      {path: 'email', redirectTo: 'email/inbox', pathMatch: 'full' },
      {path: 'permission',  component: AppPermissionComponent,},
      {path: 'products', component: ProductsComponent,},
      {path: 'contacts', component: AppContactComponent,},
      {path: 'admins',  component: AdminsComponent,},
      {path: 'invoice', component: AppInvoiceListComponent,},
      {path: 'addInvoice',  component: AppAddInvoiceComponent,},
      {path: 'viewInvoice/:id', component: AppInvoiceViewComponent,},
      {path: 'editinvoice/:id', component: AppEditInvoiceComponent,},
      {path: 'profile', component:ProfileComponent},
],
},
];
