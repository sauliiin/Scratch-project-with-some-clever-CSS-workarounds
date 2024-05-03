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




let consumo = (X - 24.26)*0.95553117

function custoPainel (consumo) {
    switch(consumo) {
        case (consumo > 0 && consumo <= 400):
            return 15000
        case (consumo > 400 && consumo <= 600):
            return 22000
        case (consumo > 600 && consumo <= 800):
            return 25000
        case (consumo > 800 && consumo <= 1000):
            return 15000
        default:
            console.log('ERRO') // Default é pra quando nenhuma das opções anteriores retornou resultado. Se ela estiver no final, nao precisa do break
    }    
}



function economia(contaM) {
    let consumo = (contaM - 24.26)*0.95553117;
    let custoP = custoPainel(consumo);
    let economiaTotal = 0;
    while (economiaTotal < custoP) {
      let economiaMes = (contaM * 1.008 ** meses) - 72;
      economiaTotal += economiaMes;
      meses++
    }
    return meses;
}

console.log(economia(250, 15000))