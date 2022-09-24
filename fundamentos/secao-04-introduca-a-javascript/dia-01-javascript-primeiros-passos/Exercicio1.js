/* Parte 1 funcionando!

const a = 3;
const b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
    console.log("A é maior!");
}

else if (b > a) {
    console.log("B é maior!");
}

else if (b == a) {
    console.log("É igual!");
}

*/

/* Parte 2 funcionando!

const a = 1;
const b = 2;
const c = 3;

if (a > b && a > c) {
    console.log("A é maior!");
}

else if (b > a && b > c) {
    console.log("B é maior!");
}

else if (c > a && c > b) {
    console.log("C é maior!")
}

*/

/* Parte 3 funcionando!

let valor = -1;

if (valor < 0) {
    console.log("negative");
}
else if (valor > 0) {
    console.log("positive");
}
else {
    console.log("zero");
}

*/

/* Parte 4 funcionando!

const anguloUm = 60;
const anguloDois = 60;
const anguloTres = 60;

let somaDosAngulos = anguloUm + anguloDois + anguloTres;
let angulosPositivos = anguloUm > 0 && anguloDois > 0 && anguloTres > 0;

if (angulosPositivos) {
    if(somaDosAngulos === 180) {
        console.log("true");
    }
    else {
        console.log("false");
    };
} else {
    console.log("Ângulo Inválido!");
}

*/




/* Parte 5 funcionando!

let chessPieces = "Fork";

switch(chessPieces.toLowerCase()) {
    case 'knight':
        console.log("Moves in L");
        break;

    case 'pawn':
        console.log("Moves Foward");
        break;
    
    case 'bishop':
        console.log("Diagonals");
        break;

    case 'towers':
        console.log("Moves in Columns and Rows Only");
        break;

    case 'queen':
        console.log("Moves to Any Direction, except in L");
        break;

    case 'king':
        console.log("Moves to Any Direction, One Step at a time");
        break;

    default:
        console.log("Peça Inválida!")
        break;

    
}

*/

// Parte 6 funcionando!

// let grade = 0;

// if (grade < 0 || grade > 100) {
//     console.log("Nota Inválida!");
// }
// else if (grade >= 90) {
//     console.log("A");
// }
// else if (grade >= 80 && grade < 90) {
//     console.log("B");
// }
// else if (grade >= 70 && grade < 80) {
//     console.log("C");
// }
// else if (grade >= 60 && grade < 70) {
//     console.log("D");
// }
// else if (grade >= 50 && grade < 60) {
//     console.log("E");
// }
// else {
//     console.log("F");
// }

// Parte 7 funcionando!

// const a = 1;
// const b = 2;
// const c = 3;

// let par = false;

// if ((a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0)) {
//     par = true;
// }

// console.log(par);

// Parte 8 funcionando!

// const a = 2;
// const b = 4;
// const c = 6;

// let impar = false;

// if ((a % 2 !== 0) || (b % 2 !== 0) || (c % 2 !== 0)) {
//     impar = true;
// }

// console.log(impar);

// Parte 9 funcionando!

// const custoDoProduto = 1;
// const valorDeVenda = 3;

// if (custoDoProduto >= 0 && valorDeVenda >= 0) {
//     const custoTotal = custoDoProduto * 1.2;
//     const lucro = (valorDeVenda - custoTotal) * 1000;
//     console.log(lucro);
// }
// else {
//     console.log("Lucro não pode ser negativo!");
// }

// Parte 10 funcionando!

let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 7500.00;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
}
else if (salarioBruto <=  2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
}
else {
    aliquotaINSS = 570.88;
};

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0
}
else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
}
else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
}
else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
};

let salarioLiquido = salarioBase - aliquotaIR
console.log("Salario Liquido: " + salarioLiquido)