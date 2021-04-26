import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivateProfileComponent } from './activateProfile/activateProfile.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { NavBarTopComponent } from './navBarTop/navBarTop.component';
import { AgmCoreModule } from '@agm/core';
import { FrontPageComponent } from './front-page/front-page.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BasicInformationIncidentsComponent } from './basic-information-incidents/basic-information-incidents.component';
import { MultimediaAttachmentsIncidentsComponent } from './multimedia-attachments-incidents/multimedia-attachments-incidents.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';
import { PieChartComponent } from './pieChart/pieChart.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';
import { IconsDialogComponent } from './icons-dialog/icons-dialog.component';
import { FieldsDialogComponent } from './fields-dialog/fields-dialog.component';
import { StreetDialogComponent } from './street-dialog/street-dialog.component';
import { MapService } from './map/map-service/map.service';
import { GeolocationService } from './map/map-service/geolocation.service';
import { GeocodingService } from './map/map-service/geocoding.service';
import { GoogleMapMarkerDirective } from './map/map-service/google-map-marker.directive';
import { CrewDialogComponent } from './crew-dialog/crew-dialog.component';
import { HistorySafetyDocumentComponent } from './history-safety-document/history-safety-document.component';
import { MultimediaSafetyDocumentComponent } from './multimedia-safety-document/multimedia-safety-document.component';
import { DevicesSafetyDocumentComponent } from './devices-safety-document/devices-safety-document.component';
//import { MatFileUploadModule } from 'angular-material-fileupload';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
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
      NewConsumerComponent,
      ProfileComponent,
      ActivateProfileComponent,
      NavBarTopComponent,
      FrontPageComponent,
      BasicInformationIncidentsComponent,
      MultimediaAttachmentsIncidentsComponent,
      DeviceDialogComponent,
      PieChartComponent,
      LineChartComponent,
      AdminSettingsComponent,
      NotificationDialogComponent,
      IconsDialogComponent,
      FieldsDialogComponent,
      StreetDialogComponent,
      GoogleMapMarkerDirective,
      CrewDialogComponent,
      HistorySafetyDocumentComponent,
      MultimediaSafetyDocumentComponent,
      DevicesSafetyDocumentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    //MatFileUploadModule,
    MatTabsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApcxyVhBRYs-9VqvWcXz0gpPBwmJWAV9o',
      libraries: ['places']
    }),
    ChartsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [MapService,
    GeolocationService,
    GeocodingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
