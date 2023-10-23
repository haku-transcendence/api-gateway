FROM --platform=linux/amd64 node:latest AS builder

FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]
