import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import { LocationService } from '../services/location.service';
import { Location } from '../models/location';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadFileService } from '../services/upload-file.service';

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
  model: any = {};
  modelForSend: any = {};

  showSubcauses: boolean = false;
  subcausCrew: string[] = ['Crew1', 'Crew2', 'Crew3'];
  subcauses: string[] = [];
  location:string[];
  locations: Location[] = [];
  image: string="";
  selectedImage: any = null;
  
  pathFile: any = {};

  show = true;

  constructor(private profileService: ProfileService,
              private locationService: LocationService,
              private router: Router,
              private snackBar: MatSnackBar,
              private uploadService: UploadFileService ) {

  }
  ngOnInit() {
    
    this.getAllLocations();
    this.getUser();

  }
// tslint:disable-next-line: typedef
  getUser()
  {
    var param = localStorage.getItem('id');

    if (param != null){
      this.profileService.getUser(+param).subscribe((response) =>{
      this.model = response;
      const str = this.model.birthday;
      this.model.birthday = str.split('T')[0];
      this.profileService.getFile(this.model.picture).subscribe((bytes) => {
      this.image = 'data:image/png;base64,' + bytes;
      });
    });
  }
  }
  applyChanges(){

    console.log(this.model);

    this.uploadService.uploadFile(this.selectedImage).subscribe((uploadResponse) => {
      this.pathFile = uploadResponse;
      this.model.Picture = this.pathFile.dbPath;

      console.log(this.model);
      this.modelForSend.UserId = this.model.userId;
      this.modelForSend.Name = this.model.name;
      this.modelForSend.Lastname = this.model.lastname;
      this.modelForSend.Email = this.model.email;
      this.modelForSend.Birthady = this.model.birthday;
      this.modelForSend.username = this.model.username;
      this.modelForSend.LocationId = +this.model.locationId;
      this.modelForSend.Picture = this.pathFile.dbPath;

      console.log(this.modelForSend);

      this.profileService.applyChanges(this.modelForSend).subscribe(()=>{
      console.log('Applay changes successfull')
      this.openSnackBar();
      this.router.navigate(['/dashboard']);
      });
    });
  }

  openSnackBar() {
    this.snackBar.open('Applay changes Succesfull!', 'OK', {
      duration: 3000
    });
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
    this.model.UserType = 'Dispatcher';
    this.showSubcauses = false;
  }
   else if (event.value === 'Consumer'){
    this.model.UserType = 'Consumer';
    this.showSubcauses = false;
  }
}
  getAllLocations() {
    this.locationService.getAllLocations().subscribe(
      data => {
        this.locations=data;
        console.log(data);
        console.log(this.locations);
      },
      error => {
        this.getAllLocations();
      }
    )
  }
  formatLocation(location: Location) {
    return `${location.street}, ${location.city}, ${location.postNumber}`;
  }
  onFileSelected(event: any) {
    this.selectedImage = event.target.files;
  }
}


