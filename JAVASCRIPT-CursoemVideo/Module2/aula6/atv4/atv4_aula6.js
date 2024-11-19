        //Node JS
        var n1 = window.prompt('Digite um número real:');
        var n2 = n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        //
        document.write(`O número real digitado fica assim quando convertido para a moeda do Brasil (Real R$): ${n2}`);