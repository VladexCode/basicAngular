import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-ng-submit',
  templateUrl: './formulario-ng-submit.component.html',
  styles: [],
})
export class FormularioNgSubmitComponent implements OnInit {
  public guardarform:string = '';

  constructor() {}

  ngOnInit(): void {}

  MetodoGuardar() {
   console.log(this.guardarform);
  }
}
