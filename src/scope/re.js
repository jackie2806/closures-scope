 
 var firstName; // undefined, este es un ejemplo de declaración de una variable
 firstName = 'Oscar';
 console.log(firstName);
var lastName = 'Barajas'; //declara y asigna en la misma línea
lastName = 'Aguilar';
console.log(lastName);
 
var secondName = 'David'; //declarando y asignando
var secondName = 'Ana'; //reasinando
console.log(secondName);
 
// let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar 

// no se puede volver a re-declarar la variable let


//const
const animal = 'dog'; //declara y asigna
//No se puede volver a declararla, tampoco volver a reasignar la variable const
 
 
 const vehicles = [];  //Valores a la referencia de memoria
 vehicles.push('🚗');
 console.log(vehicles);

 vehicles.pop();
 console.log(vehicles)