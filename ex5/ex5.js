const banco = {
    conta: 1,
    saldo: 0,
    tipoDeConta: 1,
    agencia: 1,
    buscarSaldo: function(){
        return this.saldo;
    },
    deposito: function(valor) {
        return this.saldo += valor;
    },
    saque: function(valor) {
        return this.saldo -= valor;        
    },
    numConta: function() {
        return this.conta;
    }
}