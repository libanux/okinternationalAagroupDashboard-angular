import { Component } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [MaterialModule, FeatherModule],
  templateUrl: './earnings.component.html',
})
export class AppEarningsComponent {}
