document.getElementById('adminLoginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    loginAdmin();
});

const loginAdmin = () => {
    let loginAdmin = document.getElementById('loginAdmin').value;
    let senhaLoginAdmin = document.getElementById('senhaLoginAdmin').value;

    let login = 'admin';
    let senha = 'admin';

    // Verifica se existe admin cadastradado
    if (loginAdmin !== login) {
        window.alert("Não há dados cadastrados");
    }

    if (loginAdmin === login && senhaLoginAdmin === senha) {
        //Armazenando indice
        localStorage.setItem('adminLogado', true);
        window.location.href = 'adminPage.html';
    }
    else {
        window.alert("Dados não encontrados, tente novamente.");
    }

    limparCamposLoginAdmin();
}

const limparCamposLoginAdmin = () => {
    document.getElementById('loginAdmin').value = '';
    document.getElementById('senhaLoginAdmin').value = '';
};

let adminlogado = localStorage.getItem('adminLogado');

const mudancaDePagina = () => {
    if (adminlogado) {
        // document.getElementById('loginBody').innerHTML = 'Página não encontrada';
        window.alert("Você já está logado!");
        window.location.href = 'adminPage.html';
    }
}
document.addEventListener('DOMContentLoaded', mudancaDePagina);