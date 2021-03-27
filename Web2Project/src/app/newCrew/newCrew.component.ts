import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newCrew',
  templateUrl: './newCrew.component.html',
  styleUrls: ['./newCrew.component.css']
})
export class NewCrewComponent implements OnInit {

  Members: string[] = ['Mika ', 'Pera', 'Laza', 'Cvetašin', 'Radovan', 'Srboljub'];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
