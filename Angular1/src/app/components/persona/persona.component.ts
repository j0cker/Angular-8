import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AboutService, About } from '../../servicios/about.service';
import { PersonaService, Persona } from '../../servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

//pendiente hacer el servicio.

export class PersonaComponent implements OnInit {

  idPersona:string = "";
  persona:Persona; 

  constructor(private _personaService:PersonaService, private router:ActivatedRoute) {

    this.router.params.subscribe(params =>{
      console.log(params);
      console.log(params['id']);

      this.idPersona = params['id'];
      

      this.persona = this._personaService.getPersona(this.idPersona);


    })

  }

  ngOnInit() {
  }

}
