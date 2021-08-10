console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Salvador`
);

const idadeComprador = 15;
const estaAcompanhada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    listaDeDestinos.splice(1, 1);
    console.log("Comprador maior de idade");
} else {
    //A pessoa é menor de idade
    if (estaAcompanhada == true) {
        listaDeDestinos.splice(1, 1);
        console.log("Comprador maior de idade");
    } else {
        console.log("Comprador menor de idade e não posso vender");

    }
}

//Operadores Lógicos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

