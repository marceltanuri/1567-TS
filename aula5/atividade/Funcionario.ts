export enum TipoContrato {
    CLT,
    PJ,
    ESTAGIARIO,
    TEMPORARIO
}

export class Funcionario {
    constructor(
        public nome: string,
        public salarioBase: number,
        public tipoContrato: TipoContrato,
        public mesesContrato: number = 0,
        public notaDesempenho: number = 0
    ) {}

    calcularFerias(): number {
        switch (this.tipoContrato) {
            case TipoContrato.CLT:
                return this.salarioBase + (this.salarioBase / 3);
            case TipoContrato.PJ:
                let valorFeriasPJ = this.salarioBase;
                if (this.mesesContrato > 12) {
                    valorFeriasPJ += 500;
                }
                return valorFeriasPJ;
            case TipoContrato.ESTAGIARIO:
                let valorFeriasEstagiario = this.salarioBase;
                if (this.notaDesempenho >= 8) {
                    valorFeriasEstagiario += this.salarioBase * 0.10;
                }
                return valorFeriasEstagiario;
            case TipoContrato.TEMPORARIO:
                let valorFeriasTemporario = this.salarioBase;
                if (this.notaDesempenho >= 7) {
                    valorFeriasTemporario += this.salarioBase * 0.05;
                }
                return valorFeriasTemporario;
            default:
                throw new Error("Tipo de contrato inválido");
        }
    }
}
