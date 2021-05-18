import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser,FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  usertype: any;

  socialUser: SocialUser;
  isLoggedin: boolean;
  user: SocialUser;
  loggedIn: boolean;

  constructor(private router: Router,
              private loginservice: LoginService,
              private socialAuthService: SocialAuthService
      )
      { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef

  login() {
    this.loginservice.login(this.model).subscribe(data => {
      this.usertype = localStorage.getItem('usertype');
      console.log('logged in successfully');
      this.router.navigate(['/', 'dashboard']);
    },
    error => {
     console.log('failed to login');
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);

    this.socialAuthService.authState.subscribe((user) => {
      if (user != null)
      {
        this.router.navigate(['/', 'dashboard']);
      }
    });
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      if (user != null)
      {
        this.router.navigate(['/', 'dashboard']);
      }
    });
  }
  
 

}
