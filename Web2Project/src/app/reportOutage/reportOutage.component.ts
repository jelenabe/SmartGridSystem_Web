import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from '../profile/profile.component';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-reportOutage',
  templateUrl: './reportOutage.component.html',
  styleUrls: ['./reportOutage.component.css']
})
export class ReportOutageComponent implements OnInit {
  model: any= {};
  matcher = new MyErrorStateMatcher();

  reasonFormControl = new FormControl('', [
    Validators.required,
  ]);
  commentFormControl = new FormControl('', [
    Validators.required,
  ]);
  hazardFormControl = new FormControl('', [
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

  constructor(private profileService: ProfileService) { }

  report(){
    console.log(this.model);
    this.profileService.applyChanges(this.model).subscribe(()=>{
      console.log("Applay changes successfull");
    })
  }
  ngOnInit() {
  }

}
