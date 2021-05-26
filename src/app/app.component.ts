import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  onLogout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login'); // Redirige a página de log in.
  }
}
