import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  show: boolean = true
  model: any = {};
  password: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register()
  {
    if(!this.checkPasswords()){
      console.log("Passwords doesn't match");
      return;
    }
    console.log(this.model);
    this.authService.register(this.model).subscribe(()=>{
      console.log('Registration Successfull!');
    })
  }


  checkPasswords() {
  if(this.model.Password === this.model.PasswordRepete){
    return true;
  }
  else{
    return false;
  }   
}


}
