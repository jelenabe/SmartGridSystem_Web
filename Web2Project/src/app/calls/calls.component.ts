import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CallsColumns {
  id: string;
  reason: string;
  hazard: string;
  comment: string;
}

const ELEMENT_DATA: CallsColumns[] = [
  {id: '1', reason: 'BRE_15413', hazard: 'Breaker', comment: '465d1cs56ac1'},
  {id: '2', reason: 'BRE_15413', hazard: 'Breaker', comment: '465d1cs56ac1'},
  {id: '3', reason: 'BRE_15413', hazard: 'Breaker', comment: '465d1cs56ac1'},
  {id: '4', reason: 'BRE_15413', hazard: 'Breaker', comment: '465d1cs56ac1'},
  {id: '5', reason: 'DIS_641561', hazard: 'Disonnector', comment: '465d1cs56ac1'},
  {id: '6', reason: 'BRE_15413', hazard: 'Disonnector', comment: '465d1cs56ac1'},
  {id: '7', reason: 'BRE_15413', hazard: 'Breaker', comment: '465d1cs56ac1'},
  {id: '8', reason: 'BRE_15413', hazard: 'Breaker', comment: '465d1cs56ac1'},
  {id: '9', reason: 'DIS_641561', hazard: 'Breaker', comment: '465d1cs56ac1'},
  {id: '10', reason: 'BRE_15413', hazard: 'Breaker', comment: '465d1cs56ac1'},
  {id: '11', reason: 'BRE_15413', hazard: 'Breaker', comment: '465d1cs56ac1'},
];

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  displayedColumns = ['id', 'reason', 'hazard', 'comment'/*, 'icon_location'*/];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  funkcijica(){
    console.log("caoo");
  }

}
