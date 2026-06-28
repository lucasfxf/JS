/*
Exercício 6 - Número Primo

Verifique se um número é primo.

Caso seja primo, exiba:

"Número Primo"

Caso contrário:

"Não é Primo"
*/

let numero = 17;
let primo = true;

if (numero <= 1) {
    primo = false;
}

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        primo = false;
        break;
    }
}

if (primo) {
    console.log("Número Primo");
} else {
    console.log("Não é Primo");
}