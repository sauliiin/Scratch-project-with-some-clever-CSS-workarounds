const menuIcon = document.querySelector('.menu__icon')
const linksNav = document.querySelector('.links__navigation')



menuIcon.addEventListener('click', function abrirMenu() {
    if(linksNav.classList.contains('ativo')) {
        linksNav.classList.remove('ativo')
        document.querySelector('.menu__icon img').src = 'assets/menu-icon.png'
    } else {
        linksNav.classList.add('ativo')
        document.querySelector('.menu__icon img').src = 'assets/closeX-icon.png'
    }
})