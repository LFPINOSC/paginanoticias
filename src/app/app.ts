import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { Menus } from './components/menus/menus';
import { MenuDasboard } from './components/menu-dasboard/menu-dasboard';
import { CommonModule } from '@angular/common';
import { AuthServicio } from './servicio/auth-servicio';
import { Empresa } from './models/Empresa';
import { EmpresaService } from './servicio/empresa-servicio';
import { FooterComponentTs } from './components/footer.component.ts/footer.component.ts';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet,
    Menus,
    CommonModule,
    FooterComponentTs,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit {

  empresaActiva: Empresa | null = null;

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    // Intentar recuperar de localStorage primero
    const guardada = localStorage.getItem('empresaActiva');

    if (guardada) {
      this.empresaActiva = JSON.parse(guardada);
      console.log('✅ Empresa cargada desde localStorage:', this.empresaActiva);
    } else {
      // Si no está en localStorage, consultarla del backend
      this.empresaService.obtenerActiva().subscribe({
        next: (empresa) => {
          this.empresaActiva = empresa;
          localStorage.setItem('empresaActiva', JSON.stringify(empresa));
          console.log('🏢 Empresa activa cargada del backend:', empresa);
        },
        error: (err) => {
          console.warn('⚠️ No se pudo obtener empresa activa:', err);
        }
      });
    }
  }
}
     
  
  

