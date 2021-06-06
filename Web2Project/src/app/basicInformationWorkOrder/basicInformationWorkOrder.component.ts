import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Incident } from '../models/incident';
import { IncidentService } from '../services/incident.service';
import { LocationService } from '../services/location.service';
import { WorkRequestService } from '../services/work-request.service';
import { Location } from '../models/location';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar) {
      this.basicInfoModel.locationId=null;
      this.basicInfoModel.incidentId=null;
      this.basicInfoModel.createdByUserId = localStorage.getItem('id');
      this.basicInfoModel.status = 'DRAFT';
      this.basicInfoModel.createdOn = new Date().toString();

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
    return `${incident.incidentId}`;
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
    if(this.basicInfoModel.locationId == null || this.basicInfoModel.incidentId == null){
      this.openSnackBar();
    }else{
    this.basicInfoModel.view=2;
    this.newItemEvent.emit(this.basicInfoModel)
    this.router.navigateByUrl('/newWorkOrder/historyOfStateChange');
    }
  }
  openSnackBar() {
    this.snackBar.open('Location and Incident must be filed' , 'OK', {
      duration: 3000
    });
  }

}
