import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/Empresa';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {
  empresaActiva: Empresa | null = null;

  ngOnInit(): void {
    const empresaStr = localStorage.getItem('empresaActiva');
    if (empresaStr) {
      this.empresaActiva = JSON.parse(empresaStr);
    }
  }
}
