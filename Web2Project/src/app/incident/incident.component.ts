import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  id: string;
  type: string;
  priority: string;
  confirm: string;
  status: string;
  ETA: string;
  ATA: string;
  outage_time: string;
  ETR: string;
  affected_consumers: string;
  calls: string;
  voltage_level: string;
  scheduled_time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', type: 'Hydrogen', priority: 'Beryllium', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '2', type: 'Lithium', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Beryllium', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '3', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Lithium', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '4', type: 'Hydrogen', priority: 'Beryllium', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Lithium', outage_time: 'Lithium', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '5', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '6', type: 'Hydrogen', priority: 'Lithium', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Beryllium', ETR: 'Lithium', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '7', type: 'Lithium', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Lithium', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '8', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '9', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '10', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Beryllium', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '11', type: 'Hydrogen', priority: 'Beryllium', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '12', type: 'Lithium', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Beryllium', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '13', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Lithium', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '14', type: 'Hydrogen', priority: 'Beryllium', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Lithium', outage_time: 'Lithium', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '15', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '16', type: 'Hydrogen', priority: 'Lithium', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Beryllium', ETR: 'Lithium', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '17', type: 'Lithium', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Lithium', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '18', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '19', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Hydrogen', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
  {id: '20', type: 'Hydrogen', priority: 'Hydrogen', confirm: 'Hydrogen', status: 'Hydrogen', ETA: 'Beryllium', ATA: 'Hydrogen', outage_time: 'Hydrogen', ETR: 'Hydrogen', affected_consumers: 'Hydrogen', calls: 'Hydrogen', voltage_level: 'Hydrogen', scheduled_time: 'Hydrogen'},
];


@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit, AfterViewInit{

  constructor() { }

  

  ngOnInit() {
  }

  displayedColumns = ['id', 'type', 'priority', 'confirm', 'status', 'ETA', 'ATA', 'outage_time', 'ETR', 'affected_consumers', 'calls', 'voltage_level', 'scheduled_time'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
