import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateProfileComponent } from './activateProfile/activateProfile.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AllCrewsComponent } from './allCrews/allCrews.component';
import { AllDevicesComponent } from './allDevices/allDevices.component';
import { BasicInformationIncidentsComponent } from './basic-information-incidents/basic-information-incidents.component';
import { BasicInformationComponent } from './basicInformation/basicInformation.component';
import { BasicInformationWorkOrderComponent } from './basicInformationWorkOrder/basicInformationWorkOrder.component';
import { CallsComponent } from './calls/calls.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { CrewComponent } from './crew/crew.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesComponent } from './devices/devices.component';
import { EditConsumerComponent } from './edit-consumer/edit-consumer.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentWPComponent } from './equipmentWP/equipmentWP.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HistoryOfStateChangeWorkPlanComponent } from './history-of-state-change-work-plan/history-of-state-change-work-plan.component';
import { HistoryOfStateChangesComponent } from './historyOfStateChanges/historyOfStateChanges.component';
import { HomeComponent } from './home/home.component';
import { IncidentComponent } from './incident/incident.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MultimediaAttachmentsIncidentsComponent } from './multimedia-attachments-incidents/multimedia-attachments-incidents.component';
import { MultimediaAttachmentsWPComponent } from './multimedia-attachmentsWP/multimedia-attachmentsWP.component';
import { MultimediaAttachmentsComponent } from './multimediaAttachments/multimediaAttachments.component';
import { NewCallComponent } from './newCall/newCall.component';
import { NewConsumerComponent } from './newConsumer/newConsumer.component';
import { NewCrewComponent } from './newCrew/newCrew.component';
import { NewDeviceComponent } from './newDevice/newDevice.component';
import { NewIncidentComponent } from './newIncident/newIncident.component';
import { NewPlanComponent } from './newPlan/newPlan.component';
import { NewSafetyDocComponent } from './newSafetyDoc/newSafetyDoc.component';
import { NewWorkOrderComponent } from './newWorkOrder/newWorkOrder.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReportOutageComponent } from './reportOutage/reportOutage.component';
import { ResolutionComponent } from './resolution/resolution.component';
import { SafetyDocsComponent } from './safetyDocs/safetyDocs.component';
import { SwitchingInstructionsComponent } from './switchingInstructions/switchingInstructions.component';
import { WorkOrdersComponent } from './workOrders/workOrders.component';
import { WorkPlansComponent } from './workPlans/workPlans.component';


const routes: Routes = [
  { path: '',
    component: FrontPageComponent, 
    outlet: "front"
  },
  {
    path: 'home',
    component: HomeComponent,
    outlet: "primary",
  },
  {
    path: 'register',
    component: RegisterComponent,
    outlet: "front"
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: "front"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    outlet: "primary",
  },
  {
    path: 'workPlans',
    component: WorkPlansComponent,
    outlet: "primary"
  },
  {
    path: 'safetyDocs',
    component: SafetyDocsComponent,
    outlet: "primary"
  },
  {
    path: 'workOrders',
    component: WorkOrdersComponent,
    outlet: "primary"
  },
  {
    path: 'incidents',
    component: IncidentComponent,
    outlet: "primary"
  },
  {
    path: 'newIncident',
    redirectTo: '/newIncident/basic-information',
    pathMatch: 'full',
    outlet: "primary"
  },
  {
    path: 'newIncident',
    component: NewIncidentComponent,
    outlet: "primary",
    children:
    [
      {
        path: 'basic-information',
        component: BasicInformationIncidentsComponent
      },
      {
        path: 'basic-information/:id',
        component: BasicInformationIncidentsComponent
      },
      {
        path: 'devices/:id',
        component: DevicesComponent
      },
      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'resolution/:id',
        component: ResolutionComponent
      },
      {
        path: 'resolution',
        component: ResolutionComponent
      },
      {
        path: 'calls/:id',
        component: CallsComponent
      },
      {
        path: 'calls',
        component: CallsComponent
      },
      {
        path: 'crews/:id',
        component: CrewComponent
      },
      {
        path: 'crews',
        component: CrewComponent
      },
      {
        path: 'multimedia/:id',
        component: MultimediaAttachmentsIncidentsComponent
      },
      {
        path: 'multimedia',
        component: MultimediaAttachmentsIncidentsComponent
      }
    ]
  },
  {
    path: 'newDevice',
    component: NewDeviceComponent,
    outlet: "primary"
  },
  { 
    path: 'newDevice/:id',
    component: NewDeviceComponent,
    outlet: "primary"
  },
  {
    path:'newCall',
    component: NewCallComponent,
    outlet: "primary"
  },
  {
    path:'reportOutage',
    component: ReportOutageComponent,
    outlet: "primary"

  },
  {
    path:'notifications',
    component: NotificationsComponent,
    outlet: "primary"
  },
  {
    path:'changeProfile',
    component: ProfileComponent,
    outlet: "primary"
  },
  {
    path:'changePassword',
    component: ChangePasswordComponent,
    outlet: "primary"
  },
  {
    path: 'map',
    component:MapComponent,
    outlet: "primary"
  },
  {
    path: 'newWorkOrder',
    redirectTo: '/newWorkOrder/basicInformation',
    pathMatch: 'full',
    outlet: "primary"
  },
  {
    path: 'newWorkOrder',
    component:NewWorkOrderComponent,
    outlet: "primary",
    children: [
      {
        path: 'basicInformation',
        component: BasicInformationWorkOrderComponent
      },
      {
        path: 'historyOfStateChange',
        component: HistoryOfStateChangesComponent
      },
      {
        path: 'equipment',
        component: EquipmentComponent
      },
      {
        path: 'multimediaAttachments',
        component: MultimediaAttachmentsComponent
      },
    ]
  },
  {
    path: 'newPlan',
    redirectTo: '/newPlan/basicInformation',
    pathMatch: 'full',
    outlet: "primary"
  },
  {
    path: 'newPlan',
    component:NewPlanComponent,
    outlet: "primary",
    children: [
      {
        path: 'basicInformation',
        component: BasicInformationComponent
      },
      {
        path: 'historyOfStateChange',
        component: HistoryOfStateChangeWorkPlanComponent
      },
      {
        path: 'equipment',
        component: EquipmentWPComponent
      },
      {
        path: 'multimediaAttachments',
        component: MultimediaAttachmentsWPComponent
      },
      {
        path: 'switchingInstruction',
        component: SwitchingInstructionsComponent
      }
    ]
  },
  {
    path: 'newSafetyDoc',
    component:NewSafetyDocComponent,
    outlet: "primary"
  },
  {
    path: 'allDevices',
    component:AllDevicesComponent,
    outlet: "primary"
  },
  {
    path: 'allCrews',
    component:AllCrewsComponent,
    outlet: "primary"
  },
  {
    path: 'newCrew',
    component:NewCrewComponent,
    outlet: "primary"
  },
  {
    path: 'consumers',
    component:ConsumersComponent,
    outlet: "primary"
  },
  {
    path: 'newConsumer',
    component:NewConsumerComponent,
    outlet: "primary"
  },
  {
    path: 'activateProfile',
    component:ActivateProfileComponent,
    outlet: "primary"
  },
  {
    path: 'adminSettings',
    component:AdminSettingsComponent,
    outlet: "primary"
  },
  {
    path: 'edit-consumer/:id',
    component:EditConsumerComponent,
    outlet: "primary"
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
