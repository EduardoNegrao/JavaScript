console.log(`Trabalhando com loops \n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Salvador`
);
const destino = "Salvador";
let contador = 0;
let destinoExiste = false;


while(contador < listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador ++;
}

//console.log(`Destino existe? ${destinoExiste} \n`);
console.log("Destino existe? ", destinoExiste);
console.log(`Destinos possíveis: ${listaDeDestinos}` );