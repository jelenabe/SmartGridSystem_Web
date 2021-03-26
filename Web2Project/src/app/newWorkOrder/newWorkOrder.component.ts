import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newWorkOrder',
  templateUrl: './newWorkOrder.component.html',
  styleUrls: ['./newWorkOrder.component.css']
})
export class NewWorkOrderComponent implements OnInit {

  buttonClicked: any = 1;

  constructor() { }

  ngOnInit() {
  }

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
      default:
        this.buttonClicked = 1;
    }
  }
}
