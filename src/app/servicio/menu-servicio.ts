import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/Menu';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuServicio {
  private apiUrl= `${environment.apiUrl}/menu`;
  constructor(private http: HttpClient){}

  obtenerMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl);
  }

}
