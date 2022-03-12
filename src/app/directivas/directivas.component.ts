import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styles: [],
})
export class DirectivasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public mostrar: boolean = false;

  public personas: Persona[] = [
    new Persona('vladimir', 'fernandez'),
    new Persona('brayan', 'rondo'),
  ];

  public nombreIn: string = '';
  public apellidoIn: string = '';

  agregarListaPersona() {
    let personal = new Persona(this.nombreIn, this.apellidoIn);
    this.personas.push(personal);
  }
}
