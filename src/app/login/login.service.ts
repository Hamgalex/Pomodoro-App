import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Usuario } from './usuario.model';


export interface LoginResponseData {
  kind: string;
  idToken: string,
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private _usuarioLoggeado = true;
  private _usuario = new BehaviorSubject<Usuario>(null);

  get usuarioLoggeado() {
    // return this._usuarioLoggeado;
    return this._usuario.asObservable().pipe(map(user => {
      if (user) {
        return !!user.token;
      }
      else {
        return false;
      }
    }));

  }
  constructor(
    private http: HttpClient
  ) { }

  // login() {
  //   this._usuarioLoggeado = true;
  // }
  logout() {
    //this._usuarioLoggeado = false;
    this._usuario.next(null);
  }

  signup(email: string, password: string) {
    return this.http.post<LoginResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      { email: email, password: password, returnSecureToken: true }
    );
  }

  private setUserDate(userData: LoginResponseData) {//guardamos el usuario logeado
    const expTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));
    this._usuario.next(new Usuario(userData.localId, userData.email, userData.idToken, expTime));
  }
  login(email: string, password: string) {
    return this.http.post<LoginResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      { email: email, password: password, returnSecureToken: true }
    ).pipe(tap(this.setUserDate.bind(this)));
  }
}
