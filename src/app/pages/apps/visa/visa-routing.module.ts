import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisaMainComponent } from './visa-main/visa-main.component';

export const Visaroutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main',
        component: VisaMainComponent,
      }
    ],
  },
];

