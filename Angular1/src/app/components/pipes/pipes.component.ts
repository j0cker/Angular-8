import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre:string = "manlio emiliano"

  arreglo:number[] = [1,2,3,4,5,6,7,8];

  pi = Math.PI

  a = 0.234;

  constructor() { }

  ngOnInit() {
  }

}
