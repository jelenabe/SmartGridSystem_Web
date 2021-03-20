import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './navBar/navBar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncidentComponent } from './incident/incident.component';
import { WorkPlansComponent } from './workPlans/workPlans.component';
import { SafetyDocsComponent } from './safetyDocs/safetyDocs.component';
import { WorkOrdersComponent } from './workOrders/workOrders.component';
import { NewIncidentComponent } from './newIncident/newIncident.component';
import { BasicInformationComponent } from './basicInformation/basicInformation.component';
import { DevicesComponent } from './devices/devices.component';
import { ResolutionComponent } from './resolution/resolution.component';
import { CallsComponent } from './calls/calls.component';
import { CrewComponent } from './crew/crew.component';
import { MultimediaAttachmentsComponent } from './multimediaAttachments/multimediaAttachments.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { NewDeviceComponent } from './newDevice/newDevice.component';
import { NewCallComponent } from './newCall/newCall.component';
import { ReportOutageComponent } from './reportOutage/reportOutage.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { MapComponent } from './map/map.component';
import { NewWorkOrderComponent } from './newWorkOrder/newWorkOrder.component';
import { BasicInformationWorkOrderComponent } from './basicInformationWorkOrder/basicInformationWorkOrder.component';
import { HistoryOfStateChangesComponent } from './historyOfStateChanges/historyOfStateChanges.component';
import { NewPlanComponent } from './newPlan/newPlan.component';
import { BasicInformationWorkPlanComponent } from './basicInformationWorkPlan/basicInformationWorkPlan.component';
import { SwitchingInstructionsComponent } from './switchingInstructions/switchingInstructions.component';
import { NewSafetyDocComponent } from './newSafetyDoc/newSafetyDoc.component';
import { BasicInformationSafetyDocComponent } from './basicInformationSafetyDoc/basicInformationSafetyDoc.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AllDevicesComponent } from './allDevices/allDevices.component';
import { AllCrewsComponent } from './allCrews/allCrews.component';
import { NewCrewComponent } from './newCrew/newCrew.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { NewConsumerComponent } from './newConsumer/newConsumer.component';

@NgModule({
  declarations: [																																						
    AppComponent,
    HomeComponent,
      LoginComponent,
      RegisterComponent,
      NavBarComponent,
      DashboardComponent,
      IncidentComponent,
      WorkPlansComponent,
      SafetyDocsComponent,
      WorkOrdersComponent,
      NewIncidentComponent,
      BasicInformationComponent,
      DevicesComponent,
      ResolutionComponent,
      CallsComponent,
      CrewComponent,
      MultimediaAttachmentsComponent,
      EquipmentComponent,
      NewDeviceComponent,
      NewCallComponent,
      ReportOutageComponent,
      NotificationsComponent,
      ChangePasswordComponent,
      MapComponent,
      NewWorkOrderComponent,
      BasicInformationWorkOrderComponent,
      HistoryOfStateChangesComponent,
      NewPlanComponent,
      BasicInformationWorkPlanComponent,
      SwitchingInstructionsComponent,
      NewSafetyDocComponent,
      BasicInformationSafetyDocComponent,
      ChecklistComponent,
      AllDevicesComponent,
      AllCrewsComponent,
      NewCrewComponent,
      ConsumersComponent,
      NewConsumerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }