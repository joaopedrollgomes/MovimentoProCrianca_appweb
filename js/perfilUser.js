//Biblioteca cloudflare inputmask -> Formata os campos
$(document).ready(function () {
    $('#cpfPerfil').inputmask('999.999.999-99');
});

$(document).ready(function () {
    $('#telefonePerfil').inputmask('(99) 99999-9999');
});

$(document).ready(function () {
    $('#dataNascimentoPerfil').inputmask('99/99/9999');
});

let logado = localStorage.getItem('logado');

const dadosPerfilAluno = () => {

    if (logado) {
        document.getElementById('linkPaginaInicial').href = "#";
    }

    //Recuperando indice
    let indiceAlunoLogado = localStorage.getItem('indice');
    const listaDeAlunosLocal = JSON.parse(localStorage.getItem('listaDeAlunos'));

    const alunoLogado = listaDeAlunosLocal[indiceAlunoLogado];
    // console.log(alunoLogado);

    // Preencher os campos do formulário com os dados do aluno logado
    document.getElementById('nomeCompletoPerfil').innerHTML = alunoLogado.nomeCompleto;

    document.getElementById('cpfPerfil').value = alunoLogado.cpf;
    document.getElementById('dataNascimentoPerfil').value = alunoLogado.dataNascimento;
    document.getElementById('emailPerfil').value = alunoLogado.email;
    document.getElementById('telefonePerfil').value = alunoLogado.telefone;
    document.getElementById('cidadePerfil').value = alunoLogado.cidade;
    document.getElementById('bairroPerfil').value = alunoLogado.bairro;
    document.getElementById('areaInteressePerfil').value = alunoLogado.areaInteresse;
    document.getElementById('disponibilidadePerfil').value = alunoLogado.disponibilidade;


}

document.addEventListener('DOMContentLoaded', dadosPerfilAluno);


$(document).ready(function () {
    $("#btnEditar").click(function () {
        $("#cpfEditar").val($("#cpfPerfil").val());
        /*$("#dataNascimentoEditar").val($("#dataNascimentoPerfil").val());*/ //essa bosta não quer pegar
        $('#telefoneEditar').val($("#telefonePerfil").val())
        $('#emailEditar').val($("#emailPerfil").val())
        $('#cidadeEditar').val($("#cidadePerfil").val())
        $('#bairroEditar').val($("#bairroPerfil").val())
        $('#areaInteresseEditar').val($("#areaInteressePerfil").val())
    });
});

const sairDoPerfil = () => {
    let confirma = window.confirm("Deseja realmente sair do seu perfil ?");

    if (confirma) {
        localStorage.removeItem('logado');

        document.getElementById('nomeCompletoPerfil').innerHTML = "";
        document.getElementById('cpfPerfil').value = "";
        document.getElementById('dataNascimentoPerfil').value = "";
        document.getElementById('emailPerfil').value = "";
        document.getElementById('telefonePerfil').value = "";
        document.getElementById('cidadePerfil').value = "";
        document.getElementById('bairroPerfil').value = "";
        document.getElementById('areaInteressePerfil').value = "";
        document.getElementById('disponibilidadePerfil').value = "";

        window.location.href = 'login.html';
    }
}

let buttonSairPerfil = document.getElementById('buttonSairPerfil');

buttonSairPerfil.addEventListener('click', () => {
    sairDoPerfil();
})