console.log("Trabalhando com atribuição de variáveis"); 
//const --> atribuição de variáveis constantes, que nao podem ser alteradas;
//let --> atribuição de varáveis que podem ser alteradas;
//let contador = 0; Muito comum usar let
//No geral é melhor deixar a maioria das variáveis declaradas como constantes e nao let. Somente quando for realmente possível

const idade = 26;
const primeiroNome = "Eduardo";
const sobrenome = "Negrão";

console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome,sobrenome);
console.log(`Meu nome é: ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + " " + sobrenome;
//Outra maneira de impressão de informações
console.log(`Meu nome é: ${nomeCompleto}`);
//Declarando variáveris com let
let idadeN;
idadeN = 26;
idadeN = idadeN + 1;
console.log(idadeN);