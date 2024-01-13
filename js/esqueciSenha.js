function confereNovaSenha() {
    const novaSenha = document.getElementById('novaSenha').value;
    const confirmaNovaSenha = document.getElementById('confirmaNovaSenha');

    if (confirmaNovaSenha.value === novaSenha) {
        confirmaNovaSenha.setCustomValidity('');
    } else {
        confirmaNovaSenha.setCustomValidity('As senhas são diferentes');
    }
}

function validarNovaSenhaForca() {
    let novaSenha = document.getElementById('novaSenha').value;
    let forca = 0;

    // Adicionando pontuações com base no comprimento da senha
    if ((novaSenha.length >= 4) && (novaSenha.length <= 7)) {
        forca += 10;


    } else if (novaSenha.length > 7) {
        forca += 25;
    }

    // Adicionando pontuações com base em padrões de caracteres
    if ((novaSenha.length >= 5) && (novaSenha.match(/[a-z]+/))) {
        forca += 10;
    }

    if ((novaSenha.length >= 6) && (novaSenha.match(/[A-Z]+/))) {
        forca += 20;
    }

    if ((novaSenha.length >= 7) && (novaSenha.match(/[@#$%&;*]/))) {
        forca += 25;
    }

    // Removendo pontuação se houver repetição de números
    if (novaSenha.match(/([0-9]+)\1{1,}/)) {
        forca -= 25;
    }

    mostrarNovaForca(forca);
}

function mostrarNovaForca(forca) {

    if (forca < 30) {
        document.getElementById("msgNovaSenhaForca").innerHTML = "<span style='color: #ff0000'>Senha fraca</span>";
    }

    else if ((forca >= 30) && (forca < 50)) {
        document.getElementById("msgNovaSenhaForca").innerHTML = "<span style='color: #FFD700'>Senha média</span>";
    }

    else if ((forca >= 50) && (forca < 70)) {
        document.getElementById("msgNovaSenhaForca").innerHTML = "<span style='color: #7FFF00'>Senha forte</span>";
    }

    else if ((forca >= 70) && (forca < 100)) {
        document.getElementById("msgNovaSenhaForca").innerHTML = "<span style='color: #008000'>Senha excelente</span>";
    }
}

function limparMsgErroNovaSenha() {
    document.getElementById("msgNovaSenhaForca").innerHTML = "";
}

const redefineSenha = () => {
    const listaDeAlunosLocal = JSON.parse(localStorage.getItem('listaDeAlunos'));
    let emailRedefine = document.getElementById('emailRedefine').value;
    let novaSenha = document.getElementById('novaSenha').value;

    const indiceDoAluno = listaDeAlunosLocal.findIndex(aluno => aluno.email === emailRedefine);

    //Verifica se o aluno existe
    if (indiceDoAluno !== -1) {
        if (novaSenha === listaDeAlunosLocal[indiceDoAluno]._senha) {
            window.alert("A senha informada deve ser diferente da anterior");
        }
        else {
            listaDeAlunosLocal[indiceDoAluno]._senha = novaSenha;
            localStorage.setItem('listaDeAlunos', JSON.stringify(listaDeAlunosLocal));
            window.alert("Senha atualizada com sucesso.");
            //console.log(listaDeAlunosLocal);
            window.location.href = 'login.html';
        }
    } 
    else {
        window.alert("E-mail não encontrado. Não foi possível atualizar a senha.");
    }
    limparCamposRecuperaSenha();
}

const limparCamposRecuperaSenha = () => {
    document.getElementById('emailRedefine').value = '';
    document.getElementById('novaSenha').value = '';
    document.getElementById('confirmaNovaSenha').value = '';
};