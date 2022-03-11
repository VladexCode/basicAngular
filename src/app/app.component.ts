import { Component } from '@angular/core';
import { Persona } from './persona/persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//exportar variables desde el componente
export class AppComponent {
  title = 'basicAngular';
  //public saludo:string ="Variable exportada";
  public personas:Persona[]=[];
  public PersonaDePrimerHijo:string="";
  CrearPersona(personaPrimerHijo: Persona){
    this.personas.push(personaPrimerHijo);
  }
  

}
