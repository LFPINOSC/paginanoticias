import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { Inicio } from './components/inicio/inicio';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio.html' , pathMatch:'full'},
    {path:'inicio.html', component: Inicio},
    {path: 'noticias.html', component: Noticias},
    { path: '**', redirectTo: '/inicio.html' }
];
