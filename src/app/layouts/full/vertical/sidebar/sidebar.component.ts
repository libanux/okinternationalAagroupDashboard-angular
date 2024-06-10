import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LogoIconComponent } from './logo-icon';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from '../../../../material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LogoIconComponent, TablerIconsModule, MaterialModule],
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  constructor() { }
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  ngOnInit(): void { }
}