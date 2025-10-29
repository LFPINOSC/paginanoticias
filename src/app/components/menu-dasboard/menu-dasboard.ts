import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicio } from '../../servicio/auth-servicio';

@Component({
  selector: 'app-menu-dasboard',
  imports: [],
  templateUrl: './menu-dasboard.html',
  styleUrl: './menu-dasboard.css'
})
export class MenuDasboard {
  constructor(private router:Router, private auth:AuthServicio){}

  cerrarSession(){
    console.log('cerrar session')
     this.auth.cerrarSesion();
     localStorage.removeItem('token');
     this.router.navigate(['/login']);
  }
}
