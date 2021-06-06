import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
  admin:boolean=true;
  badgeContent: number;

  constructor() {
    this.badgeContent = 15;
   }

  ngOnInit() {
  }

}
