FROM node:latest

COPY ./ /app

WORKDIR /app

RUN npm install && npm start

EXPOSE 3000
