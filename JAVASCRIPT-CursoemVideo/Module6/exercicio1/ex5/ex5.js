let numero = document.getElementById('numero');
let numeroarrays = []

function log(){
    let resposta = document.querySelector('select#resposta');

    if(numero.value.length == 0){
        alert('Adicione números de 1 a 100')
    }else if(numero.value <= 1 || numero.value >= 100){
        alert('Valor inválido! Adicione números entre 1 e 100')
    }else{
        let pos = numeroarrays.indexOf(numero.value)

        if(pos == -1){
            numeroarrays.push(numero.value)
            console.log(numeroarrays);
            resposta.innerHTML += `<option> Valor ${numero.value} adicionado! </option>`
            paragrafo.innerHTML = ""
        }else{
            alert('Valor já encontrado')
        }
    }

    numero.value = ''
    numero.focus()
}

function finalizar(){
    let paragrafo = document.querySelector('div.paragrafos');

    if(numeroarrays.length == 0){
        alert('Para finalizar adicione valores')
    }else{

        let cadastrados = numeroarrays.length

        paragrafo.innerHTML = ""
        paragrafo.innerHTML += `<p> Ao todo, temos ${cadastrados} números cadastrados </p>`
        paragrafo.innerHTML += `<p> O maior valor informado foi ${maxval2(numeroarrays)}</p>`
        paragrafo.innerHTML += `<p> O menor valor informado foi ${menorval2(numeroarrays)}</p>`
        paragrafo.innerHTML += `<p> Somando todos os valores, temos ${soma(numeroarrays)}</p>`
        paragrafo.innerHTML += `<p> A média dos valores digitados é ${media(soma(numeroarrays),cadastrados)} </p>`

    }
}

function soma(numeroarrays){
    let arr = numeroarrays
    let soma = 0;
    for (let i = 0; i < arr.length; i++){
        soma += Number(arr[i]);
    }
    return soma
}

function media(soma, cadastrados){
    let media = soma / cadastrados
    return Math.round(media)
}

// function menorval(numeroarrays){
//     let arr = numeroarrays
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)

//     console.log(min)
//     console.log(max)
// }

function menorval2(numeroarrays){
    let arr = numeroarrays
    let min = arr.map(Number).reduce(function(a,b){
        return Math.min(a, b)
    })

    console.log(min)
    return min
}

function maxval2(numeroarrays){
    let arr = numeroarrays
    let max = arr.map(Number).reduce(function(a,b){
        return Math.max(a, b)
    })

    console.log(max)
    return max
}