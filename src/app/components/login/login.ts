import { Component } from '@angular/core';
import { AuthServicio } from '../../servicio/auth-servicio';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username='';
  password='';
  error='';
  constructor( private authServicio : AuthServicio
    , private router: Router){}
  login() {
    console.log("estoy aqui " );
    this.authServicio.login(this.username, this.password).subscribe(res => {
      console.log("estoy aqui " );
      this.router.navigate(['/dasboard']);
      const token = res.token;
      const decoded = decodeToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('exp', (decoded.exp * 1000).toString());
      localStorage.setItem('tipoUsuario', decoded.tipoUsuario);
      
      
    });
  }

}
function decodeToken(token: string): any {
      const payload = token.split('.')[1];
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
}
