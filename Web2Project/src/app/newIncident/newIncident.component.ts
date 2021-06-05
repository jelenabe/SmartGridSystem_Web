import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EnableButtonService } from '../services/enable-button.service';

@Component({
  selector: 'app-newIncident',
  templateUrl: './newIncident.component.html',
  styleUrls: ['./newIncident.component.css']
})
export class NewIncidentComponent implements OnInit {
  newIncident:boolean = true;

  tabMessagingSubscription!:Subscription;  // koristi se samo za prijavu(subscribe) i odjavu(unsubscribe)

  constructor(private tabMessaging:EnableButtonService) { }

  ngOnDestroy(): void {  // ovde pisemo nesto sto treba da se dogodi kada je instanca unistena
    this.tabMessagingSubscription.unsubscribe();
  }

  ngOnInit() {

    this.tabMessagingSubscription = this.tabMessaging.getMessage().subscribe( message => {  // subscribe-ovala sam se, tj. postajem posmatrac nad subjektom
      if(this.newIncident)  // AKO VEC NISI NA EDITU, PREBACI SE NA EDIT:
        this.newIncident = false;  // PREBACI NA EDIT; message JE ID INCIDENTA
    });

  }


  /*
  changeView(num: number) {

    switch (num) {
      case 1:
        this.buttonClicked = 1;
        break;
      case 2:
        this.buttonClicked = 2;
        break;
      case 3:
        this.buttonClicked = 3;
        break;
      case 4:
        this.buttonClicked = 4;
        break;
      case 5:
        this.buttonClicked = 5;
        break;
      case 6:
        this.buttonClicked = 6;
        break;
      default:
        this.buttonClicked = 1;
    }
  }
  */


}
