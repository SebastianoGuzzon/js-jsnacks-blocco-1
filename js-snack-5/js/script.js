let array = [];

for (let i = 0; i < 6; i++) {
let numeroUtente = parseInt(prompt(i + " Inserisci un numero?"));
console.log(numeroUtente);
 // se non è un numero glielo richiedo
while (isNaN(numeroUtente)) {
  numeroUtente = parseInt(prompt("Non hai inserito un numero?"));
}

if (numeroUtente % 2 != 0) {
console.log("dispari", numeroUtente);
array.push(numeroUtente)
}
}

console.log(array);


// let array = [];
// let i = 0;
//
// while (i < 6) {
//
//   let numeroUtente = parseInt(prompt("Inserisci un numero?"));
//   console.log(numeroUtente);
//
//   if (numeroUtente % 2 != 0) {
//     console.log("dispari", numeroUtente);
//     array.push(numeroUtente)
//   }
//   i++
// }
//
// console.log(array)
