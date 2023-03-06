
function greeting(){
    let userName = 'Oscar';
    function displayUserName(){
        return `Hello ${userName}`;
    }

    return displayUserName;

}

const g = greeting();
console.log(g); //reconoce el contexto
console.log(g()); //muestra el resultado

