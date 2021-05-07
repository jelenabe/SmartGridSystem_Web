import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MyErrorStateMatcher } from '../profile/profile.component';
import { SelectConsumerComponent } from '../select-consumer/select-consumer.component';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-reportOutage',
  templateUrl: './reportOutage.component.html',
  styleUrls: ['./reportOutage.component.css']
})
export class ReportOutageComponent implements OnInit {
  model: any= {};
  matcher = new MyErrorStateMatcher();
  anonymous:boolean= true;

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

  constructor(private profileService: ProfileService, public dialog: MatDialog) { }

  report(){
    console.log(this.model);
    this.profileService.applyChanges(this.model).subscribe(()=>{
      console.log("Applay changes successfull");
    })
  }
  ngOnInit() {
  }

  buttonClicked(options: number){
    if(options==1){

      this.anonymous=true;      
    }else{
      
      this.anonymous=false;
    }
  }
  openDialog(){
    this.anonymous=false;
    const dialogRef = this.dialog.open(SelectConsumerComponent, {width: "80%"});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
