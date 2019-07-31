//importa el componente para poderlo usar en el decorador
import { Component } from '@angular/core';

//Decorador (declaración)
@Component({
selector: 'app-header', //cuando encuentre una etiqueta HTML del tipo my-app renderize lo que tenga el html de a continuación
templateUrl:  './header.component.html',
})
/*
Aquí se declara la clase podemos agregar las variables que queramos, funciones, etc.
*/
export class HeaderComponent { //export quiere decir que se puede utilizar fuera de este archivo
    
    name:string = '';
    
    constructor(){
        this.name = "angular"
    }
    
}