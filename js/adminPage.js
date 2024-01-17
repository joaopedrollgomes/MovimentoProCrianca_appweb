let logado = localStorage.getItem('logado');

const mudancaDePagina = () => {
    if (logado) {
        document.getElementById('loginMenu').innerHTML = `<a
    href="perfilUser.html"
    class="nav-link text-white text-decoration-underline"
    >Perfil</a
  >`;
    }
}
document.addEventListener('DOMContentLoaded', mudancaDePagina);

//logout Admin
const sairDoPerfilAdmin = () => {
    let confirma = window.confirm("Deseja realmente sair do seu perfil ?");

    if (confirma) {
        localStorage.removeItem('adminLogado');
        window.location.href = 'loginAdmin.html';
    }
}

let logoutAdmin = document.getElementById('logoutAdmin');

logoutAdmin.addEventListener('click', () => {
    sairDoPerfilAdmin();
})

let pesquisarButton = document.getElementById('buttonpesquisarAlunos');

// Adiciona um ouvinte de evento ao botão de pesquisa
pesquisarButton.addEventListener('click', function () {
    let pesquisarInput = document.getElementById('pesquisarAlunos');
    // Obtém o valor do input de pesquisa
    let termoPesquisa = pesquisarInput.value.toLowerCase();

    // Obtém os valores dos checkboxes de disponibilidade
    let manhaCheckbox = document.getElementById('manhaCheckboxPesquisa');
    let tardeCheckbox = document.getElementById('tardeCheckboxPesquisa');
    let noiteCheckbox = document.getElementById('noiteCheckboxPesquisa');

    let disponibilidadeSelecionada = [];

    if (manhaCheckbox.checked && tardeCheckbox.checked && noiteCheckbox.checked) {
        disponibilidadeSelecionada.push(manhaCheckbox.value, tardeCheckbox.value, noiteCheckbox.value);
    }
    else if (manhaCheckbox.checked && tardeCheckbox.checked) {
        disponibilidadeSelecionada.push(manhaCheckbox.value, tardeCheckbox.value);
    }
    else if (manhaCheckbox.checked && noiteCheckbox.checked) {
        disponibilidadeSelecionada.push(manhaCheckbox.value, noiteCheckbox.value);
    }
    else if (tardeCheckbox.checked && noiteCheckbox.checked) {
        disponibilidadeSelecionada.push(tardeCheckbox.value, noiteCheckbox.value);
    }
    else if (manhaCheckbox.checked) {
        disponibilidadeSelecionada.push(manhaCheckbox.value);
    }
    else if (tardeCheckbox.checked) {
        disponibilidadeSelecionada.push(tardeCheckbox.value);
    }
    else if (noiteCheckbox.checked) {
        disponibilidadeSelecionada.push(noiteCheckbox.value);
    }

    // Verifica se o termo de pesquisa não está vazio
    if (termoPesquisa.trim() !== '' && disponibilidadeSelecionada.length > 0) {
        // Obtém a lista de alunos do localStorage
        let listaDeAlunos = JSON.parse(localStorage.getItem('listaDeAlunos'));

        // Filtra os alunos com base na disponibilidade ou área de interesse
        let resultados = listaDeAlunos.filter(function (aluno) {
            return aluno.areaInteresse.toLowerCase() === termoPesquisa &&
                aluno.disponibilidade.some(disponibilidade => disponibilidadeSelecionada.includes(disponibilidade));
        });

        // Exibe os resultados na página
        exibirResultados(resultados);
    } else {
        window.alert('Digite a área de interesse ou disponibilidade');
    }
});

// Função para exibir os resultados na página
function exibirResultados(resultados) {
    let dadosAlunoBuscado = document.getElementById('dadosAlunoBuscado');
    // Itera sobre os resultados e cria os elementos HTML
    resultados.forEach(function (aluno) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card col-sm-6 col-md-4 col-lg-3 mb-3 p-2';
        cardDiv.style.width = '16rem';

        let cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        let nomeAlunoH5 = document.createElement('h5');
        nomeAlunoH5.className = 'card-title';
        nomeAlunoH5.id = 'nomeAlunoSearch';
        nomeAlunoH5.textContent = aluno.nomeCompleto;

        let telefoneAlunoP = document.createElement('p');
        telefoneAlunoP.className = 'card-text';
        telefoneAlunoP.id = 'areaAlunoSearch';
        telefoneAlunoP.textContent = 'Telefone: ' + aluno.telefone;

        let emailAlunoP = document.createElement('p');
        emailAlunoP.className = 'card-text';
        emailAlunoP.id = 'areaAlunoSearch';
        emailAlunoP.textContent = 'Email: ' + aluno.email;

        let areaAlunoP = document.createElement('p');
        areaAlunoP.className = 'card-text';
        areaAlunoP.id = 'areaAlunoSearch';
        areaAlunoP.textContent = 'Área de interesse: ' + aluno.areaInteresse;

        let disponibilidadeAlunoP = document.createElement('p');
        disponibilidadeAlunoP.className = 'card-text';
        disponibilidadeAlunoP.id = 'disponibilidadeAlunoSearch';
        disponibilidadeAlunoP.textContent = 'Disponibilidade: ' + aluno.disponibilidade;

        // Adiciona os elementos criados ao DOM
        cardBodyDiv.appendChild(nomeAlunoH5);
        cardBodyDiv.appendChild(telefoneAlunoP);
        cardBodyDiv.appendChild(emailAlunoP);
        cardBodyDiv.appendChild(areaAlunoP);
        cardBodyDiv.appendChild(disponibilidadeAlunoP);

        cardDiv.appendChild(cardBodyDiv);
        dadosAlunoBuscado.appendChild(cardDiv);
    });
}