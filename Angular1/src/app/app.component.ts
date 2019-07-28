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
  
  constructor(){
    this.title = "Angular"
  }
}
