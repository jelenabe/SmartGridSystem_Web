import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewSafetyDocumentGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const userType = localStorage.getItem('type');
    if (userType === '0' || userType === '1') {
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      return false;
    }
  }
  
}
