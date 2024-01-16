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


// $(document).ready(function () {
//     $("#btnEditar").click(function (e) {
//         e.preventDefault();

//         $("#nomeCompletoEditar").val($("#nomeCompletoPerfil").text());
//         $("#cpfEditar").val($("#cpfPerfil").val());
//         $("#dataNascimentoEditar").val($("#dataNascimentoPerfil").val());
//         $('#telefoneEditar').val($("#telefonePerfil").val())
//         $('#emailEditar').val($("#emailPerfil").val())
//         $('#cidadeEditar').val($("#cidadePerfil").val())
//         $('#bairroEditar').val($("#bairroPerfil").val())
//         $('#areaInteresseEditar').val($("#areaInteressePerfil").val())
//         $('#disponibilidadeEditar').val($("#disponibilidadePerfil").val())
//     });


// });
document.addEventListener('DOMContentLoaded', function () {
    let btnEditar = document.getElementById('btnEditar');

    if (btnEditar) {
        btnEditar.addEventListener('click', function (e) {
            e.preventDefault();

            let nomeCompletoEditar = document.getElementById('nomeCompletoEditar');
            let cpfEditar = document.getElementById('cpfEditar');
            let dataNascimentoEditar = document.getElementById('dataNascimentoEditar');
            let telefoneEditar = document.getElementById('telefoneEditar');
            let emailEditar = document.getElementById('emailEditar');
            let cidadeEditar = document.getElementById('cidadeEditar');
            let bairroEditar = document.getElementById('bairroEditar');
            let areaInteresseEditar = document.getElementById('areaInteresseEditar');
            let disponibilidadeEditar = document.getElementById('disponibilidadeEditar');

            let nomeCompletoPerfil = document.getElementById('nomeCompletoPerfil');
            let cpfPerfil = document.getElementById('cpfPerfil');
            let dataNascimentoPerfil = document.getElementById('dataNascimentoPerfil');
            let telefonePerfil = document.getElementById('telefonePerfil');
            let emailPerfil = document.getElementById('emailPerfil');
            let cidadePerfil = document.getElementById('cidadePerfil');
            let bairroPerfil = document.getElementById('bairroPerfil');
            let areaInteressePerfil = document.getElementById('areaInteressePerfil');
            let disponibilidadePerfil = document.getElementById('disponibilidadePerfil');

            if (nomeCompletoEditar && cpfEditar && dataNascimentoEditar && telefoneEditar && emailEditar &&
                cidadeEditar && bairroEditar && areaInteresseEditar && disponibilidadeEditar &&
                nomeCompletoPerfil && cpfPerfil && dataNascimentoPerfil && telefonePerfil && emailPerfil &&
                cidadePerfil && bairroPerfil && areaInteressePerfil && disponibilidadePerfil) {

                nomeCompletoEditar.value = nomeCompletoPerfil.innerText;
                cpfEditar.value = cpfPerfil.value;
                dataNascimentoEditar.value = dataNascimentoPerfil.value;
                telefoneEditar.value = telefonePerfil.value;
                emailEditar.value = emailPerfil.value;
                cidadeEditar.value = cidadePerfil.value;
                bairroEditar.value = bairroPerfil.value;
                areaInteresseEditar.value = areaInteressePerfil.value;
                disponibilidadeEditar.value = disponibilidadePerfil.value;
            }

            const editarPerfil = () => {

                let manhaCheckboxEditar = document.getElementById('manhaCheckboxEditar');
                let tardeCheckboxEditar = document.getElementById('tardeCheckboxEditar');
                let noiteCheckboxEditar = document.getElementById('noiteCheckboxEditar');

                let novaDisponibilidade = [];

                if (manhaCheckboxEditar.checked && tardeCheckboxEditar.checked && noiteCheckboxEditar.checked) {
                    novaDisponibilidade.push(manhaCheckboxEditar.value, tardeCheckboxEditar.value, noiteCheckboxEditar.value);
                }
                else if (manhaCheckboxEditar.checked && tardeCheckboxEditar.checked) {
                    novaDisponibilidade.push(manhaCheckboxEditar.value, tardeCheckboxEditar.value);
                }
                else if (manhaCheckboxEditar.checked && noiteCheckboxEditar.checked) {
                    novaDisponibilidade.push(manhaCheckboxEditar.value, noiteCheckboxEditar.value);
                }
                else if (tardeCheckboxEditar.checked && noiteCheckboxEditar.checked) {
                    novaDisponibilidade.push(tardeCheckboxEditar.value, noiteCheckboxEditar.value);
                }
                else if (manhaCheckboxEditar.checked) {
                    novaDisponibilidade.push(manhaCheckboxEditar.value);
                }
                else if (tardeCheckboxEditar.checked) {
                    novaDisponibilidade.push(tardeCheckboxEditar.value);
                }
                else if (noiteCheckboxEditar.checked) {
                    novaDisponibilidade.push(noiteCheckboxEditar.value);
                }

                let indiceAlunoLogado = localStorage.getItem('indice');
                const listaDeAlunosLocal = JSON.parse(localStorage.getItem('listaDeAlunos'));

                // Salvando os dados editados
                listaDeAlunosLocal[indiceAlunoLogado].nomeCompleto = document.getElementById('nomeCompletoEditar').value;

                listaDeAlunosLocal[indiceAlunoLogado].cpf = document.getElementById('cpfEditar').value;
                listaDeAlunosLocal[indiceAlunoLogado].dataNascimento = document.getElementById('dataNascimentoEditar').value;
                listaDeAlunosLocal[indiceAlunoLogado].email = document.getElementById('emailEditar').value;
                listaDeAlunosLocal[indiceAlunoLogado].telefone = document.getElementById('telefoneEditar').value;
                listaDeAlunosLocal[indiceAlunoLogado].cidade = document.getElementById('cidadeEditar').value;
                listaDeAlunosLocal[indiceAlunoLogado].bairro = document.getElementById('bairroEditar').value;
                listaDeAlunosLocal[indiceAlunoLogado].areaInteresse = document.getElementById('areaInteresseEditar').value;
                if(novaDisponibilidade.length !== 0){
                    listaDeAlunosLocal[indiceAlunoLogado].disponibilidade = novaDisponibilidade;
                }

                localStorage.setItem('funcionou', true);
                localStorage.setItem('listaDeAlunos', JSON.stringify(listaDeAlunosLocal));
                window.location.href = 'perfilUser.html';
            };

            let buttonSalvarEdicao = document.getElementById('buttonSalvarEdicao');
            buttonSalvarEdicao.addEventListener('click', function () {
                editarPerfil();
            })
        });
    }
});


