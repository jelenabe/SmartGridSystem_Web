import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UploadFileService } from '../services/upload-file.service';
import {FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  show = true;
  model: any = {};
  password: any = {};
  selectedImage: any = null;
  pathFile: any = {};
  resolutionFormControl = new FormControl();

  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  birthdayFormControl = new FormControl('', [
    Validators.required,
  ]);
  streetFormControl = new FormControl('', [
    Validators.required,
  ]);
  cityFormControl = new FormControl('', [
    Validators.required,
  ]);
  postNumberFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  showSubcauses: boolean = false;

  subcausCrew: string[] = ['Crew1', 'Crew2', 'Crew3'];
  subcauses: string[] = [];

  constructor(private authService: AuthService, private uploadService: UploadFileService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  register()
  {
    if (!this.checkPasswords()){
      console.log('Passwords doesn\'t match');
      return;
    }
    console.log(this.model);

    this.uploadService.uploadFile(this.selectedImage).subscribe((uploadResponse) => {
      this.pathFile = uploadResponse;
      this.model.Picture = this.pathFile.dbPath;

      console.log(this.model);

      this.authService.register(this.model).subscribe(() => {
        console.log('Registration Successfull!');
      });
    });
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files;
  }
  // tslint:disable-next-line: typedef
  checkPasswords() {
  if (this.model.Password === this.model.PasswordRepete){
    return true;
  }
  else{
    return false;
  }
}

// tslint:disable-next-line: typedef
SelectionChangedCause(event: any)
  {
    if (event.value === 'Crew Member')
    {
      this.subcauses = this.subcausCrew;
      this.showSubcauses = true;
      this.model.UserType = 'Crew Member';
    }
    else if (event.value === 'Worker'){
      this.model.UserType = 'Worker';
      this.showSubcauses = false;
    }
    else if (event.value === 'Dispetcher'){
      this.model.UserType = 'Dispetcher';
      this.showSubcauses = false;
    }
  }
}
