import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { stringify } from '@angular/compiler/src/util';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Timestamp } from 'rxjs';
import { AdminService } from '../services/admin.service';

export interface Notification {
  type: string;
  text: string;
  date: Date;
  read: boolean;
}

const ELEMENT_DATA: Notification[] = [
  
];
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  filterValue: string = "";
  dataSource: any=[];
  fillterDataSource: any[];
  selectedType: string= "";
  ruleForNotification:any = {}

  constructor(private adminService:AdminService) {
    this.dataSource =[
      {
        "type": "error",
         "text": "Ekipa1",
          "date": "2013-10-21T13:28:06.419Z",
           "read": "false"},
    {
      "type": "info",
       "text": "Ekipa5",
        "date": "2013-10-21T13:28:06.419Z", 
         "read": "false"},
    {
      "type": "success", 
      "text": "Ekipa3", 
      "date": "2013-10-21T13:28:06.419Z",
        "read": "true"},
    {
      "type": "warning",
       "text": "Ekipa6",
        "date": "2013-10-21T13:28:06.419Z", 
         "read": "false"},
    {
      "type": "error",
     "text": "Ekipa4",
      "date": "2013-10-21T13:28:06.419Z",  
      "read": "true"},
    {
      "type": "info", 
    "text": "Ekipa5", 
    "date": "2013-10-21T13:28:06.419Z",
      "read": "false"
    },
    
    ];
   }

  ngOnInit() {
    this.getNotificationSettings();
  }

  getNotificationSettings(){
    this.adminService.getNotif().subscribe(response=>{
      this.ruleForNotification=response;
    });
    
  }
  clickedNotification(id:string){

  }
  markAllAsRead(){
    this.dataSource.forEach((element:{ type: string; text: string; date: string; read:string; }) => {
      if(element.read == 'false'){

       element.read='true';
      }
    });
  }
  clearAll(){
    this.dataSource=[];
  }
  filterByType(type:string){
      this.fillterDataSource=[];
      if(type=='unread'){
        this.dataSource.forEach((element:{ type: string; text: string; date: string; read:string; }) => {
          if(element.read == 'false'){
    
            this.fillterDataSource.push(element);
          }
        });
      }else{
       this.dataSource.forEach((element:{ type: string; text: string; date: string; read:string; }) => {
        if(element.type == type){
  
          this.fillterDataSource.push(element);
        }
      });
    }
  }

  applyFilter(event: number): void {
  if(event==1){
    this.selectedType='error';
    this.filterByType('error');

  }else if(event == 2){
    this.selectedType='info';
    this.filterByType('info');

  }else if( event==3){
    this.selectedType='success';
    this.filterByType('success');
  }else if(event==4){
    this.selectedType='warning';
    this.filterByType('warning');
  }else if(event==5){
    this.selectedType='';
    this.filterByType('');
  }else{
    this.selectedType='unread';
    this.filterByType('unread');
  }
     
  }
}


