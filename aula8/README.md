# 🛒 Desafio Prático: Sistema de Logística de Combos (Composite Pattern)

## 🎯 Contexto
Uma grande rede de varejo precisa de um sistema para calcular o preço final de pacotes de vendas. O desafio é que a loja não vende apenas itens individuais; ela cria **Combos de Presente** (ex: um perfume + um hidratante) e **Kits de Natal** (que podem conter produtos soltos e outros combos dentro deles).

A gerência quer um sistema onde, ao passar qualquer item no caixa (seja um chocolate de R$ 5,00 ou uma cesta de café da manhã de R$ 200,00), o método para obter o preço seja **exatamente o mesmo**.

---

## 🛠️ Objetivo do Desafio
Implementar uma estrutura utilizando **TypeScript** e o Design Pattern **Composite** para gerenciar esses itens. A estrutura deve ser **recursiva**, permitindo que um "Combo" contenha tanto produtos simples quanto outros combos menores.

### Requisitos Técnicos
1.  **Abstração Base (`Abstract Class`)**: Criar uma classe que sirva de modelo para todos os itens. Ela deve garantir que todo item tenha um nome e um método para retornar o preço.
2.  **Item Folha (`Leaf`)**: Criar a classe para produtos individuais (ex: `Produto`).
3.  **Item Composto (`Composite`)**: Criar a classe que represente o agrupamento (ex: `Combo` ou `Kit`).
    * Deve possuir uma lista privada para armazenar os itens.
    * Deve implementar o método de cálculo de preço somando todos os itens da sua lista.
4.  **Polimorfismo**: O código cliente (o carrinho/caixa) não deve precisar de `if` ou `switch` para saber se está lidando com um produto ou um combo.

---

## 💡 Dicas de Implementação

> **Pensem na Árvore:** Visualizem o carrinho como uma estrutura de árvore. Os produtos são as **folhas** (extremidades) e os combos são os **galhos** que seguram outras folhas ou galhos menores.

* **O Contrato Comum:** A classe abstrata define o que todos "são". Se a classe base diz que existe um `getPreco()`, o `Combo` deve calcular a soma de seus filhos, enquanto o `Produto` apenas retorna seu valor fixo.
* **Recursividade:** O segredo do padrão Composite é que o `Combo` não guarda uma lista de "Produtos", mas sim uma lista da "Classe Abstrata Base". Isso permite que ele aceite qualquer coisa que herde dessa base.
* **Evite Tipagem Explícita:** Não use `instanceof` para calcular o total. Confie que cada objeto sabe calcular seu próprio preço.

---

## 🚀 Desafio Extra (Bônus)
Implementem um método chamado `exibirDetalhes()`:
* Para um **Produto**: Imprime apenas o nome e o preço (ex: `Camisa: R$ 50`).
* Para um **Combo**: Imprime o seu nome e, logo abaixo (com um recuo/tabulação), lista os detalhes de cada item contido nele.

---

## 📝 Entrega Esperada
* Código TypeScript funcional.
* Instancie um "Kit Master" que contenha, pelo menos, um produto solto e um outro combo dentro dele.
* Um breve comentário no código ou no log do console identificando onde o **polimorfismo** está sendo aplicado.

---
*Este exercício foca nos pilares de Abstração, Herança e Polimorfismo através do Design Pattern Composite.*