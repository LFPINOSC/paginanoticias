import { Component, OnInit } from '@angular/core';
import { NoticiaServicio } from '../../servicio/noticia-servicio';
import { Noticia } from '../../models/Noticia';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { ChartDataset } from 'chart.js';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NgChartsModule],
  templateUrl: './dasboard.html',
  styleUrls: ['./dasboard.css']
})
export class DasboardComponent implements OnInit {

  totalNoticias: number = 0;
  noticias: Noticia[] = [];

  chartData: ChartDataset<'bar'>[] = [
    { data: [], label: 'Noticias por fecha' }
  ];
  chartLabels: string[] = [];

  showDashboard: boolean = true; // <-- controla visibilidad

  constructor(private noticiaServicio: NoticiaServicio,
              private router: Router) {}

  ngOnInit() {
    this.cargarEstadisticas();

    // Escuchar cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Mostrar solo en /dasboard exacto, ocultar en hijos
        this.showDashboard = event.urlAfterRedirects === '/dasboard';
      });
  }

  cargarEstadisticas() {
    this.noticiaServicio.obtenerNoticias().subscribe(data => {
      this.noticias = data;
      this.totalNoticias = data.length;

      const fechaMap: { [key: string]: number } = {};
      data.forEach(n => fechaMap[n.fecha] = (fechaMap[n.fecha] || 0) + 1);

      this.chartLabels = Object.keys(fechaMap).sort();
      this.chartData[0].data = Object.values(fechaMap);
    });
  }
}