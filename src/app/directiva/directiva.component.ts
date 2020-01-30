import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScript', 'Java SE', 'PHP', 'SAP', 'C#'];
  habilitar: boolean = true;

  constructor() { }

  setHabilitar() : void {
    this.habilitar = ( this.habilitar == true ) ? false : true;
  }

}
