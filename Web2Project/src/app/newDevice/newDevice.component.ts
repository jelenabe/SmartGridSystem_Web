import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  newDeviceForm = new FormGroup({
    typeControl: new FormControl('', Validators.required),
    locationControl: new FormControl(/*'', Validators.required*/)
  });

  constructor(private locationService: LocationService, private deviceService: DeviceService, private router: Router, private validationService: ValidationService) { }

  ngOnInit() {
    this.getAllLocations();
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

  saveDevice() {
    this.submitted = true;

    if (this.newDeviceForm.valid) {
      this.newDevice.type = this.getDeviceTypeNumber(this.newDeviceForm.value.typeControl);
      //this.newDevice.locationId = +this.newDeviceForm.value.locationControl;
      this.newDevice.locationId = 2;

      console.log(this.newDeviceForm.value);
      this.deviceService.createNewDevice(this.newDevice).subscribe(
        data => {
          this.newDevice = data;
          this.router.navigate(['allDevices']);
        },
        error => {
          //console.error(error.error);

        }
      );

    } else {
      this.validationService.validateAll(this.newDeviceForm);
    }

  }


}
