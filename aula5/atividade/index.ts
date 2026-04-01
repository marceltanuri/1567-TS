import { Funcionario } from "./Funcionario";
import { TipoContrato } from "./Funcionario";


const lista: Funcionario[] = [
    new Funcionario("Ana", 3000, TipoContrato.CLT),
    new Funcionario("Carlos", 5000, TipoContrato.PJ, 14),
    new Funcionario("Bia", 1200, TipoContrato.ESTAGIARIO, 0, 9)
];

lista.forEach(f => console.log(`${f.nome}: R$ ${f.calcularFerias()}`));

// Abstração
// Encapsulamento
// Polimorfismo
// Herança