import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCrewsComponent } from './allCrews/allCrews.component';
import { AllDevicesComponent } from './allDevices/allDevices.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { RegisterComponent } from './register/register.component';
import { ReportOutageComponent } from './reportOutage/reportOutage.component';
import { SafetyDocsComponent } from './safetyDocs/safetyDocs.component';
import { WorkOrdersComponent } from './workOrders/workOrders.component';
import { WorkPlansComponent } from './workPlans/workPlans.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'workPlans',
    component: WorkPlansComponent
  },
  {
    path: 'safetyDocs',
    component: SafetyDocsComponent
  },
  {
    path: 'workOrders',
    component: WorkOrdersComponent
  },
  {
    path: 'incidents',
    component: IncidentComponent
  },
  {
    path: 'newIncident',
    component: NewIncidentComponent
  },
  {
    path: 'newDevice',
    component: NewDeviceComponent
  },
  {
    path:'newCall',
    component: NewCallComponent
  },
  {
    path:'reportOutage',
    component: ReportOutageComponent
  },
  {
    path:'notifications',
    component: NotificationsComponent
  },
  {
    path:'changeProfile',
    component: RegisterComponent
  },
  {
    path:'changePassword',
    component: ChangePasswordComponent
  },
  {
    path: 'map',
    component:MapComponent
  },
  {
    path: 'newWorkOrder',
    component:NewWorkOrderComponent
  },
  {
    path: 'newPlan',
    component:NewPlanComponent
  },
  {
    path: 'newSafetyDoc',
    component:NewSafetyDocComponent
  },
  {
    path: 'allDevices',
    component:AllDevicesComponent
  },
  {
    path: 'allCrews',
    component:AllCrewsComponent
  },
  {
    path: 'newCrew',
    component:NewCrewComponent
  },
  {
    path: 'consumers',
    component:ConsumersComponent
  },
  {
    path: 'newConsumer',
    component:NewConsumerComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
