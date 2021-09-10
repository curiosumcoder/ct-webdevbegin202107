function sumar(a,b) {
    console.log(`Sumando: ${a} + ${b}`);
    return a + b;
}

let multiplicar0 = function(a,b) {
    console.log(`Multiplicando: ${a} * ${b}`);
    return a * b;
}

let multiplicar = (a,b) => {
    console.log(`Multiplicando: ${a} * ${b}`);
    return a * b;
}

// JavaScript Standard Library (dependiente del dispositivo)
function operaciones() {
    function sumar(a,b) {
        console.log(`Sumando: ${a} + ${b}`);
        return a + b;
    }
    function multiplicar(a,b) {
        console.log(`Multiplicando: ${a} * ${b}`);
        return a * b;
    }
    return { sumar, multiplicar };
}

let op1 = new operaciones();
op1.sumar(1,2);
// console.log(`Sumando: ${a} + ${b}`);

class operacionesClass {
    sumar(a,b) {
        console.log(`Sumando: ${a} + ${b}`);
        return a + b;
    }
    multiplicar(a,b) {
        console.log(`Multiplicando: ${a} * ${b}`);
        return a * b;
    }    
}

// Creando una instancia de clase => objeto
let op2 = new operacionesClass();
let r2 = op2.sumar(2,3);
console.log(`El resultado es: ${r2}`);

class persona {
    nombre;
    email;
}
let p0 = new persona();
p0.nombre = 'Juan';
p0.direccion = 'Alajuela';

// objeto literal
let p1 = { nombre : 'Gilberto'}
// propiedades dinámicas
p1.direccion = 'Cartago';