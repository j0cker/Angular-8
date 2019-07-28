/*
agregamos a tsconfig "experimentDecorators":true para que compile bien y no arreje errores
*/

function consola(constructor:Function){
    console.log(constructor);
}

@consola //decorador
class Villano {

    constructor(public nombre:string){
        
    }
}