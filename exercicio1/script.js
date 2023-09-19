
let respostaCoxinha = prompt('Você deseja comer uma coxinha?').toLowerCase()
let conta = 0

while (respostaCoxinha === "s") {
    console.log('Obrigado pela preferência. Volte sempre!')
    conta = conta + 2.50
    respostaCoxinha = prompt('Você deseja comer mais coxinhas?').toLowerCase()
}

console.log(`O valor da sua conta é: ${conta}`)