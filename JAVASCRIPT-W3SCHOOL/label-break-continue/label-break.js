//Break encerra o loop atual, switch, ou o loop que foi informado no label e transfere o controle da execução do programa para o comando seguinte

//A função a seguir possui um comando break que encerra o loop  while quando a variável i vale 3, e então retorna o valor 3 * x.

function testaBreak(x) {
    var i = 0;
    
    while (i < 6) {
        if (i == 3) {
            break;
        }
        i += 1;
    }
    return i * x;
}

console.log();

//O código a seguir possui o comando break dentro de uma estrutura nomeada. 
//O comando break deverá estar dentro da estrutura na qual o label se refere. Veja que  inner_block está dentro de outer_block.

bloco_externo:{

    bloco_interno:{
        console.log ('1');
        break bloco_externo;      // encerra bloco_interno e bloco_externok
        console.log (':-(');    // não é executado
    }

    console.log ('2');        // não é executado
}


// O código a seguir também utiliza o comando break com blocos nomeados mas gera um erro de sintaxe pois o comando break está dentro do bloco_1 mas faz uma referência ao bloco_2. 
//Um comando break sempre deverá estar dentro da estrutura nomeada na qual fizer referência.

bloco_1:{
    console.log ('1');
    break bloco_2;            // SyntaxError: label not found
}

bloco_2:{
    console.log ('2');
}
