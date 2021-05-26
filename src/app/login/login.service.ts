import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Usuario } from './usuario.model';


export interface LoginResponseData {
  kind: string;
  idToken: string;
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
  private usuario = new BehaviorSubject<Usuario>(null);

  get usuarioLoggeado() {
    return this.usuario.asObservable().pipe(map(user => {
      if (user) {
        return !!user.token; // si sí hay token, regresa true, sino, false.
      }
      else {
        return false; // si no hay usuario, regresa falso
      }
    }));

  }
  constructor(
    private http: HttpClient
  ) { }

  logout() {
    this.usuario.next(null);
  }

  // Para signup y login se hacen peticiones post a Firebase.

  signup(email: string, password: string) {
    return this.http.post<LoginResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      { email, password, returnSecureToken: true }
    );
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      { email, password, returnSecureToken: true }
    ).pipe(tap(this.setUserDate.bind(this)));
  }

  private setUserDate(userData: LoginResponseData) { //guardamos el usuario logeado
    const expTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));
    this.usuario.next(new Usuario(userData.localId, userData.email, userData.idToken, expTime));
    // asigna al Subject usuario como valor siguiente el nuevo usuario.
  }
}
