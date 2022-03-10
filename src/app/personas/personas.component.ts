//#2 crtl + espacio import @angular/core
import { Component } from "@angular/core";

//#1 clase asociada a este componente
@Component({
    selector: 'app-personas', //nombre que se utilizara en las paginas html
    //template 'codigo html'; `` ng g c -t
    //style = [`codigo css`] ; (opcional) ng g c -s
    templateUrl: './personas.component.html', //#3 crear el archivo html
})
export class PersonasComponent{
public titulo:string= "hola desde componente personas";

}