FROM node:22-slim
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 80
CMD ["node_modules/.bin/wrangler", "dev", "--config", "dist/server/wrangler.json", "--port", "80", "--ip", "0.0.0.0"]