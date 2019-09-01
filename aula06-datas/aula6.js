
//O MES EM JAVASCRIPT VAI DE 0 A 11 NÃO DE 1 HÁ 12

	//forma 1
	var d = new Date();//mostra uma string

	//var d = new Date();//imprime a data em milisegundos
    //var d = new Date(string);//pode passar uma string

	//Date() método date serve para mostrar a data
	//console.log(d);
	//console.log(Date());

	//get date pega a data
	console.log('getDate ' + d.getDate());
	console.log('getDay ' + d.getDay());
	console.log('getFullYear ' + d.getFullYear());
	console.log('getHours ' + d.getHours());
	console.log('getMilliseconds ' + d.getMilliseconds());
	console.log('getMinutes ' + d.getMinutes());
	console.log('getMonth ' + d.getMonth());
	console.log('getSeconds ' + d.getSeconds());
	console.log('getTime ' + d.getTime());

	//imprime um texto na pagina
	//document.write('hello world');

	//set date seta a data
	//ex: d.setDate(10);

	//função para formatar Datas e dando retorno

	function formataData(data = new Date()){
		var dia = data.getDate(), mes = data.getMonth() + 1, ano = data.getFullYear();

		if(dia.toString().length === 1){
			dia = "0" + dia;
			mes = "0" + mes;

			return dia + "/" +mes+ "/" +ano;
		}

	}
	alert(formataData());
	console.log(formataData());



	console.log(d);
	///por padrao mostra um toString() que mostra todo o formato

	 //getDate pega o dia da semana.

   //formato UTC mostra até GMT não mostra o fuso horario
	console.log(d.toUTCString());

  // mostra o dia da semana o mes e o ano
	console.log(d.toDateString());
