export abstract class Funcionario {
    constructor(
        public nome: string,
        public salarioBase: number
    ) {}

    abstract calcularFerias(): number;
}