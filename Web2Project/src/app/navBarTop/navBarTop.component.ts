import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navBarTop',
  templateUrl: './navBarTop.component.html',
  styleUrls: ['./navBarTop.component.css']
})
export class NavBarTopComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.login.userToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('type');

    console.log('logged out');
  }

}
