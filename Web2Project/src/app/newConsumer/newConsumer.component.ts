import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NewConsumerService } from '../services/new-consumer.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-newConsumer',
  templateUrl: './newConsumer.component.html',
  styleUrls: ['./newConsumer.component.css']
})
export class NewConsumerComponent implements OnInit {
  model: any= {};
  queryString: string= "";
  params:string[];
  paramsTwo:string[];
  location:string[];

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


  constructor(private newConsumerService: NewConsumerService,private _snackBar: MatSnackBar,
              private router:Router) { }

  ngOnInit() {
  }

  save(){
    console.log(this.model);
    this.newConsumerService.save(this.model).subscribe((response)=>{
      console.log("Applay changes successfull");
      console.log(response);
        
    });
    this.openSnackBar();
    this.router.navigate(['/','consumers']);
  }
  openSnackBar() {
    this._snackBar.open("Consumer success added" ,'OK', {
      duration: 3000
    });
  }
  

}
