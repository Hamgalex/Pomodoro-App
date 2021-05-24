import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
// CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,
import { Router, CanActivate } from '@angular/router';
/* import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators'; */

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  canActivate()
  {
   const logged = this.loginService.usuarioLoggeado;
   logged.subscribe(res=>{
    if(!res)
      {this.router.navigateByUrl('/login');}
   });
   return true;
  }
}
