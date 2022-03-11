import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
@Component({
  selector: 'app-primerhijo',
  templateUrl: './primerhijo.component.html',
  styleUrls: ['./primerhijo.component.css'],
})
export class PrimerhijoComponent implements OnInit {
  @Output() enviarPersona = new EventEmitter<Persona>();

  public nombreIn: string = '';
  public apellidoIn: string = '';

  enviarPersonaAlPadre(): void {
    let NuevaPersona = new Persona(this.nombreIn, this.apellidoIn);
    this.enviarPersona.emit(NuevaPersona);
  }

  constructor() {}

  ngOnInit(): void {}
}
