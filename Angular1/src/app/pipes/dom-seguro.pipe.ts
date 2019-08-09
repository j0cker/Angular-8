import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private DomSanitizer:DomSanitizer){}

  transform(value: string, url: string): any {

    //se tiene que regresar en any, en string da error.

    return this.DomSanitizer.bypassSecurityTrustResourceUrl(url + value);
    
  }

}