FROM node:26.1.0-bookworm-slim

WORKDIR /frontend

COPY package.json package-lock.json vite.config.js ./

RUN npm install

CMD ["npm", "run", "dev"]

