import { Component, OnInit } from '@angular/core';
import { IConsumer } from '../model/consumer';
import { HeroService } from '../services/Hero.service';
import { LocationService } from '../services/location.service';
import { NewConsumerService } from '../services/new-consumer.service';
import { ProfileService } from '../services/profile.service';
import { Location } from '../models/location';
import { randomInt } from 'node:crypto';
import { isDate } from 'util';
import { PayPalService } from '../services/PayPal.service';

@Component({
  selector: 'app-paypal-form',
  templateUrl: './paypal-form.component.html',
  styleUrls: ['./paypal-form.component.css']
})
export class PaypalFormComponent implements OnInit {

  consumerId: number;
  location:string[];
  locations: Location[] = [];

  public consumers: any = {}
  
  constructor(private payPalService: PayPalService, private profilService: ProfileService, private locationService: LocationService) { 
    const id = localStorage.getItem('id');
    console.log(id);
    if(id)
      this.consumerId = +id;
  }

  ngOnInit() {
    this.getAllLocations();
    
    this.profilService.getUser(this.consumerId).subscribe((response)=>{
      this.consumers = response;
      const number =  (Math.random() * (4000 - 1500) + 1500).toString();
      this.consumers.price = number.split('.')[0] + ' din';
      this.consumers.date = new Date().toString();
  });
  }

  next() {
    this.payPalService.addConsumers({firstName: this.consumers.name, lastName: this.consumers.lastname, location: this.consumers.locationId, price: this.consumers.price, date: this.consumers.date});
    this.payPalService.getConsumers$();
  }
  getAllLocations() {
    this.locationService.getAllLocations().subscribe(
      data => {
        this.locations=data;
        console.log(data);
        console.log(this.locations);
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
