import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WorkRequest } from '../models/work-request';
import { WorkRequestService } from '../services/work-request.service';

@Component({
  selector: 'app-workOrders',
  templateUrl: './workOrders.component.html',
  styleUrls: ['./workOrders.component.css']
})
export class WorkOrdersComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['id', 'startDate', 'phone', 'status', 'location'];
  dataSource: MatTableDataSource<WorkRequest>;

  model: any = {};

  workRequests: WorkRequest[] = [];

  visible: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private requestService: WorkRequestService) {

    if (localStorage.getItem('type') === '3' || localStorage.getItem('type') === '1'){
      this.visible = true;
    }
    else{
      this.visible = false;
    }

  }
  ngOnInit(){
    this.getAllRequest();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllRequest(){
    this.ELEMENT_DATA = [];
    this.requestService.getAllRequests().subscribe((response) => {
      this.workRequests=response;

      console.log(this.workRequests);

      this.workRequests.forEach(element=> {

        this.ELEMENT_DATA.push(element)
      });

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });

    
  }

  getMineRequest(){
    this.ELEMENT_DATA = [];
    var param = localStorage.getItem('id');

    if (param != null){
    this.requestService.getMineRequest(+param).subscribe(response => {
      this.workRequests=response;

      console.log(this.workRequests);

      this.workRequests.forEach(element=> {
        
        this.ELEMENT_DATA.push(element)
      });

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
  }
  }


 

}
