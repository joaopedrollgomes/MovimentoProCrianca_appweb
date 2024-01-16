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

// let adminlogado = localStorage.getItem('adminLogado');

// const mudancaDePaginaAdmin = () => {
//     if (adminlogado) {
//         document.getElementById('loginMenu').innerHTML = `<a
//     href="perfilUser.html"
//     class="nav-link text-white text-decoration-underline"
//     >Perfil</a
//   >`;

//         document.getElementById('linkPaginaInicial').href = "#";
//     }
// }
// document.addEventListener('DOMContentLoaded', mudancaDePagina);