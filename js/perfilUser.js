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

const dadosPerfilAluno = () => {
    //Recuperando indice
    let indiceAlunoLogado = localStorage.getItem('indice');
    const listaDeAlunosLocal = JSON.parse(localStorage.getItem('listaDeAlunos'));

    const alunoLogado = listaDeAlunosLocal[indiceAlunoLogado];

            // Preencher os campos do formulário com os dados do aluno logado
            document.getElementById('cpfPerfil').value = alunoLogado.cpf;
            document.getElementById('nomeCompletoPerfil').value = alunoLogado.nomeCompleto;
            document.getElementById('dataNascimentoPerfil').value = alunoLogado.dataNascimento;
            document.getElementById('emailPerfil').value = alunoLogado.email;
            document.getElementById('telefonePerfil').value = alunoLogado.telefone;
            document.getElementById('cidadePerfil').value = alunoLogado.cidade;
            document.getElementById('bairroPerfil').value = alunoLogado.bairro;
}

document.addEventListener('DOMContentLoaded', dadosPerfilAluno);