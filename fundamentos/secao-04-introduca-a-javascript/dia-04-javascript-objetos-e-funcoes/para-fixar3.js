// Funções e operadores aritméticos!

const a = 2;
const b = 1;

function addiction() {
    return a + b;
}

function subtraction() {
    return a - b;
}

function multiplication() {
    return a * b;
}

function division() {
    return a / b;
}

function module() {
    return a % b;
}

console.log(addiction());
console.log(subtraction());
console.log(multiplication());
console.log(division());
console.log(module());

// Maior de dois numeros!

const c = 3;
const d = 4;

function maiorNumero() {
    if (c > d) {
        console.log("D é maior que E!");
    }
    else if (d > c) {
        console.log("E é maior que D!");
    }
    else {
        console.log("É igual!");
    }   
}

console.log(maiorNumero());

// Maior de três números!



function maiorNumeroDeTres(e, f, g) {
    
    if (e > f && e > g) {
        console.log("e é maior!");
    }

    else if (f > e && f > g) {
        console.log("F é maior!");
    }

    else if (g > e && g > f) {
        console.log("G é maior!")
    }
    else {
        console.log("É igual!");
    }
       
}

console.log(maiorNumeroDeTres(1, 2, 3));

