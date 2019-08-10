import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PaisesService {

    url:string = "https://restcountries.eu/rest/v2/lang/es";
    paises:any[] = [];
  
    constructor(private http:HttpClient){
        console.log("[PaisesService]");

    }

    getPaises() {

      this.http.get(this.url).subscribe( (data:any):any => {

        console.log(data);

        this.paises = data;

        return this.paises;

      });
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