import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-activateProfile',
  templateUrl: './activateProfile.component.html',
  styleUrls: ['./activateProfile.component.css']
})
export class ActivateProfileComponent implements OnInit {

  inactiveProfiles: any = [
    {
    "Name":"Milan",
    "Username" : "Moma",
    "Type" : "Type1",
    "Lastname": "Momcilovic",
    "Email" : "milan.momcilovic582@gmail.com",
    "Address" : "Dalmatinska 4"
    },
    {
      "Name":"Pera",
      "Username" : "Perica",
      "Type" : "Type2",
      "Lastname": "Peric",
      "Email" : "pera.peric@gmail.com",
      "Address" : "ulica br1"
    },
    {
        "Name":"Laza",
        "Username" : "Laki",
        "Type" : "Type3",
        "Lastname": "Lazic",
        "Email" : "laza.lazic@gmail.com",
        "Address" : "ulica br4"
    },
  ];

  constructor(private profileService : ProfileService) { }

  ngOnInit() {
  }

  activateProfile(id:any, i:any)
  {
    console.log("Profile activated!");
    this.inactiveProfiles.splice(i,1);
    
  }
  
  deleteProfile(id:any,i:any)
  {
    console.log("Profile delited!");
    this.inactiveProfiles.splice(i,1);
  }

}
