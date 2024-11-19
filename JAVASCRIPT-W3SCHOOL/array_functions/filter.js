//Exemplo
/*
    Exemplo:
    -Filtre os valores do array "values" por maior que 10;
    -Atribua esses valores È um novo array;
    -Exiba os valores desse novo array no console
*/

const values = [1,2,3,4,5,6,7,80,90,38]

// const values_result = []

// for(let i = 0; i < values.length; i++){
//     if(values[i] > 10){
//         values_result.push(values[i])
//     }
// }
// console.log(values_result)

const filter_values = values.filter((value) => value > 10);
console.log(filter_values)