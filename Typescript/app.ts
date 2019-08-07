//usar siempre let

let webos = "webos";
webos = "webos2";
console.log(webos);

//cont no puede ser cambiada, siempre definirla al principio
const OPCIONES = "todas";

const url = "http://boogapp.mx/";
const monto = 500;

const urlsYMontos: { ingresar:string, registarse:string, dinero:number } = {
    ingresar: url + "ingresar",
    registarse: url + "registarse",
    dinero: monto + 5
}

let nombre:string = "peter";
let numero:number = 123;
let booleano: boolean = true;

let hoy:Date = new Date();

let cualquiera:any;
cualquiera = nombre
cualquiera = numero
cualquiera = booleano
cualquiera = hoy

let spiderman: { nombre:string, edad:number, poderes:Array<string> } = {
    nombre: "peter",
    edad: 20,
    poderes: ["golpe","patada","telaraña"]
}

let spiderman2 = {
    nombre: "peter",
    edad: 20
} // o puedes usar interface (mas abajo)

//tiene que tener la misma cantidad de variables definidas previamente
spiderman2 = {
    nombre: "alonso",
    edad: 30
}

let arreglo:number[] = [1,2,3,4,5,6,7,8];

function getNombre(){
    return "Fernando";
}

let texto = `Hola, ${ nombre } ${ nombre } (${ nombre })`;
let texto2:string = ` ${ 1 + 2 }`
let texto3:string = ` ${ getNombre() } `

function activar(   quien:string,
                    objeto: string = "batiseñal",
                    momento?:string){

//el signo de interrogación de momento?
//quiere decir que ese variable es opcional
//para mandar a la funcion

//todos los valores obligatorios
//tienen que ir al principio forzoso

    let mensaje:string;

    if (momento){

        mensaje = `${ quien } activó la ${ objeto } en la ${ momento }`;
    } else {
        mensaje = `${ quien } activó la ${ objeto }`
    }

    console.log(mensaje);

}

activar("Gordon", "batiseñal", "Tarde");

let nombre2:string = "Bruce 2";

//la prinicpal función de las funciones de flecha es que no modifica el objeto this al ser ejecutada

let hulk: {nombre2:string, smash:Function} = {
    nombre2: "Bruce",
    smash(){

        setTimeout(function(){
            //console.log(this.nombre2 + "Hola Timeout");
            //no se puede hacer ese this de arriba por eso usamos funciones de flecha
        }, 1500)

        setTimeout( ()=> {
            console.log(this.nombre2 + "Hola2 Timeout");
        }, 1500)

        console.log(this.nombre2 + "Smash!");
    }
}

hulk.smash();

//asignación de arreglos

let avengers:string[] = ["thor", "steve", "tony"];

//variables that are going to be assigned to the corresponding index

let [ loki, capi, ironman ] = avengers;

//puede contener cualquier tipo de arreglo
let demo:any[];

console.log( ironman );

//promesas no preocuparse por el error igual va a funcionar
let prom1 = new Promise( function( resolve, reject ){

    setTimeout( ()=>{
        console.log("promesa terminada");

        //termina bien
        resolve();

        //termina mal
        //reject()

    }, 1500)

})

console.log("paso 1");

prom1.then( function(){
    console.log("Ejecutarme cuando se termine bien");
},
    function (){
        console.error("algo salió mal");
    }
)

console.log("paso 2");

//paso 1 y paso 2 se van a ejecutar primero antes de la promesa

//pasar un object
function enviarMision(xmen:any){
    console.log("" + xmen.nombre);
}

let xmen = {
    nombre: "wolvering",
    tipo: "mutante",
};

enviarMision(xmen);

//agregando un campo string es más fácil detectar errores

function enviarMision2(xmen2:{nombre:string}){
    console.log("" + xmen2.nombre);
}

let enviarMision4 = (xmen2:any):any => {
    console.log("" + xmen2.nombre);

    return "hola";
}

let calcularEdad5 = (edad:number):number => {
    return edad + 2;
}

let xmen2 = {
    nombre: "wolvering",
    tipo: "mutante",
};

enviarMision2(xmen2);
enviarMision4(xmen2);

//pero es un dolor de cabeza agregar tantos campos en la llamada de la función,
//para ellos vamos hacer interfaces.

interface Humanos{
    nombre:string,
    tipo:string,
};

let xmen3:Humanos = {
    nombre: "wolvering",
    tipo: "mutante",
};

function enviarMision3(xmen3:Humanos){
    console.log("" + xmen.nombre);
}

class Avenger {
    
    public nombre:string = "";
    private edad:number = 0;

    constructor(nombre:string){
        this.nombre = nombre;
        console.log("Se ejecutó el constructor");
    }

    public calcularEdad():number {
        return this.edad + 2;
    }

    public calcularEdad2 = (edad:number):number => {
        return edad + 2;
    }

}

let antman:Avenger = new Avenger("Antman");

console.log(antman);

// :number => quiere decir que retorna un número
let resultado = (a:number, b:number):number => {
    return a+b*a;
}
resultado(1,2);


