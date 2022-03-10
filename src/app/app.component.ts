import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//exportar variables desde el componente
export class AppComponent {
  title = 'basicAngular';
  //public saludo:string ="Variable exportada";
}
