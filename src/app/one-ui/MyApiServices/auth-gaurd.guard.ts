import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from './auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  
  constructor(private router: Router,private authService:AuthServicesService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticated(); 

    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      this.router.navigate(['/login']); 
      return false;
    }

    return true;
  }
  
}
