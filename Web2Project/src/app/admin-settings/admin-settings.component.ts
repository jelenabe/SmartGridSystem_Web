import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivateProfileComponent } from '../activateProfile/activateProfile.component';
import { FieldsDialogComponent } from '../fields-dialog/fields-dialog.component';
import { IconsDialogComponent } from '../icons-dialog/icons-dialog.component';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { AdminService } from '../services/admin.service';
import { StreetDialogComponent } from '../street-dialog/street-dialog.component';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
@ViewChild(ActivateProfileComponent, {static: true})
@ViewChild(StreetDialogComponent, {static: true})

// dodati i ostale komponenete

export class AdminSettingsComponent implements OnInit {
 
  constructor(public dialog: MatDialog,
     private adminService: AdminService,
      private snackBar: MatSnackBar,) { }

  ngOnInit() {
  }



  resetAll(){
    this.adminService.resetAll().subscribe(response=>{
      console.log("Reset all successfully");
      this.openSnackBar();

    });
  }
  openSnackBar() {
    this.snackBar.open('Reset all successed!' , 'OK', {
      duration: 3000
    });
  }

}
