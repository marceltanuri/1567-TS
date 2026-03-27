# Projeto Parte 4 - Cliente da API com HTML e TypeScript

Este projeto é um cliente front-end simples, construído com HTML e TypeScript, para consumir a API da `parte2`.

## Pré-requisitos

*   Node.js instalado
*   A API da `parte2` deve estar em execução.

## Instalação

1.  Navegue até a pasta `aula2/part4` no seu terminal.
2.  Execute o seguinte comando para instalar as dependências:

    ```bash
    npm install
    ```

## Build

Antes de iniciar, você precisa compilar o código TypeScript para JavaScript.

```bash
npm run build
```

Este comando irá criar uma pasta `dist` com o arquivo `index.js` compilado.

## Como usar

1.  **Inicie a API da `parte2`:**
    *   Em um terminal, navegue até a pasta `aula2/part2`.
    *   Execute o comando:
        ```bash
        npm run dev
        ```
    *   O servidor da API estará rodando em `http://localhost:3000`.

2.  **Inicie o servidor do cliente da `parte4`:**
    *   Em outro terminal, navegue até a pasta `aula2/part4`.
    *   Certifique-se de já ter executado o comando `npm run build`.
    *   Execute o comando:
        ```bash
        npm start
        ```
    *   O servidor local estará disponível (geralmente em `http://localhost:8080`).

3.  **Abra no navegador:**
    *   Abra seu navegador e acesse o endereço fornecido pelo `http-server` (por exemplo, `http://localhost:8080`).
    *   Você verá a interface para adicionar e listar usuários.

