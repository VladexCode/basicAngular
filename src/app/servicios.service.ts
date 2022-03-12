import { Injectable, Output, EventEmitter } from '@angular/core';

import { Persona } from './persona/persona.model';

@Injectable({
  //nos inyectara tambien otros servicios disponibles
  providedIn: 'root',
})
export class ServiciosService {
  Personas: Persona[] = [
    new Persona('vladi2', 'fernd2'),
    new Persona('braya2', 'rondo2'),
  ];
  @Output() saludar: EventEmitter<any> = new EventEmitter();
  //saludar=new EventEmitter<number>();

  constructor(/*podemos llamar otro servicio */) {}

  nuevaPersonaDesdeServicio(nueevaPersona: Persona) {
    this.Personas.push(nueevaPersona);
  }
}
