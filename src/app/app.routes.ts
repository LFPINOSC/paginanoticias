import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { Inicio } from './components/inicio/inicio';
import { Login } from './components/login/login';
import { Dasboard } from './components/dasboard/dasboard';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio.html' , pathMatch:'full'},
    {path:'inicio.html', component: Inicio},
    {path:'login',component:Login},
    {path: 'noticias.html', component: Noticias},
    {path: 'dasboard', component: Dasboard},
    { path: '**', redirectTo: '/inicio.html' }
];
