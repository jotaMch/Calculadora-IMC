const form = document.querySelector('.form');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const resultado = document.getElementById('resultado');


function reset() {
    peso.value = '';
    altura.value = '';
    resultado.value = '';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

        const imc = (peso.value / Math.pow(altura.value, 2)).toFixed(1);
        console.log(imc)

        if(imc < 18.5 ) {
            resultado.innerHTML = 'abaixo do peso '
        } else if((imc >= 18.5) && (imc <= 24.9)) {
        resultado.innerHTML = 'Normal ' + imc ;
        } else if((imc >= 25) && (imc <= 29.9)) {
            resultado.innerHTML = 'Sobrepeso '
        } else if((imc >= 30) && (imc <= 39.9)) {
            resultado.innerHTML = 'Obesidade '
        } else if(imc > 40){
            resultado.innerHTML = 'Obesidade grave ' + imc ;
        }
})


