//FUNÇÕES 

function parimpar(n){
    if(n % 2 == 0){
        return "par"
    }else{
        return "impar"
    }
}

let res = parimpar(10)

console.log(res)
console.log(parimpar(10))




function soma(a,b){
    return a + b
}

console.log(soma(5,8))

function soma1(a=0,b=0){ // se não tiver algum parâmetro pode atribuir um parâmetro opcional como 0 para que possa ser do tipo number
    return a + b
}

console.log(soma(10)) // Não é um número pois nao foi atribuido o segundo valor na função soma
console.log(soma1(2)) // É um número pois foi atribuido o segundo valor na função soma1




let v = function(x){
    return x*2
}

console.log(v(5))



//TRADICIONAL
function fatorial(n){ // 5! = 5 x 4 x 3 x 2 x 1 = 120
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))




//RECURSIVIDADE
function fatorial1(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial1(n-1)
    }
} 

console.log(fatorial1(5))

/* 
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!

1! = 1
*/





