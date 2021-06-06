import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceService } from '../services/device.service';

export interface Equipment {
  id: number;
  name: string;
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  equipments: any = [];
  selectedEquipments: any = [];
  

  equipmentModel: any = 
    {
      EquipmentIds: []
    }
  
   @Output() newItemEvent = new EventEmitter<any>();
  
  constructor(private deviceService: DeviceService,
    private snackBar: MatSnackBar) { 
    this.getAllDevices();
  }
  ngOnInit() {
  }

  getAllDevices(){
    this.deviceService.getAllDevices().subscribe(response => {
      this.equipments=response;
    });
  }
 
  addEquipments(){

    this.selectedEquipments.forEach((element: { deviceId: number; }) => {
      this.equipmentModel.EquipmentIds.push(element.deviceId);
    });
    if(this.equipmentModel.EquipmentIds.length==0){
      this.openSnackBar();
    }else
    {
      this.newItemEvent.emit(this.equipmentModel);
      this.openSnackBarSucces();
    }

  }

  openSnackBar() {
    this.snackBar.open('Fileds must be filed!', 'OK', {
      duration: 3000
    });
  }

  openSnackBarSucces(){
    this.snackBar.open('Equioments successfully added!', 'OK', {
      duration: 3000
    });
  }


}
