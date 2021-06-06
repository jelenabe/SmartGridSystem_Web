import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WorkPlan } from '../models/work-plan';
import { LocationService } from '../services/location.service';
import { WorkPlanService } from '../services/workPlan.service';
import {Location} from '../models/location'

@Component({
  selector: 'app-workPlans',
  templateUrl: './workPlans.component.html',
  styleUrls: ['./workPlans.component.css']
})
export class WorkPlansComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: any[] = [];

  displayedColumns: string[] = ['id', 'startDate', 'phone', 'status', 'location'];

  dataSource: MatTableDataSource<WorkPlan>;
  model: any = {};
  locations: Location[] = [];
  locationsToShow: any[] = [];

  workPlans: WorkPlan[] = [];

  visible: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private planService: WorkPlanService,
    private locationService:LocationService) {
      if (localStorage.getItem('type') === '3' || localStorage.getItem('type') === '1'){
        this.visible = true;
      }
      else{
        this.visible = false;
      }
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

  
    getAllLocations() {
      this.locationService.getAllLocations().subscribe(
        data => {
          this.locations=data;
          console.log(data);
          console.log(this.locations)
        }
      )
    }
  

  getAllPlans(){
    this.getAllLocations();
    this.ELEMENT_DATA = [];
    this.locationsToShow= [];
    this.planService.getAllPlans().subscribe(response => {
      this.workPlans=response;
      console.log(this.workPlans);

      this.workPlans.forEach(element=> {
        this.locations.forEach(elementLocation=>{
          if(elementLocation.locationId==element.locationId)
          {
            this.locationsToShow.push(elementLocation.street + elementLocation.city)
          }
        })
        this.ELEMENT_DATA.push(element)
      });

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });

    
  }

  getMinePlans(){

    this.ELEMENT_DATA = [];
    var param = localStorage.getItem('id');

    if (param != null){
    this.planService.getMineRequest(+param).subscribe(response => {
      this.workPlans=response;

      

    console.log(this.workPlans);

    this.workPlans.forEach(element=> {
      
      this.ELEMENT_DATA.push(element)
    });

  this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    });
  }
  }

}
