console.clear();
console.log('Generando lista ...');

const datos = [
    { nombre : 'Gilberto Bermúdez', mail : 'gbermude@outlook.com'},
    { nombre : 'Melissa Fernández', mail : 'xfergra@outlook.com'},
    { nombre : 'Juan Perez', mail : 'gbermude@outlook.com'},
    { nombre : 'Rosa Espinoza', mail : 'gbermude@outlook.com'},
];

const body = document.querySelector('body');
// body.innerHTML = body.innerHTML + '';

let lineas = '';
for (const p of datos) {
    //lineas += `<li>${p.nombre}<br/><strong>${p.mail}</strong></li>`;
    lineas += `<li><span class='nombre'>${p.nombre}</span><br/>
    <span class='email'>${p.mail}</span></li>`;
}

body.innerHTML += `<ul>${lineas}</ul>`;