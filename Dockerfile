FROM node:latest

WORKDIR ./

RUN npm install && npm start

EXPOSE 3000
