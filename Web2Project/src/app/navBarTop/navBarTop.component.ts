import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navBarTop',
  templateUrl: './navBarTop.component.html',
  styleUrls: ['./navBarTop.component.css']
})
export class NavBarTopComponent implements OnInit {

  constructor(private login: LoginService,
              private socialAuthService: SocialAuthService) { }

  ngOnInit() {
  }

  logout() {
    this.login.userToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('type');

    this.socialAuthService.signOut();

    console.log('logged out');
  }

}
