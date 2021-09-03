// Ciclos
let j = 5;  
// j > 0 ----> condición (boolean)
// El bloque se ejecuta cuando la condición es true (verdadero)
while (j > 0) {
    let msg = 'while: ' + j + ' anadasd ' + 1 + 'as';
    let msg1 = `while: ${j} anadasd ${1} as`;
    console.log(`while: ${j}`);
    j = j - 1; // j--;
}

j = 5;
do {
    console.log(`do ... while: ${j}`);
    j = j - 1; // j--;
} while (j > 0);

// Decisiones
console.clear();
let a1 = 10;

if (a1 > 0) {
    console.log(`a1 = ${a1}, es mayor que 0.`);
}

if (a1 > 20) {
    console.log(`a1 = ${a1}, es mayor que 20.`);
} else {
    console.log(`a1 = ${a1}, es menor o igual que 20.`);
}

if (true) {
    if (true) {        
    }
}

if (true) {    
} else {    
}

a1 = 10;
if (a1 > 20) {
    console.log(`a1 = ${a1}, es mayor que 20.`);
} else if (a1 <= 20 && a1 > 10) {
    console.log(`a1 = ${a1}, es menor o igual que 20 y mayor que 10.`);
} else {
    console.log('No se que es!');
}

console.clear();
a1 = 60;
switch (a1) {
    case 30:
    case 20:
        console.log(`a1 = ${a1}, es igual que 20.`);
        break;
    case 10:
        console.log(`a1 = ${a1}, es igual que 10.`);
        break;
    default:
        console.log('No se que es!');
        break;
}

// console.clear();
// a1 = 0;
// j = 100;
// switch (a1) {
//     case a1 === 100:
//         console.log(`a1 = ${a1}, es igual que 30.`);
//         break;
//     // case a1 > 0 && j > 10:
//     //     console.log('j es mayor que 10!');
//     //     break;            
//     default:
//         break;
// }

// a == b, a === b // Comparar igualdad
// a != b, a !== b // Comparar diferencia
let a = 0, b = '0';

// API = Application Programming Interface

// OOP = Object Oriented Programming
// Objeto literal
let obj1 = { nombre : 'Gilberto Bermúdez', email : 'gbermude@outlook.com'};
obj1.provincia = 'Cartago';

console.log(`${obj1.nombre}, ${obj1.email}, ${obj1['provincia']}`);

// Function
function sumar(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

function dividir(a,b) {
    return a / b;
}

function multiplicar(a,b) {
    return a * b;
}

//console.log(`La suma de 3 + 4 = ${sumar(3,4)}`);
let s = sumar(3,4);
console.log(`La suma de 3 + 4 = ${s}`);

// alert('Hello World!')

// let v1 = prompt('Digite el valor 1')