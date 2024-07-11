FROM node:lts-alpine

WORKDIR /backend
COPY package.json .

RUN npm install
COPY . .
RUN npm run db:migrate
CMD npm start