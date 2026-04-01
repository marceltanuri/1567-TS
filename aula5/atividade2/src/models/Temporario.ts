import { Funcionario } from "./Funcionario";

export class Temporario extends Funcionario{

    calcularFerias(): number {
        return this.salarioBase + (this.salarioBase / 3);
    }
    
}