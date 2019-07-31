import { Component, OnInit } from '@angular/core';
import { AboutService, About } from '../../servicios/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title:string = '';
  about:About[] = []; 
    
  //private solo accesible en este componente
  //la variable es del tipo servicio.
  constructor(private _aboutService:AboutService){
    this.title = 'about';
  }

  ngOnInit(){
    console.log("[NgOnInit]");

    this.about = this._aboutService.getAbout();

    console.log(this.about);

  }


}