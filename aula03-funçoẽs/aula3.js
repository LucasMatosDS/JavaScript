//toda função precisa ter uma chamada.

//function alerta(){

 //função ira sobrescrever

//alert('olá');
//alert('oi');
//}

//chamada da função
//alerta();

//passando parametros na função.
// function alerta(msg){
//   msg = "oi";
//   alert(msg);
// }
// console.log(alerta())


//diferenças
//função com return executa uma determinada tarefa e retorna um valor

//a função sem o return apenas executa uma tarefa.

 //na function eu posso optar por definir um valor direto na mensagem ex: alerta('o resultado é: ' + dividir(15,3)); ou senão eu posso definir um valor direto no parametro ex: function dividir(num, por = 2) dessa forma eu informo que se o valor do parametro for igual a nada (null) ele passara valendo 2.

//maneira 1

/*	function dividir(num, por = 3){
       return num / por;
}
alerta('o Resultado da divisão é: ' + dividir(15));
*/

/*variaveis locais são variaveis inseridas direto no código ou seja na linha da função.

ex: var msg = 'oi';

*/
//maneira 2

//	function dividir(num, por){
//       return num / por;
//	}
//	alerta('o Resultado da divisão é: ' + dividir(15,3));
