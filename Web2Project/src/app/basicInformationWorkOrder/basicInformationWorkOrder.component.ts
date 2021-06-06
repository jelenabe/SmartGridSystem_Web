import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Incident } from '../models/incident';
import { IncidentService } from '../services/incident.service';
import { LocationService } from '../services/location.service';
import { WorkRequestService } from '../services/work-request.service';
import { Location } from '../models/location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basicInformationWorkOrder',
  templateUrl: './basicInformationWorkOrder.component.html',
  styleUrls: ['./basicInformationWorkOrder.component.css']
})
export class BasicInformationWorkOrderComponent implements OnInit {

  newRequestBasic: boolean= true;

  @Output() newItemEvent = new EventEmitter<any>()

  basicInfoModel: any= {}
  incidents: Incident[] = [];
  locations: Location[] = [];

  constructor(private incidentService: IncidentService,
    private locationService: LocationService,
    private router: Router) {

      this.basicInfoModel.createdByUserId = localStorage.getItem('id');
      this.basicInfoModel.status = 'DRAFT';
      this.basicInfoModel.createdOn = '07/06/2021';

      this.getAllIncidents();
      this.getAllLocations();
     }

  ngOnInit() {
    
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

  nextBasic(){
    this.basicInfoModel.view=2;
    this.newItemEvent.emit(this.basicInfoModel)
    this.router.navigateByUrl('/newWorkOrder/historyOfStateChange');
  }

}
