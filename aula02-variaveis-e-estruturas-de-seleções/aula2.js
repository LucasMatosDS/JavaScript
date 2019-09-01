/*palavra reservada (var) cria uma variável,
não é possivel iniciar uma variavel contendo números no inicio do nome.
exemplo:
criando uma variavel chamada idade.
*/
//var idade = 30;

//mostra o valor atribuido a variavel idade na tela.
//alert(idade);


//formas de definir variáveis.

//forma-1
//usando uma vez a palavra var para criar variaveis.

//var nome = 'lucas', idade = 18, solteiro = true;

//forma-2
//usando mais de uma vez a palavra reservada var.

// var nome = 'lucas';
// var idade = 18;
// var solteiro = true;
//
// console.log("seu nome é:" + nome + "\nvoce tem:" + idade + " anos" + "\nsolteiro:" + solteiro)

//OBS:
//Se não atribuir um valor a uma variável ela mostrara como undefined no console.

//exemplo:

//var y;
//console.log(y);
//Ira exibir undefined no console.

//estrutura de seleção if else
//var cor = "verde";
//para verificar se algo é igual ao outro utilizasse tres iguais.

//igualdade.

  // if(cor === "verde"){
  //   console.log("a cor é verde!")
  // }else{
  //   console.log("a cor não é verde!")
  // }

//diferença.

//var cor = "cinza";

 // if(cor !== "verde"){
 //   console.log("a cor é diferente de verde!")
 // }else{
 //   console.log("a cor é verde!")
 // }

//estrutura de seleção switch

// var aluno = "jose";
//   switch(aluno){
//       case "jose":
//       console.log("voce é jose")
//       break;
//
//       default:
//       console.log("voce não é o jose")
//   }

/*
var diaSemana = new Date().getDay();

switch(diaSemana){

  case 6:
  console.log("hoje é sabado");
  break;

  case 0:
  console.log("hoje é domingo");
  break;

  default:
  console.log("Dia normal: trabalho e estudo");
}
*/

//Somando valores atribuidos em variáveis.

//OBS:
//Para calcular números não se atribui apostofros a atributos,
//porque se não ele será intepretado como texto.

//var x = 10, y = 5;

//x++;
//operador de incremento se colocar o ++ ele adiciona +1 no valor.

//x--;
//operador de decremento se coloca -- ele retira -1 do valor.

//exibindo no console do navvegador!
//console.log(x + y);

//OBS:
//se quiser efetuar um calculo de soma ou subtração e depois dividir o valor ou multiplicar primeiro deve ser efetuado a multiplicação e divisão.
//e se quiser efetuar uma soma. para depois divir é necessário botar as variaveis entre parenteses().

//var x = 10, y = 10, z = 2;

//posso atribuir o resultado da operação imprimindo no console a variavel com o resultado.
//var resultado = (x + y) /z;

//imprimindo no console do navegador!
//console.log(resultado);

//OBS:
//A possibilidade de executar o calculo direto no console.

//console.log((x + y) / z);

//é possivel efeutar as quatro operações matemáticas no valor da variavel x acrecentando o sinal -= ou += ou *= ou /=;
//var x = 10, y = 10, z = 2;
//x *= 5;

//console.log(x);

//OBS:
//para acessar uma variavel que contem um objeto é preciso usar console.log(); ou alert();
//console.log(pessoa.nome);


/*
palavras reservadas da linguagem
var
function
break
return
continue
*/
