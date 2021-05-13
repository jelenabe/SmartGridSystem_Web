import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewConsumerService } from '../services/new-consumer.service';

export interface ConsumersColumns {
  id: number;
  name: string;
  lastname: string;
  phoneNumber: string;
  street: string;
  city: string;
  postNumber:number;
  type: string;
}

const ELEMENT_DATA: ConsumersColumns[] = [];

@Component({
  selector: 'app-select-consumer',
  templateUrl: './select-consumer.component.html',
  styleUrls: ['./select-consumer.component.css']
})
export class SelectConsumerComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  Consumers: any = [];
  model: any= {};
  @Output() newItemEvent = new EventEmitter<any>();
  
  displayedColumns = [ 'id', 'name', 'lastname', 'phoneNumber', 'address', 'type','buttons'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<ConsumersColumns>(true, []);  // checkbox

  constructor(public dialogRef: MatDialogRef<SelectConsumerComponent>,private newConsumerService: NewConsumerService) { 

    this.newConsumerService.getConsumers().subscribe((response)=>{
      console.log("Applay changes successfull");
      this.Consumers = response;
      console.log(this.Consumers);
      this.Consumers.forEach((element: { consumerId: number; name: string; lastname:string; street: string; city:string; phone:string; postNumber:number; type:string  })=> {
        if(element.type=='2'){
          element.type='Comercial';
        }else{
          
          element.type='Residential';
        }
        this.ELEMENT_DATA.push(element)
      });
      
    
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    })
   }

  ngOnInit() {
  }
  ClickCancel(): void {
    this.dialogRef.close();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

select(consumerId:number,i:number){
 this.newConsumerService.getConsumer(consumerId).subscribe((response)=>{
  this.model=response;
  this.newItemEvent.emit(this.model);
 })
}
displayConsumerInfo(){
  
}
}

