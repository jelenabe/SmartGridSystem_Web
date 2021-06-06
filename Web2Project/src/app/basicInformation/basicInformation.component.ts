import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Crew } from '../allCrews/allCrews.component';
import { Incident } from '../models/incident';
import { Location } from '../models/location';
import { WorkRequest } from '../models/work-request';
import { CrewService } from '../services/crew.service';
import { IncidentService } from '../services/incident.service';
import { LocationService } from '../services/location.service';
import { ProfileService } from '../services/profile.service';
import { WorkRequestService } from '../services/work-request.service';
import { WorkPlanService } from '../services/workPlan.service';
import { WorkPlansComponent } from '../workPlans/workPlans.component';

@Component({
  selector: 'app-basicInformation',
  templateUrl: './basicInformation.component.html',
  styleUrls: ['./basicInformation.component.css']
})
export class BasicInformationComponent implements OnInit {

  currentDate: any;

  @Output() newItemEvent = new EventEmitter<any>();

  basicInfoModel: any= {}
  incidents: Incident[] = [];
  locations: Location[] = [];
  crews: any = [];
  requests: WorkRequest[] = [];

 

  constructor(private incidentService: IncidentService,
    private locationService: LocationService,
    private router: Router,
    private crewService: CrewService,
    private requestService: WorkRequestService) {

      this.basicInfoModel.createdByUserId = localStorage.getItem('id');
      this.basicInfoModel.status = 'DRAFT';
      this.basicInfoModel.documentCreatedOn = "07/06/2021"

      this.getAllIncidents();
      this.getAllLocations();
      this.getAllCrews();
      this.getAllRequests();
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.currentDate = new Date();
  }

  getAllIncidents() {
    this.incidentService.getAllIncidents().subscribe(
      data => {
        this.incidents=data;
        console.log(data);
        console.log(this.incidents)
      }
    )
  }
  
  formatIncident(incident: Incident) {
    return `${incident.incidentId}, ${incident.incidentType}, ${incident.incidentStatus}`;
  }

  getAllLocations() {
    this.locationService.getAllLocations().subscribe(
      data => {
        this.locations=data;
        console.log(data);
        console.log(this.locations)
      }
    )
  }
  
  formatLocation(location: Location) {
    return `${location.street}, ${location.city}, ${location.postNumber}`;
  }

  getAllCrews(){
    this.crewService.getAllCrews().subscribe(
      data => {
        this.crews=data;
        console.log(data);
        console.log(this.crews)
      }
    )
  }
  getAllRequests(){
    this.requestService.getAllRequests().subscribe(
      data => {
        this.requests=data;
        console.log(data);
        console.log(this.incidents)
      }
    )
  }

  formatRequest(request: WorkRequest) {
    return `${request.workRequestId}, ${request.type}`;
  }
  nextBasic(){
    this.basicInfoModel.view = 2;
    this.newItemEvent.emit(this.basicInfoModel)
    this.router.navigateByUrl('/newPlan/historyOfStateChange');
  }
  openIncidentDialog(){
  }
  openWorkRequestDialog(){

  }
  openCrewDialog(){

  }

}
