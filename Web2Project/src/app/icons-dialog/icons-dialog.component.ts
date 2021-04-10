import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-icons-dialog',
  templateUrl: './icons-dialog.component.html',
  styleUrls: ['./icons-dialog.component.css']
})
export class IconsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IconsDialogComponent>) { }

  ngOnInit() {
  }

  
  ClickCancel(): void {
    this.dialogRef.close();
  }

}
