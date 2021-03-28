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
  {type: 'error', text: 'Ekipa1', date: new Date('11/12/2010'), read: false},
  {type: 'info', text: 'Ekipa1', date: new Date('10/10/2010'), read: false},
  {type: 'success', text: 'Ekipa1', date: new Date('12/11/2010'), read: true},
  {type: 'warning', text: 'Ekipa1', date: new Date('9/1/2010'), read: false},
  {type: 'error', text: 'Ekipa1', date: new Date('2/2/2010'), read: true},
  {type: 'info', text: 'Ekipa1', date: new Date('6/10/2010'), read: false},
  {type: 'success', text: 'Ekipa1', date: new Date('4/5/2010'), read: true},
  {type: 'info', text: 'Ekipa1', date: new Date('10/6/2010'), read: false},
  {type: 'warning', text: 'Ekipa1', date: new Date('8/1/2010'), read: false},
];
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  displayedColumns: string[] = ['type', 'text', 'date'];
  dataSource: MatTableDataSource<Notification>;
  filterValue: string = "";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 applyFilter(event: number): void {

  switch(event)
  {
    case 1:
      this.filterValue = "error"
      this.dataSource.filter = this.filterValue.trim().toLowerCase();
      break;
      case 2:
        this.filterValue = "info"
        this.dataSource.filter = this.filterValue.trim().toLowerCase();
        break;
        case 3:
          this.filterValue = "success"
          this.dataSource.filter = this.filterValue.trim().toLowerCase();
          break;
          case 4:
            this.filterValue = "warning"
            this.dataSource.filter = this.filterValue.trim().toLowerCase();
            break;
          case 5:
            this.filterValue="";
            this.dataSource.filter=this.filterValue;
  }
}

}
