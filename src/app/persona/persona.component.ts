import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public personas: Persona[] = [
    new Persona('vladimir', 'fernandez'),
    new Persona('brayan', 'rondo'),
  ];
}
