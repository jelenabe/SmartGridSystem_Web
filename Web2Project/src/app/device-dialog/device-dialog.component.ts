import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeviceDialogComponent>) {}

  ngOnInit(): void {
  }

  ClickCancel(): void {
    this.dialogRef.close();
  }


}
