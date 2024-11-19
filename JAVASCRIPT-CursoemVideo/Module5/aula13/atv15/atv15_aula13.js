//Repetições em JS

/*
Nem sequência é o suficiente se quisesse dzer olá 50 vezes ou mais:

console.log('Olá')
console.log('Olá')
console.log('Olá')
console.log('Olá')
console.log('Olá')
console.log('Olá')
console.log('Olá')
console.log('Olá')
...
*/


//Teste Início While

var contador = 1
while(contador < 6){ //Enquanto for verdade
    console.log('Olá')
    contador++
}

var contador2 = 1
while(contador2 <= 6){
    console.log('Tudo bem?')
    contador2++
}

var contador3 = 1
while(contador3 <= 10){
    console.log(`Passo ${contador3}`)
    contador3++
}

//Teste Final While

var contador4 = 1
do{ //Faça
    console.log(`Passo ${contador4}`)
    contador4++
}while(contador4 <= 6)