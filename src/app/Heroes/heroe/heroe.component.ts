import { Component } from '@angular/core';

@Component({
selector: 'app-heroe',
templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    
    public nombre: string =  'Ironman';
    public edad: number = 45;

    //Propiedades procesadas
    //para cuando la llame ya la tenga lista y la consuma
    //ya este lista para entregarla  
    get nombreCapitalizado (){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        // `` = esto se llama backtighs (Consultar bien el nombre)
        // y es una manera mucho mejor en la que puedes enviar variables de manera 
        // como un template
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad (): void {
        this.edad = 30;
    }

}