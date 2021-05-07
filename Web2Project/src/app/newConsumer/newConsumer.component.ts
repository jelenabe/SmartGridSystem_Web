import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NewConsumerService } from '../services/new-consumer.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { NgForm } from '@angular/forms';

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
  edit:boolean=false;

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


  constructor(private newConsumerService: NewConsumerService) { }

  ngOnInit() {
    if(this.edit){
    this.queryString=window.location.href;
    this.params = this.queryString.split('/')
    this.paramsTwo=this.params[3].split(';');
    this.model.name= this.paramsTwo[2].split('=')[1]
    this.model.lastname = this.paramsTwo[3].split('=')[1]
    this.model.phoneNumber = this.paramsTwo[5].split('=')[1]
    this.location = this.paramsTwo[4].split('=')[1].split('%20')
    this.model.location = this.location[0] +' '+ this.location[1] + ' '+this.location[2] + ' '+this.location[3]
    this.model.type = this.paramsTwo[6].split('=')[1]
    }
  }

  save(){
    console.log(this.model);
    this.newConsumerService.save(this.model).subscribe(()=>{
      console.log("Applay changes successfull");
    })
  }

}
