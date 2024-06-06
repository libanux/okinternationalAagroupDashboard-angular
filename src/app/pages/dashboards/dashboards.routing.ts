import { Routes } from '@angular/router';
import { AppDashboard3Component } from './dashboard3/dashboard3.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppDashboard3Component,
       
      },
    ],
  },
];
