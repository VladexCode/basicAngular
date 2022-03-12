import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referencia-local',
  templateUrl: './referencia-local.component.html',
  styles: [],
})
export class ReferenciaLocalComponent implements OnInit {
  public datoRL: string = '';
  constructor() {}

  ngOnInit(): void {}

  enviarReferenciaLocal(IndatoRL: HTMLInputElement) {
    this.datoRL = IndatoRL.value;
  }
}
