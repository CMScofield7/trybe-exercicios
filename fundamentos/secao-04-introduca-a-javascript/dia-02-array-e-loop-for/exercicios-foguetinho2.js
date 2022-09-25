let vinteECinco = [];

for (let index = 1; index <= 25; index+= 1) {
    vinteECinco.push(index);   
} // Primeiro "for" pra colocar valores dentro do array

for (let index = 0; index < vinteECinco.length; index+= 1) {
    console.log(vinteECinco[index] / 2);        
}; // Segundo "for" pra fazer a divisão dos valores criados pelo "for" anterior!

console.log(vinteECinco)