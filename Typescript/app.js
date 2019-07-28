"use strict";
//usar siempre let
var webos = "webos";
webos = "webos2";
console.log(webos);
//cont no puede ser cambiada, siempre definirla al principio
var OPCIONES = "todas";
var url = "http://boogapp.mx/";
var monto = 500;
var urlsYMontos = {
    ingresar: url + "ingresar",
    registarse: url + "registarse",
    dinero: monto + 5
};
var nombre = "peter";
var numero = 123;
var booleano = true;
var hoy = new Date();
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
var spiderman = {
    nombre: "peter",
    edad: 20,
    poderes: ["golpe", "patada", "telaraña"]
};
var spiderman2 = {
    nombre: "peter",
    edad: 20
}; // o puedes usar interface (mas abajo)
//tiene que tener la misma cantidad de variables definidas previamente
spiderman2 = {
    nombre: "alonso",
    edad: 30
};
function getNombre() {
    return "Fernando";
}
var texto = "Hola, " + nombre + " " + nombre + " (" + nombre + ")";
var texto2 = " " + (1 + 2);
var texto3 = " " + getNombre() + " ";
function activar(quien, objeto, momento) {
    //el signo de interrogación de momento?
    //quiere decir que ese variable es opcional
    //para mandar a la funcion
    if (objeto === void 0) { objeto = "batiseñal"; }
    //todos los valores obligatorios
    //tienen que ir al principio forzoso
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batiseñal", "Tarde");
var nombre2 = "Bruce 2";
var hulk = {
    nombre2: "Bruce",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            //console.log(this.nombre2 + "Hola Timeout");
            //no se puede hacer ese this de arriba por eso usamos funciones de flecha
        }, 1500);
        setTimeout(function () {
            console.log(_this.nombre2 + "Hola2 Timeout");
        }, 1500);
        console.log(this.nombre2 + "Smash!");
    }
};
hulk.smash();
//asignación de arreglos
var avengers = ["thor", "steve", "tony"];
//variables that are going to be assigned to the corresponding index
var loki = avengers[0], capi = avengers[1], ironman = avengers[2];
//puede contener cualquier tipo de arreglo
var demo;
console.log(ironman);
//promesas no preocuparse por el error igual va a funcionar
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promesa terminada");
        //termina bien
        resolve();
        //termina mal
        //reject()
    }, 1500);
});
console.log("paso 1");
prom1.then(function () {
    console.log("Ejecutarme cuando se termine bien");
}, function () {
    console.error("algo salió mal");
});
console.log("paso 2");
//paso 1 y paso 2 se van a ejecutar primero antes de la promesa
//pasar un object
function enviarMision(xmen) {
    console.log("" + xmen.nombre);
}
var xmen = {
    nombre: "wolvering",
    tipo: "mutante",
};
enviarMision(xmen);
//agregando un campo string es más fácil detectar errores
function enviarMision2(xmen2) {
    console.log("" + xmen2.nombre);
}
var enviarMision4 = function (xmen2) {
    console.log("" + xmen2.nombre);
    return "hola";
};
var calcularEdad5 = function (edad) {
    return edad + 2;
};
var xmen2 = {
    nombre: "wolvering",
    tipo: "mutante",
};
enviarMision2(xmen2);
enviarMision4(xmen2);
;
var xmen3 = {
    nombre: "wolvering",
    tipo: "mutante",
};
function enviarMision3(xmen3) {
    console.log("" + xmen.nombre);
}
var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        this.nombre = "";
        this.edad = 0;
        this.calcularEdad2 = function (edad) {
            return edad + 2;
        };
        this.nombre = nombre;
        console.log("Se ejecutó el constructor");
    }
    Avenger.prototype.calcularEdad = function () {
        return this.edad + 2;
    };
    return Avenger;
}());
var antman = new Avenger("Antman");
console.log(antman);
// :number => quiere decir que retorna un número
var resultado = function (a, b) {
    return a + b * a;
};
resultado(1, 2);
