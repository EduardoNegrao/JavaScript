import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente; //Está se referindo ao acessos set cliente
        ContaCorrente.numeroDeContas ++;
    }

    //Getters e Setters são acessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return console.log(`O valor da conta é de: ${this._saldo} reais`);
    }

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    //consultar(conta){
        //console.log("O valor da conta é de: " + this.saldo);
        //console.log(`O valor da conta do ${conta} é de: ${this._saldo}`);
    //}
//É possivel em javaScript alterar e adicionar dinamicamente atributos aos objetos
}