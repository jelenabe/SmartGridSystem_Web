import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FieldsDialogComponent } from '../fields-dialog/fields-dialog.component';
import { IconsDialogComponent } from '../icons-dialog/icons-dialog.component';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { StreetDialogComponent } from '../street-dialog/street-dialog.component';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNotificationDialog(){
    const dialogRef = this.dialog.open(NotificationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openIconsDialog(){
    const dialogRef = this.dialog.open(IconsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  openStreetDialog(){
    const dialogRef = this.dialog.open(StreetDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
  openFieldsDialog(){
    const dialogRef = this.dialog.open(FieldsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  resetAll(){
    
  }

}
