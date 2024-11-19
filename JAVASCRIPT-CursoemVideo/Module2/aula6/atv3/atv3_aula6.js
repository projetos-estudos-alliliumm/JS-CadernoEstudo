  var nome = window.prompt('Qual é seu nome?');//Perguntar o nome
  // /*Vamos chamar a variável*/

  // //Mensagem
  window.alert('É um grande prazer em lhe conhecer, ' + nome + '!');//Concatenação
  //Confirmação
  window.confirm('Você deseja continuar?');
  //Escrever algo no input
  window.prompt('Escreva algo. por favor...');


  //Number.parseInt(Inteiro) ou Float(Real) ou Number() para conversão de string para número
  var n1 = Number.parseFloat(window.prompt('Digite o primeiro número, agora número inteiro:'));
  var n2 = Number.parseFloat(window.prompt('Digite o segundo número, agora número real:'));
  var n3 = Number(window.prompt('Digite um número qualquer'));

  var s = n1 + n2;
  window.alert('O valor total da soma é ' + s); //Não funcionou a soma, logo tem que fazer a conversão de string para número
  //o + (number + number) para adição
  //o + em (string + string) para concatenação
  window.alert(`A soma dos valores é ${s}`);//Com template string ``


  //Conversão de número para string
  var r1 = String(window.prompt('Digite algo:'));
  var r2 = String(window.prompt('Digite algo:'));

  var r = r1 + r2;

  window.alert('A soma dos valores é ' + r1);

  window.alert('A soma dos valores é ' + r1.toString);
