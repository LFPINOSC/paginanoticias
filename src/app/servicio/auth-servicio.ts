import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServicio {
  private apiUrl= `${environment.apiUrl1}/auth/login`;

  private jwtHelper=new JwtHelperService();

  constructor(private http: HttpClient, private router: Router){}
  
  login(username: string, password:string): Observable<boolean>{
    return this.http.post<any>(this.apiUrl,{username,password}).pipe(
      map(reponse => {
        if(reponse.token){
          localStorage.setItem('token',reponse.token);
          return true;
        }
        return false; 
      })
    );
  }
  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  getToken():string | null{
    return localStorage.getItem('token');
  }
  isAuthenticated():boolean {
    const token=this.getToken();
   if (!token) {
      console.log('❌ No hay token');
      return false;
    }

    const expired = this.jwtHelper.isTokenExpired(token);
    console.log('¿Token expirado?', expired);
    return !expired; // ✅ true si el token sigue vigente
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
}
