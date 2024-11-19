function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/manha.png'
        img.alt = 'Foto da Manhã'

        document.body.style.background = 'rgba(230, 147, 41, 0.65)'
    }else if(hora >=12 && hora < 18){
        //Boa Tarde
        img.src = 'img/tarde.png'
        img.alt = 'Foto da Tarde'

        document.body.style.background = 'rgb(166, 108, 81)'
    }else{
        //Boa noite
        img.src = 'img/noite.png'
        img.alt = 'Foto da Noite'

        document.body.style.background = 'rgb(49, 73, 121)'
    }
}