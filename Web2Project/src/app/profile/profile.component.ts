import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userNameFormControl = new FormControl('',[
    Validators.required,
    Validators.maxLength(15),
  ]);

  nameFormControl = new FormControl('',[
    Validators.required,
  ]);

  lastNameFormControl = new FormControl('',[
    Validators.required,
  ]);

  addressFormControl = new FormControl('',[
    Validators.required,
  ]);


  matcher = new MyErrorStateMatcher();
  show = true;
  model: any = {
    username: "milicaSim23",
    email: "milica.simeunovic@gmail.com",
    name: "Milica",
    lastname: "Simeunovic",
    //birthday: new Date(1997,12,10),
    birthday: "12/10/1997",
    address: "Podrinjska, 44 Bijeljina",
  };
  //a : string = "Mica";

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  applyChanges(){
   
    //ovo raditi kada korisnik klikne da vidi ovu stranicu
    //this.nameFormControl.setValue(this.a);
    console.log(this.model);
    this.profileService.applyChanges(this.model).subscribe(()=>{
      console.log("Applay changes successfull");
    })
  }
}
