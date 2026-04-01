# 🏖️ Exercício: Sistema de Cálculo de Férias (Módulo RH)

### 🎯 Objetivo
Desenvolver um sistema que calcule o valor que diferentes tipos de colaboradores devem receber ao sair de férias. O objetivo é exercitar a lógica de decisão dentro de uma classe antes de aprendermos como o **Polimorfismo** pode simplificar esse processo.

---

### 📝 Contexto
A empresa **TechFerias** possui três modalidades de contratação. Cada modalidade tem uma regra de cálculo distinta para o pagamento do período de descanso. Você deve criar uma classe que centralize essa lógica.

### ⚙️ Regras de Negócio

1.  **CLT (Consolidação das Leis do Trabalho):**
    * Recebe o **Salário Base** + **1/3 (um terço)** constitucional sobre o salário.
    * *Fórmula:* $Valor = Salário + (Salário / 3)$

2.  **PJ (Pessoa Jurídica):**
    * Recebe o valor do **Salário Base**.
    * **Bônus de Fidelidade:** Se o consultor PJ tiver **mais de 12 meses** de contrato, ele recebe um adicional fixo de **R$ 500,00**.

3.  **Estagiário:**
    * Recebe o valor do **Salário Base** (Bolsa Auxílio).
    * **Bônus de Desempenho:** Se a nota de desempenho (0 a 10) for **maior ou igual a 8**, ele recebe um bônus de **10%** sobre o salário base.

---

### 🧐 Para Refletir (Desafio Pós-Prática)

Após concluir o código, analise a estrutura que você criou:

* Se a empresa amanhã criar o contrato **"Temporário"**, o que você precisará mudar na sua classe?
* Imagine que o método de cálculo cresça para 50 tipos de contratos diferentes. Como ficaria a legibilidade desse código cheio de `if/else`?
* **Ponte para o Polimorfismo:** Existe uma forma de cada "tipo" de funcionário saber calcular suas próprias férias sem que uma única classe precise conhecer todas as regras de todos os contratos ao mesmo tempo?