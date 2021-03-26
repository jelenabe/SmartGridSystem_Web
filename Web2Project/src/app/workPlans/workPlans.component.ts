import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface WorkPlans {
  id: number;
  startDate: Date;
  phone: number;
  status: string;
  address: string;
}
const ELEMENT_DATA: WorkPlans[] = [
  {id: 1, startDate: new Date('11/12/2010'), phone: 8585747, status: 'Status1', address: 'Addres1'},
  {id: 2, startDate: new Date('10/12/2010'), phone: 8585747, status: 'Status2', address: 'Addres2'},
  {id: 3, startDate: new Date('9/12/2010'), phone: 8585747, status: 'Status3', address: 'Addres3'},
  {id: 4, startDate: new Date('8/12/2010'), phone: 8585747, status: 'Status1', address: 'Addres4'},
  {id: 5, startDate: new Date('7/12/2010'), phone: 8585747, status: 'Status2', address: 'Addres5'},
  {id: 6, startDate: new Date('6/12/2010'), phone: 8585747, status: 'Status3', address: 'Addres6'},
  {id: 7, startDate: new Date('5/12/2010'), phone: 8585747, status: 'Status1', address: 'Addres7'},
  {id: 8, startDate: new Date('4/12/2010'), phone: 8585747, status: 'Status2', address: 'Addres8'},
  {id: 9, startDate: new Date('3/12/2010'), phone: 8585747, status: 'Status3', address: 'Addres9'},
  {id: 10, startDate: new Date('2/12/2010'), phone: 8585747, status: 'Status1', address: 'Addres10'},
];

@Component({
  selector: 'app-workPlans',
  templateUrl: './workPlans.component.html',
  styleUrls: ['./workPlans.component.css']
})
export class WorkPlansComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'startDate', 'phone', 'status', 'address'];
  dataSource: MatTableDataSource<WorkPlans>;

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

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
