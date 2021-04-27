import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-safety-document',
  templateUrl: './history-safety-document.component.html',
  styleUrls: ['./history-safety-document.component.css']
})
export class HistorySafetyDocumentComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
