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

// const mudancaDePagina = () => {
//     if (logado) {
//         document.getElementById('linkPaginaInicial').href = "#";
//     }

// }
// document.addEventListener('DOMContentLoaded', mudancaDePagina);