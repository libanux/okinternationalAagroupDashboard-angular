import { Routes } from '@angular/router';

import { AppNotesComponent } from './notes/notes.component';
import { AppPermissionComponent } from './permission/permission.component';
import { AppTaskboardComponent } from './taskboard/taskboard.component';
import { AppContactComponent } from './contact/contact.component';
import { AppInvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { AppAddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { AppInvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AppEditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { LaborRecModule } from './labor-rec/labor-rec.module';
import { ViewLaborComponent } from './labor-rec/view-labor/view-labor.component';
import { LaborMainComponent } from './labor-rec/labor-main/labor-main.component';
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
      {path: 'labor', component: LaborRecModule,},
      {path: 'notes', component: AppNotesComponent,},
      {path: 'email', redirectTo: 'email/inbox', pathMatch: 'full' },
      {path: 'permission',  component: AppPermissionComponent,},
      {path: 'taskboard', component: AppTaskboardComponent,},
      {path: 'products', component: ProductsComponent,},
      {path: 'contacts', component: AppContactComponent,},
      {path: 'admins',  component: AdminsComponent,},
      {path: 'invoice', component: AppInvoiceListComponent,},
      {path: 'addInvoice',  component: AppAddInvoiceComponent,},
      {path: 'viewInvoice/:id', component: AppInvoiceViewComponent,},
      {path: 'editinvoice/:id', component: AppEditInvoiceComponent,},
      {path: 'viewLabor/:id', component:ViewLaborComponent},
      {path: 'labors' ,component:LaborMainComponent},
      {path: 'profile', component:ProfileComponent},
],
},
];
