import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
})
export class PadreComponent  implements OnInit {
  
    public mainTitle : string
    public hijoTitle : string
  
    constructor() {
      
     }
  
    ngOnInit() {
      this.mainTitle  =   "Comunicación entre componentes"
      this.hijoTitle  =   "Componente hijo"
    }
  
    // Método manejador del evento 
    ocultarTitulo(isHidden: boolean){
      console.log("Hidden:"+isHidden)
    }
}