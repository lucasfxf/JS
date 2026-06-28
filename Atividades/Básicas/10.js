/*
Exercício 10

Crie uma variável com uma palavra.
Conte quantas vogais existem nela
e exiba o resultado.
*/

let palavra = "javascript";
let contador = 0;

for (let letra of palavra) {
    if (
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u"
    ) {
        contador++;
    }
}

console.log("Quantidade de vogais:", contador);