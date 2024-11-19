//VARIÁVEIS COMPOSTAS - ARRAYS OU VETORES, OU OBJETOS

let num = [18,45,3,9,55]
num.sort((a,b) => a - b) //Sortear todos os elementos e colocar em ordem crescente 
num.push(7)
num.push(4) //Criar mais um elemento na array por último

console.log(num)
console.log(`Nosso vetor é o ${num} e o comprimento é ${num.length}`) //Contar todos os elementos de uma array
console.log(`O primeiro valor é ${num[0]}`)

num[3] = 6 //Escolher a posição para atribuir variável



// let valores = [4,5,7,811,22,34,12,554,67,9,0,8454,54]
// valores.sort((a,b)=> a-b)
// console.log(valores)

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`O valor da ṕosição ${pos} é ${valores[pos]}`)
// }

// for(let pos in valores){
//     console.log(`O valor da posição ${pos} é ${valores[pos]}`)
// }



let pos = num.indexOf(3)
console.log(`o valor 3 está na posição ${pos}`) // Valor encontrado e é encontrado o seu índice
let pos1 = num.indexOf(8)
console.log(`o valor 8 está na posição ${pos1}`) // Valor não encontrado e nao é encontrado o seu índice

if (pos == -1){
    console.log("O valor não foi encontrado")
}else{
    console.log(`O valor foi encontrado e se encontra na posição ${pos}`)
}

if (pos1 == -1){
    console.log("O valor não foi encontrado")
}else{
    console.log(`O valor foi encontrado e se encontra na posição ${pos}`)
}




//Soma de arrays:

var arr = [1,2,3,4,5,6,7,8,9,10];
var soma = 0;
for(var i = 0; i < arr.length; i++) {
    soma += arr[i];
}
console.log(soma);


//Menorvalor de arrays

    //legal

    let arrmin2 = [1,2,3,4,5,6,7,8,9,10]
    let minmin2 = arr.map(Number).reduce(function(a,b){
        return Math.min(a, b)
    })

    console.log(minmin2)

    //complicado
    const valuesmin2 = [1,5,3,10,4,6];
    const minValue2 = valuesmin2.reduce(function(prev, current){
        return prev < current ? prev : current;
    });
    console.log(minValue2)


//Maiorvalor de arrays

    //legal

    let arrmai2 = [1,2,3,4,5,6,7,8,9,10]
    let maimai2 = arr.map(Number).reduce(function(a,b){
        return Math.max(a, b)
    })

    console.log(maimai2)

    //complicado
    const valuesmax2 = [1,5,3,10,4,6];
    const maxValue2 = valuesmax2.reduce(function(prev, current){
        return prev > current ? prev : current;
    });
    console.log(maxValue2)


//Simples

    let arr3 = [1,2,3,4,5,6,7,8,9,10]
    let min3 = Math.min(...arr)
    let max3 = Math.max(...arr)

    console.log(min3)
    console.log(max3)

//Exemplo de array de objetos

const valuesarray = [
    {
        'id':10,
        'name': 'Cena',
        'age':31
    },
    {
        'id':5,
        'name':'Will',
        'age':38
    }
];

const maxAge = valuesarray.reduce(function(prev, current){
    return prev.age > current.age ? prev : current;
});

console.log(maxAge)

const minAge = valuesarray.reduce(function(prev, current){
    return prev.age < current.age ? prev : current;
});

console.log(minAge)