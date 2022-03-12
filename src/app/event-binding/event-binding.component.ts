import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: [],
})
export class EventBindingComponent implements OnInit {
  public mensajeEventBinding: string = '';
  public tituloEvent: string = '';
  constructor() {}

  ngOnInit(): void {}
  agregarPersona() {
    this.mensajeEventBinding = 'Event Binding';
  }

  modificarTitulo(event: Event) {
    this.tituloEvent = (<HTMLInputElement>event.target).value;
  }
}
