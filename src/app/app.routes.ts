import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { Inicio } from './components/inicio/inicio';
import { Login } from './components/login/login';
import {  DasboardComponent } from './components/dasboard/dasboard';
import { AuthGuardo } from './autetificacion/authGuardar';
import { ListNoticia } from './components/noticia/list-noticia/list-noticia';
import { FromNoticia } from './components/noticia/from-noticia/from-noticia';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio.html', pathMatch: 'full' },
    { path: 'inicio.html', component: Inicio },
    { path: 'login', component: Login },
    { path: 'noticias.html', component: Noticias },
    {
        path: 'dasboard',
        component: DasboardComponent,
        canActivate: [AuthGuardo],
        children: [
            { path: 'listNoticia', component: ListNoticia },
            { path: 'fromNoticia', component: FromNoticia },
            { path: 'fromNoticia/:id', component: FromNoticia },
        ]
    },
];
