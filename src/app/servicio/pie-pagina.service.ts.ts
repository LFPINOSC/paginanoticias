import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PiePagina } from '../models/PiePagina';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PiePaginaService {

  
  private apiUrl= `${environment.apiUrl}/pie-pagina`;
  constructor(private http: HttpClient) { }

  obtener(): Observable<PiePagina[]> {
    return this.http.get<PiePagina[]>(this.apiUrl);
  }

  actualizar(id: number, piePagina: PiePagina): Observable<PiePagina> {
    return this.http.put<PiePagina>(`${this.apiUrl}/${id}`, piePagina);
  }
}
