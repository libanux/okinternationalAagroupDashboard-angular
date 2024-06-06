import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaborMainComponent } from './labor-main/labor-main.component';

export const laborRoutes: Routes = [{
  path: '',
  children: [
    {
      path: 'main',
      component: LaborMainComponent,
    }
  ],
},
];