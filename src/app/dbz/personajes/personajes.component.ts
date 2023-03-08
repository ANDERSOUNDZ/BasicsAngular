import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/personaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //Agregar siempre el tipo de arreglo, que tipo de arreglo viene, si es number, sitring, o un modelo
  //@input() -- El decorador input permite ingrrsar la informacion del padre, a su vez hay como nombrar un dato de la manera que se desee asi > @Input('Aqui el nombre')
  @Input() personajes: Personaje[]=[];
}
