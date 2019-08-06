import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() person: any = {};
  @Input() i:number;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verAbout(i:number){
    console.log(i);

    this.router.navigate( ['/persona', i] )

  }

}
