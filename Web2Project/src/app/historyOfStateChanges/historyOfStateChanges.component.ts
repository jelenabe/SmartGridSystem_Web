import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historyOfStateChanges',
  templateUrl: './historyOfStateChanges.component.html',
  styleUrls: ['./historyOfStateChanges.component.css']
})
export class HistoryOfStateChangesComponent implements OnInit {

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
    
    this.router.navigateByUrl('/newWorkOrder/multimediaAttachments');
  }

}
