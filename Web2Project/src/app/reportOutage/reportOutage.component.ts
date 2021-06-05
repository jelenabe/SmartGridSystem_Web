import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MyErrorStateMatcher } from '../profile/profile.component';
import { SelectConsumerComponent } from '../select-consumer/select-consumer.component';
import { ProfileService } from '../services/profile.service';
import { ReportOutageService } from '../services/reportOutage.service';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Field } from '../models/field';
import { FieldsDialogComponent } from '../fields-dialog/fields-dialog.component';

@Component({
  selector: 'app-reportOutage',
  templateUrl: './reportOutage.component.html',
  styleUrls: ['./reportOutage.component.css']
})
export class ReportOutageComponent implements OnInit {
  model: any= {};
  modelForShow:any ={}
  matcher = new MyErrorStateMatcher();
  anonymous:boolean= true;
  res: Field;

  display: boolean=true;
  
  location:string[];
  locations: Location[] = [];

  @ViewChild(SelectConsumerComponent) select : SelectConsumerComponent;


  constructor(private outageService: ReportOutageService, public dialog: MatDialog,
    private locationService: LocationService,
    private snackBar: MatSnackBar,
    private router: Router, private adminService:AdminService) {
    
     }

  report(){
    console.log(this.model);
    this.outageService.report(this.model).subscribe(()=>{
      console.log("Applay changes successfull");
      this.openSnackBar();
      this.router.navigate(['']);

    })
  }
  openSnackBar() {
    this.snackBar.open('Report outage successfull' , 'OK', {
      duration: 3000
    });
  }
  ngOnInit() {
    this.getAllLocations();
    this.getFieldSettings();
  }

  getFieldSettings(){
    this.adminService.getFileds().subscribe(response => {
      this.res=response;
      
    });
  }

  buttonClicked(options: number){
    if(options==1){

      this.anonymous=true;      
    }else{
      
      this.anonymous=false;
    }
  }
  openDialog(event: any){
    this.anonymous=false;
    const dialogRef = this.dialog.open(SelectConsumerComponent, {width: "80%"});

    dialogRef.afterClosed().subscribe(event => {
      console.log(event);
      this.modelForShow.name=event.name;
      this.modelForShow.lastname=event.lastname;
      this.modelForShow.phone= event.phone;
      this.model.locationId=(event.locationId).toString();
      this.model.consumerId=(event.consumerId).toString();
      this.modelForShow.location=event.street + ', ' + event.city + ', ' + event.postNumber;
    });
  }
  getAllLocations() {
    this.locationService.getAllLocations().subscribe(
      data => {
        this.locations=data;
        console.log(data);
        console.log(this.locations)
      },
      error => {
        this.getAllLocations();
      }
    )
  }
  formatLocation(location: Location) {
    return `${location.street}, ${location.city}, ${location.postNumber}`;
  }

}
