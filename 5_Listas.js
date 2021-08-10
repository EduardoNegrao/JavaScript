console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saopaulo = `São Paulo`;
const riodejaneiro = `Rio de Janeiro`; 
//Trabalhando com arrays

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Salvador`
);
console.log("Destinos possíveis: ");
//console.log(salvador, saopaulo, riodejaneiro)
console.log(listaDeDestinos);
//adicionando elementos na lista
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);
//removendo elementos da lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
//acessar um elemento específico da lista
console.log(listaDeDestinos[0]);//nomedalista[n] / n--> posição do elemento