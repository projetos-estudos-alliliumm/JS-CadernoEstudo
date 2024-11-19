let numero = document.getElementById('numero');
let resposta = document.querySelector('select#resposta');
let paragrafo = document.querySelector('div.paragrafos');
let numeroarrays = [];

function entreumcem(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    }else{
        return false
    }
}

function nalista(num, numarray){
    let pos = numarray.indexOf(num)

    if(pos != -1){
        return false
    }else{
        return true
    }

}

function log(){

    if(numero.value.length == 0){
        alert('Digite um número antes de finalizar')
    }else if(entreumcem(numero.value) && nalista(numero.value, numeroarrays)){

        numeroarrays.push(numero.value)
        console.log(numeroarrays);

        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado!`;
        resposta.appendChild(item)
        paragrafo.innerHTML = ""

    }else{
        alert("Valor inválido ou já adicionado na lista!")
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(numeroarrays.length == 0){
        alert('Para finalizar adicione valores')
    }else{

        let cadastrados = numeroarrays.length

        let maior = numeroarrays[0];
        let menor = numeroarrays[0];
        let soma = 0


        for(let pos in numeroarrays){
            soma += Number(numeroarrays[pos])
            if(numeroarrays[pos] > maior)
                maior = numeroarrays[pos]
            if(numeroarrays[pos] < menor)
                menor = numeroarrays[pos]
        }

        let media = soma / cadastrados

        paragrafo.innerHTML = ""
        paragrafo.innerHTML += `<p> Ao todo, temos ${cadastrados} números cadastrados </p>`
        paragrafo.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        paragrafo.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        paragrafo.innerHTML += `<p> Somando todos os valores, temos ${soma}</p>`
        paragrafo.innerHTML += `<p> A média dos valores digitados é ${media} </p>`

    }
}