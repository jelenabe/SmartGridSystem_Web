import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {
  subcausesFailure:string[] = ['failure1', 'failure2', 'failure3'];
  subcausesWeather:string[] = ['Storm', 'Hurricane', 'Wind', 'Snow', 'Lightning', 'Hail'];
  subcausesHumanFactor:string[] = ['human1', 'human2', 'human3', 'human4'];
  subcauses:string[] = [];

  resolutionFormControl= new FormControl();

  constructor() { }

  ngOnInit() {
  }

  SelectionChangedCause(event:any)
  {
    if(event.value === 'failure')
    {
      this.subcauses = this.subcausesFailure;

    }else if(event.value === 'weather')
    {
      this.subcauses = this.subcausesWeather;

    }else if(event.value === 'human_factor')
    {
      this.subcauses = this.subcausesHumanFactor;
    }
  }

  get showSubcauses():boolean{

    return (this.subcauses.length > 0);
    
  }




}
