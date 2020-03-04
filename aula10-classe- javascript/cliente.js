function Cliente(){
  
		var nome,sobrenome,tel,email;

	this.getNome = function(){
		return nome;
	}

	this.setNome = function(value){
 		nome = value;
	}

	this.getSobrenome = function(){
		return sobrenome;
	}

	this.setSobrenome = function(value){
		sobrenome = value;
	}

	this.getTel = function(){
 		return tel;
	}

	this.setTel = function(value){
		tel = value;
	}

	this.getEmail = function(){
		return email;
	}

	this.setEmail = function(value){
		email = value;
	}

}