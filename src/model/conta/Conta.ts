export abstract class Conta {
  private saldo
  public codigo

  constructor(codigo: string) {
    this.saldo = 0
    this.codigo = codigo
  }
  
  public sacar(valor: number): void {
    if (valor > 60000) {
      throw new Error('O limite de saque é de 600')
    }
    const valorComTaxa = valor + 30
    const saldoSuficiente = this.saldo >= valorComTaxa

    if (!saldoSuficiente) {
      throw new Error('Saldo insuficiente')
    }

    this.saldo -= valorComTaxa
  }

  public depositar(valor: number): void {
    if (valor <= 0) {
      throw new Error ('O valor a ser depositado deve ser maior que 0')
    }

    this.saldo += valor
  }

  public verSaldo(): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency : 'BRL',
      currencyDisplay: 'symbol'
    }).format(this.saldo)
  }

}