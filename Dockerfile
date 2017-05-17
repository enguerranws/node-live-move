FROM node:latest

WORKDIR ./

RUN ls -all

RUN npm install && npm start

EXPOSE 3000
