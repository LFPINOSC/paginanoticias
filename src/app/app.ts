import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menus } from './components/menus/menus';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet,
    Menus
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('paginanoticias');
}
