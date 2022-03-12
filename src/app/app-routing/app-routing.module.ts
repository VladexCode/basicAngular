import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from '../persona/persona.component';
import { PersonasComponent } from '../personas/personas.component';

import { InterpolacionComponent } from '../interpolacion/interpolacion.component';
import { TemplateReferenceComponent } from '../template-reference/template-reference.component';
import { PropertyBindingComponent } from '../property-binding/property-binding.component';
import { EventBindingComponent } from '../event-binding/event-binding.component';
import { TwoWayBindingComponent } from '../two-way-binding/two-way-binding.component';
import { CalculadoraEjemploComponent } from '../calculadora-ejemplo/calculadora-ejemplo.component';
import { DirectivasComponent } from '../directivas/directivas.component';
import { ReferenciaLocalComponent } from '../referencia-local/referencia-local.component';
import { ViewChildComponent } from '../view-child/view-child.component';
import { RutasComponent } from '../rutas/rutas.component';
import { FormularioNgSubmitComponent } from '../formulario-ng-submit/formulario-ng-submit.component';
import { ConsumirServicioComponent } from '../consumir-servicio/consumir-servicio.component';
import { PrimerhijoComponent } from '../primerhijo/primerhijo.component';
import { SegundohijoComponent } from '../segundohijo/segundohijo.component';

const routes: Routes = [
  { path: '', component: PersonaComponent },

  { path: 'interpolacion', component: InterpolacionComponent },
  { path: 'templateReference', component: TemplateReferenceComponent },
  { path: 'propertyBinding', component: PropertyBindingComponent },

  { path: 'eventBinding', component: EventBindingComponent },
  { path: 'twoWayBinding', component: TwoWayBindingComponent },
  { path: 'calculadoraEEjemplo', component: CalculadoraEjemploComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'referenciaLocal', component: ReferenciaLocalComponent },
  { path: 'viewChild', component: ViewChildComponent },
  { path: 'rutas', component: RutasComponent },

  { path: 'ngformulario', component: FormularioNgSubmitComponent },
  { path: 'servicio', component: ConsumirServicioComponent },
  { path: 'primerHijo', component: PrimerhijoComponent },
  { path: 'segundoHijo', component: SegundohijoComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
