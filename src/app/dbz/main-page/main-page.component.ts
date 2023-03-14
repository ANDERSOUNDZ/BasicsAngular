import { Component } from '@angular/core';
import { Personaje } from '../interface/personaje.interface';
import { PersonajesComponent } from '../personajes/personajes.component';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  

  // cambiarNombre(event: any){
  //   console.log(event)
  // }

  nuevo: Personaje = {
    nombre: 'Roshy',
    poder: 10000
  }

  //Crear un getter
  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevopersonaje(arg: Personaje){
  //   console.log(arg);
  //   //this.personajes.push(arg);
  // }

  //constructor ( public dbzService : DbzService){  }
  
  constructor (){}
}
  