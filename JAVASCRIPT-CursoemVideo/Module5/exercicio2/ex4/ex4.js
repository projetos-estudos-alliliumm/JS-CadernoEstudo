function contar(){
//     let numero = document.querySelector('input#numero')
//     let calculo = document.querySelector('select#calculo')
//     let numeronum = Number(numero.value);

//     if(numero.value.length == 0){
//         alert('Impossível Contar')
//     }else{
//     calculo.innerHTML = '';
//         for(var i=0;i<=10;i++){
//             let res = numeronum * i
//             calculo.innerHTML += `<option>${numeronum} x ${i} = ${res}</option>`
//         }

//     }

    let numero = document.querySelector('input#numero')
    let numeronum = Number(numero.value);
    let calculo1 = document.querySelector('select#calculo1')

    if(numero.value.length == 0){
        alert('Digite um número')
    }else{
        let i = 0
        calculo1.innerHTML = ''
        while(i <= 10){
            let item = document.createElement('option')
            item.innerText = `${numeronum} x ${i} = ${numeronum*i}`
            calculo1.appendChild(item)
            i++
        }
    }

}