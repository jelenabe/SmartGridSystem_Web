import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device, SearchDevices } from '../models/device';
import { Location } from '../models/location';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-allDevices',
  templateUrl: './allDevices.component.html',
  styleUrls: ['./allDevices.component.css']
})
export class AllDevicesComponent implements OnInit {

  displayedColumns = ['deviceId', 'name', 'type', 'coordinates', 'address', 'buttons'];
  dataSource: MatTableDataSource<Device>;

  allDevices: Device[] = [];

  searchObject: SearchDevices = new SearchDevices();

  constructor(private deviceService: DeviceService, private snackBar: MatSnackBar) { }

  searchForm = new FormGroup({
    propertyControl: new FormControl(''),
    typeControl: new FormControl(''),
    searchFieldControl: new FormControl('')
  });

  ngOnInit() {

    this.getDevices();

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
	
    //if (this.dataSource.paginator) {
      //this.dataSource.paginator.firstPage();
    //}
	
  }
  */

  getDevices() {
    this.deviceService.getAllDevices().subscribe(
      data => {

        this.allDevices = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error => {

        this.getDevices();

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

  deleteDevice(deviceId: number) {

    this.deviceService.deleteDevice(deviceId).subscribe(x => {
      this.snackBar.open("Device successfully deleted.", "", { duration: 2500 });
      this.getDevices();
    },
    error => {

      this.snackBar.open(error.error, "",  { duration: 4000});
      this.getDevices();
    }
    );

  }

  searchDevices() {

    if((this.searchForm.value.searchFieldControl == null || this.searchForm.value.searchFieldControl == "") && ((this.searchForm.value.typeControl == null) || (this.searchForm.value.typeControl == "4") || (this.searchForm.value.typeControl == ""))){
      this.getDevices();
      return;
    }

    if(this.searchForm.value.typeControl == null || this.searchForm.value.typeControl == ""){

      this.searchObject.type = "4";
    }else
    {
      this.searchObject.type = this.searchForm.value.typeControl;
    }

    if(this.searchForm.value.propertyControl == null || this.searchForm.value.propertyControl == ""){

      this.searchObject.property = "name";
    }else
    {
      this.searchObject.property = this.searchForm.value.propertyControl;
    }

    this.searchObject.searchField = this.searchForm.value.searchFieldControl;

    console.log(this.searchForm.value);
    this.deviceService.searchAllDevices(this.searchObject).subscribe(
      data => {

        this.allDevices = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error => {

        this.snackBar.open(error.error);

      }
    );

  }



}
