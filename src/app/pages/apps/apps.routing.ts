import { Routes } from '@angular/router';

import { AppNotesComponent } from './notes/notes.component';
import { AppPermissionComponent } from './permission/permission.component';
import { AppTaskboardComponent } from './taskboard/taskboard.component';
import { AppTicketlistComponent } from './ticketlist/ticketlist.component';
import { AppContactComponent } from './contact/contact.component';
import { AppEmployeeComponent } from './employee/employee.component';
import { AppInvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { AppAddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { AppInvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AppEditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { ViewticketComponent } from './ticketlist/viewticket/viewticket.component';
import { LaborRecModule } from './labor-rec/labor-rec.module';
import { ViewLaborComponent } from './labor-rec/view-labor/view-labor.component';
import { VisaComponentComponent } from './visa-component/visa-component.component';
import { LaborMainComponent } from './labor-rec/labor-main/labor-main.component';
import { TicketsComponent } from './tickets/tickets.component';


export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'visa',
        component: VisaComponentComponent,
      },
      {
        path: 'labor',
        component: LaborRecModule,
      },
      {
        path: 'notes',
        component: AppNotesComponent,
      },
      { path: 'email', redirectTo: 'email/inbox', pathMatch: 'full' },
      {
        path: 'permission',
        component: AppPermissionComponent,
      },
      {
        path: 'taskboard',
        component: AppTaskboardComponent,
      },
      {
        path: '',
        component: AppTicketlistComponent,
      },
      {
        path: 'contacts',
        component: AppContactComponent,
      },
      {
        path: 'employee',
        component: AppEmployeeComponent,
      },
      {
        path: 'invoice',
        component: AppInvoiceListComponent,
      },
      {
        path: 'addInvoice',
        component: AppAddInvoiceComponent,
      },
      {
        path: 'viewInvoice/:id',
        component: AppInvoiceViewComponent,
      },
      {
        path: 'editinvoice/:id',
        component: AppEditInvoiceComponent,
      },
      {
        path: 'viewPackage/:id',
        component:ViewticketComponent
      },
      {
        path: 'viewLabor/:id',
        component:ViewLaborComponent
      },

      {
        path: 'labors',
        component:LaborMainComponent
      },

      {
        path: 'tickets',
        component:TicketsComponent
      },


    ],
  },
];