import { Component } from '@angular/core';

// components
import { AppWeeklyStatsComponent } from '../../../dashboard-components/weekly-stats/weekly-stats.component';
import { AppYearlySalesComponent } from '../../../dashboard-components/yearly-sales/yearly-sales.component';
import { AppProductPerformanceComponent } from '../../../dashboard-components/product-performance/product-performance.component';
import { AppEarningsComponent } from 'src/app/dashboard-components/earnings/earnings.component';
import { AppTopCardsComponent } from 'src/app/dashboard-components/top-cards/top-cards.component';
import { AppMonthlyRevenueComponent } from 'src/app/dashboard-components/monthly-revenue/monthly-revenue.component';
import { AppRecentTransactionsComponent } from 'src/app/dashboard-components/recent-transactions/recent-transactions.component';
import { AppProductPerformanceTableComponent } from 'src/app/dashboard-components/product-performance-table/product-performance-table.component';
import { AppMedicalproBrandingComponent } from 'src/app/dashboard-components/medicalpro-branding/medicalpro-branding.component';
import { AppShopDailyActivitiesComponent } from 'src/app/dashboard-components/daily-activities/daily-activities.component';
import { AppSocialCardComponent } from 'src/app/dashboard-components/social-card/social-card.component';
import { AppSalesOverviewTwoComponent } from 'src/app/dashboard-components/sales-overview/sales-overview.component';
import { AppTotalSalesComponent } from 'src/app/dashboard-components/total-sales/total-sales.component';
import { AppProductDataComponent } from 'src/app/dashboard-components/product-data/product-data.component';
import { AppRevenueUpdatesComponent } from 'src/app/dashboard-components/revenue-updates/revenue-updates.component';
import { AppMonthlyEarningsComponent } from 'src/app/dashboard-components/monthly-earnings/monthly-earnings.component';
import { AppCustomersComponent } from 'src/app/dashboard-components/customers/customers.component';
import { AppCongratulateCardComponent } from 'src/app/dashboard-components/congratulate-card/congratulate-card.component';
import { AppPurchasesComponent } from 'src/app/dashboard-components/purchases/purchases.component';
import { AppTotalEarningsComponent } from 'src/app/dashboard-components/total-earnings/total-earnings.component';

@Component({
  selector: 'app-dashboard3',
  standalone: true,
  imports: [
    AppWeeklyStatsComponent,
    AppYearlySalesComponent,
    AppProductPerformanceComponent,
    AppEarningsComponent,
    AppTopCardsComponent,
    AppMonthlyRevenueComponent,
    AppRecentTransactionsComponent,
    AppProductPerformanceTableComponent,
    AppMedicalproBrandingComponent,
    AppShopDailyActivitiesComponent,
    AppSocialCardComponent,
    AppSalesOverviewTwoComponent,
    AppTotalSalesComponent,
    AppProductDataComponent,
    AppRevenueUpdatesComponent,
    AppMonthlyEarningsComponent,
    AppCustomersComponent,
    AppCongratulateCardComponent,
    AppPurchasesComponent,
    AppTotalEarningsComponent,
  ],
  templateUrl: './dashboard3.component.html',
})
export class AppDashboard3Component {
  constructor() {}
}
