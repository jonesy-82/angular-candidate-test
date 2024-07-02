import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitationDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  // ToDo: Research the updated method of implementing this route guard since CanActivate 
  // appears to be deprecated
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id'));
      if (isNaN(id)) {
        alert('Invalid citation id');
        this.router.navigate(['/citations']);
        return false;
      }
    return true;
  }
  
}
