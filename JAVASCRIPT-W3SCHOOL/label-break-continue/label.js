// Label identificar um laço o qual pod ser referido posteriormente utilizando-se os comandos break ou continue



//CONTINUE

var i, j;

loop1:
for (i = 0; i < 3; i++) {      //O primeiro 'for' é etiquetado com "loop1"
    loop2:
    for (j = 0; j < 3; j++) {   //O segundo é etiquetado com "loop2"
        if (i == 1 && j == 1) {
            continue loop1;
        } else {
            console.log("i = " + i + ", j = " + j);
        }
    }
}

// Sua saída é:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Note como pula-se "i = 1, j = 1" e "i = 1, j = 2"

console.log();


//Dado uma lista de itens e outra de testes, este exemplo conta o número de ítens que passam em todos os testes.
var itemsPassed = 0;
var i, j;

top:
for (i = 0; i < items.length; i++){
    for (j = 0; j < tests.length; j++)
        if (!tests[j].pass(items[i]))
        continue top;
    itemsPassed++;
}



//BREAK

//Dado uma lista de ítens e uma lista de testes, neste exemplo determina-se se todos os ítens passam em todos os testes.

var allPass = true;
var i, j;

top2:
for (i = 0; items.length; i++)
    for (j = 0; j < tests.length; i++)
        if (!tests[j].pass(items[i])){
        allPass = false;
        break top2;
    }
