export class Cliente{
    
    constructor(nome, cpf, rg, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._senha = senha;
    }
    get senha(){
        return this._senha;
    }
    get cpf(){
        return this._cpf;
    }
    get rg(){
        return this._rg;
    }
}