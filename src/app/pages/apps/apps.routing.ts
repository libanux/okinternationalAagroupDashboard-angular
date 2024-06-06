import { Routes } from '@angular/router';

import { AppChatComponent } from './chat/chat.component';
import { AppNotesComponent } from './notes/notes.component';
import { AppTodoComponent } from './todo/todo.component';
import { AppPermissionComponent } from './permission/permission.component';
import { AppEmailComponent } from './email/email.component';
import { DetailComponent } from './email/detail/detail.component';
import { AppTaskboardComponent } from './taskboard/taskboard.component';
import { AppFullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { AppTicketlistComponent } from './ticketlist/ticketlist.component';
import { AppContactComponent } from './contact/contact.component';
import { AppCoursesComponent } from './courses/courses.component';
import { AppCourseDetailComponent } from './courses/course-detail/course-detail.component';
import { AppEmployeeComponent } from './employee/employee.component';
import { AppInvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { AppAddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { AppInvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AppEditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { AppBlogsComponent } from './blogs/blogs.component';
import { AppBlogDetailsComponent } from './blogs/details/details.component';
import { ViewticketComponent } from './ticketlist/viewticket/viewticket.component';
import { VisaModule } from './visa/visa.module';
import { LaborRecModule } from './labor-rec/labor-rec.module';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'visa',
        component: VisaModule,
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
        path: 'calendar',
        component: AppFullcalendarComponent,
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
        path: 'todo',
        component: AppTodoComponent,
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
        path: 'courses',
        component: AppCoursesComponent,
      },
      {
        path: 'courses/coursesdetail/:id',
        component: AppCourseDetailComponent,
      },
      {
        path: 'blog/post',
        component: AppBlogsComponent,
      },
      {
        path: 'blog/detail/:id',
        component: AppBlogDetailsComponent,
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
      // {
      // },
    ],
  },
];
