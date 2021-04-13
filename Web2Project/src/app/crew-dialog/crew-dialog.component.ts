import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


export interface CrewColumns {
  id: string;
  name: string;
  members: string;
}

const ELEMENT_DATA: CrewColumns[] = [
  {id: '1', name: 'BRE_15413', members: 'Milica, Milan, Jelena'},
  {id: '2', name: 'BRE_15413', members: 'Milan, Jelena'},
  {id: '3', name: 'BRE_15413', members: 'Milica, , Jelena'},
  {id: '4', name: 'BRE_15413', members: 'Milica, Milan, Jelena'},
  {id: '5', name: 'BRE_15413', members: 'Milan'}
];

@Component({
  selector: 'app-crew-dialog',
  templateUrl: './crew-dialog.component.html',
  styleUrls: ['./crew-dialog.component.css']
})
export class CrewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CrewDialogComponent>) { }

  ngOnInit(): void {
  }

  ClickCancel(): void {
    this.dialogRef.close();
  }

  displayedColumns = ['select', 'id', 'name', 'members'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<CrewColumns>(true, []);  // checkbox


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
 checkboxLabel(row?: CrewColumns): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
}


}
