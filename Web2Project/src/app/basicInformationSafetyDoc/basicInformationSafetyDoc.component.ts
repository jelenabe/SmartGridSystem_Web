import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicInformationSafetyDoc',
  templateUrl: './basicInformationSafetyDoc.component.html',
  styleUrls: ['./basicInformationSafetyDoc.component.css']
})
export class BasicInformationSafetyDocComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  workPlans:string[] = ['none', 'WP1', 'WP2', 'WP3'];
  workPlan_FormControl= new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
