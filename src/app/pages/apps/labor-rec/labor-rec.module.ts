import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaborMainComponent } from './labor-main/labor-main.component';
import { LaborTableComponent } from './labor-table/labor-table.component';
import { laborRoutes } from './labor-rec-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    RouterModule.forChild(laborRoutes),
    LaborTableComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class LaborRecModule { }
