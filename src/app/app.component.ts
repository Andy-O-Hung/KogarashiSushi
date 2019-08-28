import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kogarashi';
  navLinks = [
    {path: '', label: 'home'},
    {path: 'Menu', label: 'menu'},
    {path: 'Reservation', label: 'reservation'}
  ];
}
