import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


//injectable es para inyectarse en otros servicios es un tipo de decorador
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http:HttpClient) {


   }

   getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBCyzQcNT_0HWlmyv_t4cndSbJx33RM1j2q5MvvR-SN5O5CS32XS8NTKgEeJ8vPJkkATvN_Dt2U33m2cwU'
    })

    return this.http.get(url, { headers });

   }

   getReleases(){

      return this.getQuery('browse/new-releases').pipe( map(data =>{
        //data['albums'] porq si lo haces como data.albums el traductor va a pensar que es una variable decarada
        return data['albums'].items;
      }));


   }
}
