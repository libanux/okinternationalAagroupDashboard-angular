import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersRoutes } from './users.routing';




@NgModule({
  imports: [
    RouterModule.forChild(UsersRoutes),
    FormsModule,
  ],

})
export class UsersModule {}
