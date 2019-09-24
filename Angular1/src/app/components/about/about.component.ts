import { Component, OnInit } from '@angular/core';
import { AboutService, About } from '../../servicios/about.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title:string = '';
  about:About[] = []; 
  persona:About;
    
  //private solo accesible en este componente
  //la variable es del tipo servicio.
  constructor(private _aboutService:AboutService, private router:Router){
    this.title = 'about';

    this.persona = {
      nombre: "",
      apellido: "",
      puesto: ""
    }


  }

  ngOnInit(){
    console.log("[NgOnInit]");

    this.about = this._aboutService.getAbout();

    console.log(this.about);

  }

  verAbout(id:number){
    console.log("[AboutComponent]: " + id);

    this.router.navigate( ['/persona', id] )

    //multiple parameters
    //this.router.navigate( ['/persona', id, id2, id3] )

  }

  buscarPersona(personaSearch:string){

    console.log(personaSearch);

    this.persona = this._aboutService.getPersona(personaSearch);

  }

}