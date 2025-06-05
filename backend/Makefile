.PHONY: help dev-backend test coverage lint format clean

# Show available commands
help:
	@echo "Backend available commands:"
	@echo "  make dev-backend         - Start backend dev server (Uvicorn)"
	@echo "  make test                - Run unit tests"
	@echo "  make coverage            - Run tests with coverage"
	@echo "  make lint                - Run linter (ruff + mypy)"
	@echo "  make format              - Auto-format code (ruff + black)"
	@echo "  make clean               - Clean temp files"

# Backend dev server
dev-backend:
	@echo "Starting backend development server..."
	uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Run tests
test:
	@echo "Running backend tests..."
	uv run pytest

# Run tests with coverage
coverage:
	@echo "Running backend tests with coverage..."
	uv run pytest --cov=app --cov-report=term --cov-report=html

# Run linter
lint:
	@echo "Running linter (ruff + mypy)..."
	uv run ruff check app tests
	uv run mypy --strict app tests

# Auto-format
format:
	@echo "Auto-formatting backend code..."
	uv run ruff format app tests
	uv run black app tests

# Clean temporary files
clean:
	@echo "Cleaning temporary files..."
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type d -name ".pytest_cache" -exec rm -rf {} +
	find . -type d -name "htmlcov" -exec rm -rf {} +
	rm -f coverage.xml
	rm -f .coverage
	rm -rf junit