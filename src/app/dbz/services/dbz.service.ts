import { Injectable } from "@angular/core";
import { Personaje } from "../interface/personaje.interface";

@Injectable() 
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 12000
        },
        {
          nombre: 'Vegeta',
          poder: 10000
        }
      ];

    //Creo un getter
    get personajes (): Personaje[]{
        //Operador spreed [...] mas enfgocado en javascript, separa los elementos independientes que tiene ese arreglo y create uno nuevo
        //Permite rompero la referencia
        return [...this._personajes];
    }

    public constructor (){
        console.log('Service Initialized');
    }
    
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}