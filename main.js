const numberA = document.getElementById('campoA')
const numberB = document.getElementById('campoB')
const form = document.getElementById('form-cont')

function validaCampo(){
    const nomeComoArray = numberA.split(' ');
    return nomeComoArray.length = 0;
}

function maior() {
    if (parseInt(numberA.value) < parseInt(numberB.value)) {
        result = true
    } else {
        result = false
    }
    return result
}

form.addEventListener('submit', function(e){
    e.preventDefault();    

    const mensagemSucesso = 'Formulário valido! Numero B maior que numero A!'
    const mensagemFracasso = 'Formulário NÂO é valido! Numero A maior que numero B!'

    contaValida = maior()
    valida = validaCampo()
    
if (contaValida) {
    const containerMessageSuccess = document.querySelector('.success-message');
    containerMessageSuccess.innerHTML = mensagemSucesso ;
    containerMessageSuccess.style.display = 'block';
    
    const containerMessageFracasso = document.querySelector('.false-message');
    containerMessageFracasso.innerHTML = mensagemFracasso ;
    containerMessageFracasso.style.display = 'none';

    numberA.value = '';
    numberB.value = '';

} else {
    const containerMessageFracasso = document.querySelector('.false-message');
    containerMessageFracasso.innerHTML = mensagemFracasso ;
    containerMessageFracasso.style.display = 'block';

    const containerMessageSuccess = document.querySelector('.success-message');
    containerMessageSuccess.innerHTML = mensagemSucesso ;
    containerMessageSuccess.style.display = 'none';

    numberA.style.border = '1px solid red'
    document.querySelector('.false-message').style.display = 'block';
}
})

/*
numberA.addEventListener('keyup', function(e){
    console.log(e.target.value);

    if (!formEValido) {
        numberA.classList.add('error');
        //nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numberA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})
*/