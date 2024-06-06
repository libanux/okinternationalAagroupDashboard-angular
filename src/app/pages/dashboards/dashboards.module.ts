import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardsRoutes } from './dashboards.routing';
import { AppDashboard3Component } from './dashboard3/dashboard3.component';

@NgModule({
  imports: [
    RouterModule.forChild(DashboardsRoutes),
    AppDashboard3Component
  ],
})
export class DashboardsModule {}
