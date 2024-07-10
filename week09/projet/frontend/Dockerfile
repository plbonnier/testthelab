# Stage 1
FROM node:lts-alpine as build-stage

WORKDIR /frontend
RUN npm install -g npm@10.8.1
COPY package.json  .

RUN npm install --force
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN npm run build
