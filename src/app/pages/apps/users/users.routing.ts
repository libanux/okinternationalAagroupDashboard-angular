import { Routes } from '@angular/router';
import { AddComponent } from '../admins/add-admin/add.component';


export const UsersRoutes: Routes = [
  {
  path: '',
  children: [
      {path: 'add', component: AddComponent,},
],
},
];
