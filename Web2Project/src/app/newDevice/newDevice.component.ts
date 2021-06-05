import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../models/device';
import { Location } from '../models/location';
import { DeviceService } from '../services/device.service';
import { LocationService } from '../services/location.service';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-newDevice',
  templateUrl: './newDevice.component.html',
  styleUrls: ['./newDevice.component.css']
})
export class NewDeviceComponent implements OnInit {
  locations: Location[] = [];
  newDevice: Device = new Device();
  submitted: boolean = false;

  oldDevice: Device = new Device();
  edit: boolean = false;

  newDeviceForm = new FormGroup({
    typeControl: new FormControl('', Validators.required),
    locationControl: new FormControl('', Validators.required)
  });

  constructor(private locationService: LocationService, private deviceService: DeviceService, private router: Router, private validationService: ValidationService, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.getAllLocations();

    const deviceId = this.route.snapshot.paramMap.get('id');
    if (deviceId != null && deviceId != "") {
      this.edit = true;
      this.loadOldDevice(+deviceId);
    }

  }

  loadOldDevice(id: number) {
    this.deviceService.getDeviceById(id).subscribe(
      data => {

        this.oldDevice = data;
        //console.log(this.oldDevice);
        this.newDeviceForm.setValue({
          typeControl: this.oldDevice.type.toString(),
          locationControl: this.oldDevice.location.locationId.toString()
        });

      },
      error => {

        this.snackBar.open("Could not load selected device." , "", { duration: 2500});
        this.router.navigate(['allDevices']);

      }
    );
  }

  getAllLocations() {
    this.locationService.getAllLocations().subscribe(
      data => {
        this.locations = data;
      },
      error => {
        this.getAllLocations();
      }
    )
  }

  formatLocation(location: Location) {
    return `${location.street}, ${location.city}, ${location.postNumber}`;
  }





  /*
  getDeviceTypeNumber(deviceType: string) {

    switch (deviceType) {
      case "POWER_SWITCH":
        return 0;
      case "FUSE":
        return 1;
      case "TRANSFORMER":
        return 2;
      case "DISCONNECTOR":
        return 3;
    }
    return 0;
  }
  */

  saveDevice() {
    this.submitted = true;

    if (this.newDeviceForm.valid) {

      if (!this.edit) {

        this.newDevice.type = +this.newDeviceForm.value.typeControl;
        this.newDevice.locationId = +this.newDeviceForm.value.locationControl;

        console.log(this.newDeviceForm.value);
        this.deviceService.createNewDevice(this.newDevice).subscribe(
          data => {
            this.newDevice = data;
            this.snackBar.open("Device created successfully." , "", { duration: 2500});
            this.router.navigate(['allDevices']);
          },
          error => {

            this.snackBar.open(error.error);

          }
        );
      }
      else{

          this.oldDevice.type = +this.newDeviceForm.value.typeControl;
          this.oldDevice.locationId = +this.newDeviceForm.value.locationControl;

          this.deviceService.updateDevice(this.oldDevice).subscribe(
              data => {

                this.oldDevice = data;
                this.snackBar.open("Device edit successfully." , "", { duration: 2500});
                this.router.navigate(['allDevices']);

              },
              error=>{
                
                this.snackBar.open(error.error);
                this.router.navigate(['allDevices']);

              }
           );

      }

    } else {
      this.validationService.validateAll(this.newDeviceForm);
    }

  }


}
