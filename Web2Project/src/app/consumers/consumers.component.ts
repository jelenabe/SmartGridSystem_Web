import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NewConsumerService } from '../services/new-consumer.service';

export interface Consumer {
  id: number;
  name: string;
  lastName: string;
  street: string;
  city: string;
  phoneNumber: string;
  type: string;
}

  
@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  Consumers: any = [];
  displayedColumns: string[] = ['id', 'name', 'location', 'phoneNumber', 'type', 'Buttons'];
  dataSource: MatTableDataSource<Consumer>;

  model: any = {};

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private router: Router, private newConsumerService: NewConsumerService,
    private snackBar: MatSnackBar,) {
    this.newConsumerService.getConsumers().subscribe((response)=>{
      console.log("Applay changes successfull");
      this.Consumers = response;
      console.log(this.Consumers);

      this.Consumers.forEach((element: { consumerId: number; name: string; street: string; city:string; phone:string; type:string  })=> {
        if(element.type=='2'){
          element.type='Comercial';
        }else{

          element.type='Residential';
        }
        this.ELEMENT_DATA.push(element)
      });

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
   }

  ngOnInit() {
   
  }
  getConsumers(){
  
    this.newConsumerService.getConsumers().subscribe((response)=>{
      console.log("Applay changes successfull");
      this.Consumers = response;
      console.log(this.Consumers);
      this.Consumers.forEach((element: { consumerId: number; name: string; location: string; phone:string; type:string  })=> {
        this.ELEMENT_DATA.push(element)
      });
    })
  }
  ngAfterViewInit(): void {
 
  }

 applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deleteRow(Id: number, index:number){
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
    this.newConsumerService.deleteConsumer(Id).subscribe((response) => {
      console.log('Delete successed!');
      this.openSnackBar();
    })
  } 
  
  openSnackBar() {
    this.snackBar.open('Delete successed!' , 'OK', {
      duration: 3000
    });
  }
}
