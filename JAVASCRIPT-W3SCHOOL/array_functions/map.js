//Exemplo
/*
    Exemplo:
    -Multiplique os valores do array "values" por 2;
    -Atribua esses valores È um novo array;
    -Exiba os valores desse novo array no console
*/

const values = [1,2,3,4,50]

const multiplied_values = []

// for (let i=0; i<values.length; i++){
//     const multiplied_value = values[i] * 2;

//     multiplied_values.push(multiplied_value)
// }

// console.log(multiplied_values);

for(let value of values){
    const multiplied_value = value * 2;

    multiplied_values.push(multiplied_value)
}

console.log(multiplied_values)

console.log();

//MAP


const values2 = [1,2,3,4,50]

const multiplied_values2 = values2.map((value) => value * 3)

console.log(multiplied_values2)


