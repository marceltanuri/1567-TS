# API de Usuários

Esta é uma API simples de cadastro de usuários criada com Node.js, Express e TypeScript.

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Compile o projeto:
   ```bash
   npm run build
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

Alternativamente, você pode executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`.

## Endpoints

### Criar um novo usuário
- `POST /users`

**Exemplo com `curl`:**
```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john.doe@example.com"}'
```

**Corpo da requisição:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

### Obter todos os usuários
- `GET /users`

**Exemplo com `curl`:**
```bash
curl http://localhost:3000/users
```
