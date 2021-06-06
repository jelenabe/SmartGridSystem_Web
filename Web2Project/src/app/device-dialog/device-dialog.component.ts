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
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent implements OnInit {

  displayedColumns = ['deviceId', 'name', 'type', 'coordinates', 'address', "icon_add"];
  //selection = new SelectionModel<DeviceColumns>(true, []);  // checkbox
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


// checkbox:
/** Whether the number of selected elements matches the total number of rows. */
/*
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}
*/

/** Selects all rows if they are not all selected; otherwise clear selection. */
/*
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}
*/

 /** The label for the checkbox on the passed row */
 /*
 checkboxLabel(row?: DeviceColumns): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
}
*/

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
    this.incidentService.getAllUnconnectedDevices(this.incidentId).subscribe(
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



