import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-changePassword',
  templateUrl: './changePassword.component.html',
  styleUrls: ['./changePassword.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private authService: AuthService,private snackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
  }

  changePassword(pass: any, form: NgForm ) {
    console.log(pass);
    if (pass.NewPassword === pass.RepeatPassword) {
      this.authService.changePassword(localStorage.getItem('id'), pass.OldPassword, pass.NewPassword).subscribe((response) => {
        console.log(response);
        this.openSnackBar();
        this.router.navigate(['/dashboard']);
      });
    } else {
        alert('passwords does not match');
    }
  }

  openSnackBar() {
    this.snackBar.open('Password Changed!' , 'OK', {
      duration: 3000
    });
  }
}
