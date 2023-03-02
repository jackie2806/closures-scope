//Function Scope
function greeting(){
    let userName = 'Jackeline';
    console.log(userName);
    if(userName=== 'Jackeline'){
        console.log(`Hola ${userName}`)
    }
}

greeting();
// console.log(userName) ---> la variable no puede ser mostrada porque no está disponible fuera de la función