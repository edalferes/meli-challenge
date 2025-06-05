# 🛠️ Meli Challenge - Setup & Run Guide

Este projeto contém uma aplicação fullstack composta por:

👉 Backend: FastAPI + Uvicorn
👉 Frontend: Next.js + React
👉 Makefile para automação das tarefas

---

## 📋 Pré-requisitos

### 🔹 Comuns (MacOS / Ubuntu Linux)

* **Python** `>= 3.11` (recomendado `3.13.x`)

  * Em Mac: via `brew install python@3.13`
  * Em Ubuntu: via `sudo apt install python3.11 python3.11-venv python3.11-dev`

* **uv** para gerenciar dependências do Python
  [https://github.com/astral-sh/uv](https://github.com/astral-sh/uv)

```bash
# Instalação do uv
curl -LsSf https://astral.sh/uv/install.sh | sh
```

* **Node.js** `>= 18.x` (recomendado `18.x` ou `20.x`)

  * Em Mac: via `brew install node`
  * Em Ubuntu: via [NodeSource](https://github.com/nodesource/distributions)

```bash
# Exemplo com Node 18 LTS
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

* **Make** (já vem instalado em Mac e na maioria dos Linux)

### 🔹 MacOS específico:

Se usar **Mac com chip ARM (M1/M2/M3)**, recomendamos usar:

```bash
arch -arm64 zsh
```

---

## 🚀 Como rodar o projeto (dev)

### 1️⃣ Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/meli-challenge.git
cd meli-challenge
```

### 2️⃣ Configure o ambiente

#### Backend:

```bash
make setup-backend
```

#### Frontend:

```bash
make setup-frontend
```

### 3️⃣ Rodar em modo desenvolvimento (ambos):

```bash
make dev
```

### Ou separado:

* Backend:

```bash
make dev-backend
```

* Frontend:

```bash
make dev-frontend
```

---

## 💢 Testes & Lint

### Rodar testes backend:

```bash
make test-backend
```

### Cobertura de testes:

```bash
make coverage-backend
```

### Lint backend:

```bash
make lint-backend
```

### Lint frontend:

```bash
make -C frontend lint
```

---

## 🛉 Limpeza

```bash
make clean
```

---

## ⚙️ Estrutura do projeto

```text
meli-challenge/
├── backend/          # FastAPI app
│   ├── app/          # Código da aplicação
│   ├── tests/        # Testes automatizados
│   ├── Makefile
│   └── ...
├── frontend/         # Next.js app
│   ├── src/          # Componentes, pages
│   ├── public/       # Imagens
│   ├── Makefile
│   └── ...
├── run.md            # (este arquivo)
└── Makefile          # Makefile raiz
```

---

## 🌟 Observações finais

👉 O projeto foi validado tanto em **MacOS (Sonoma 14.x)** quanto em **Ubuntu 22.04 LTS**
👉 Para ambientes Windows, recomenda-se usar WSL (Ubuntu) ou rodar via Docker

---