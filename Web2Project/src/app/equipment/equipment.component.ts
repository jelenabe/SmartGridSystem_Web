import { Component, OnInit } from '@angular/core';

export interface Equipment {
  id: number;
  name: string;
}

export const EQUIPMENTS: Equipment[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  equipments: any[];
  constructor() { 
    this.equipments = EQUIPMENTS;
  }

  ngOnInit() {
  }



}
