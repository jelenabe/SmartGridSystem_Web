import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditDeviceGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const userType = localStorage.getItem('type');
    if (userType === '3') {
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      // snackBar
      return false;
    }
  }
  
}
