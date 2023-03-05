//accesibilidad de las variables está determinada por la posición de las mismas dentro de los ámbitos anidados
const myGlobal = 0;
function myFunction(){
    const myNumber = 1;
    console.log(myGlobal)
    function parent(){ //función interna
        const inner = 2;
        console.log(myNumber, myGlobal);
        function child(){
            console.log(inner, myNumber, myGlobal)
        }

        child()
    }
    parent()
}

//myFunction()

//reto Crea un closure para sumar

function sumWithClosure(firstNum) {
    //como sabemos que vamos a recibir 2 parámetros, declaramos 2 variables
    return function (secondNum) {
        //retornamos esta función con el segundo parámetro
        if (!secondNum) {
            //verificamos si la función recibe el segundo parámetro
            //si no recibe el segundo parámetro devolvemos el valor del primer parámetro
          return firstNum;
        } else {
            //si recibe el segundo parámetro, sumamos ambos parámetros
          return firstNum + secondNum;
        }
        
     }
  }
 console.log(sumWithClosure(2)());  