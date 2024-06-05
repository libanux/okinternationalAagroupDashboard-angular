import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  standalone: true,
  template: `
    <div class="branding">
      @if(options.theme === 'light') {
        <a href="/">
          <img
            src="./assets/images/logos/daher-trave-ma2sous.png"
            class="align-middle m-2"
            alt="logo"
          />
        </a>
      }
      @if(options.theme === 'dark') {
        <a href="/">
          <img
          src="./assets/images/logos/daher-trave-ma2sous.png"
            class="align-middle m-2"
            alt="logo"
          />
        </a>
      }
      
    </div>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) { }
}
