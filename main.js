const menuIcon = document.querySelector('.menu__icon')
const linksNav = document.querySelector('.links__navigation')



menuIcon.addEventListener('click', function abrirMenu() {
    if(linksNav.classList.contains('ativo')) {
        linksNav.classList.remove('ativo')
    } else {
        linksNav.classList.add('ativo')
    }
})