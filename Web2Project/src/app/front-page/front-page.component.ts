import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  showFront: boolean = true;
  showLogIn: boolean = false;
  showRegister: boolean = false;
  showReportOutage: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  showComponentFront(){

    this.showFront = true;
    this.showLogIn = false;
    this.showRegister = false;
    this.showReportOutage = false;
  }

  showComponentLogIn(){

    this.showFront = false;
    this.showLogIn = true;
    this.showRegister = false;
    this.showReportOutage = false;
  }

  showComponentRegister(){

    this.showFront = false;
    this.showLogIn = false;
    this.showRegister = true;
    this.showReportOutage = false;
  }

  showComponentReportOutage(){
    
    this.showFront = false;
    this.showLogIn = false;
    this.showRegister = false;
    this.showReportOutage = true;

  }

}
