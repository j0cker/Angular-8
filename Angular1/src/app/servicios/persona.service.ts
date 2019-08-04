import { Injectable } from '@angular/core';

@Injectable()
export class PersonaService {
    //no puede ser accesado fuera de la clase
  private persona:Persona[] = [
    {
      nombre:"emiliano",
      apellido:"teran",
      puesto: "CTO",
      fechaAlta: "09-04-2019",
      sueldo: 800,
    },
    {
      nombre:"jose",
      apellido:"jose2",
      puesto: "CEO",
      fechaAlta: "09-04-2019",
      sueldo: 1000,
    }
  ]
  
    constructor(){
        console.log("[PersonaService]");
    }

    //función paa obtener la variable about
    getPersona(id:string):Persona{
      return this.persona[id];
    }
}

//export para que también se pueda exportar
export interface Persona {

  nombre:string;
  apellido:string;
  puesto:string;
  fechaAlta:string;
  sueldo:number;

};