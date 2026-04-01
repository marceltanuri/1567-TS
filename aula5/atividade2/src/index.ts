import { FuncionarioCLT } from "./models/FuncionarioCLT";
import { FuncionarioPJ } from "./models/FuncionarioPJ";
import { Estagiario } from "./models/Estagiario";
import { Funcionario } from "./models/Funcionario";

const lista: Funcionario[] = [
    new FuncionarioCLT("Ana", 300),
    new FuncionarioPJ("Carlos", 5000, 14),
    new Estagiario("Bia", 1200, 9)
];

lista.forEach(f => console.log(`${f.nome}: R$ ${f.calcularFerias()}`));