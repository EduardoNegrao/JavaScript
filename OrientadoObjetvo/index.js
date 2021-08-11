import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11111111122;
cliente1.rg = 5223443223

const cliente2 = new Cliente();
cliente2.nome = "duds";
cliente2.cpf = 11111111122;
cliente2.rg = 5233344402;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1;
console.log(ContaCorrenteRicardo);
const ContaCorrenteDuds = new ContaCorrente();
ContaCorrenteDuds.agencia = 1002;
ContaCorrenteDuds.cliente = cliente2;
console.log(ContaCorrenteDuds);

