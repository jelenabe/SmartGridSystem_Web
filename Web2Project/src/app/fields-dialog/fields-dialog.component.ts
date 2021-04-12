import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fields-dialog',
  templateUrl: './fields-dialog.component.html',
  styleUrls: ['./fields-dialog.component.css']
})
export class FieldsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FieldsDialogComponent>) { }

  ngOnInit() {
  }
  ClickCancel(): void {
    this.dialogRef.close();
  }

}
