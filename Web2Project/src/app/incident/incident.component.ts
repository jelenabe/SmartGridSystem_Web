import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Incident } from '../models/incident';
import { IncidentService } from '../services/incident.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit, AfterViewInit{
  incidents:Incident[] = [];

  displayedColumns = ['incidentId', 'incidentType', 'priority', 'confirmed', 'incidentStatus', 'eta', 'ata', 'outageTime', 'etr', 'affectedCustomers', 'callNumber', 'voltageLevel', 'scheduledTime'];
  dataSource: MatTableDataSource<Incident>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private incidentService:IncidentService) { }

  ngOnInit() {
    this.getIncidents();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getIncidents()
  {
    this.incidentService.getAllIncidents().subscribe(
      data =>{

        this.incidents = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
       
      },
      error =>{

        this.getIncidents();

      }
    )
  }

  getTypeString(type: number) {
    switch (type) {
      case 0:
        return "PLANNED";
      case 1:
        return "UNPLANNED";
    }
    return "UNKNOWN";
  }

  getStatusString(type: number) {
    switch (type) {
      case 0:
        return "DISPATCHED";
    }
    return "UNKNOWN";
  }

}
