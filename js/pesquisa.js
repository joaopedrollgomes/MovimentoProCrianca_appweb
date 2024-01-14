let logado = localStorage.getItem('logado');

const mudancaDePagina = () => {
    if (logado) {
        document.getElementById('loginMenu').innerHTML = `<a
    href="perfilUser.html"
    class="nav-link text-white text-decoration-underline"
    >Perfil</a
  >`;

        document.getElementById('linkPaginaInicial').href = "#";
    }
}
document.addEventListener('DOMContentLoaded', mudancaDePagina);