import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() person: any = {};
  @Input() i:number;
  @Output() personaSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {

    this.personaSeleccionado = new EventEmitter();

  }

  ngOnInit() {
  }

  verAbout(i:number){
    
    /* Input */
    //console.log(i);
    //this.router.navigate( ['/persona', i] )

    this.personaSeleccionado.emit(this.i);

  }

}
