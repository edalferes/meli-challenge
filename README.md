# MELI Challenge - Product Detail Page

Este projeto implementa uma página de detalhes de produto inspirada no Mercado Livre, com um backend em FastAPI e um frontend em Next.js + React.

## Stack utilizada

### Backend

- Python 3.13
- FastAPI + Uvicorn
- Pydantic (schemas)
- Dados persistidos em arquivos JSON (sem banco de dados)
- Lint: ruff + mypy
- Testes: pytest + pytest-cov

### Frontend

- React 19
- Next.js 14
- TypeScript
- TailwindCSS para o layout responsivo
- ESLint + Prettier

## Funcionalidades implementadas

### Frontend (página de detalhe do produto)

- Imita layout do Mercado Livre
- Exibe:
  - Imagens de produto (com galeria e lupa)
  - Título
  - Descrição
  - Preço
  - Métodos de pagamento
  - Informações do vendedor
  - Estoque disponível
  - Quantidade selecionável
  - Modal com detalhes da loja
  - Página responsiva

### Backend (API REST)

- Endpoint GET /v1/products/{product_id}
- Endpoint GET /v1/products (listagem paginada)
- Endpoins Swagger para documentação automática /docs
- Schemas Pydantic para validação de dados
- Tratamento de erros (404, 500) com respostas documentadas
- 100% de cobertura de testes

---

## Execução do projeto

Consulte o arquivo [RUN.md](./RUN.md) com instruções completas para rodar o projeto.

Resumidamente:

```bash
# Setup (recomendado para primeira execução)
make setup-backend
make setup-frontend

# Rodar o backend
make dev-backend

# Rodar o frontend
make dev-frontend

# Ou rodar os dois juntos
make dev
```
