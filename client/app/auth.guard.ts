import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  
      constructor(private authService:AuthService, private router:Router) { }

          canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
              return this.authService.isAuth().map(e => {
                  if (e) {
                      return true;
                  }
              }).catch(() => {
                  this.router.navigate(['/login']);
                  return Observable.of(false);
              });
          }
    }

}
