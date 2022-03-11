import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
@Component({
  selector: 'app-segundohijo',
  templateUrl: './segundohijo.component.html',
  styleUrls: ['./segundohijo.component.css'],
})
export class SegundohijoComponent implements OnInit {
  @Input() RecibidoDesdePadre: Persona[] = [];

  constructor() {}

  ngOnInit(): void {}
}
