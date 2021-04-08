import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  modelIncident: any = {
    drafts: 0,
    canceled: 0,
    executing: 2,
    completed: 1,
  };
  modelWorkPlans: any = {
    drafts: 0,
    canceled: 0,
    executing: 2,
    completed: 1,
  };
  modelSafetyDoc: any = {
    drafts: 0,
    canceled: 0,
    executing: 2,
    completed: 1,
  };
  modelWorkOrder: any = {
    drafts: 0,
    canceled: 0,
    executing: 2,
    completed: 1,
  };

  constructor() { }

  ngOnInit() {
  }
}

