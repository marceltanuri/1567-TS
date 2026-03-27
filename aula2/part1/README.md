# Exemplo de Lista de Usuários

Este projeto é um exemplo simples em TypeScript que demonstra como criar uma classe, instanciar objetos a partir dela, armazená-los em uma lista e, em seguida, exibi-los no console.

## Explicação do Código

O código é escrito em TypeScript e consiste no seguinte:

-   Uma classe `User` com propriedades `name` e `email` e um construtor para inicializá-las.
-   Um array de objetos `User` é criado, instanciando a classe `User` com diferentes nomes e e-mails.
-   O método `forEach` é usado para iterar sobre o array `users` e imprimir os detalhes de cada usuário no console.

## Como Usar

1.  **Instale as dependências:**
    Se você não tiver o TypeScript instalado, poderá instalá-lo usando o npm:
    ```bash
    npm install typescript
    ```

2.  **Compile o código:**
    Para executar o código, você primeiro precisa compilar o arquivo TypeScript (`index.ts`) em JavaScript (`index.js`).
    ```bash
    npx tsc
    ```

3.  **Execute o código:**
    Após a compilação, você pode executar o arquivo JavaScript gerado usando o Node.js:
    ```bash
    node dist/index.js
    ```

    Você deve ver a seguinte saída em seu console:
    ```
    Nome: Alice, Email: alice@example.com
    Nome: Bob, Email: bob@example.com
    Nome: Charlie, Email: charlie@example.com
    ```
