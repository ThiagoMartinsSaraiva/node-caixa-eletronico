import { ContaCorrente } from "./model/conta/ContaCorrente";

const contaCorrente = new ContaCorrente('1')
contaCorrente.depositar(3000)
console.log(contaCorrente.verSaldo())