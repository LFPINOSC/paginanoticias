import { Injectable } from '@angular/core';
import { Empresa } from '../models/Empresa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl= `${environment.apiUrl}/empresas`;
  constructor(private http: HttpClient) {}

  listar(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`);
  }

  obtenerActiva(): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/activa`);
  }

  crear(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiUrl, empresa);
  }

  actualizar(id: number, empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.apiUrl}/${id}`, empresa);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
