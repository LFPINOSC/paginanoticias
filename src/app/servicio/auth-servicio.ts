import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServicio {
  private apiUrl= `${environment.apiUrl1}/auth/login`;
  private loggedIn$= new BehaviorSubject<boolean>(this.isAuthenticated());
  
  private jwtHelper=new JwtHelperService();

  constructor(private http: HttpClient, private router: Router){}
  
  login(username: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.http.post<any>(this.apiUrl, { username, password }).subscribe(
        res => {
          console.log("Conexión API exitosa");

          // Decodificar JWT
          const payload = JSON.parse(atob(res.token.split('.')[1]));
          console.log("Payload decodificado:", payload);

          // Guardar en localStorage
          localStorage.setItem('token', res.token);
          localStorage.setItem('exp', payload.exp.toString()); // <-- Aquí estaba el error
          localStorage.setItem('tipoUsuario', payload.tipoUsuario);

          // Actualizar estado y navegar
          this.loggedIn$.next(true); 
          this.router.navigate(['/dashboard']);

          observer.next(res);
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  }

      
  
  cerrarSesion(){
    localStorage.clear();
    this.loggedIn$.next(false);

  }
  getToken():string | null{
    return localStorage.getItem('token');
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const exp = localStorage.getItem('exp');
    if (!token || !exp) return false;
    const now = Date.now();
    const expiration = parseInt(exp, 10);
    return now < expiration;
  }
  getUsuarioInfo(): any{
    const token=this.getToken();
    if(!token) return null;
    return this.jwtHelper.decodeToken(token);
  }
  getTokenExpiratioData(): Date | null{
    const token=this.getToken();
    if (!token) return null;
    return this.jwtHelper.getTokenExpirationDate(token);
  }
  authStatus(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
}
