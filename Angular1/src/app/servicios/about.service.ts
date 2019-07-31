import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
    //no puede ser accesado fuera de la clase
  private about:any[] = [
    {
      nombre:"emiliano",
      apellido:"teran"
    },
    {
      nombre:"jose",
      apellido:"jose2"
    }
  ]
  
    constructor(){
        console.log("[AboutService]");
    }

    //función paa obtener la variable about
    getAbout(){
      return this.about;
    }
}