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

  streetFormControl = new FormControl('',[
    Validators.required,
  ]);
  cityFormControl = new FormControl('',[
    Validators.required,
  ]);
  postNumberFormControl = new FormControl('',[
    Validators.required,
  ]);


  matcher = new MyErrorStateMatcher();
  show = true;

  // Ucitati iz baze prijavljenog korisnika
  
  // tslint:disable-next-line: typedef
  getUser()
  {
    this.profileService.getUser().subscribe((response) =>{
      this.model = response;
    });
  }

  model: any = {
    username: "milicaSim23",
    email: "milica.simeunovic@gmail.com",
    name: "Milica",
    lastname: "Simeunovic",
    //birthday: new Date(1997,12,10),
    birthday: "12/10/1997",
    street: "Podrinjska 44",
    city: "Bijeljina",
    postNumber: 76300,
  };
  //a : string = "Mica";
  showSubcauses: boolean = false;
  subcausCrew: string[] = ['Crew1', 'Crew2', 'Crew3'];
  subcauses: string[] = [];

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
  else if (event.value === 'Dispatcher'){
    this.model.UserType = 'Dispetcher';
    this.showSubcauses = false;
  }
}
}

