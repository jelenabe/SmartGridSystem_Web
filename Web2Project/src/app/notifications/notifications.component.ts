import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { stringify } from '@angular/compiler/src/util';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Timestamp } from 'rxjs';

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

  displayedColumns: string[] = ['type', 'text', 'date'];
  filterValue: string = "";
  dataSource: any=[];
  fillterDataSource: any[];
  selectedType: string= "";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  constructor() {
    this.dataSource =[
      {
        "type": "error",
         "text": "Ekipa1",
          "date": "2013-10-21T13:28:06.419Z",
           "read": "false"},
    {
      "type": "info",
       "text": "Ekipa1",
        "date": "2013-10-21T13:28:06.419Z", 
         "read": "false"},
    {
      "type": "success", 
      "text": "Ekipa1", 
      "date": "2013-10-21T13:28:06.419Z",
        "read": "true"},
    {
      "type": "warning",
       "text": "Ekipa1",
        "date": "2013-10-21T13:28:06.419Z", 
         "read": "false"},
    {
      "type": "error",
     "text": "Ekipa1",
      "date": "2013-10-21T13:28:06.419Z",  
      "read": "true"},
    {
      "type": "info", 
    "text": "Ekipa1", 
    "date": "2013-10-21T13:28:06.419Z",
      "read": "false"
    },
    
    ];
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 applyFilter(event: number): void {
  if(event==1){
    this.selectedType='error';

  }else if(event == 2){
    this.selectedType='info';
  }else if( event==3){
    this.selectedType='success';
  }else if(event==4){
    this.selectedType='warning';
  }else{
    this.selectedType=''
  }
     
  }
}


