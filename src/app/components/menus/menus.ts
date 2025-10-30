import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/Menu';
import { MenuServicio } from '../../servicio/menu-servicio';
import { CommonModule } from '@angular/common';
import { Router,  RouterModule } from "@angular/router";
import { AuthServicio } from '../../servicio/auth-servicio';
import { Observable } from 'rxjs';
import { Empresa } from '../../models/Empresa';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.html',
  styleUrl: './menus.css',
  imports: [CommonModule,RouterModule]
})
export class Menus implements OnInit {
  menus: Menu[] = [];
  isLoggedIn$!: Observable<boolean>;
  menuAbierto = false;

  empresaActiva: Empresa | null = null; // 👈 nueva variable

  constructor(
    private menuServicio: MenuServicio,
    private auth: AuthServicio,
    private router: Router
  ) {
    this.isLoggedIn$ = auth.authStatus();
  }

  ngOnInit(): void {
    // 🔹 Cargar menú
    this.menuServicio.obtenerMenu().subscribe({
      next: data => (this.menus = data),
      error: err => console.log('ERROR AL CARGAR EL MENU', err)
    });

    // 🔹 Cargar empresa activa desde localStorage
    const empresaStr = localStorage.getItem('empresaActiva');
    if (empresaStr) {
      this.empresaActiva = JSON.parse(empresaStr);
    }
  }

  cerrarSession() {
    console.log('cerrar session');
    this.auth.cerrarSesion();
    localStorage.removeItem('token');
    this.router.navigate(['/inicio.html']);
  }
}