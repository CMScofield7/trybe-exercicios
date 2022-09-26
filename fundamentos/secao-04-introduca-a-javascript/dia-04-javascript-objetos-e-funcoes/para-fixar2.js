// Imprima a mensagem para cada nome

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let personNames in names) {
    console.log("Olá " + names[personNames]);
  };

  // Imprima um console.log com as chaves e valores desse objeto.

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  
  for (key in car) {
    console.log(key, car[key]);
  };