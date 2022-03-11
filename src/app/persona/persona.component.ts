import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Persona } from './persona.model';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  //interpolacion
  //las variables se hacen referencia dentro del contexto con this
  public nombre: string = 'vladimir';
  private numero: number = 2;

  constructor() {}

  ngOnInit(): void {}

  getNumero(): number {
    return this.numero;
  }

  //property binding
  public desabilitarBoton: boolean = false;
  public mensajeEventBinding: string = '';
  public tituloEvent: string = '';
  public tituloTwoWayBinding: string = 'TWB';
  //public arreglo:array=[];
  agregarPersona() {
    this.mensajeEventBinding = 'Event Binding';
  }
  modificarTitulo(event: Event) {
    this.tituloEvent = (<HTMLInputElement>event.target).value;
  }

  public numeroA: number = 0;
  public numeroB: number = 0;
  public resultado: number = 0;
  public mostrar: boolean = true;
  public personas: Persona[] = [
    new Persona('vladimir', 'fernandez'),
    new Persona('brayan', 'rondo'),
  ];
  sumar() {
    this.resultado = this.numeroA + this.numeroB;
  }

  public nombreIn: string = '';

  public apellidoIn: string = '';

  agregarListaPersona() {
    let personal = new Persona(this.nombreIn, this.apellidoIn);
    this.personas.push(personal);
  }
  public datoRL: string = '';
  enviarReferenciaLocal(IndatoRL: HTMLInputElement) {
    this.datoRL = IndatoRL.value;
  }

  @ViewChild('IndatoVC') IndatoVC!: ElementRef;
  public mostraVC: string = '';
  mostraViewChild() {
    this.mostraVC = this.IndatoVC.nativeElement.value;
  }
}
