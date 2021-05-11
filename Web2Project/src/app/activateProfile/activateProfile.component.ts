import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-activateProfile',
  templateUrl: './activateProfile.component.html',
  styleUrls: ['./activateProfile.component.css']
})
export class ActivateProfileComponent implements OnInit {

  inactiveProfiles: any = [];

  constructor(private userService: UserService) {

    this.userService.getInactiveProfiles().subscribe((response) => {
      console.log(response);
      this.inactiveProfiles = response;
      console.log(this.inactiveProfiles);
    })

  }

  ngOnInit() {
  }

  activateProfile(id:any, i:any)
  {
    this.userService.ActivateUser(id).subscribe((response) =>{
      console.log('Profile activated!');
      this.inactiveProfiles.splice(i, 1);
    })


  }

  deleteProfile(id:any, i:any)
  {
    this.userService.DeleteUser(id).subscribe((response) =>{
      console.log('Profile delited!');
      this.inactiveProfiles.splice(i, 1);
    })

  }

}
