function fruits(){
    //variables definidas dentro de un bloque solo pueden ser accedidas dentro del scopce de bloque
    if(true){
         var fruit1 = 'Apple'; //function scop
         let fruit2 = 'Kiwi'; //block scope
         const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2); //No se puede acceder
    console.log(fruit3) // No se puede acceder
        
    
}

fruits()