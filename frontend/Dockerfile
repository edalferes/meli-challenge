FROM node:22-slim AS base

WORKDIR /app

COPY package.json package-lock.json* ./

RUN --mount=type=cache,target=/root/.npm \
  npm ci --prefer-offline --no-audit

FROM base AS builder

COPY . .

RUN --mount=type=cache,target=/root/.npm \
  npm run build

FROM node:22-slim AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN --mount=type=cache,target=/root/.npm \
  npm ci --only=production --prefer-offline --no-audit

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]