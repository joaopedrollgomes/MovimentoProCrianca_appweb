
// biblioteca que coloca o formato do CPF
$(document).ready(function () {
    $('#cpf').inputmask('999.999.999-99');
});
$(document).ready(function () {
    $('#telefone').inputmask('(99) 99999-9999');
});
$(document).ready(function () {
    $('#dataNascimento').inputmask('99/99/9999');
});

//Obtendo dados do Formulário e convertendo para JSON
class Aluno {
    constructor(cpf, nomeCompleto, dataNascimento, telefone, email, cidade, bairro, disponibilidade, senha, areaInteresse, autoSizingCheck) {
        this.cpf = cpf;
        this.nomeCompleto = nomeCompleto;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.email = email;
        this.cidade = cidade;
        this.bairro = bairro;
        this.disponibilidade = disponibilidade;
        this._senha = senha;
        this.areaInteresse = areaInteresse;
        this.termosDeUso = autoSizingCheck;
    }

    jsonConvertString(aluno) {
        let jsonConvert = JSON.stringify(aluno, null, 2);
        window.alert(jsonConvert);
    }
}

const dadosAluno = () => {
    let cpf = document.getElementById('cpf').value;
    let nomeCompleto = document.getElementById('nomeCompleto').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let disponibilidade = document.getElementById('disponibilidade').value;
    let senha = document.getElementById('senha').value;
    let areaInteresse = document.getElementById('areaInteresse').value;
    let termosDeUso = document.getElementById('autoSizingCheck').checked;

    let aluno;
    aluno = new Aluno(cpf, nomeCompleto, dataNascimento, telefone, email, cidade, bairro, disponibilidade, senha, areaInteresse, termosDeUso);
    aluno.jsonConvertString(aluno);
}

