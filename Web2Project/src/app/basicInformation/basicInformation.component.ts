import { Component, OnInit } from '@angular/core';
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

  constructor(private workPlanService: WorkPlanService) {

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.crews = ['Ekipa1', 'Ekipa2', 'Ekipa3'];
    this.currentDate = new Date();
  }
  // tslint:disable-next-line: typedef
  save(){
    console.log(this.model);
    this.workPlanService.save(this.model).subscribe(() => {
      console.log('Save successfull');
    });
  }

}
