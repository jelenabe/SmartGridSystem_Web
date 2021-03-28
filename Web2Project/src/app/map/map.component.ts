import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 45.2396;
  lng = 19.8227;

  constructor() {

  }

  ngOnInit() {
  }

}


