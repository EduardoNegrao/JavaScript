import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { SistemaAutenticacao } from "./Funcionários/sistemaAutenticacao.js";
//Codigo da parte de conta
const cliente1 = new Cliente("Ricardo", 11111111122, 529990002);
const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.sacar(100);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
//onsole.log(ContaCorrenteRicardo);
//console.log(contaPoupanca);
//console.log(contaPoupanca.sacar(10));
//Código da parte de Funcionarios
const diretor = new Diretor("Rogerio", 10000, 1234578910);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 1234578911);
gerente.cadastrarSenha("123");
const cliente2 = new Cliente("Duds", 11111111133, 423422229);
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente2, "123456");
console.log(gerenteEstaLogado);
