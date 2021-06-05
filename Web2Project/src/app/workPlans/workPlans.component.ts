import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WorkPlan } from '../models/work-plan';
import { WorkPlanService } from '../services/workPlan.service';

@Component({
  selector: 'app-workPlans',
  templateUrl: './workPlans.component.html',
  styleUrls: ['./workPlans.component.css']
})
export class WorkPlansComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: any[] = [];

  displayedColumns: string[] = ['id', 'startDate', 'phone', 'status', 'address'];

  dataSource: MatTableDataSource<WorkPlan>;
  model: any = {};

  workPlans: WorkPlan[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private planService: WorkPlanService) {
   }

  ngOnInit() {
    this.getAllPlans();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllPlans(){

    this.ELEMENT_DATA = [];
    this.planService.getAllPlans().subscribe(response => {
      this.workPlans=response;
    });

    console.log(this.workPlans);

      this.workPlans.forEach(element=> {
        
        this.ELEMENT_DATA.push(element)
      });

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getMinePlans(){

    this.ELEMENT_DATA = [];
    var param = localStorage.getItem('id');

    if (param != null){
    this.planService.getMineRequest(+param).subscribe(response => {
      this.workPlans=response;
    });
  }

    console.log(this.workPlans);

      this.workPlans.forEach(element=> {
        
        this.ELEMENT_DATA.push(element)
      });

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
