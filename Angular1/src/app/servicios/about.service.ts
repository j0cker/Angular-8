import { Injectable } from '@angular/core';

//injectable es para inyectarse en otros servicios es un tipo de decorador
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

    //función paa obtener la variable about
    getPersona(personaSearch:string):About {

      console.log("Persona: " + personaSearch);
      personaSearch = personaSearch.toLowerCase();

      let personaArr:About;

      personaArr = {
        nombre: "",
        apellido: "",
        puesto: ""
      }

      for(let persona of this.about){
        let nombre = persona.nombre.toLowerCase();
        if(personaSearch.indexOf(nombre) >= 0 ){

          personaArr = persona;
        }
      }

      return personaArr;
    }
}

//export para que también se pueda exportar
export interface About {

  nombre:string;
  apellido:string;
  puesto:string;

};