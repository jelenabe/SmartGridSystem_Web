import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  usertype: any;

  constructor(private router: Router, private loginservice: LoginService ) { }

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


}
