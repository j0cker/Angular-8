import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

//injectable es para inyectarse en otros servicios es un tipo de decorador
@Injectable()
export class PaisesService {

    url:string = "https://restcountries.eu/rest/v2/lang/es";
    paises:any[] = [];
  
    constructor(private http:HttpClient){
        console.log("[PaisesService]");

    }

    getPaises():any {

      return this.http.get(this.url);

      /*
      this.httpClient.post("http://127.0.0.1:3000/customers",{
      "name":  "Customer004",
      "email":  "customer004@email.com",
      "tel":  "0000252525"
      })
      .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {

      console.log("Error", error);

      }

      );
      */
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