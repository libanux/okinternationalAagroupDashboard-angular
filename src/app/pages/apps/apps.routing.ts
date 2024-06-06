import { Routes } from '@angular/router';

import { AppChatComponent } from './chat/chat.component';
import { AppNotesComponent } from './notes/notes.component';
import { AppPermissionComponent } from './permission/permission.component';
import { AppEmailComponent } from './email/email.component';
import { DetailComponent } from './email/detail/detail.component';
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
        path: 'chat',
        component: AppChatComponent,
       
      },
      {
        path: 'notes',
        component: AppNotesComponent,
      },
      { path: 'email', redirectTo: 'email/inbox', pathMatch: 'full' },
      {
        path: 'email/:type',
        component: AppEmailComponent,
        children: [
          {
            path: ':id',
            component: DetailComponent,
          },
        ],
      },
      {
        path: 'permission',
        component: AppPermissionComponent,
      },
      {
        path: 'taskboard',
        component: AppTaskboardComponent,
      },
      {
        path: 'tickets',
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
        path: 'viewTicket/:id',
        component:ViewticketComponent
      },
      {
        path: 'viewLabor/:id',
        component:ViewLaborComponent
      },

    ],
  },
];
