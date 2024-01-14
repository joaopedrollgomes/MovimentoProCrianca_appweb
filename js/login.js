//Biblioteca cloudflare inputmask -> Formata os campos
$(document).ready(function () {
    $('#cpfLogin').inputmask('999.999.999-99');
});

let logado = localStorage.getItem('logado');

const login = () => {
    const listaDeAlunosLocal = JSON.parse(localStorage.getItem('listaDeAlunos'));

     // Verifica se a lista de alunos está vazia
     if (!listaDeAlunosLocal || listaDeAlunosLocal.length === 0) {
        window.alert("Não há dados cadastrados");
    }

    let cpfLogin = document.getElementById('cpfLogin').value;
    let senhaLogin = document.getElementById('senhaLogin').value;
    let indiceDoAluno = listaDeAlunosLocal.findIndex(aluno => aluno.cpf === cpfLogin);
    console.log(listaDeAlunosLocal);
    //Verifica se o aluno existe
    if (indiceDoAluno !== -1) {
        if (senhaLogin === listaDeAlunosLocal[indiceDoAluno]._senha && cpfLogin === listaDeAlunosLocal[indiceDoAluno].cpf) {
            //Armazenando indice
            localStorage.setItem('indice', indiceDoAluno);
            localStorage.setItem('logado', true);
            window.location.href = 'perfilUser.html';
        }
        else {
            window.alert("Dados não encontrados, tente novamente.");
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

const mudancaDePagina = () => {
    if (logado) {
        // document.getElementById('loginBody').innerHTML = 'Página não encontrada';
        window.alert("Você já está logado!");
        window.location.href = 'perfilUser.html';
    }
}
document.addEventListener('DOMContentLoaded', mudancaDePagina);