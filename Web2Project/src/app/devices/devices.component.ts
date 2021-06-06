import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceDialogComponent } from '../device-dialog/device-dialog.component';
import { Device } from '../models/device';
import { Location } from '../models/location';
import { EnableButtonService } from '../services/enable-button.service';
import { IncidentService } from '../services/incident.service';
import { ValidationService } from '../services/validation.service';
/*
export interface DeviceColumns {
  id: string;
  name: string;
  type: string;
  coordinates: string;
  address: string;
}

const ELEMENT_DATA: DeviceColumns[] = [
  {id: '1', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '2', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Mileve Maric 14'},
  {id: '3', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Mileve Maric 14'},
  {id: '4', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '5', name: 'DIS_641561', type: 'Disonnector', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '6', name: 'BRE_15413', type: 'Disonnector', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '7', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '8', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Mileve Maric 14'},
  {id: '9', name: 'DIS_641561', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '10', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '11', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
];
*/

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  incidentDevices:Device[] = []
  incidentId: number;

  displayedColumns = ['deviceId', 'name', 'type', 'coordinates', 'address', 'icon_location', 'icon_remove'];
  dataSource: MatTableDataSource<Device>;

  constructor(public dialog: MatDialog, private incidentService: IncidentService, private tabMessaging:EnableButtonService, private route:ActivatedRoute,
    private validation:ValidationService, private snackbar: MatSnackBar, private router:Router) {}

  ngOnInit() {

    const incidentId = this.route.snapshot.paramMap.get('id');
    //console.log( this.route.snapshot);
    
    if(incidentId && incidentId != "")
    {
       this.tabMessaging.showEdit(+incidentId);
       this.incidentId = +incidentId;
       this.getIncidentDevices(this.incidentId);
    }

  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  openDialog() {
    const dialogRef = this.dialog.open(DeviceDialogComponent, {width: "80%"});
    dialogRef.componentInstance.incidentId = this.incidentId;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getIncidentDevices(this.incidentId);
    });
  }

  funkcijica(id: number){  // kada se klikne na remove
    console.log(id);
  }

  getIncidentDevices(incidentId: number)
  {
    this.incidentService.getIncidentDevices(incidentId).subscribe(
      data =>{

        console.log(data);
        this.incidentDevices = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
       
      },
      error =>{

        if(error.error instanceof ProgressEvent)
        {
          this.getIncidentDevices(incidentId);

        }else
        {
          //this.toastr.error('Could not load incident devices.',"", {positionClass: 'toast-bottom-left'})
          this.router.navigate(['incident']);
        }

      }
    )
  }

  removeDeviceFromIncident(deviceId: number){
    this.incidentService.removeOneDeviceFromIncident(this.incidentId, deviceId).subscribe(
      data =>{

        this.getIncidentDevices(this.incidentId);
        //this.toastr.success("Device removed from incident successfully","", {positionClass: 'toast-bottom-left'});
       
      },
      error =>{

        if(error.error instanceof ProgressEvent)
        {
          this.removeDeviceFromIncident(deviceId);

        }else
        {
          //this.toastr.error('Could not remove device from incident.',"", {positionClass: 'toast-bottom-left'})
          this.router.navigate(['incidents']);
        }
      }
    )
  }



  formatLocation(location: Location) {
    return `${location.street}, ${location.city}, ${location.postNumber}`;
  }

  getTypeString(type: number) {
    switch (type) {
      case 0:
        return "POWER SWITCH";
      case 1:
        return "FUSE"
      case 2:
        return "TRANSFORMER"
      case 3:
        return "DISCONNECTOR"
    }

    return "UNKNOWN";
  }

}
