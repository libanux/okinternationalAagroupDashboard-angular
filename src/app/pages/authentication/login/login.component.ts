import { Component, signal } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';import { FeatherModule } from "angular-feather"
import { AuthService, Params_Authenticate } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, FeatherModule],
  templateUrl: './login.component.html',
})
export class AppLoginComponent {
  options = this.settings.getOptions();

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  loading: boolean = false;

  constructor(private authserivece: AuthService, private settings: CoreService, private router: Router) { }


  //LOGIN FUNCTION
  login() {
    const authenticationParams: Params_Authenticate = {
      email: this.form.value.uname ?? undefined,
      password: this.form.value.password ?? undefined // Use nullish coalescing to convert null to undefined
    };

    this.router.navigate(['/apps/products']).then(() => {
      window.scrollTo(0, 0);
    })

      // this.authserivece.SIGN_IN(authenticationParams).subscribe({
      //   next: (response: any) => {
      //     console.log(response)
      //       this.router.navigate(['/apps/package']).then(() => {
      //         window.scrollTo(0, 0);
      //       }),
      //         localStorage.setItem('TICKET', response.token),
      //         localStorage.setItem('userId', response._id)

      //   },
      //   error: (error: any) => {this.loading = false;}
      // });
    
  }

  
}


