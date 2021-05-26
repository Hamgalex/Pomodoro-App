import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  canActivate() {
    const logged = this.loginService.usuarioLoggeado; // observable, emite si está loggeado o no.
    logged.subscribe(res=>{
      if(!res) // si no está loggeado te manda al log in.
      {
        this.router.navigateByUrl('/login');
      }
    });
    return true;
  }
}
