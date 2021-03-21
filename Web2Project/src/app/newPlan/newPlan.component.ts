import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newPlan',
  templateUrl: './newPlan.component.html',
  styleUrls: ['./newPlan.component.css']
})
export class NewPlanComponent implements OnInit {

  buttonClicked: any = 1;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  changeView(num: number){

    switch (num){
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
      default:
        this.buttonClicked = 1;
    }
  }
}
