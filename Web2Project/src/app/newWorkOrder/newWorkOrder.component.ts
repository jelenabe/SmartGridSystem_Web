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
  basicInfoModelParent: any = {};
  buttonClicked: number = 1;

  @ViewChild(BasicInformationWorkOrderComponent) childBasicInformation: BasicInformationWorkOrderComponent;
  @ViewChild(HistoryOfStateChangesComponent) childHistoryOfStateChange: HistoryOfStateChangesComponent;
  @ViewChild(MultimediaAttachmentsComponent) childMultimediaAttachmentsComponent: MultimediaAttachmentsComponent;
  @ViewChild(EquipmentComponent) childEquipmentComponent: EquipmentComponent;

  constructor(private _router: Router,
    private snackBar: MatSnackBar,) { }

  ngOnInit() {
  }

  save(event: any){
    
  }

  checkBasicInfo(basicModel: any){
    if(this.childBasicInformation.basicInfoModel.type == null){
      this.openSnackBar();
    }
    this.model.status = this.basicInfoModelParent.status;
    this.model.createdByUserId = this.basicInfoModelParent.createdByUserId;
    //this.model.incidentId = this.basicInfoModelParent.incidentId;
    this.model.locationId = this.basicInfoModelParent.locationId;
    //this.model.workPlanId = this.basicInfoModelParent.workPlanId
    this.model.company = this.basicInfoModelParent.company;
    this.model.createdOn = this.basicInfoModelParent.createdOn;
    this.model.emergensy = this.basicInfoModelParent.emergensy;
    this.model.endDate = this.basicInfoModelParent.endDate;
    this.model.notes = this.basicInfoModelParent.notes;
    this.model.phone = this.basicInfoModelParent.phone;
    this.model.purpose = this.basicInfoModelParent.purpose;
    this.model.startDate = this.basicInfoModelParent.startDate;
    this.model.type = this.basicInfoModelParent.type;



  }

  openSnackBar() {
    this.snackBar.open('Fileds must be fild!', 'OK', {
      duration: 3000
    });
  }

  changeView(i: number){
    this.buttonClicked = i; 
  }


  
}
