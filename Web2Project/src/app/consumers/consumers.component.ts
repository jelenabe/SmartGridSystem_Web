import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Consumer {
  id: number;
  name: string;
  lastName: string;
  location: string;
  phoneNumber: string;
  type: string;
}

const ELEMENT_DATA: Consumer[] = [
  {id: 1, name: 'Milica', lastName: 'Simeunovic', location: 'Mucenika Romanovih 44 Bijeljina', phoneNumber: '065713244', type: 'Komercijalni'},
  {id: 2, name: 'Milan', lastName: 'Momcilovic', location: 'Novi Sad', phoneNumber: '065713244', type: 'Komercijalni' },
  {id: 3, name: 'Jelena', lastName: 'Beader', location: 'Beograd', phoneNumber: '065713244', type: 'Komercijalni'},
  {id: 4, name: 'Ivana', lastName: 'Markovic', location: 'Banja Luka', phoneNumber: '065713244', type: 'Komercijalni'},
  {id: 5, name: 'Nikola', lastName: 'Nikolic', location: 'Nis', phoneNumber: '065713244', type: 'Komercijalni' },
  {id: 6, name: 'Simo', lastName: 'Simic', location: 'Bijeljina', phoneNumber: '065713244', type: 'Komercijalni' },
  {id: 7, name: 'Pera', lastName: 'Peric', location: 'Novi Sad', phoneNumber: '065713244', type: 'Komercijalni' },
  {id: 8, name: 'Sanja', lastName: 'Simic', location: 'Bijeljina', phoneNumber: '065713244', type: 'Komercijalni' },
  {id: 9, name: 'Marija', lastName: 'Nikolic', location: 'Bijeljina', phoneNumber: '065713244', type: 'Komercijalni' },
  {id: 10, name: 'Tamara', lastName: 'Tamaric', location: 'Bijeljina', phoneNumber: '065713244', type: 'Komercijalni'},
];
@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'location', 'phoneNumber', 'type', 'Buttons'];
  dataSource: MatTableDataSource<Consumer>;

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
    //index oznacava koji consumer treba da se prikaze
    this.router.navigate(['/', 'newConsumer',index]);
  }

  deleteRow(index: number){
    this.dataSource.data.splice(index,1);
    this.dataSource._updateChangeSubscription();
  }

}
