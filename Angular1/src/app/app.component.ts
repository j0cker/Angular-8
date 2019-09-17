import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular';
  nombre:string = 'Emiliano';
  apellido:string = 'Teran';
  avengers:string[] = ["thor", "steve", "tony"];

  nombreInput: string;
  
  constructor(){
    this.title = "Angular"
    //forma de inicializar un form, si se usa el tradicional value="nombre" no funciona, angular protege
    this.nombreInput = "Emiliano225929259";

  }

  addTodo(){
    
    console.log("Entró");
    
    console.log(this.nombreInput);
  }
}
