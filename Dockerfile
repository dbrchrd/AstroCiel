# Stage 1 : Dépendances production uniquement
FROM oven/bun:1-alpine AS deps
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile --production --ignore-scripts

# Stage 2 : Build
FROM oven/bun:1-alpine AS builder
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Stage 3 : Image finale
FROM oven/bun:1-alpine AS runtime
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

RUN addgroup -g 1001 -S bun && \
    adduser -S bun -u 1001 && \
    chown -R bun:bun /app && \
    rm -rf /root/.bun/install/cache /tmp/*

USER bun
EXPOSE 30030
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:30030 || exit 1
CMD ["bun", "./dist/server/entry.mjs"]
