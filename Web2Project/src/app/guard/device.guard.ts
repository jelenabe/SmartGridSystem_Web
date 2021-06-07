import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceGuard implements CanActivate {  // ko moze da vidi prikaz svih deviceova

  constructor(private router: Router) { }

  canActivate(): boolean {
    const userType = localStorage.getItem('type');
    if (userType === '0' || userType === '1' || userType === '2' || userType === '3') {
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      return false;
    }
  }

}
