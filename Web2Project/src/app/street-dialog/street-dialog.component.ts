import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Alekse Santica br.54'},
  {position: 2, name: 'Puskinova br.65'},
  {position: 3, name: 'Danila Kisa br.16'},
  {position: 4, name: 'Petrogradska br. 120'},
  {position: 5, name: 'Moskovska br.60'},
  {position: 6, name: 'Svetog Save br.13'},
  {position: 7, name: 'Nikole Teske br.98'},
];

@Component({
  selector: 'app-street-dialog',
  templateUrl: './street-dialog.component.html',
  styleUrls: ['./street-dialog.component.css']
})
export class StreetDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StreetDialogComponent>) { }

  ngOnInit() {
  }
  ClickCancel(): void {
    this.dialogRef.close();
  }
  displayedColumns: string[] = ['select', 'position', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
