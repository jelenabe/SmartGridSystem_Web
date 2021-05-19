import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from '../models/device';
import { Location } from '../models/location';
import { DeviceService } from '../services/device.service';

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
  selector: 'app-allDevices',
  templateUrl: './allDevices.component.html',
  styleUrls: ['./allDevices.component.css']
})
export class AllDevicesComponent implements OnInit {

  displayedColumns = ['id', 'name', 'type', 'coordinates', 'address', 'buttons'];
  dataSource: MatTableDataSource<Device>;

  allDevices:Device[] = [];

  constructor(private deviceService:DeviceService, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.getDevices();

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
	/*
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
	*/
  }

  getDevices()
  {
    this.deviceService.getAllDevices().subscribe(
      data =>{

        this.allDevices = data;
        this.dataSource = new MatTableDataSource(data);

      },
      error =>{

        this.getDevices();

      }
    )
  }


formatLocation(location: Location) {
    return `${location.street}, ${location.city}, ${location.postNumber}`;
}

  getTypeString(type:number)
  {
      switch(type)
      {
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

  deleteDevice(deviceId: number){

      this.deviceService.deleteDevice(deviceId).subscribe(x =>{
      this.snackBar.open("Device successfully deleted." , "", { duration: 2500});
      this.getDevices();

    });
  }


}
