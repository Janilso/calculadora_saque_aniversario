export interface IRequestCalc {
    saldoFgts: number;
    salario: number;
    mesNascimento: number;
}

export interface IResponseCalc {
    saldoFgts: number;
    somaLancamentos: number;
    saldoFuturoTotal: number;
    previsaoSaque: number;
}
