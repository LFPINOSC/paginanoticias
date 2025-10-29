import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { Menus } from './components/menus/menus';
import { MenuDasboard } from './components/menu-dasboard/menu-dasboard';
import { CommonModule } from '@angular/common';
import { AuthServicio } from './servicio/auth-servicio';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet,
    Menus,
    CommonModule,
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  
}
     
  
  

