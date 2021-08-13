/*
Ser autenticavel significa ter o método autenticar 

Poliformismo --> tratar diferentes objetos de formas iguais

Duck typing 

Encapsulamento 
*/
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
         autenticavel.autenticar instanceof Function
     }
} 