// const editarPerfil = () => {
//     // let indiceAlunoLogado = localStorage.getItem('indice');
//     // const listaDeAlunosLocal = JSON.parse(localStorage.getItem('listaDeAlunos'));

//     // // Preencher os campos do formulário com os dados do aluno logado
//     // listaDeAlunosLocal[indiceAlunoLogado].nomeCompleto = document.getElementById('nomeCompletoEditar').value;

//     // listaDeAlunosLocal[indiceAlunoLogado].cpf = document.getElementById('cpfEditar').value;
//     // listaDeAlunosLocal[indiceAlunoLogado].dataNascimento = document.getElementById('dataNascimentoEditar').value;
//     // listaDeAlunosLocal[indiceAlunoLogado].email = document.getElementById('emailEditar').value;
//     // listaDeAlunosLocal[indiceAlunoLogado].telefone = document.getElementById('telefoneEditar').value;
//     // listaDeAlunosLocal[indiceAlunoLogado].cidade = document.getElementById('cidadeEditar').value;
//     // listaDeAlunosLocal[indiceAlunoLogado].bairro = document.getElementById('bairroEditar').value;
//     // listaDeAlunosLocal[indiceAlunoLogado].areaInteresse = document.getElementById('areaInteresseEditar').value;

//     localStorage.setItem('funcionou', true);
//     // localStorage.setItem('listaDeAlunos', JSON.stringify(listaDeAlunosLocal));
// };

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