import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styles: [],
})
export class TwoWayBindingComponent implements OnInit {
  public tituloTwoWayBinding: string = 'TWB';
  constructor() {}

  ngOnInit(): void {}
}
