import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
    //no puede ser accesado fuera de la clase
  private about:About[] = [
    {
      nombre:"emiliano",
      apellido:"teran",
      puesto: "CTO",
    },
    {
      nombre:"jose",
      apellido:"jose2",
      puesto: "CEO",
    }
  ]
  
    constructor(){
        console.log("[AboutService]");
    }

    //función paa obtener la variable about
    getAbout():About[]{
      return this.about;
    }
}

//export para que también se pueda exportar
export interface About {

  nombre:string;
  apellido:string;
  puesto:string;

};