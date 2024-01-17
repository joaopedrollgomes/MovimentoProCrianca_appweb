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

document.addEventListener('DOMContentLoaded', function() {
    // Obtém os elementos HTML
    let pesquisarInput = document.getElementById('pesquisarAlunos');
    let pesquisarButton = document.getElementById('buttonpesquisarAlunos');
    let dadosAlunoBuscado = document.getElementById('dadosAlunoBuscado');

    // Adiciona um ouvinte de evento ao botão de pesquisa
    pesquisarButton.addEventListener('click', function() {
        // Obtém o valor do input de pesquisa
        let termoPesquisa = pesquisarInput.value.toLowerCase();

        // Obtém a lista de alunos do localStorage
        let listaDeAlunos = JSON.parse(localStorage.getItem('listaDeAlunos'));

        // Filtra os alunos com base na disponibilidade ou área de interesse
        let resultados = listaDeAlunos.filter(function(aluno) {
            return aluno.disponibilidade.toLowerCase().includes(termoPesquisa) ||
                   aluno.areaInteresse.toLowerCase().includes(termoPesquisa);
        });

        // Exibe os resultados na página
        exibirResultados(resultados);
    });

    // Função para exibir os resultados na página
    function exibirResultados(resultados) {

        // Itera sobre os resultados e cria os elementos HTML
        resultados.forEach(function(aluno) {
            let cardDiv = document.createElement('div');
            cardDiv.className = 'card col-sm-6 col-md-4 col-lg-3 mb-3 p-2';
            cardDiv.style.width = '16rem';

            let cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body';

            let nomeAlunoH5 = document.createElement('h5');
            nomeAlunoH5.className = 'card-title';
            nomeAlunoH5.id = 'nomeAlunoSearch';
            nomeAlunoH5.textContent = aluno.nomeCompleto;

            let areaAlunoP = document.createElement('p');
            areaAlunoP.className = 'card-text';
            areaAlunoP.id = 'areaAlunoSearch';
            areaAlunoP.textContent = 'Área de interesse: ' + aluno.areaInteresse;

            let disponibilidadeAlunoP = document.createElement('p');
            disponibilidadeAlunoP.className = 'card-text';
            disponibilidadeAlunoP.id = 'disponibilidadeAlunoSearch';
            disponibilidadeAlunoP.textContent = 'Disponibilidade: ' + aluno.disponibilidade;

            let perfilButton = document.createElement('button');
            perfilButton.className = 'btn btn-success';
            perfilButton.textContent = 'Perfil';

            // Adiciona os elementos criados ao DOM
            cardBodyDiv.appendChild(nomeAlunoH5);
            cardBodyDiv.appendChild(areaAlunoP);
            cardBodyDiv.appendChild(disponibilidadeAlunoP);
            cardBodyDiv.appendChild(perfilButton);

            cardDiv.appendChild(cardBodyDiv);
            dadosAlunoBuscado.appendChild(cardDiv);
        });
    }
});