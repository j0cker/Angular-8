import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre:string = "manlio emiliano"

  nombre2:string = "manLio EMIliaNo"

  arreglo:number[] = [1,2,3,4,5,6,7,8];

  pi = Math.PI

  a = 0.234;

  salario = 1234.5

  persona = {
    nombre: "Manlio",
    apellido: "Teran",
    telefono: {
      fijo: "345435",
      celular: "324324"
    }
  };

  valorDePromesa = new Promise((resolve, reject)=>{

    setTimeout( () => resolve('Llego la data!'), 3500)

  });

  fecha = new Date();

  constructor() { }

  ngOnInit() {
  }

}
