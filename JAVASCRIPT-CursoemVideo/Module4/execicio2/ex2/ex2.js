function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('raidsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 15){
                //Criança
                var faixa = 'Menino'
                res.innerHTML = `Detectamos ${faixa} com ${idade} anos.`
                img.setAttribute('src','img/menino.png')
            }else if(idade < 25){
                //Jovem
                var faixa = 'Jovem'
                res.innerHTML = `Detectamos ${faixa} ${genero} com ${idade} anos.`
                img.setAttribute('src','img/jovem-menino.png')
            }else if(idade < 59){
                //Adulto
                var faixa = 'Adulto'
                res.innerHTML = `Detectamos ${faixa} com ${idade} anos.`
                img.setAttribute('src', 'img/adulto.png')
            }else{
                //Idoso
                var faixa = 'Idoso'
                res.innerHTML = `Detectamos ${faixa} com ${idade} anos.`
                img.setAttribute('src', 'img/idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <15){
                //Criança
                var faixa = 'Menina'
                res.innerHTML = `Detectamos ${faixa} com ${idade} anos.`
                img.setAttribute('src', 'img/menina.png')
            }else if(idade<25){
                //Jovem
                var faixa = 'Jovem'
                res.innerHTML = `Detectamos ${faixa} ${genero} com ${idade} anos.`
                img.setAttribute('src', 'img/jovem-menina.png')
            }else if(idade < 59){
                //Adulto
                var faixa = 'Adulta'
                res.innerHTML = `Detectamos ${faixa} com ${idade} anos.`
                img.setAttribute('src', 'img/adulta.png')
            }else{
                //Idoso
                var faixa = 'Idosa'
                res.innerHTML = `Detectamos ${faixa} com ${idade} anos.`
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}