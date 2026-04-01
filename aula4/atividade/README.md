# 🚀 Desafio de Introdução à POO: Validador de Bônus Anual

Neste exercício, você vai praticar os pilares básicos de uma **Classe**: Atributos (dados) e Métodos (comportamentos). 

### O Cenário
Uma empresa precisa de um pequeno sistema para calcular se um funcionário tem direito a um bônus salarial e qual o valor desse bônus com base em sua meta de vendas.

### Sua Missão
Crie uma classe chamada `CalculadoraBonus` no arquivo `solucao.ts`. O arquivo de testes já está pronto, mas ele **não vai compilar** até que você defina a classe com a estrutura exata solicitada abaixo.

#### 📋 Estrutura da Classe

**Atributos (Propriedades):**
1. `nomeFuncionario`: string
2. `salarioBase`: number
3. `metaBatida`: number (valor de 0 a 100, representando a porcentagem da meta atingida)

**Métodos (Comportamentos):**
1. `temDireitoAoBonus()`: 
   - Deve retornar um booleano (`true` ou `false`).
   - Regra: O funcionário só tem direito se a `metaBatida` for **maior ou igual a 80**.
2. `calcularValorTotal()`:
   - Deve retornar um número (number).
   - Regra: Se tiver direito ao bônus, o valor total é o `salarioBase` + 20%. Se não, retorna apenas o `salarioBase`.

---

### Como rodar?
1. Execute no terminal:
   ```bash
   npm install
   npm start
   ```