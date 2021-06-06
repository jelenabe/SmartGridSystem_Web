import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-of-state-change-work-plan',
  templateUrl: './history-of-state-change-work-plan.component.html',
  styleUrls: ['./history-of-state-change-work-plan.component.css']
})
export class HistoryOfStateChangeWorkPlanComponent implements OnInit {

  historyModel:any={}

  @Output() newItemEvent = new EventEmitter<any>()

  constructor(private router: Router) { 
    this.historyModel.changedBy= localStorage.getItem('id');
    this.historyModel.dateOfChange = new Date().toString();
  }

  ngOnInit() {
   
  }

  nextHistory(){
    this.historyModel.view = 3;
    this.newItemEvent.emit(this.historyModel);
    
    this.router.navigateByUrl('/newPlan/multimediaAttachments');
  }



}
