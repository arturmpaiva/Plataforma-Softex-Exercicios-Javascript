function funcao1() {
    return ("Hello World!");
}

function funcao2(nome) {
    return ("Meu nome é: " + nome);
}

document.querySelector('.saudacao').innerHTML = funcao1();
document.querySelector('.apresentacao').innerHTML = funcao2(prompt("Digite seu nome: "));

document.querySelector('.idade-nacionalidade').innerHTML = ((idade, nacionalidade) => {return `Tenho ${idade} anos e sou ${nacionalidade}`}) (prompt("Digite sua idade: "), prompt("Digite sua nacionalidade: "));