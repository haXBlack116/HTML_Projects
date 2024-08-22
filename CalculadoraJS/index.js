let val1 = window.prompt("Insira o valor 1:")
let val2 = window.prompt("Insira o valor 2:")

let soma = parseFloat(val1) + parseFloat(val2)
let sub = val1 - val2
let mult = val1 * val2
let div = val1 / val2

console.log(soma)
console.log(sub)
console.log(mult)
console.log(div)



alert(
    "Soma: " + soma +
    "\nSubtração: " + sub +
    "\nMultiplicação: " + mult +
    "\nDivisão: " + div
)