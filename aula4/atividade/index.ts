import { Funcionario } from "./Funcionario";

const funcionario1 = new Funcionario("João", 5000, 85);
const funcionario2 = new Funcionario("Maria", 6000, 70);

console.log("Funcionário: " + funcionario1.getNome());
console.log("Salário: " + funcionario1.getSalario());
console.log("Meta: " + funcionario1.getMeta());
console.log("Bônus: " + funcionario1.calcularBonus());
console.log("Valor total: " + funcionario1.calculaValorTotal());

console.log("\n");

console.log("Funcionário: " + funcionario2.getNome());
console.log("Salário: " + funcionario2.getSalario());
console.log("Meta: " + funcionario2.getMeta());
console.log("Bônus: " + funcionario2.calcularBonus());
console.log("Valor total: " + funcionario2.calculaValorTotal());