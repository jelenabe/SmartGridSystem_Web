import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../newConsumer/newConsumer.component';
import { NewConsumerService } from '../services/new-consumer.service';

@Component({
  selector: 'app-edit-consumer',
  templateUrl: './edit-consumer.component.html',
  styleUrls: ['./edit-consumer.component.css']
})
export class EditConsumerComponent implements OnInit {
  model: any= {};
  queryString: string= "";
  params:string[];
  paramsTwo:string[];
  location:string[];
  consumerId:number;

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  streetFormControl = new FormControl('', [
    Validators.required,
  ]);
  cityFormControl = new FormControl('', [
    Validators.required,
  ]);
  postNumberFormControl = new FormControl('', [
    Validators.required,
  ]);
  phoneNumberFormControl = new FormControl('', [
    Validators.required,
  ]);
  typeFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  matcher = new MyErrorStateMatcher();


  constructor(private newConsumerService: NewConsumerService,private _snackBar: MatSnackBar,  private router:Router,private cdref: ChangeDetectorRef) {
    
    var url= this.router.url;
    var array= url.toString().split('/');
    this.consumerId=+array[array.length-1];


    this.newConsumerService.getConsumer(this.consumerId).subscribe((response)=>{
      console.log("Edit consumer successfull");
      this.model = response;
  })
}

  ngOnInit() { 
    
  }
  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }
  
  saveChange(){
    this.model.Id= this.consumerId;
    this.newConsumerService.saveChange(this.model).subscribe(()=>{
    console.log("Edit consumer successfull");
    });
    this.openSnackBar();
  }
  openSnackBar() {
    this._snackBar.open("Edit consumer successfull" ,'OK', {
      duration: 3000
    });
  }
  

}
