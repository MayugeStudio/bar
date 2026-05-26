FROM node:26.1.0-bookworm-slim
ARG HTTP_PROXY
ARG HTTPS_PROXY
ARG NO_PROXY
ENV HTTP_PROXY=$HTTP_PROXY HTTPS_PROXY=$HTTPS_PROXY NO_PROXY=$NO_PROXY

WORKDIR /frontend

COPY package.json package-lock.json vite.config.js ./

RUN npm install

CMD ["npm", "run", "dev"]

