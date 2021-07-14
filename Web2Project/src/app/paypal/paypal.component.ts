import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IConsumer } from '../model/consumer';
import { IHero } from '../model/hero';
import { HeroService } from '../services/Hero.service';
import { PayPalService } from '../services/PayPal.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  title = 'Web2Project';
  public heroesObj$: BehaviorSubject<IHero[]>;
  public heroes: IHero[];

  public consumersObj$: BehaviorSubject<IConsumer[]>;
  public consumers: IConsumer[];

  constructor(private heroService: HeroService, private _router: Router, private payPalService: PayPalService) {
    
   } 
  ngOnInit(): void {
    this.heroService.getHeroes$().subscribe((res: IHero[]) => {
      this.heroes = res;
    });
    this.heroesObj$ = this.heroService.getHeroes$();

    this.initHeroes();

    this.payPalService.getConsumers$().subscribe((res: IConsumer[]) => {
      this.consumers = res;
    });
    this.consumersObj$ = this.payPalService.getConsumers$();

  }

  initHeroes() {
    this.heroService.addHeroes({name: 'Zeus', age: 88});
    this.heroService.addHeroes({name: 'Poseidon', age: 46});
  }

  get isFrontPage():boolean{
    return (this._router.url ==="/" || this._router.url ==="/register" || this._router.url ==="/login");
  }
}
