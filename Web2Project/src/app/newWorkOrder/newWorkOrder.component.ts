import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BasicInformationWorkOrderComponent } from '../basicInformationWorkOrder/basicInformationWorkOrder.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { HistoryOfStateChangesComponent } from '../historyOfStateChanges/historyOfStateChanges.component';
import { MultimediaAttachmentsComponent } from '../multimediaAttachments/multimediaAttachments.component';

@Component({
  selector: 'app-newWorkOrder',
  templateUrl: './newWorkOrder.component.html',
  styleUrls: ['./newWorkOrder.component.css']
})
export class NewWorkOrderComponent implements OnInit {

  model: any = {};

  @ViewChild(BasicInformationWorkOrderComponent) childBasicInformation: BasicInformationWorkOrderComponent;
  @ViewChild(HistoryOfStateChangesComponent) childHistoryOfStateChange: HistoryOfStateChangesComponent;
  @ViewChild(MultimediaAttachmentsComponent) childMultimediaAttachmentsComponent: MultimediaAttachmentsComponent;
  @ViewChild(EquipmentComponent) childEquipmentComponent: EquipmentComponent;

  constructor(private _router: Router,
    private snackBar: MatSnackBar,) { }

  ngOnInit() {
  }

  save(){

  }

  checkBasicInfo(basicModel: any){
    if(this.childBasicInformation.basicInfoModel.type == null){
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this.snackBar.open('Fileds must be fild!', 'OK', {
      duration: 3000
    });
  }
  
}
