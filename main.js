function anyKeyPressed (event) {
    let campo = event.target;            // Pega o campo onde o evento ocorreu
    campo.value = mascara(campo.value);   // Chama a função máscara para o valor do campo
}

function mascara (valorRecebido) {
    valorRecebido = valorRecebido.replace(/\D/g,'');  
    valorRecebido = valorRecebido.replace(/(\d)(\d{2})$/,"$1,$2"); // Coloca uma virgula antes do 2 últimos números
    if ((Number(valorRecebido.replace(',','.'))) > 1000) setTimeout(() => {alert('O consumo informado exige a implantação de uma rede mais complexo, cujo valor não é possíveis precisar de forma assertiva sem uma análise no local.')}, 300);
    return valorRecebido;
}

function custoPainel (consumo) {
    if (consumo > 0 && consumo <= 400) return 15000;
    if (consumo > 400 && consumo <= 600) return 22000;
    if (consumo > 600 && consumo <= 800) return 26000;
    if (consumo > 800 && consumo <= 1000) return 30000;
}    

function economia () {
    let quadro = document.getElementById('res');
    quadro.innerHTML = '';
    let meses = 1;
    let contaText = document.getElementById('conta').value;
    let contaNum = Number(contaText.replace(',','.'));
    let consumo = ((contaNum - 24.26)*0.95553117).toFixed(2);
    if (consumo <= 0 || consumo >= 1000) {
        alert('Por favor, digite um valor entre 0 e 1000.')
        quadro.innerHTML = 'É necessário preencher um valor válido entre 0 e 1000. Para valores maiores que mil, exige-se a implantação de uma rede mais complexo, cujo valor não é possíveis precisar de forma assertiva sem uma análise no local.';
    } else {
        console.log(consumo)
        let custoP = custoPainel(consumo);
        let economiaTotal = 0;
        while (economiaTotal < custoP) {
          let economiaMes = (contaNum * 1.008 ** meses) - 72;
          economiaTotal += economiaMes;
          meses++
        }
        quadro.innerHTML = (`O seu consumo energético mensal é de <strong>${consumo} Kwh</strong>. Para suprir esse consumo, é necessário um investimento médio de <strong>R$${String(custoP).replace(/(\d)(\d{3})$/,"$1.$2")},00</strong> para a instalação de energia solar. Após, você vai pagar um valor fixo de aproximadamente <strong>R$72,00</strong> e recuperará o valor investido em <strong>${meses} meses</strong>, aproximadamente ${Math.round(meses/12)} anos.`)
        return meses;
    }
}

const button = document.getElementById('btn');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    popup.style.display = 'block';
})

popup.addEventListener('click', event => {
    const classClickedEvent = event.target.classList[0];
    console.log(classClickedEvent);
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
    const closePopup = classNames.some(classNames => classNames === classClickedEvent)   // o some() itera sobre o array e verifica se um dos itens atende à condição classNames === classClickedEvent e retorna true or false
    if (closePopup) {popup.style.display = 'none'};
});   

