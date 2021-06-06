import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BasicInformationWorkOrderComponent } from '../basicInformationWorkOrder/basicInformationWorkOrder.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { HistoryOfStateChangesComponent } from '../historyOfStateChanges/historyOfStateChanges.component';
import { MultimediaAttachmentsComponent } from '../multimediaAttachments/multimediaAttachments.component';
import { WorkRequestService } from '../services/work-request.service';

@Component({
  selector: 'app-newWorkOrder',
  templateUrl: './newWorkOrder.component.html',
  styleUrls: ['./newWorkOrder.component.css']
})
export class NewWorkOrderComponent implements OnInit {
  buttonClicked: number = 1;

  model: any = {};
 
  basicInfoModelParent: any = {};
  historyModelParent: any = {};
  multimediaModelParent: any = {};
  equipmentModelParent: any = {};
  
  allrequests: any = {}

  @ViewChild(BasicInformationWorkOrderComponent) childBasicInformation: BasicInformationWorkOrderComponent;
  @ViewChild(HistoryOfStateChangesComponent) childHistoryOfStateChange: HistoryOfStateChangesComponent;
  @ViewChild(MultimediaAttachmentsComponent) childMultimediaAttachmentsComponent: MultimediaAttachmentsComponent;
  @ViewChild(EquipmentComponent) childEquipmentComponent: EquipmentComponent;

  constructor(private router: Router,
    private snackBar: MatSnackBar,
    private requestService: WorkRequestService) { 
      this.model.equipment = [];
    }

  ngOnInit() {
  }


  save(){
    if(this.model.equipment.length==0){
      this.openSnackBar();
    }else{
      this.requestService.createNewWorkRequest(this.model).subscribe(response =>{
        this.openSnackBarSucces();
        this.router.navigate(['workOrders']);
      });
    }
  }

  cancle(){
    this.openSnackBarCancle();
    this.router.navigate(['workOrders']);
  }

  checkBasicInfo(basicModel: any){
    this.changeView(basicModel.view);
    if(this.childBasicInformation.basicInfoModel.type == null){
      this.openSnackBar();
    }
    else
    {
      this.model.status = basicModel.status;
      this.model.createdByUserId = basicModel.createdByUserId;
      this.model.incidentId = basicModel.incidentId;
      this.model.locationId = basicModel.locationId;
      //this.model.workPlanId = basicModel.workPlanId
      this.model.company = basicModel.company;
      this.model.createdOn = basicModel.createdOn;
      this.model.emergency = basicModel.emergency;
      this.model.endDate = basicModel.endDate;
      this.model.notes = basicModel.notes;
      this.model.phone = basicModel.phone;
      this.model.purpose = basicModel.purpose;
      this.model.startDate = basicModel.startDate;
      this.model.createdOn= basicModel.createdOn;
      this.model.type = basicModel.type;
      this.openSnackBarSucces();
    }
  }

  checkHistory(event: any){
    this.changeView(event.view);
    if(this.childHistoryOfStateChange.historyModel.historyType == null){
      this.openSnackBar();
    }
    else{
      this.model.dateOfChange = event.dateOfChange;
      this.model.changedByUserId = event.changedBy;
      this.model.historyType = event.historyType;
      this.openSnackBarSucces();
      console.log(this.model);
    }
  }

  checkMultimedia(event: any){
    this.changeView(event.view);
    if(this.childMultimediaAttachmentsComponent.multimediaModel.pictures != null){
      
      this.model.pictures = event.pictures;
      this.openSnackBarSucces();
      console.log(this.model);
    }
  }

  checkEquipment(event: any){

    event.EquipmentIds.forEach((element: { deviceId: number; }) => {
      this.model.equipment.push(element);
    });
    console.log(this.model);
  }

  changeView(i: number){
    this.buttonClicked = i; 
  }

  openSnackBarSucces(){
    this.snackBar.open('Successfully added!', 'OK', {
      duration: 3000
    });
  }
  openSnackBar() {
    this.snackBar.open('Fileds must be filed!', 'OK', {
      duration: 3000
    });
  }
  openSnackBarCancle() {
    this.snackBar.open('Canceled!', 'OK', {
      duration: 3000
    });
  }


  
}
