import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate(): boolean{
        const userType = localStorage.getItem('type');
        if(userType === '3'){
            return true;
        }else{
            this.router.navigateByUrl('/dashboard');
            return false;
        }
    }
}
