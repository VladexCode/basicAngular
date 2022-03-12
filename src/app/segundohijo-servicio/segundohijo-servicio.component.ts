import { Component, EventEmitter, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-segundohijo-servicio',
  templateUrl: './segundohijo-servicio.component.html',
  styleUrls: ['./segundohijo-servicio.component.css'],
  // providers:[ServiciosService]
})
export class SegundohijoServicioComponent implements OnInit {
  public datoSegundoHijo: number = 0;
  constructor(private Servicio: ServiciosService) {
    this.Servicio.saludar.subscribe(
      (numero: number) => (this.datoSegundoHijo = numero)
    );
  }

  ngOnInit(): void {}
}
