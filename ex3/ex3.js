const n1 = Number(prompt("Digite um número: "));
const n2 = Number(prompt("Digite outro número: "));

const operador = prompt("Qual será a operação utilizada?\n + Adição\n -Subtração\n * Multiplicação\n / Divisão");

switch (operador) {
    case "+":
        const soma = n1 + n2;
        console.log(soma);
        break;
    
    case "-":
        const subtracao = n1 - n2;
        console.log(subtracao);
        break;

    case "*":
        const multiplicacao = n1 * n2;
        console.log(multiplicacao);
        break;

    case "/":
        const divisao = n1 / n2;
        const sobra = n1 % n2;
        console.log(divisao + " Sobra: " + sobra);
        break;
}