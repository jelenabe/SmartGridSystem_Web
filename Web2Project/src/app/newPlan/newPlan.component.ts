import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BasicInformationComponent } from '../basicInformation/basicInformation.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { EquipmentWPComponent } from '../equipmentWP/equipmentWP.component';
import { HistoryOfStateChangeWorkPlanComponent } from '../history-of-state-change-work-plan/history-of-state-change-work-plan.component';
import { HistoryOfStateChangesComponent } from '../historyOfStateChanges/historyOfStateChanges.component';
import { MultimediaAttachmentsWPComponent } from '../multimedia-attachmentsWP/multimedia-attachmentsWP.component';
import { MultimediaAttachmentsComponent } from '../multimediaAttachments/multimediaAttachments.component';
import { WorkPlanService } from '../services/workPlan.service';
import { SwitchingInstructionsComponent } from '../switchingInstructions/switchingInstructions.component';

@Component({
  selector: 'app-newPlan',
  templateUrl: './newPlan.component.html',
  styleUrls: ['./newPlan.component.css']
})
export class NewPlanComponent implements OnInit {
  buttonClicked: number = 1;
 
  model: any = {};

  basicInfoModelParent: any = {};
  historyModelParent: any = {};
  multimediaModelParent: any = {};
  equipmentModelParent: any = {};
  instructionModelParent: any = {};

  allplans: any = {}

  @ViewChild(BasicInformationComponent) childBasicInformation: BasicInformationComponent;
  @ViewChild(HistoryOfStateChangeWorkPlanComponent) childHistoryOfStateChange: HistoryOfStateChangeWorkPlanComponent;
  @ViewChild(MultimediaAttachmentsWPComponent) childMultimediaAttachmentsComponent: MultimediaAttachmentsWPComponent;
  @ViewChild(EquipmentWPComponent) childEquipmentComponent: EquipmentWPComponent;
  @ViewChild(SwitchingInstructionsComponent) childInstructionComponent: SwitchingInstructionsComponent;

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private planService: WorkPlanService) {
              this.model.equipment = [];
     }

  ngOnInit() {
  }
  
  save(): void{
    if(this.model.equipment.length==0){
      this.openSnackBar();
    }else{
      this.planService.createNewWorkPlan(this.model).subscribe(response =>{
        this.openSnackBarSucces();
        this.router.navigate(['workPlans']);
      });
    }
  }

  cancle(){
    this.openSnackBarCancle();
    this.router.navigate(['workPlans']);
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
      this.model.workRequestId = basicModel.workRequestId
      this.model.crewId = basicModel.crewtId
      this.model.company = basicModel.company;
      this.model.createdOn = basicModel.createdOn;
      this.model.endDate = basicModel.endDate;
      this.model.notes = basicModel.notes;
      this.model.phone = basicModel.phoneNumber;
      this.model.purpose = basicModel.purpose;
      this.model.startDate = basicModel.startDate;
      this.model.createdOn= basicModel.documentCreatedOn;
      this.model.type = basicModel.type;
      this.openSnackBarSucces();
    }
  }

  checkInstruction(event: any){

    if(event.instructions != null){
      this.model.instructions = event.instructions;
    }
    console.log(this.model);
  }

  checkHistory(event: any){
    this.changeView(event.view);
    if (this.childHistoryOfStateChange.historyModel.historyType == null){
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
    this.changeView(5);
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
