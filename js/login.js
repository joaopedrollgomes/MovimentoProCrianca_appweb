//Biblioteca cloudflare inputmask -> Formata os campos
$(document).ready(function () {
    $('#cpfLogin').inputmask('999.999.999-99');
});
$(document).ready(function () {
    $('#cpfLoginColaborador').inputmask('999.999.999-99');
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

let adminlogado = localStorage.getItem('adminLogado');

const mudancaDePaginaAdminLogado = () => {
    if (adminlogado) {
        document.getElementById('portalDoColaboradorLogado').innerHTML = `<a
        href="adminPage.html"
        class="nav-link text-white text-decoration-underline"
        >Portal do colaborador</a
        >`;
        
    }
}

document.addEventListener('DOMContentLoaded', mudancaDePagina);
document.addEventListener('DOMContentLoaded', mudancaDePaginaAdminLogado);