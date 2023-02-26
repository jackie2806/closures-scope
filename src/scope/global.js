var a; //Declaración de variables

var a = 'a'; //Asignación de variables

var b = 'b'; //Normalmente la declaración y la asignación se hacen en una sola línea

b = 'bb'; //Reasignación de variables

var a = 'aa'; //redeclaración de variables
console.log(a)
//Global Scope
var fruit = 'Apple'; //global

console.log(fruit)

function mostrarFruta(){
    console.log(fruit)
}
mostrarFruta();

//Cuidado con la declaración de variables globales dentro de una función

function countries(){
    country = "Portugal"; // variable global declarada
    console.log(country);
}

countries();
console.log(country); //se accede desde afuera porque dicha variable ha sido declarada de manera global