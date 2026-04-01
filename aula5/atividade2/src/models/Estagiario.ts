import { Funcionario } from "./Funcionario";

export class Estagiario extends Funcionario {
    constructor(
        nome: string, 
        salarioBase: number, 
        public notaDesempenho: number
    ) {
        super(nome, salarioBase);
    }

    calcularFerias(): number {
        let valor = this.salarioBase;
        if (this.notaDesempenho >= 8) {
            valor += this.salarioBase * 0.10;
        }
        return valor;
    }
}