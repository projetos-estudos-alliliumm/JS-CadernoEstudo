
// var carros = [
//     { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 45000, createdAt: 1534506085621 },
//     { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 120000, createdAt: 1534506085621 }
// ]

// var total = 0

// // for(var i = 0; i < carros.length; i++) {
// //     total += carros[i].preco
// // }


// for(const carro of carros) { // para carro de carros
//     total += carro.preco
// }

// // for(const i in carros) { // para i em carros
// //     total += carros[i].preco
// // }

// // console.log(total)


// // const artigo = document.querySelectorAll('article > p')

// // for (const paragrafo of artigo) {
// //   paragrafo.classList.add("read")
// // }

// let fruta = {
//     nome: "Banana",
//     preco: 9.99,
//     unidade:1
// }


// for(let valor in fruta){
//     console.log(valor)
//     console.log(fruta)
//     console.log(fruta[valor])
// }

let aparelhos = ["celular", "fone de ouvido", "microfone", "mouse"];

// for (let valor of aparelhos){
//     console.log(valor)
// }

aparelhos.forEach(function(aparelho, position){
    console.log(`O valor ${aparelho} está na posição ${position}`)
})