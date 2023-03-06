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

const myMoneyBox = moneyBox(); //Aquí la variable almacena el contenido de la función en la MEMORIA DE REFERENCIA

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20);

const moneyBoxJackie = moneyBox();

moneyBoxJackie(40);
moneyBoxJackie(50);
moneyBoxJackie(10);