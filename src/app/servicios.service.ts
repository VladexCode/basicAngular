import { Injectable } from '@angular/core';
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
  constructor(/*podemos llamar otro servicio */) {}

  nuevaPersonaDesdeServicio(nueevaPersona: Persona) {
    this.Personas.push(nueevaPersona);
  }
}
