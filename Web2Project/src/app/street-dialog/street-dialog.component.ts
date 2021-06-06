import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location';
import { AdminService } from '../services/admin.service';

export interface LocationColumns {
  id: number;
  street: string;
  city: string;
  postNumber:number;
  priority: number;
  newPriority:number;
}

const ELEMENT_DATA: LocationColumns[] = [];

@Component({
  selector: 'app-street-dialog',
  templateUrl: './street-dialog.component.html',
  styleUrls: ['./street-dialog.component.css']
})
export class StreetDialogComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  location:string[];
  locations: any[] = [];
  priorities:number[];


  model: any = {};
  displayedColumns = [ 'id', 'street', 'city', 'postNumber', 'priority', 'newPriority','buttons'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

   constructor( private locationService: LocationService,
    private snackBar: MatSnackBar,
    private adminService: AdminService) { 
  }

  ngOnInit() {
    this.getAllLocations();
    this.priorities=[1, 2, 3, 4, 5];
  }

  getAllLocations() {
    this.locationService.getAllLocations().subscribe(
      data => {
        this.locations=data;
        console.log(data);
        console.log(this.locations)
        this.locations.forEach((element: { locationId: number; street: string; city:string; postNumber: number; priority:number;})=> {
         
          this.ELEMENT_DATA.push(element)
        });
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      },
      error => {
        this.getAllLocations();
      }
    )
  }
  formatLocation(location: Location) {
    return `${location.street}, ${location.city}, ${location.postNumber}`;
  }

  apply(){
    
    // servis za dodjelu prioriteta ulicama
    this.adminService.applyPriority(this.model).subscribe((response) =>
    {
      console.log('Appaly street priority!');
    });
  }
  
}
