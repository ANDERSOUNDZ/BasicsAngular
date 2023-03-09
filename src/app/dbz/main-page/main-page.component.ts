import { Component } from '@angular/core';
import { Personaje } from '../interface/personaje.interface';
import { PersonajesComponent } from '../personajes/personajes.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 12000
    },
    {
      nombre: 'Vegeta',
      poder: 10000
    }
  ];

  // cambiarNombre(event: any){
  //   console.log(event)
  // }

  nuevo: Personaje = {
    nombre: 'Roshy',
    poder: 10000
  }

  agregarNuevopersonaje(arg: Personaje){
    console.log(arg);
    this.personajes.push(arg);
  }
  
}
  