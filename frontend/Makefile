.PHONY: dev-frontend lint format build clean

# Start Next.js dev server
dev-frontend:
	@echo "Starting Next.js frontend dev server..."
	npm run dev

# Run linter
lint:
	@echo "Running frontend linter..."
	npm run lint

# Run prettier format
format:
	@echo "Running frontend formatter (Prettier)..."
	npm run format || echo "No format script defined."

# Build production bundle
build:
	@echo "Building frontend for production..."
	npm run build

# Clean temporary build files
clean:
	@echo "Cleaning frontend build files..."
	rm -rf .next .turbo