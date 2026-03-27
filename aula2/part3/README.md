# Projeto Parte 3 - Cliente da API

Este projeto é um cliente desenvolvido em TypeScript para consumir a API da `parte2`.

## Pré-requisitos

*   Node.js instalado
*   A API da `parte2` deve estar em execução.

## Instalação

1.  Navegue até a pasta `aula2/part3` no seu terminal.
2.  Execute o seguinte comando para instalar as dependências:

    ```bash
    npm install
    ```

## Como usar

1.  **Inicie a API da `parte2`:**
    *   Em um terminal, navegue até a pasta `aula2/part2`.
    *   Execute o comando:
        ```bash
        npm run dev
        ```
    *   O servidor da API estará rodando em `http://localhost:3000`.

2.  **Execute o cliente da `parte3`:**
    *   Em outro terminal, navegue até a pasta `aula2/part3`.
    *   Execute o comando:
        ```bash
        npm start
        ```

O cliente irá:
1.  Criar um novo usuário chamado "Jane Doe".
2.  Buscar e exibir a lista de todos os usuários cadastrados na API.
