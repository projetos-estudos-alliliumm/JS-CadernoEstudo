//Continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, continua a execução deste laço com a próxima iteração

//No for: volta à expressão atualizando-a
//No while: volta à condição

//Com while

var i = 0;
var n = 0;

while (i < 5) {
    i++;

    if (i === 3) {
        continue;
    }

    n += i;
}


//Com rótulo/Label

var i = 0;
var j = 8;

checkiandj: while (i < 4) {
    console.log("i: " + i);
    i += 1;

    checkj: while (j > 4) {
        console.log("j: "+ j);
        j -= 1;

        if ((j % 2) == 0)
        continue checkj;
        console.log(j + " is odd.");
    }
    console.log("i = " + i);
    console.log("j = " + j);
}





"i: 0"

// start checkj
"j: 8"
"7 is odd."
"j: 7"
"j: 6"
"5 is odd."
"j: 5"
// end checkj

"i = 1"
"j = 4"

"i: 1"
"i = 2"
"j = 4"

"i: 2"
"i = 3"
"j = 4"

"i: 3"
"i = 4"
"j = 4"

