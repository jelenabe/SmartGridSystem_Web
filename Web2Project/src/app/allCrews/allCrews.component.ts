import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Crew {
  id: number;
  name: string;
  crewMembers: string;
}

const ELEMENT_DATA: Crew[] = [
  {id: 1, name: 'Ekipa1', crewMembers: 'Mika, Pera, Laza'},
  {id: 2, name: 'Ekipa2', crewMembers: 'Zika, Avelj, Baja'},
  {id: 3, name: 'Ekipa3', crewMembers: 'Boriša, Vladoje, Vlaislav'},
  {id: 4, name: 'Ekipa4', crewMembers: 'Dobrivoje, Jasmin, Ljubisav'},
  {id: 5, name: 'Ekipa5', crewMembers: 'Milidrag, Pera, Milivoj'},
  {id: 6, name: 'Ekipa6', crewMembers: 'Perunko, Pera, Laza'},
  {id: 7, name: 'Ekipa7', crewMembers: 'Mika, Radovan, Radun'},
  {id: 8, name: 'Ekipa8', crewMembers: 'Sekula, Srdan, Uteša'},
  {id: 9, name: 'Ekipa9', crewMembers: 'Hranislav, Šćepan, Cvetašin'},
  {id: 10, name: 'Ekipa10', crewMembers: 'Radovan, Pejak, Ranislav'},
];

@Component({
  selector: 'app-allCrews',
  templateUrl: './allCrews.component.html',
  styleUrls: ['./allCrews.component.css']
})

export class AllCrewsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'crewMembers','Buttons'];
  dataSource: MatTableDataSource<Crew>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
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
  deleteRow(index: number){
    this.dataSource.data.splice(index,1);
    this.dataSource._updateChangeSubscription();
  }


}
