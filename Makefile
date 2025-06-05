.PHONY: help dev dev-frontend dev-backend test-backend coverage-backend lint-backend lint-frontend build-frontend clean clean-backend clean-frontend setup-backend setup-frontend

help:
	@echo "Available commands:"
	@echo "  make dev-frontend          - Start the frontend dev server (Next.js)"
	@echo "  make dev-backend           - Start the backend dev server (FastAPI + Uvicorn)"
	@echo "  make dev                   - Start both frontend and backend dev servers"
	@echo "  make test-backend          - Run backend tests"
	@echo "  make coverage-backend      - Run backend tests with coverage"
	@echo "  make lint-backend          - Run backend linting"
	@echo "  make lint-frontend         - Run frontend linting"
	@echo "  make build-frontend        - Build frontend production bundle"
	@echo "  make clean                 - Clean all temporary files (frontend + backend)"
	@echo "  make clean-backend         - Clean backend temporary files"
	@echo "  make clean-frontend        - Clean frontend build files"
	@echo "  make setup-backend         - Setup backend environment (uv sync)"
	@echo "  make setup-frontend        - Install frontend dependencies (npm install)"

# Dev servers
dev-frontend:
	@echo "Starting frontend development server..."
	@make -C frontend dev-frontend

dev-backend:
	@echo "Starting backend development server..."
	@make -C backend dev-backend

# Combined development command
dev:
	@echo "Starting both frontend and backend development servers..."
	@make dev-backend & make dev-frontend

# Backend operations
test-backend:
	@make -C backend test

coverage-backend:
	@make -C backend coverage

lint-backend:
	@make -C backend lint

# Frontend operations
lint-frontend:
	@make -C frontend lint

build-frontend:
	@make -C frontend build

# Clean commands
clean:
	@make clean-backend
	@make clean-frontend

clean-backend:
	@make -C backend clean

clean-frontend:
	@make -C frontend clean

# Setup environments
setup-backend:
	@echo "Setting up backend environment..."
	@cd backend && uv sync

setup-frontend:
	@echo "Installing frontend dependencies..."
	@cd frontend && npm install