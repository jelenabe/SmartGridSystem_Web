import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Elements {
  id: string;
  type: string;
  status: string;
  switching_plan: string;
  safetyDocument_type: string;
  dateTime_created: string;
  created_by: string;
  details: string;
  notes: string;
  crew: string;
  phone_number: string;
}

const ELEMENT_DATA: Elements[] = [
  {id: '1', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '2', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '3', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '4', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '5', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '6', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '7', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '8', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '9', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '10', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '11', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '12', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '13', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '14', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '15', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '16', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '17', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '18', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '19', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'},
  {id: '20', type: 'Hydrogen', status: 'Beryllium', switching_plan: 'Hydrogen', safetyDocument_type: 'Hydrogen', dateTime_created: 'Hydrogen', created_by: 'Hydrogen', details: 'Hydrogen', notes: 'Hydrogen', phone_number: 'Hydrogen', crew: 'Hydrogen'}
];

@Component({
  selector: 'app-safetyDocs',
  templateUrl: './safetyDocs.component.html',
  styleUrls: ['./safetyDocs.component.css']
})
export class SafetyDocsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['id', 'type', 'status', 'switching_plan', 'safetyDocument_type', 'dateTime_created', 'created_by', 'details', 'notes', 'phone_number', 'crew'];
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
