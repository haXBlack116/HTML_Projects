let primeiroNome = window.prompt("Qual seu primeiro nome?")
let segundoNome = window.prompt("Qual o seu segundo nome?")
let campoEstudo = window.prompt("Qual o seu campo de Estudo?")
let anoNascimento = window.prompt("Qual seu ano de nascimento")

let idade = 2024 - anoNascimento
let nome = primeiroNome + " " + segundoNome

console.log(nome)
console.log(campoEstudo)
console.log(idade)

alert(
    "Cadastro realizado com sucesso!\n" +
    "\nNome Completo: " + nome +
    "\nCampo de Estudo: " + campoEstudo +
    "\nIdade: " + idade
)
