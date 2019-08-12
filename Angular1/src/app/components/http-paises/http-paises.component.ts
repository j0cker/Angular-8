import { Component, OnInit } from '@angular/core';
import { PaisesService } from "../../DAO/paises.service";
import { SpotifyService } from "../../servicios/spotify.service";

@Component({
  selector: 'app-http-paises',
  templateUrl: './http-paises.component.html',
  styleUrls: ['./http-paises.component.css']
})
export class HttpPaisesComponent implements OnInit {

  paises:any[] = [];
  url:string = "https://restcountries.eu/rest/v2/lang/es";

  paisesService:PaisesService;

  constructor(private _paisesService:PaisesService, private _spotifyService:SpotifyService) {

    console.log("[HttpPaisesComponent][constructor]");

    //this.paisesService = _paisesService;

    this.paises = this._paisesService.getPaises().subscribe( (data:any):any => {

      console.log(data);

      this.paises = data;

      return this.paises;

    });

    this._spotifyService.getReleases().subscribe( (data:any):any => {
        
      console.log(data);

    });

  }

  ngOnInit() {

    console.log("[HttpPaisesComponent][ngOnInit]");

    

    
  }

}
