import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css'],
})
export class InterpolacionComponent implements OnInit {
  public nombre: string = 'vladimir';
  private numero: number = 2;

  constructor() {}

  ngOnInit(): void {}

  getNumero(): number {
    return this.numero;
  }
}
