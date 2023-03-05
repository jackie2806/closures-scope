//accesibilidad de las variables está determinada por la posición dentro de los ámbitos anidados
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

myFunction()