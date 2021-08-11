export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo = this._saldo - valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo = this._saldo + valor;
            return valor;
        }
        
    }

    consultar(){
        //console.log("O valor da conta é de: " + this.saldo);
        console.log(`O valor da conta do é de: ${this._saldo}` );
    }

}