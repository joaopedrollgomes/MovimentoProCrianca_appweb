
 // biblioteca que coloca o formato nos campos
 $(document).ready(function () {
    $('#cpf').inputmask('999.999.999-99');
});
$(document).ready(function () {
    $('#telefone').inputmask('(99) 99999-9999');
});
$(document).ready(function () {
    $('#dataNascimento').inputmask('99/99/9999');
});

function confereSenha() {
    const senha = document.getElementById('senha').value;
    const confirma = document.getElementById('senhaConfere');

    if (confirma.value === senha) {
        confirma.setCustomValidity('');
    } else {
        confirma.setCustomValidity('As senhas são diferentes');
    }
}

function validarSenhaForca(){
	let senha = document.getElementById('senha').value;
	let forca = 0;

	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
        

	}else if(senha.length > 7){
		forca += 25;
	}

	if((senha.length >= 5) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 20;
	}

	if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
		forca += 25;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -25;
	}

	mostrarForca(forca);
}

function mostrarForca(forca){

	if(forca < 30 ){
		document.getElementById("msgSenhaForca").innerHTML = "<span style='color: #ff0000'>Senha fraca</span>";
	}else if((forca >= 30) && (forca < 50)){
		document.getElementById("msgSenhaForca").innerHTML = "<span style='color: #FFD700'>Senha média</span>";
	}else if((forca >= 50) && (forca < 70)){
		document.getElementById("msgSenhaForca").innerHTML = "<span style='color: #7FFF00'>Senha forte</span>";
	}else if((forca >= 70) && (forca < 100)){
		document.getElementById("msgSenhaForca").innerHTML = "<span style='color: #008000'>Senha excelente</span>";
	}
}

function limparMsgErroSenha() {
    document.getElementById("msgSenhaForca").innerHTML = "";
}
