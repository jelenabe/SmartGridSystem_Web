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

  navPaths = [
    'basic-information',
    'devices',
    'resolution',
    'calls',
    'crews',
    'multimedia'
  ];

  constructor(private tabMessaging:EnableButtonService) { }

  ngOnDestroy(): void {  // ovde pisemo nesto sto treba da se dogodi kada je instanca unistena
    this.tabMessagingSubscription.unsubscribe();
  }

  ngOnInit() {

    this.tabMessagingSubscription = this.tabMessaging.getMessage().subscribe( message => {  // subscribe-ovala sam se, tj. postajem posmatrac nad subjektom
      if(this.newIncident){ // AKO VEC NISI NA EDITU, PREBACI SE NA EDIT:
        this.newIncident = false;  // PREBACI NA EDIT; message JE ID INCIDENTA

        let navPathEdit: any = [];
        this.navPaths.forEach( p => {
          //p = p.concat(`/${message}`);  // message je id incidenta
          navPathEdit.push(p.concat(`/${message}`));
        });

        this.navPaths = navPathEdit;

      }

    });

  }


  


}
