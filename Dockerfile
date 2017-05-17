FROM node:latest

COPY ./ /app

WORKDIR /app

RUN npm install

CMD npm start

EXPOSE 5000
