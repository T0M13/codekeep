FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache python3 make g++
RUN npm ci
COPY . .
RUN mkdir -p /app/data && npm run build

FROM node:24-alpine
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package*.json ./
RUN npm ci --omit=dev && apk del python3 make g++
COPY --from=builder /app/build ./build
COPY --from=builder /app/src/content ./src/content
RUN mkdir -p /app/data
USER node
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "build/index.js"]
