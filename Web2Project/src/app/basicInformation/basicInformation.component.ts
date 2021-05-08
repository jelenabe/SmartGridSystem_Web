import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { WorkPlanService } from '../services/workPlan.service';
import { WorkPlansComponent } from '../workPlans/workPlans.component';

@Component({
  selector: 'app-basicInformation',
  templateUrl: './basicInformation.component.html',
  styleUrls: ['./basicInformation.component.css']
})
export class BasicInformationComponent implements OnInit {

  model: any = {};
  crews: any = [];
  currentDate: any;

  
  typeFormControl = new FormControl('', [
    Validators.required,
  ]);
  startDateFormControl = new FormControl('', [
    Validators.required,
  ]);
  endDateFormControl = new FormControl('', [
    Validators.required,
  ]);
  purposeFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(private workPlanService: WorkPlanService) {

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.crews = ['Ekipa1', 'Ekipa2', 'Ekipa3'];
    this.currentDate = new Date();
  }
  openIncidentDialog(){
  }
  openWorkRequestDialog(){

  }
  openCrewDialog(){

  }

}
