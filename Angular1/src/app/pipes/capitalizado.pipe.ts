import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {

        console.log("[Pipe][Capitalizado]" + value);
        console.log("[Pipe][Capitalizado] " + args);

        value = value.toLocaleLowerCase();

        let nombres = value.split(" ");

        for(let i in nombres){
            nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
        }

        return nombres.join(" ");

    }
}