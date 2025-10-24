import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/Notocia';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaServicio {
  private apiUrl= `${environment.apiUrl}/noticia`;
  constructor(private http : HttpClient){}

  obtenerNoticias():  Observable<Noticia[]>{
    return this.http.get<Noticia[]>(this.apiUrl);

  }
}
