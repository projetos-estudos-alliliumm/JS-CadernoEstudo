function contar(){
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let msg = document.querySelector('div#msg1')


    if(inicio.value.length == 0 || fim.value.length == 0){
        //window.alert(`[ERRO] Falta dados!`)
        msg.innerHTML = 'Impossível Contar'
    }else{
        msg.innerHTML = 'Contando: <br>'
        let inicionumber = Number(inicio.value)
        let fimnumber = Number(fim.value)
        let passonumber = Number(passo.value)

        if(passonumber <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            passonumber = 1
        }

        if(inicionumber < fimnumber){
            for(var c = inicionumber; c <= fimnumber; c += passonumber){
                msg.innerHTML += `${c} \u{1F483}` //U+1F483 UNICODE EMOJI LIST
            }
        } else{
            for(var c = inicionumber; c >= fimnumber; c -= passonumber){
                msg.innerHTML += `${c} \u{1F483}` //U+1F483 UNICODE EMOJI LIST
            }
        }
        msg.innerHTML += '\u{1F3C1}'

        
    }


}

function contar1(){
    let ini = document.querySelector('input#inicio').value
    let fim = document.querySelector('input#fim').value
    let pas = document.querySelector('input')

}