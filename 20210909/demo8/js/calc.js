// DOM API
document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM ready!');

    bSuma.addEventListener('click', event => {
        event.preventDefault();
        let v1 = Number(resultado.innerText);
        let v2 = iValor.valueAsNumber;

        resultado.innerText = v1 + v2;
    });

    bResta.addEventListener('click', event => {
        event.preventDefault();
        let v1 = Number(resultado.innerText);
        let v2 = iValor.valueAsNumber;

        resultado.innerText = v1 - v2;
    });

    bMultiplica.addEventListener('click', event => {
        event.preventDefault();
        let v1 = Number(resultado.innerText);
        let v2 = iValor.valueAsNumber;

        resultado.innerText = v1 * v2;
    });

    bDivide.addEventListener('click', event => {
        event.preventDefault();
        let v1 = Number(resultado.innerText);
        let v2 = iValor.valueAsNumber;

        resultado.innerText = v1 / v2;
    });
    
});