import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoticiaServicio } from '../../servicio/noticia-servicio';
import { Noticia } from '../../models/Noticia';

@Component({
  selector: 'app-noticias',
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class Noticias implements OnInit{
  noticias:Noticia[]=[];
  paginaActual = 1;
  noticiasPorPagina = 4;
  noticiasPaginadas: any[] = [];
  totalPaginas = 1;
  resumenLength = 100; // cantidad de caracteres a mostrar
  noticiaSeleccionada: any = null;
  constructor(private servicioNoticia:NoticiaServicio){}
  ngOnInit(): void {
    this.servicioNoticia.obtenerNoticias().subscribe({
      next: data => {
        this.noticias = data;
        this.noticias.sort((a, b) => a.id! - b.id!);
        console.log(data)
        this.totalPaginas = Math.ceil(this.noticias.length / this.noticiasPorPagina);
        this.paginaActual = 1; 
        this.cargarPagina();
      },
      error: err => console.log("Error al cargar noticias", err)
    });
  }
  cargarPagina() {
    const inicio = (this.paginaActual - 1) * this.noticiasPorPagina;
    const fin = inicio + this.noticiasPorPagina;
    this.noticiasPaginadas = this.noticias.slice(inicio, fin);
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.cargarPagina();
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarPagina();
    }
  }
  mostrarResumen(texto: string): string {
    if (!texto) return '';
    return texto.length > this.resumenLength ? texto.substr(0, this.resumenLength) : texto;
  }

  verNoticiaCompleta(noticia: any, event: Event) {
    event.preventDefault(); // evita que el enlace recargue la página
    this.noticiaSeleccionada = noticia; // asigna la noticia para mostrarla completa
  }

  cerrarModal() {
    this.noticiaSeleccionada = null;
  }
}
