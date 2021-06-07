import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SafetyDocumentsGuard implements CanActivate {
  constructor(private router: Router, private snackBar: MatSnackBar) { }

  canActivate(): boolean {
    const userType = localStorage.getItem('type');
    if (userType === '0' || userType === '1' || userType === '2') {
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      this.snackBar.open("You do not have permission for this action!", "", { duration: 4000 });
      return false;
    }
  }
  
}
