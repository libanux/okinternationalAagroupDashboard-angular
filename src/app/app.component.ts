import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'Daher Travel';
  isLoggedIn = false;

  constructor(private router:Router){}

  ngOnInit(): void {
  
    this.router.navigate(['/apps/products']).then(() => {
      window.scrollTo(0, 0);
    })

  }
  
  
  
}
