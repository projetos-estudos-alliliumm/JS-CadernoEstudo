const gamingPC = {
    motherboard: {
        model: 'Asus Prime A320M-K/BR',
        price: 488.9,

    },
    cpu:{
        model: 'Ryzen 5 1600',
        price: 1189.9
    },
    cabinet: {
        model: 'Aerocool Cylon',
        price: 368.9
    },
    gpu: {
        model: 'Gigabyte Geforce GTX 1060 3GB GDDR5',
        price: 2537.3
    },
    power_supply: {
        model: 'EVGA 450W Bronze',
        price: 419.9
    },
    ram:{
        model: 'HyperX Fury 16gb 2666MHz DDR4',
        price: 750.0
    }
};



const gamingPCPartsPrice = []
let totalPrice = 0 

console.log(`Peças do Pc: `)

for(pcPart in gamingPC){
    console.log(`Modelo: ${gamingPC[pcPart].model} | Preço: ${gamingPC[pcPart].price}`)

    gamingPCPartsPrice.push(gamingPC[pcPart].price)
}

console.log()

gamingPCPartsPrice.forEach(function (pcPartPrice){ //Obter só o valor tambem pode ser
    totalPrice += pcPartPrice;
});

console.log(`Valor total do PC: ${totalPrice}`)

