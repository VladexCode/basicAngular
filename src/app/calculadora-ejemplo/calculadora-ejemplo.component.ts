import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-ejemplo',
  templateUrl: './calculadora-ejemplo.component.html',
  styles: [],
})
export class CalculadoraEjemploComponent implements OnInit {
  public numeroA: number = 0;
  public numeroB: number = 0;
  public resultado: number = 0;
  constructor() {}

  ngOnInit(): void {}
  sumar() {
    this.resultado = this.numeroA + this.numeroB;
  }
}
