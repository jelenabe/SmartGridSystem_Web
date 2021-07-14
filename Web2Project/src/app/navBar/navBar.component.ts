import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
  admin:boolean=true;
  badgeContent: number;

  visible: boolean = true;

  constructor() {
    this.badgeContent = 15;

    if (localStorage.getItem('type') === '3'){
      this.admin = true;
    }
    else{
      this.admin = false;
    }

    if (localStorage.getItem('type') === null || localStorage.getItem('type') === '4'){
      this.visible = false;
    }
    else{
      this.visible = true;
    }
    
   }

  ngOnInit() {
  }

}
