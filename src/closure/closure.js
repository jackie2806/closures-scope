
function greeting(){
    let userName = 'Oscar';
    function displayUserName(){
        return `Hello ${userName}`;
    }

    return displayUserName;

}

const g = greeting();
console.log(g); //reconoce el contexto, retornamos la función 
console.log(g()); //muestra el resultado

//La cocina del código

function crearImpresoraDeMensajes(tipo, estilos){
    return function mensaje (str){
        console.log(`%c ${tipo}: ${str} `, estilos);
    }
}

const error = crearImpresoraDeMensajes('Error', 'background: red; color: white');
const warning = crearImpresoraDeMensajes('Warning', 'background: orange; color: white');
const success = crearImpresoraDeMensajes('Success', 'background: green; color: white');
