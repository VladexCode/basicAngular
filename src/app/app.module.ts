import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//#4 importamos el componente
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { PrimerhijoComponent } from './primerhijo/primerhijo.component';
import { SegundohijoComponent } from './segundohijo/segundohijo.component';
import { ConsumirServicioComponent } from './consumir-servicio/consumir-servicio.component';
@NgModule({
  //decorador
  declarations: [
    AppComponent,
    //#5 declarammos el componente
    PersonasComponent,
    PersonaComponent,
    PrimerhijoComponent,
    SegundohijoComponent,
    ConsumirServicioComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
