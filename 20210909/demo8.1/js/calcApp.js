// DOM API
let c = new calc();

document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM ready!');

    iValor.addEventListener('keyup', event => {
        const value = event.target.valueAsNumber;
        c.currentValue = value ?? 0;        
    });

    let buttons = document.querySelectorAll('#botones > button');
    if (buttons) {
        buttons.forEach(b => {
            b.addEventListener('click', event => {
                event.preventDefault();

                let operation = b.innerText;
                if (operation === 'C') {
                    c = new calc();
                    iValor.value = 0;
                }
                else 
                {
                    c.operate(b.innerText);
                }
                iValor.value = c.currentResult;
            });        
        });
    }
});