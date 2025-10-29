import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NoticiaServicio } from '../../../servicio/noticia-servicio';
import { Noticia } from '../../../models/Noticia';

@Component({
  selector: 'app-list-noticia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-noticia.html',
  styleUrls: ['./list-noticia.css']
})
export class ListNoticia implements OnInit {

  noticias: Noticia[] = [];
  page: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(private noticiaServicio: NoticiaServicio,
              private router: Router) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  cargarNoticias() {
    this.noticias = [];
    this.noticiaServicio.obtenerNoticias().subscribe(data => {
      this.noticias = data.filter(n => n.id !== undefined).sort((a,b) => (a.id! - b.id!));
      this.totalPages = Math.ceil(this.noticias.length / this.pageSize);
      if (this.page > this.totalPages) this.page = this.totalPages;
    });
  }

  get noticiasPaginadas(): Noticia[] {
    const start = (this.page - 1) * this.pageSize;
    return this.noticias.slice(start, start + this.pageSize);
  }

  siguientePagina() {
    if (this.page < this.totalPages) this.page++;
  }

  anteriorPagina() {
    if (this.page > 1) this.page--;
  }

  eliminarNoticia(id?: number) {
    if (!id) return;
    if (confirm('¿Seguro que quieres eliminar esta noticia?')) {
      this.noticiaServicio.eliminarNoticia(id).subscribe(() => this.cargarNoticias());
    }
  }

  editarNoticia(noticia: Noticia) {
    if (!noticia.id) return;
    this.router.navigate(['/dasboard/fromNoticia', noticia.id]);
  }

  crearNoticia() {
    this.router.navigate(['/dasboard/fromNoticia']);
  }
}
