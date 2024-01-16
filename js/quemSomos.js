let logado = localStorage.getItem('logado');
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

const mudancaDePaginaPerfil = () => {
    if (logado) {
        document.getElementById('loginMenu').innerHTML = `<a
    href="perfilUser.html"
    class="nav-link text-white text-decoration-underline"
    >Perfil</a
  >`;
    }
}

document.addEventListener('DOMContentLoaded', mudancaDePaginaAdminLogado);
document.addEventListener('DOMContentLoaded', mudancaDePaginaPerfil);