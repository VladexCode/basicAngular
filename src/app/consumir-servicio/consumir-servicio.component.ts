import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-consumir-servicio',
  templateUrl: './consumir-servicio.component.html',
  styleUrls: ['./consumir-servicio.component.css'],
  providers: [ServiciosService],
})
export class ConsumirServicioComponent implements OnInit {
  public InputNombre: string = '';
  public InputApellido: string = '';
  public PersonaEnComponente: Persona[] = [];
  constructor(private Servicios: ServiciosService) {}

  ngOnInit(): void {
    this.PersonaEnComponente = this.Servicios.Personas;
  }

  agregarPersonaAlServicio() {
    let nuevo = new Persona(this.InputNombre, this.InputApellido);
    this.Servicios.nuevaPersonaDesdeServicio(nuevo);
  }
}
