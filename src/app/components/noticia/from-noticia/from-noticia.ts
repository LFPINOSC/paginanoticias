import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NoticiaServicio } from '../../../servicio/noticia-servicio';
import { Noticia } from '../../../models/Noticia';

@Component({
  selector: 'app-from-noticia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './from-noticia.html',
  styleUrls: ['./from-noticia.css']
})
export class FromNoticia implements OnInit {

  noticia: Noticia = {
    nombre: '',
    fecha: '',
    descripcion: '',
    urlImagen: ''
  };

  editMode: boolean = false;

  constructor(
    private noticiaServicio: NoticiaServicio,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.editMode = true;
      this.noticiaServicio.obtenerNoticia(id).subscribe(data => {
        this.noticia = data;
      });
    }
  }

  guardarNoticia() {
    if (this.editMode && this.noticia.id) {
      this.noticiaServicio.actualizarNoticia(this.noticia.id, this.noticia)
        .subscribe(() => this.router.navigate(['/dasboard/listNoticia']));
    } else {
      this.noticiaServicio.crearNoticia(this.noticia)
        .subscribe(() => this.router.navigate(['/dasboard/listNoticia']));
    }
  }

  cancelar() {
    this.router.navigate(['/dasboard/listNoticia']);
  }
}

