import { Component, OnInit } from '@angular/core';
import { PaisesService } from "../../DAO/paises.service";

@Component({
  selector: 'app-http-paises',
  templateUrl: './http-paises.component.html',
  styleUrls: ['./http-paises.component.css']
})
export class HttpPaisesComponent implements OnInit {

  paises:any[] = [];
  url:string = "https://restcountries.eu/rest/v2/lang/es";

  paisesService:PaisesService;

  constructor(private _paisesService:PaisesService) {

    console.log("[HttpPaisesComponent][constructor]");

    //this.paisesService = _paisesService;

    this.paises = this._paisesService.getPaises();

  }

  ngOnInit() {

    console.log("[HttpPaisesComponent][ngOnInit]");

    

    
  }

}
