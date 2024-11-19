//Exemplo
/*
    Exemplo:
    -Some os valores do array "values";
    -Atribua esses valores È um novo array;
    -Exiba os valores desse novo array no console
*/

const values = [50,6,4,82,54,89]

// let values_sum = 0

// for(let i = 0; i < values.length; i++){
//     values_sum += values[i]
// }


const values_sum = values.reduce((acumulator, value) => acumulator + value)

console.log(values_sum);