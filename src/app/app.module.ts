import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//#4 importamos el componente
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { PrimerhijoComponent } from './primerhijo/primerhijo.component';
import { SegundohijoComponent } from './segundohijo/segundohijo.component';
import { ConsumirServicioComponent } from './consumir-servicio/consumir-servicio.component';
import { PrimerhijoServicioComponent } from './primerhijo-servicio/primerhijo-servicio.component';
import { SegundohijoServicioComponent } from './segundohijo-servicio/segundohijo-servicio.component';

import { ServiciosService } from './servicios.service';
import { RutasComponent } from './rutas/rutas.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CalculadoraEjemploComponent } from './calculadora-ejemplo/calculadora-ejemplo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ReferenciaLocalComponent } from './referencia-local/referencia-local.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { FormularioNgSubmitComponent } from './formulario-ng-submit/formulario-ng-submit.component';
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
    PrimerhijoServicioComponent,
    SegundohijoServicioComponent,
    RutasComponent,
    InterpolacionComponent,
    TemplateReferenceComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CalculadoraEjemploComponent,
    DirectivasComponent,
    ReferenciaLocalComponent,
    ViewChildComponent,
    RutasComponent,
    FormularioNgSubmitComponent,
    PrimerhijoComponent,
    SegundohijoComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ServiciosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
