import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.loginService.usuarioLoggeado.pipe(
        take(1),
        tap(isAuth=>{
          console.log(this.loginService.usuarioLoggeado);
          if (!this.loginService.usuarioLoggeado) {
            this.router.navigateByUrl('/login');
          }
        })
      );
  }
}
