//Biblioteca cloudflare inputmask -> Formata os campos
$(document).ready(function () {
    $('#cpfLogin').inputmask('999.999.999-99');
});

const login = () => {
    const listaDeAlunosLocal = JSON.parse(localStorage.getItem('listaDeAlunos'));
    let cpfLogin = document.getElementById('cpfLogin').value;
    let senhaLogin = document.getElementById('senhaLogin').value;
    let indiceDoAluno = listaDeAlunosLocal.findIndex(aluno => aluno.cpf === cpfLogin);

    //Verifica se o aluno existe
    if (indiceDoAluno !== -1) {
        if (senhaLogin === listaDeAlunosLocal[indiceDoAluno]._senha && cpfLogin === listaDeAlunosLocal[indiceDoAluno].cpf) {
            //Armazenando indice
            localStorage.setItem('indice', indiceDoAluno);
            window.location.href = 'perfilUser.html';
        }
        else {
            window.alert("Dados não encontrados, tente novamente.");
            //console.log(listaDeAlunosLocal);
        }
    }
    else {
        window.alert("Usuário não encontrado, tente novamente ou cadastre-se");
    }
    limparCamposLogin();
}

const limparCamposLogin = () => {
    document.getElementById('cpfLogin').value = '';
    document.getElementById('senhaLogin').value = '';
};