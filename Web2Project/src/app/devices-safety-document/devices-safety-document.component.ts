import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceDialogSafetyDocumentComponent } from '../device-dialog-safety-document/device-dialog-safety-document.component';

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
  {id: '3', name: 'BRE_15413', type: 'Breaker', coordinates: '465d1cs56ac1', address: 'Mileve Maric 14'},
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
  selector: 'app-devices-safety-document',
  templateUrl: './devices-safety-document.component.html',
  styleUrls: ['./devices-safety-document.component.css']
})
export class DevicesSafetyDocumentComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  
  displayedColumns = ['id', 'name', 'type', 'coordinates', 'address', 'icon_location', 'icon_remove'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  openDialog() {
    const dialogRef = this.dialog.open(DeviceDialogSafetyDocumentComponent, {width: "80%"});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  funkcijica(){
    console.log("caoo");
  }

}
