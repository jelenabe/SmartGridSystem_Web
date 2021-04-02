import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateProfileComponent } from './activateProfile/activateProfile.component';
import { AllCrewsComponent } from './allCrews/allCrews.component';
import { AllDevicesComponent } from './allDevices/allDevices.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HomeComponent } from './home/home.component';
import { IncidentComponent } from './incident/incident.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
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
import { SafetyDocsComponent } from './safetyDocs/safetyDocs.component';
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
    component: NewIncidentComponent,
    outlet: "primary"
  },
  {
    path: 'newDevice',
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
    component:NewWorkOrderComponent,
    outlet: "primary"
  },
  {
    path: 'newPlan',
    component:NewPlanComponent,
    outlet: "primary"
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
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
