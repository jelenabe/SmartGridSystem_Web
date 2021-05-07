import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ConsumersColumns {
  id: string;
  name: string;
  lastname:string;
  phonenumber:string;
  address: string;
  type:string;
}

const ELEMENT_DATA: ConsumersColumns[] = [
  {id: '1', name: 'Milica', lastname:'Simeunovic', phonenumber:'0655555', address: 'Masarikova 2 Novi Sad', type:'Comercial'},
  {id: '2', name: 'Jelena', lastname:'Beader', phonenumber:'0655555', address: 'Masarikova 2 Novi Sad', type:'Comercial'},
  {id: '3', name: 'Milan', lastname:'Momcilovic', phonenumber:'0655555', address: 'Masarikova 2 Novi Sad', type:'Comercial'},
];

@Component({
  selector: 'app-select-consumer',
  templateUrl: './select-consumer.component.html',
  styleUrls: ['./select-consumer.component.css']
})
export class SelectConsumerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectConsumerComponent>) { }

  ngOnInit() {
  }
  ClickCancel(): void {
    this.dialogRef.close();
  }
  displayedColumns = ['select', 'id', 'name', 'lastname', 'phonenumber', 'address', 'type', 'icon_location'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<ConsumersColumns>(true, []);  // checkbox

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

// checkbox:
/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

 /** The label for the checkbox on the passed row */
 checkboxLabel(row?: ConsumersColumns): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
}


funkcijica(){
  console.log("caoo");
}
}

