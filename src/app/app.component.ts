import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Bienvenido a Angular';
  curso: string = 'Cusro Spring 5 Angular';
  profesor: string = 'Jorge Gómez Velázquez';
}
