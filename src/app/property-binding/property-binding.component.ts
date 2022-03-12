import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styles: [],
})
export class PropertyBindingComponent implements OnInit {
  public desabilitarBoton: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  activarBoton(){
    this.desabilitarBoton=false;
  }
}
