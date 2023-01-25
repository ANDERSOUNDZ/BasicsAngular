import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public Heroes : string[] = ['Anderson','Miguel','Chanchay','examp','Cecilia','Luisa']
  public heroeBorrado : string = '';

  borrarHeroe(): void{
    this.heroeBorrado = this.Heroes.shift() || '';
  }

}
