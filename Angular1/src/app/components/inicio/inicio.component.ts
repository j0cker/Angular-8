import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  nombre:string = 'Emiliano';
  apellido:string = 'Teran';
  avengers:string[] = ["thor", "steve", "tony"];
  
  constructor(){
  }
}