import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  modelIncident: any = {
    drafts: 0,
    canceled: 0,
    executing: 2,
    completed: 1,
  };
  modelWorkPlans: any = {
    drafts: 0,
    canceled: 0,
    executing: 2,
    completed: 1,
  };
  modelSafetyDoc: any = {
    drafts: 0,
    canceled: 0,
    executing: 2,
    completed: 1,
  };
  modelWorkOrder: any = {
    drafts: 0,
    canceled: 0,
    executing: 2,
    completed: 1,
  };

  socialUser: SocialUser;
  isLoggedin: boolean;

  constructor(private socialAuthService: SocialAuthService ) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }
}

