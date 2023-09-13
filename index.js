import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

//console.log(contaCorrente);
//console.log(contaPoupanca);
//console.log(contaSalario);
