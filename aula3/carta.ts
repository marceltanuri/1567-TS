class Carta {
  nipe: string;
  valor: number | string;

  constructor(nipe: string, valor: number | string) {
    this.nipe = nipe;
    this.valor = valor;
  }

  getValorNumerico(): number {
    if (typeof this.valor === "number") {
      return this.valor;
    } 
    else {
     const valores: Record<string, number> = { "j": 11, "q": 12, "k": 13, "a": 14 };
      return valores[this.valor.toLowerCase()] || 0;
    }     
  }
}

// 4 pilares da POO: Abstração, Encapsulamento, Polimorfismo, Herança
// POO em Java ou C#
// S.O.L.I.D = aplicado na pratica
// Design Patterns

const doisDePaus = new Carta("paus", 2);
const seteDeEspadas = new Carta("espadas", 7);
const damaDeCopas = new Carta("copas", "Q");

const cartas: Carta[] = [doisDePaus, seteDeEspadas, damaDeCopas];

for (const carta of cartas) {
  console.log(`Nipe: ${carta.nipe}, Valor: ${carta.valor}, Valor numérico: ${carta.getValorNumerico()}`);
}
