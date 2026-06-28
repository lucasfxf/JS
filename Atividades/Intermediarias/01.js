/*
Exercício 1 - Calculadora Simples

Crie um programa que possua duas variáveis
(num1 e num2) e uma variável chamada operacao.

A operação pode ser:
+
-
*
/

Utilize if ou switch para realizar
a operação escolhida e exibir o resultado.
*/

let num1 = 20;
let num2 = 5;
let operacao = "+";

switch (operacao) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Operação inválida.");
}