//Funciones.

function despedir(nombre) {
    return `Adios ${nombre}` //Intrerpolar dentro de una cadena.  BACKPINK (``)
    //console.log(`Adios` ${nombre});
}

console.log(despedir("Eduardo"));//LLama a una funcion.


let funcionAlmacenada = function saludar(nombre) {
    return `Adios ${nombre}`  
}
console.log(funcionAlmacenada("Mauricio"));

//Funciones Anonimas.

let funcionAnonimaAlmacenada = function (nombre) {
    return `Adios ${nombre}`  
}

console.log(funcionAnonimaAlmacenada("Andrea"));//No ocupa espacion en la memoria

console.log(function () {return "Ejecucion"}());

//Parametros predeterminados.

function obtenerPotencia(base, exponente = 2) {
    return base ** exponente;    
}
console.log(obtenerPotencia(2)); //4
console.log(obtenerPotencia(2,3));//8

//console.log(this);  todo lo que contiene JAVASCRIPT.

window.console.log("Hola Mundo");

//Funciones flecha

let functionFlecha = (nombre) => `hola ${nombre}`

console.log(functionFlecha("GARCES"));

