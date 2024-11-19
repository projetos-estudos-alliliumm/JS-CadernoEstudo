let amigo = {
    nome: 'José',
    sexo:'M',
    peso: 85.4,
    engordar(p=0){//aumentar peso
        console.log('Engordou')
        this.peso += p
    }} //Objeto
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

console.log(typeof amigo)
//Array e objeto são de mesma origem
let amigo2 = []
console.log(typeof amigo2) //Array Object

console.log(amigo.nome)

