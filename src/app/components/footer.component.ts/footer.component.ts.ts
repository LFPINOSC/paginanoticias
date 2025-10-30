import { Component, OnInit } from '@angular/core';
import { PiePagina } from '../../models/PiePagina';
import { PiePaginaService } from '../../servicio/pie-pagina.service.ts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './footer.component.ts.html',
  styleUrl: './footer.component.ts.css',
  imports: [CommonModule]
})

export class FooterComponentTs implements OnInit {
  pie?: PiePagina;

  constructor(private pieServicio: PiePaginaService) {}

  ngOnInit(): void {
    this.pieServicio.obtener().subscribe(data => {
      if (data.length > 0) {
        this.pie = data[0]; // suponemos solo un pie de página
      }
    });
  }
}
