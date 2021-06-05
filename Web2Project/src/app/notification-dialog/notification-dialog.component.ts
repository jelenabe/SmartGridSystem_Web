import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {
 
  isDispalyEroor:boolean =true;
  isDispalySucces:boolean =true;
  isDispalyWarning:boolean=true;
  isDispalyInfo:boolean=true;
 
  model:any={}
  id:number;

  constructor(private adminService: AdminService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  
  showRow(type: string){
    switch(type){
      case 'error':
        this.isDispalyEroor=true;
        this.model.notificationId=1;
        this.model.type="error"
        break;
      case 'success':
        this.isDispalySucces=true;
        this.model.notificationId=2;
        this.model.type="success"
        break;
      case 'info':
        this.isDispalyInfo=true;
        this.model.notificationId=3;
        this.model.type="info"
        break;
      case 'warning':
        this.isDispalyWarning=true;
        this.model.notificationId=4;
        this.model.type="warning"
        break;
    }
    this.model.display=true;
    
    this.adminService.notificationSettings(this.model.notificationId, this.model).subscribe(()=>{
      console.log("Show called successfull");
      this.openShowBar();
    })
    
  }

  hideRow(type: string)
  { 
    switch(type){
    case 'error':
      this.model.notificationId=1;
        this.model.type="error"
      this.isDispalyEroor=false;
      break;
    case 'success':
      this.isDispalySucces=false;
      this.model.notificationId=2;
        this.model.type="success"
      break;
    case 'info':
      this.isDispalyInfo=false;
      this.model.notificationId=3;
        this.model.type="info"
      break;
    case 'warning': 
      this.model.notificationId=4;
      this.model.type="warning"
      this.isDispalyWarning=false;
      break;
     
    }

    this.model.display=false;
    this.adminService.notificationSettings(this.model.notificationId, this.model).subscribe(()=>{
    console.log(" Hide called successfull");
    this.openHideBar();
  })
  
  }

  openShowBar(){
    this.snackBar.open('Show successed!' , 'OK', {
      duration: 3000
    });
  }

  openHideBar(){
    this.snackBar.open('Hide successed!' , 'OK', {
      duration: 3000
    });
  }


}