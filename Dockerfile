FROM node:latest

WORKDIR /app

RUN npm install && npm start

EXPOSE 3000
