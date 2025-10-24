import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/Menu';
import { MenuServicio } from '../../servicio/menu-servicio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.html',
  styleUrl: './menus.css',
  imports: [CommonModule]
})
export class Menus implements OnInit{
  menus:Menu[]=[];
  menuAbierto = false;
  constructor(private menuServicio:MenuServicio){}
  ngOnInit(): void {
      this.menuServicio.obtenerMenu().subscribe({
        next: data => this.menus=data,
        error: err=> console.log('ERROR AL CARGAR EL MENU',err)
      })
  }
}
