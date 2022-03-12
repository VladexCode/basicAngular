import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-primerhijo-servicio',
  templateUrl: './primerhijo-servicio.component.html',
  styleUrls: ['./primerhijo-servicio.component.css'],
  //providers: [ServiciosService]
})
export class PrimerhijoServicioComponent implements OnInit {
  public numero: number = 0;
  constructor(private Servicio: ServiciosService) {}

  ngOnInit(): void {}
  emitirMensaje() {
    this.Servicio.saludar.emit(this.numero);
  }
}
