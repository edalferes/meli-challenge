.PHONY: help dev dev-frontend dev-backend test-backend lint-backend coverage-backend clean

help:
	@echo "Available commands:"
	@echo "  make dev-frontend          - Start the frontend dev server (Next.js)"
	@echo "  make dev-backend           - Start the backend dev server (FastAPI + Uvicorn)"
	@echo "  make dev                   - Start both frontend and backend dev servers"
	@echo "  make test-backend          - Run backend tests"
	@echo "  make coverage-backend      - Run backend tests with coverage"
	@echo "  make lint-backend          - Run backend linting"
	@echo "  make clean                 - Clean temp files"

dev-frontend:
	@echo "Starting frontend development server..."
	@cd frontend && npm install && npm run dev

dev-backend:
	@echo "Starting backend development server..."
	@cd backend && make dev-backend

dev:
	@echo "Starting both frontend and backend development servers..."
	@make dev-frontend & make dev-backend

test-backend:
	@cd backend && make test

coverage-backend:
	@cd backend && make coverage

lint-backend:
	@cd backend && make lint

clean:
	@cd backend && make clean