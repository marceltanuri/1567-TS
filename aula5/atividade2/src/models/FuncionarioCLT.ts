import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {
    override calcularFerias(): number {
        return this.salarioBase + (this.salarioBase / 3);
    }
}