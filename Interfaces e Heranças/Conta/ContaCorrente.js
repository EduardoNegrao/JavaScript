import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia); //forma de referenciar a classe mãe
        ContaCorrente.numeroDeContas ++;
    }
    teste(){
        super.teste();
        console.log("Teste na conta corrente!")
    }

    sacar(valor){
        let taxa = 1.1;
       return this._sacar(valor, taxa);
    }

}