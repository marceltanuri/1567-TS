import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {
    calcularFerias(): number {
        return this.salarioBase + (this.salarioBase / 3);
    }
}