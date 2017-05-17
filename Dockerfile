FROM node:latest

WORKDIR /home/enguerranws/ew-server/live-move/

RUN ls -all

RUN npm install && npm start

EXPOSE 3000
