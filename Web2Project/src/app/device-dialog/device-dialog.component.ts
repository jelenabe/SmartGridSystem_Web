import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../models/device';
import { Location } from '../models/location';
import { DeviceService } from '../services/device.service';
import { IncidentService } from '../services/incident.service';

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent implements OnInit {

  displayedColumns = ['deviceId', 'name', 'type', 'coordinates', 'address', "icon_add"];
  dataSource: MatTableDataSource<Device>;

  incidentId: number;
  devices:Device[] = [];
  allDevices:Device[] = [];

  constructor(public dialogRef: MatDialogRef<DeviceDialogComponent>, private deviceService:DeviceService,private incidentService: IncidentService,  private snackbar: MatSnackBar,
    private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.getUnconnectedDevices();
  }

  ClickCancel(): void {
    this.dialogRef.close();
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  funkcijica(){
    console.log("caoo");
  }


addDeviceToIncident(deviceId: number)
  {

    this.incidentService.addOneDeviceToIncident(this.incidentId, deviceId).subscribe(

      data =>{

        this.getUnconnectedDevices();
        //this.toastr.success('Device added to incident successfully',"", {positionClass: 'toast-bottom-left'})
        
      },
      error =>{
        if(error.error instanceof ProgressEvent)
        {
          this.addDeviceToIncident(deviceId);

        }else
        {
          //this.toastr.error(error.error,"", {positionClass: 'toast-bottom-left'})
     
          //this.router.navigate(['incidents']);
          this.dialogRef.close();

        }
      }
    )
    
  }

  getUnconnectedDevices()
  {
    this.incidentService.getAllUnconnectedDevices().subscribe(
      data =>{

        console.log(data);
        this.allDevices = data;
        this.devices = data;
        this.dataSource = new MatTableDataSource(data);
       
      },
      error =>{

        this.getUnconnectedDevices();

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



