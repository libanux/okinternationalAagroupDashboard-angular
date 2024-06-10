import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'Modernize Angular Admin Template';

  isLoggedIn = false;
  ticket: string | undefined;

  ngOnInit(): void {
    this.ticket = localStorage.getItem('TICKET')!;
  
    if (this.ticket.length > 0) {
      this.isLoggedIn = true;
      console.log("true")
    } else {
      this.isLoggedIn = false;   
        console.log("false")

    }
  }
  
  
  
}
