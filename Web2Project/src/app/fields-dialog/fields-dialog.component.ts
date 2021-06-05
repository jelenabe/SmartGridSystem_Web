import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Field } from '../models/field';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-fields-dialog',
  templateUrl: './fields-dialog.component.html',
  styleUrls: ['./fields-dialog.component.css']
})
export class FieldsDialogComponent implements OnInit {

  state:string;
  model: any = {}
  resposne:Field;

  constructor(private adminService:AdminService,
    private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.getFieldState();
  }

  getFieldState(){
    this.adminService.getFileds().subscribe(response=>{
      this.resposne=response;
      switch(this.resposne.display){
        case true:
          this.state="SHOWN";
          break;
        case false:
          this.state="HIDDEN";
          break;
      }
    });

  }

  showClick(){
    
    this.model.fieldId=1;
    this.model.name="Show";
    this.model.display=true;
    this.adminService.fieldSettings(this.model).subscribe((response) =>
    {
      console.log('Filed shown');
      this.state="SHOWN";
      this.openSnackBar();
    });
  }
  hideClick(){
    this.model.fieldId=1;
    this.model.name="hide";
    this.model.display=false;
   
    this.adminService.fieldSettings(this.model).subscribe((response) =>
    {
      console.log('Filed hidden');
      this.state="HIDDEN";
      this.openSnackBar();
    });
  }
  openSnackBar() {
    this.snackBar.open('Field settings change successefully!' , 'OK', {
      duration: 3000
    });
  }

}
