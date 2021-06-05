import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicInformationComponent } from '../basicInformation/basicInformation.component';

@Component({
  selector: 'app-newPlan',
  templateUrl: './newPlan.component.html',
  styleUrls: ['./newPlan.component.css']
})
export class NewPlanComponent implements OnInit {

  newPlan:boolean = false;

  @ViewChild(BasicInformationComponent) childBasicInformation: BasicInformationComponent;

  constructor() { }

  ngOnInit() {
  }

}
