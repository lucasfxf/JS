/*
Exercício 7 - Sistema de Login

Crie duas variáveis:

usuario
senha

Compare com:

Usuário: admin
Senha: 1234

Se estiverem corretos, exiba:

"Acesso permitido"

Caso contrário:

"Acesso negado"
*/

let usuario = "admin";
let senha = "1234";

if (usuario == "admin" && senha == "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}