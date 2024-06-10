import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-logoIcon',
  standalone: true,
  template: `
    <div class="branding">
        <a href="/">
          <img
            src="./assets/images/logos/daher-highres-ma2sous.png"
            class="align-middle m-2"
            alt="logo"
          />
        </a>
    </div>
  `,
})
export class LogoIconComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) { }
}
