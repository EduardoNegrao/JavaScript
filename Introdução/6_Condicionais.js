console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Salvador`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
//    listaDeDestinos.splice(1, 1);
//    console.log("Comprador maior de idade");
//} else {
//A pessoa é menor de idade
//    if (estaAcompanhada == true) {
//        listaDeDestinos.splice(1, 1);
//        console.log("Comprador maior de idade");
//    } else {
//        console.log("Comprador menor de idade e não posso vender");
//    }
//}

//Operadores Lógicos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    listaDeDestinos.splice(2, 1);
    console.log("Boa viagem!!!");
} else {
    console.log("Comprador menor de idade e não posso adquirir a passagem");
}
console.log("Embarque: \n\n")
if(temPassagemComprada == true && idadeComprador >= 18){
    console.log("Boa viagem!!!");
}else{
    console.log("Você não pode embarcar");
}
console.log(listaDeDestinos);