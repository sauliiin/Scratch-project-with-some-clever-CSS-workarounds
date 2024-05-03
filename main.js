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
//========================================================================================================//

function anyKeyPressed (event) {
    let campo = event.target;            // Pega o campo onde o evento ocorreu
    campo.value = mascara(campo.value);   // Chama a função máscara para o valor do campo
}

function mascara (valorRecebido) {
    valorRecebido = valorRecebido.replace(/\D/g,'');  
    valorRecebido = valorRecebido.replace(/(\d)(\d{2})$/,"$1,$2"); // Coloca uma virgula antes do 2 últimos números
    if ((Number(valorRecebido.replace(',','.'))) > 1000) setTimeout(() => {alert('Maior que 1000, Blablabla')}, 300);
    return valorRecebido;
}

function custoPainel (consumo) {
    if (consumo > 0 && consumo <= 400) return 15000;
    if (consumo > 400 && consumo <= 600) return 22000;
    if (consumo > 600 && consumo <= 800) return 25000;
    if (consumo > 800 && consumo <= 1000) return 15000;
}    

function economia () {
    let meses = 1
    let contaText = document.getElementById('conta').value;
    let contaNum = Number(contaText.replace(',','.'));
    if (contaNum > 1000) return;
    let consumo = ((contaNum - 24.26)*0.95553117).toFixed(2);
    if (consumo <= 0) {
        alert('Valor muito baixo, balblabla')
    } else {
        console.log(consumo)
        let custoP = custoPainel(consumo);
        let economiaTotal = 0;
        while (economiaTotal < custoP) {
          let economiaMes = (contaNum * 1.008 ** meses) - 72;
          economiaTotal += economiaMes;
          meses++
        }
        console.log(meses)
        return meses;
    }
}

