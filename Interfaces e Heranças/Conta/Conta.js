//Classe Mãe criada somente para ser herdade e não instanciada
//Classe abstrata - so funciona para ser herdade. Foi criada para não ser instancia, mas sim herdade
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    //método abstrato -> feito para ser sobescrito
    sacar(valor){
        throw new Error("O método sacar da Conta é abstrato")
    }
    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo = this._saldo - valorSacado;
            return valorSacado;
        }

        return 0;
    }
    depositar(valor){
        if(valor > 0){
            this._saldo = this._saldo + valor;
            return valor;
        }
        
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
    teste(){
        console.log("teste na conta");
    }
}

