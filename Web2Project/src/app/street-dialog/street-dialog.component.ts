import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-street-dialog',
  templateUrl: './street-dialog.component.html',
  styleUrls: ['./street-dialog.component.css']
})
export class StreetDialogComponent implements OnInit {
  Streets: any = [];
  selectedStreets: any = [];

  model: any =
  {
   LocationsIds:[],
  }

  streets: any[] = ['Alekse Santica br.54', 'Puskinova br.65', 'Svetog Save br.13', 'Moskovska br.60', 'Nikole Teske br.98'];
  constructor() { 
    this.getStreets();
  }

  ngOnInit() {
  }

  getStreets(){

    /*this.crewService.getUsers().subscribe((response) =>{
      this.CrewMembers = response;
    });*/
  }

  apply(){
    this.selectedStreets.forEach((element: { locationId: number; }) => {
      this.model.LocationsIds.push(element.locationId);
    });

    // servis za dodjelu prioriteta ulicama
    /*this.crewService.addCrew(this.model).subscribe((response) =>
    {
      console.log('Crew added!');
    });*/
  }
  


}
