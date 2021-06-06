import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CrewService } from '../services/crew.service';

@Component({
  selector: 'app-newCrew',
  templateUrl: './newCrew.component.html',
  styleUrls: ['./newCrew.component.css']
})
export class NewCrewComponent implements OnInit {

  CrewMembers: any = [];
  crewName: string;
  selectedMembers: any = [];

  model: any = 
    {
    Name: '',
    UserIds: []
    }
  

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private crewService: CrewService,
    private snackBar:MatSnackBar,
    private router: Router) {
    this.getUsers();
  }

  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  getUsers()
  {
    this.crewService.getUsers().subscribe((response) =>{
      this.CrewMembers = response;
    });
  }

  AddCrew(){

    this.model.Name = this.crewName;
    this.selectedMembers.forEach((element: { userId: number; }) => {
      this.model.UserIds.push(element.userId);
    });

    this.crewService.addCrew(this.model).subscribe((response) =>
    {
      if(this.model.Name!=null){
      this.openSnakBar();
      console.log('Crew added!');
      this.router.navigate(['allCrews']);
      }else{
        this.openSnakBarError();
      }
    });
  }
  openSnakBar(){
      this.snackBar.open('Crew success added' , 'OK', {
        duration: 3000
      });
    
  }
  openSnakBarError(){
    this.snackBar.open('Faild to add' , 'OK', {
      duration: 3000
    });
  
}

}
