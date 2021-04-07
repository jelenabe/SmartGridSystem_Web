import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-reportOutage',
  templateUrl: './reportOutage.component.html',
  styleUrls: ['./reportOutage.component.css']
})
export class ReportOutageComponent implements OnInit {
  model: any= {};

  constructor(private profileService: ProfileService) { }

  report(){
    console.log(this.model);
    this.profileService.applyChanges(this.model).subscribe(()=>{
      console.log("Applay changes successfull");
    })
  }
  ngOnInit() {
  }

}
