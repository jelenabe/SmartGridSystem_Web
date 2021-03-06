import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web2Project';

  constructor(private _router: Router) {
    
   } 

  get isFrontPage():boolean{
    return (this._router.url ==="/" || this._router.url ==="/register" || this._router.url ==="/login");
  }

}
