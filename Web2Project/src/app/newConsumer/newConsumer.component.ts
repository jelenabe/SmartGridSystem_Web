import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NewConsumerService } from '../services/new-consumer.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';

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
  location:string[];
  locations: Location[] = [];

  constructor(private newConsumerService: NewConsumerService,
              private snackBar: MatSnackBar,
              private router: Router,
              private locationService: LocationService) { }

  ngOnInit() {
    this.getAllLocations();
  }

  save(){
    this.model.street="";
    this.model.city="";
    this.model.postNumber="0";
    this.model.consumerId=0;
    console.log(this.model);
   
    this.newConsumerService.save(this.model).subscribe((response)=>{
      console.log('Applay changes successfull');
      console.log(response);
      this.openSnackBar();
      this.router.navigate(['consumers']);
    });

  }

  openSnackBar() {
    this.snackBar.open('Consumer success added' , 'OK', {
      duration: 3000
    });
  }
  getAllLocations() {
    this.locationService.getAllLocations().subscribe(
      data => {
        this.locations=data;
        console.log(data);
        console.log(this.locations)
      },
      error => {
        this.getAllLocations();
      }
    )
  }
  formatLocation(location: Location) {
    return `${location.street}, ${location.city}, ${location.postNumber}`;
  }
  

}
