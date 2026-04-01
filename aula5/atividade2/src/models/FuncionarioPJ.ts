import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario {
    constructor(
        nome: string, 
        salarioBase: number, 
        public mesesContrato: number
    ) {
        super(nome, salarioBase);
    }

    calcularFerias(): number {
        let valor = this.salarioBase;
        if (this.mesesContrato > 12) {
            valor += 500;
        }
        return valor;
    }
}