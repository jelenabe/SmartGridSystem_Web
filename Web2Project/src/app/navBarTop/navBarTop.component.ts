import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-navBarTop',
  templateUrl: './navBarTop.component.html',
  styleUrls: ['./navBarTop.component.css']
})
export class NavBarTopComponent implements OnInit {

  model: any = {};
  image = '';

  constructor(private login: LoginService,
              private socialAuthService: SocialAuthService,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.getUserInfo();
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

  getUserInfo(): void{
    const param = localStorage.getItem('id');

    if (param != null){
      this.profileService.getUser(+param).subscribe((response) => {
      this.model = response;

      if (this.model.userType === 3){
        this.model.userType = 'Admin';
      }
      else if (this.model.userType === 0)
      {
        this.model.userType = 'Crew Member';
      }
      else if (this.model.userType === 1)
      {
        this.model.userType = 'Dispatcher';
      }
      else if (this.model.userType === 2)
      {
        this.model.userType = 'Worker';
      }
      else if (this.model.userType === 4)
      {
        this.model.userType = 'Consumer';
      }

      this.profileService.getFile(this.model.picture).subscribe((bytes) => {
        this.image = 'data:image/png;base64,' + bytes;
      });
      });
    }
  }
}
