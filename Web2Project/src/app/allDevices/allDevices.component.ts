import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface DeviceColumns {
  id: string;
  name: string;
  type: string;
  coordinates: string;
  address: string;
}

const ELEMENT_DATA: DeviceColumns[] = [
  {id: '1', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '2', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Mileve Maric 14'},
  {id: '3', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '4', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '5', name: 'DIS_641561', type: 'Disonnector', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '6', name: 'BRE_15413', type: 'Disonnector', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '7', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '8', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Mileve Maric 14'},
  {id: '9', name: 'DIS_641561', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '10', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
  {id: '11', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Masarikova 2'},
];

@Component({
  selector: 'app-allDevices',
  templateUrl: './allDevices.component.html',
  styleUrls: ['./allDevices.component.css']
})
export class AllDevicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['id', 'name', 'type', 'coordinates', 'address', 'buttons'];
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

  // izmeniti funkciju
  deleteRow(index: number){
    /* console.log(index);
    const data = this.dataSource.data;
    console.log(data.splice(index,1));
    this.dataSource.data = data; */
    this.dataSource.data.splice(index,1);
    this.dataSource._updateChangeSubscription();
  }

  funkcijica(){
    console.log("caooooooooo");
  }

}
