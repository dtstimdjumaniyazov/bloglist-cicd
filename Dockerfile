FROM node:24-slim AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

FROM node:24-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY app.js index.js ./
COPY controllers/ ./controllers/
COPY models/ ./models/
COPY utils/ ./utils/
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

ENV PORT=3001
EXPOSE 3001

CMD ["node", "index.js"]
