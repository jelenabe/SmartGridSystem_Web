import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrewService } from '../services/crew.service';

export interface Crew {
  id: number;
  name: string;
  crewMembers: string;
}

const ELEMENT_DATA: Crew[] = [];



@Component({
  selector: 'app-allCrews',
  templateUrl: './allCrews.component.html',
  styleUrls: ['./allCrews.component.css']
})

export class AllCrewsComponent implements OnInit {
  AllCrews: any = [];
  DataSource: any[] = [];

  displayedColumns: string[] = ['crewId', 'name', 'Buttons'];
  dataSource: MatTableDataSource<Crew>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private router: Router, private crewService: CrewService) {
    this.getAllCrews();
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEditCrew(index: number)
  {
    this.router.navigate(['/', 'newCrew', index]);
  }
  deleteRow(index: any){
    this.crewService.deleteCrews(index.crewId).subscribe((response)=>
    {
      console.log(response);
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    })
  }

  getAllCrews()
  {
    this.crewService.getAllCrews().subscribe((response) =>{

      this.AllCrews = response;
      this.AllCrews.forEach((element:{crewId:number, name:string}) => {
        this.DataSource.push(element);
      });
      this.dataSource = new MatTableDataSource(this.DataSource);
    })
  }


}
