import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11111111122, 529990002);
//cliente1.nome = "Ricardo";
//cliente1.cpf = 11111111122;
//cliente1.rg = 5223443223

const cliente2 = new Cliente("Duds", 11111111133, 423422229);
//cliente2.nome = "duds";
//cliente2.cpf = 11111111122;
//cliente2.rg = 5233344402;

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
//ContaCorrenteRicardo.agencia = 1001;
//ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.depositar(500);
//console.log(ContaCorrenteRicardo.saldo);
console.log(ContaCorrenteRicardo);

const ContaCorrenteDuds = new ContaCorrente(1002, cliente2);
//ContaCorrenteDuds.agencia = 1002;
//ContaCorrenteDuds.cliente = cliente2;
ContaCorrenteRicardo.transferir(200, ContaCorrenteDuds);
//console.log(ContaCorrenteDuds.saldo);
//console.log(ContaCorrenteRicardo);
//console.log(ContaCorrenteDuds.consultar(cliente2.nome));
console.log(`O número de contas abertas é de --> ${ContaCorrente.numeroDeContas}`);