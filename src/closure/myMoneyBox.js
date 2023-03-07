// Ejemplo de una función sin closure

/* function moneyBox (coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $ ${saveCoins}`);

}

moneyBox(5);
moneyBox(5); */

function moneyBox(){
    let saveCoins = 0;
    
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $ ${saveCoins}`)
    }
return countCoins;
}
console.log(moneyBox(100))
const myMoneyBox = moneyBox(); //Aquí la variable almacena el contenido de la función en la MEMORIA DE REFERENCIA
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20); 

const moneyBoxJackie = moneyBox();

/* moneyBoxJackie(40);
moneyBoxJackie(50);
moneyBoxJackie(10);
 */
// rento
//Crear un closure que nos permita almacenar datos de mascotas en cualquier momento
//Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

function createPetList(){
    const list = [];

    function petList(pet) {
      if (!pet) {
        return list
        
     
      } else {
        return list.push(pet);
        
      }
     
    }
    return petList;
}

console.log(createPetList('perro'))

/* const myPetList = createPetList();
console.log(myPetList('Conejo'))
console.log(myPetList({conejo:'rojo'}))
console.log(myPetList()); */
