// Definicion de una variable con let
let nombre= "Adriel";
// Redefinicion de la variable
nombre= "Cristian";
// Definicion de una constante con const
const PI= 3.14;

console.log(nombre, PI);

let numero =12;
let numeroString = "20";

let booelan= true;

console.log ("Resultado de numero + numeroString:" , numero + numeroString);

console.log("Resultado de numero + parseInt(numeroString):", numero + parseInt(numeroString));
console.log("Resultado de numero - numeroString:", numero - numeroString);

// -----------------------------------------------------------------

let entradaInput= prompt("Ingrese su nombre");

console.log("Ingresaste: ", entradaInput);

// Simil f-strings para interpolar variables
alert('Ingresaste: ${entradaInput} - Bienvenido!');